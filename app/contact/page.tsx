import Link from "next/link";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact TrendwaveTech in Gurugram",
  description:
    "Contact Trendwave Technologies at Welldone Tech Park, Sector 48, Sohna Road, Gurugram. Call, email or send a project enquiry for security systems and IT support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-white pt-28 pb-8 sm:pt-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-tight text-[#0f172a]">
          Contact TrendwaveTech
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Trendwave Technologies (TrendwaveTech) works from Gurugram, Haryana. Use the details below for security systems, IT infrastructure or software work in Delhi NCR and other Indian sites.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <p>
              <strong className="text-[#0f172a]">Office</strong>
              <br />
              {siteConfig.address.display}
            </p>
            <p>
              <strong className="text-[#0f172a]">Phone</strong>
              <br />
              <a className="text-[#154df5]" href={`tel:${siteConfig.phones.landlineTel}`}>
                {siteConfig.phones.landlineDisplay}
              </a>
              <br />
              <a className="text-[#154df5]" href={`tel:${siteConfig.phones.mobileTel}`}>
                {siteConfig.phones.mobileDisplay}
              </a>
            </p>
            <p>
              <strong className="text-[#0f172a]">Email</strong>
              <br />
              <a className="text-[#154df5]" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p>
              <strong className="text-[#0f172a]">Legal name</strong>
              <br />
              {siteConfig.legalName}
            </p>
            <p className="text-sm text-slate-500">
              WhatsApp is available on {siteConfig.phones.whatsappDisplay}. The sales numbers above are unchanged.
            </p>
            <p>
              <Link href={siteConfig.mapsSearchUrl} className="font-medium text-[#154df5]" target="_blank" rel="noopener noreferrer">
                Open the Gurugram office in Google Maps
              </Link>
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <iframe
              title="Trendwave Technologies office, Welldone Tech Park, Gurugram"
              src={siteConfig.mapsEmbedSrc}
              className="h-[320px] w-full border-0 sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
