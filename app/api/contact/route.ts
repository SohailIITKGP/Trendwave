import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

function isTransientSmtpError(error: unknown) {
  if (!error || typeof error !== 'object') {
    return false;
  }

  const maybeCode = (error as { code?: string }).code;
  const maybeErrno = (error as { errno?: number | string }).errno;

  return (
    maybeCode === 'ESOCKET' ||
    maybeCode === 'ECONNRESET' ||
    maybeErrno === 'ECONNRESET'
  );
}

function cleanInput(value: unknown) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toHtmlParagraphs(value: string) {
  return escapeHtml(value).replace(/\n/g, '<br>');
}

function buildTextBlock(lines: string[]) {
  return lines.filter(Boolean).join('\n');
}

function getMessageIdDomain(officeEmail: string | undefined, emailUser: string) {
  const source = officeEmail || emailUser;
  const domain = source.split('@')[1];
  return domain || 'trendwavetech.com';
}

function createMessageId(domain: string, label: string) {
  const randomPart = Math.random().toString(36).slice(2, 10);
  return `<${label}.${Date.now()}.${randomPart}@${domain}>`;
}

function createBaseHeaders(messageId: string) {
  return {
    'X-Mailer': 'Trendwave Contact Mailer',
    'X-Entity-Ref-ID': messageId,
    'X-Priority': '3',
    'X-MSMail-Priority': 'Normal',
    Importance: 'Normal',
  };
}

async function sendMailWithRetry(
  primaryTransporter: nodemailer.Transporter,
  fallbackTransporter: nodemailer.Transporter | null,
  mailOptions: nodemailer.SendMailOptions,
  label: string
) {
  try {
    return await primaryTransporter.sendMail(mailOptions);
  } catch (error) {
    if (!isTransientSmtpError(error)) {
      throw error;
    }

    console.info(`ℹ️ ${label}: primary SMTP attempt had a transient network issue. Trying fallback/retry...`);

    if (fallbackTransporter) {
      try {
        return await fallbackTransporter.sendMail(mailOptions);
      } catch (fallbackError) {
        if (!isTransientSmtpError(fallbackError)) {
          throw fallbackError;
        }
      }
    }

    return primaryTransporter.sendMail(mailOptions);
  }
}

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMax = 5;
const rateLimitHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitHits.get(ip);
  if (!current || now > current.resetAt) {
    rateLimitHits.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }
  current.count += 1;
  return current.count > rateLimitMax;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }
  const allowed = new Set([
    "https://www.trendwavetech.com",
    "https://trendwavetech.com",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ]);
  return allowed.has(origin);
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
    }

    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    let payload: { name?: unknown; email?: unknown; contactNo?: unknown; message?: unknown };
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const { name, email, contactNo, message } = payload;

    const trimmedName = cleanInput(name);
    const trimmedEmail = cleanInput(email);
    const trimmedContactNo = cleanInput(contactNo);
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (
      trimmedName.length < 2 ||
      trimmedName.length > 120 ||
      trimmedContactNo.length > 20 ||
      trimmedMessage.length < 10 ||
      trimmedMessage.length > 4000 ||
      !isValidEmail(trimmedEmail) ||
      !isValidPhone(trimmedContactNo)
    ) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, phone number and message." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASS;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const officeEmail = process.env.OFFICE_EMAIL;

    if (!emailUser || !emailPassword || !smtpHost) {
      console.error("Missing email configuration:", {
        emailUser: !!emailUser,
        emailPassword: !!emailPassword,
        smtpHost: !!smtpHost,
      });
      return NextResponse.json(
        { error: 'Email configuration is missing. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const fromAddress = `"Trendwave Technologies" <${emailUser}>`;
    const replyToAddress = officeEmail || emailUser;
    const messageIdDomain = getMessageIdDomain(officeEmail, emailUser);
    const userMessageId = createMessageId(messageIdDomain, 'contact-confirmation');
    const companyMessageId = createMessageId(messageIdDomain, 'contact-notification');

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort === 587,
      tls: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true,
      },
      connectionTimeout: 15000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
      authMethod: 'PLAIN',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
      logger: false,
      debug: false,
    });

    const isGmailHost = smtpHost.toLowerCase() === 'smtp.gmail.com';
    const gmailFallbackTransporter = isGmailHost
      ? nodemailer.createTransport({
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          tls: {
            minVersion: 'TLSv1.2',
            rejectUnauthorized: true,
          },
          connectionTimeout: 15000,
          greetingTimeout: 10000,
          socketTimeout: 20000,
          authMethod: 'PLAIN',
          auth: {
            user: emailUser,
            pass: emailPassword,
          },
          logger: false,
          debug: false,
        })
      : null;

    const escapedName = escapeHtml(trimmedName);
    const escapedEmail = escapeHtml(trimmedEmail);
    const escapedContactNo = escapeHtml(trimmedContactNo);
    const escapedMessage = toHtmlParagraphs(trimmedMessage);

    // Email to user
    const userMailOptions = {
      from: fromAddress,
      to: trimmedEmail,
      replyTo: replyToAddress,
      subject: 'Thanks for contacting Trendwave Technologies',
      text: buildTextBlock([
        `Hi ${trimmedName},`,
        '',
        'Thanks for contacting Trendwave Technologies. We have received your message and will review it shortly.',
        '',
        'Your submission:',
        `Name: ${trimmedName}`,
        `Phone: ${trimmedContactNo}`,
        `Message: ${trimmedMessage}`,
        '',
        'Best regards,',
        'Trendwave Technologies',
        '',
        `This message was sent to ${trimmedEmail} after a form submission on the Trendwave website.`,
      ]),
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #1f2937; line-height: 1.6;">
          <div style="padding-bottom: 16px; border-bottom: 1px solid #e5e7eb; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 20px; font-weight: 600; color: #111827;">Trendwave Technologies</p>
          </div>

          <p style="margin: 0 0 16px 0;">Hi ${escapedName},</p>
          <p style="margin: 0 0 16px 0;">Thanks for contacting Trendwave Technologies. We have received your message and will review it shortly.</p>

          <div style="margin: 20px 0; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb;">
            <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${escapedName}</p>
            <p style="margin: 0 0 8px 0;"><strong>Phone:</strong> ${escapedContactNo}</p>
            <p style="margin: 0 0 6px 0;"><strong>Message:</strong></p>
            <div style="white-space: pre-wrap;">${escapedMessage}</div>
          </div>

          <p style="margin: 0 0 8px 0;">Best regards,</p>
          <p style="margin: 0;">Trendwave Technologies</p>
          <p style="margin: 20px 0 0 0; font-size: 12px; color: #6b7280;">This message was sent to ${escapedEmail} after a form submission on the Trendwave website.</p>
        </div>
      `,
      messageId: userMessageId,
      headers: createBaseHeaders(userMessageId),
    };

    // Email to company
    const companyMailOptions = {
      from: fromAddress,
      to: officeEmail,
      replyTo: trimmedEmail,
      subject: `New inquiry from ${trimmedName}`,
      text: buildTextBlock([
        'New contact form submission',
        '',
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        `Phone: ${trimmedContactNo}`,
        '',
        'Message:',
        trimmedMessage,
      ]),
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #1f2937; line-height: 1.6;">
          <p style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #111827;">New contact form submission</p>
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; background: #ffffff;">
            <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${escapedName}</p>
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${escapedEmail}" style="color: #1d4ed8; text-decoration: none;">${escapedEmail}</a></p>
            <p style="margin: 0 0 14px 0;"><strong>Phone:</strong> ${escapedContactNo}</p>
            <p style="margin: 0 0 6px 0;"><strong>Message:</strong></p>
            <div style="white-space: pre-wrap; padding: 14px; border-radius: 6px; background: #f9fafb; border: 1px solid #e5e7eb;">${escapedMessage}</div>
          </div>
        </div>
      `,
      messageId: companyMessageId,
      headers: createBaseHeaders(companyMessageId),
    };

    // Send emails
    try {
      await sendMailWithRetry(
        transporter,
        gmailFallbackTransporter,
        userMailOptions,
        'User email'
      );
    } catch (userEmailError) {
      console.error("❌ Failed to send user email:", userEmailError);
      throw new Error(`User email failed: ${userEmailError}`);
    }

    try {
      await sendMailWithRetry(
        transporter,
        gmailFallbackTransporter,
        companyMailOptions,
        'Company email'
      );
    } catch (companyEmailError) {
      console.error("❌ Failed to send company email:", companyEmailError);
      throw new Error(`Company email failed: ${companyEmailError}`);
    }

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error in contact API:', error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
