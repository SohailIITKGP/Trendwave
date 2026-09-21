import type { Metadata } from "next";

export const siteConfig = {
  name: "Trendwave Technologies",
  legalName: "TrendWave Technologies Pvt Ltd",
  shortName: "Trendwave",
  url: "https://www.trendwavetech.com",
  locale: "en-IN",
  email: "office@trendwavetech.com",
  phones: {
    landlineDisplay: "0124-4580307",
    landlineTel: "+911244580307",
    mobileDisplay: "+91-9821801122",
    mobileTel: "+919821801122",
    whatsappDisplay: "+91 9821113116",
    whatsappTel: "+919821113116",
  },
  address: {
    streetAddress: "304, Welldone Tech Park, Sector 48, Sohna Road",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122018",
    addressCountry: "IN",
    display:
      "304, Welldone Tech Park, Sector 48, Sohna Road, Gurugram, Haryana 122018, India",
  },
  serviceAreas: [
    "Delhi NCR",
    "Gurugram",
    "Delhi",
    "Noida",
    "Faridabad",
    "Ghaziabad",
    "India",
  ],
  defaultTitle: "Trendwave Technologies | IT & Security Solutions",
  defaultDescription:
    "Trendwave Technologies delivers CCTV, ANPR, boom barriers, bollards, tyre killers, ACMS, IT support and software from Gurugram across Delhi NCR and India.",
  ogImageAlt: "Trendwave Technologies — IT and security solutions",
} as const;

export type KeywordTarget = {
  keyword: string;
  path: string;
  note?: string;
};

export const keywordMap: KeywordTarget[] = [
  {
    keyword: "Security Items Vendor",
    path: "/services/surveillance",
  },
  {
    keyword: "IT Support Vendor",
    path: "/services/it-infra",
  },
  {
    keyword: "Bollards Manufacturer",
    path: "/products/hydraulic-bollards",
    note: "Offered as supply and installation. Manufacturer status is not claimed on-site.",
  },
  {
    keyword: "Tyre Killer",
    path: "/products/tyre-killers",
  },
  {
    keyword: "Boom Barrier",
    path: "/products/boom-barriers",
  },
  {
    keyword: "CCTV Installation",
    path: "/products/cctv-installation",
  },
  {
    keyword: "Key Management System Manufacturer",
    path: "",
    note: "No Key Management System offering is present in current product or service copy. Page not created.",
  },
  {
    keyword: "ACMS System",
    path: "/products/acms",
  },
  {
    keyword: "Vehicle Monitoring System",
    path: "/products/vehicle-monitoring-system",
    note: "Positioned as ANPR plus vehicle access (boom barrier / RFID), not GPS fleet tracking.",
  },
  {
    keyword: "Automatic Number Plate Recognition (ANPR)",
    path: "/products/anpr",
  },
];

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}

type PageMetadataInput = {
  title?: string;
  description: string;
  path: string;
  index?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title: title ? title : { absolute: siteConfig.defaultTitle },
    description,
    alternates: {
      canonical,
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phones.mobileTel,
    image: absoluteUrl("/Logo1_converted.webp"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/Logo1_converted.webp"),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phones.mobileTel,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phones.landlineTel,
        contactType: "customer support",
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phones.whatsappTel,
        contactType: "WhatsApp",
        areaServed: "IN",
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: siteConfig.locale,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    image: input.image ? absoluteUrl(input.image) : undefined,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    mainEntityOfPage: absoluteUrl(input.path),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
