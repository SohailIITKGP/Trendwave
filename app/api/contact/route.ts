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

export async function POST(request: NextRequest) {
  try {
    const { name, email, contactNo, message } = await request.json();

    if (!name || !email || !contactNo || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!name.trim() || !email.trim() || !contactNo.trim() || !message.trim()) {
      return NextResponse.json(
        { error: 'All fields must contain valid text.' },
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

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort === 587,
      connectionTimeout: 15000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
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
          connectionTimeout: 15000,
          greetingTimeout: 10000,
          socketTimeout: 20000,
          auth: {
            user: emailUser,
            pass: emailPassword,
          },
          logger: false,
          debug: false,
        })
      : null;

    // Email to user
    const userMailOptions = {
      from: emailUser,
      to: email,
      subject: `We received your message - Trendwave`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 500px; margin: 0 auto; color: #333333; line-height: 1.6; padding: 20px;">
          <h2 style="font-weight: 600; font-size: 20px; color: #111111; margin: 0 0 30px 0;">Trendwave</h2>
          
          <p style="margin: 0 0 15px 0;">Hi ${name},</p>
          
          <p style="margin: 0 0 15px 0;">Thanks for reaching out. We've received your message and someone from our team will get back to you shortly.</p>
          
          <p style="margin: 0 0 25px 0;">For your records, here is a copy of what you sent us:</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin: 0 0 30px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${contactNo}</p>
            <p style="margin: 0 0 5px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap; color: #555555;">${message}</p>
          </div>
          
          <p style="margin: 0 0 5px 0;">Best regards,</p>
          <p style="margin: 0 0 30px 0;">The Trendwave Team</p>
          
          <hr style="border: none; border-top: 1px solid #eeeeee; margin: 0 0 20px 0;">
          <p style="color: #999999; font-size: 12px; margin: 0;">This email was sent to ${email} because you submitted a contact form on the Trendwave website.</p>
        </div>
      `,
    };

    // Email to company
    const companyMailOptions = {
      from: emailUser,
      to: officeEmail,
      subject: `New website inquiry from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333333; line-height: 1.5; padding: 20px;">
          <h2 style="font-weight: 600; font-size: 18px; color: #111111; border-bottom: 1px solid #eeeeee; padding-bottom: 15px; margin-top: 0 0 20px 0;">New Contact Form Submission</h2>
          
          <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></p>
          <p style="margin: 0 0 20px 0;"><strong>Phone:</strong> ${contactNo}</p>
          
          <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
          <div style="background-color: #f7f7f7; padding: 15px; border-radius: 4px; border-left: 3px solid #cccccc; white-space: pre-wrap; margin: 0 0 20px 0;">${message}</div>
        </div>
      `,
    };

    // Send emails
    try {
      const userEmailResponse = await sendMailWithRetry(
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
      const companyEmailResponse = await sendMailWithRetry(
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
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email. Please try again later.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
