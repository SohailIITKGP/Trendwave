import type { Metadata } from "next";

export const siteConfig = {
  name: "Trendwave Technologies",
  brand: "TrendwaveTech",
  legalName: "TrendWave Technologies Pvt Ltd",
  shortName: "Trendwave",
  alternateNames: [
    "Trendwave",
    "Trendwave Tech",
    "Trendwave Technologies",
    "TrendwaveTech",
  ],
  url: "https://trendwavetech.com",
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
    "India",
    "Delhi NCR",
    "Gurugram",
    "Gurgaon",
    "Delhi",
    "Noida",
    "Faridabad",
    "Ghaziabad",
    "Kolkata",
    "Kharagpur",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ],
  defaultTitle: "TrendwaveTech | Trendwave Tech | Trendwave — Security & IT",
  companyDescription: [
    "Trendwave Technologies is a leading provider of advanced IT and Security Solutions. We offer comprehensive security systems for commercial, industrial, and residential spaces, leveraging the latest technologies to deliver safety, efficiency, and control.",
    "Our portfolio includes CCTV Surveillance Systems (Analog & IP-Based), Boom Barriers, Bollards, Tyre Killers, ANPR Systems, Access Control & Management Systems (ACMS), and customized Software Solutions, backed by professional implementation and support services.",
  ],
  defaultDescription:
    "Trendwave Technologies provides CCTV, boom barriers, bollards, tyre killers, ANPR, ACMS and software for commercial, industrial and residential sites.",
  ogImageAlt: "TrendwaveTech, also known as Trendwave and Trendwave Tech, Gurugram",
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=304%20Welldone%20Tech%20Park%20Sector%2048%20Sohna%20Road%20Gurugram%20Haryana%20122018&output=embed",
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=304%20Welldone%20Tech%20Park%20Sector%2048%20Sohna%20Road%20Gurugram%20Haryana%20122018",
} as const;

export type KeywordTarget = {
  keyword: string;
  path: string;
  note?: string;
};

export const keywordMap: KeywordTarget[] = [
  { keyword: "Trendwave", path: "/" },
  { keyword: "Trendwave Tech", path: "/" },
  { keyword: "Trendwave Technologies", path: "/" },
  { keyword: "TrendwaveTech", path: "/" },
  { keyword: "TrendwaveTech Gurugram", path: "/company" },
  { keyword: "Security systems supplier", path: "/services/surveillance" },
  { keyword: "Security systems provider", path: "/services/surveillance" },
  { keyword: "IT infrastructure solutions", path: "/services/it-infra" },
  { keyword: "IT support services", path: "/services/it-infra" },
  { keyword: "CCTV installation", path: "/products/cctv-installation" },
  { keyword: "Access control system", path: "/products/acms" },
  { keyword: "Automatic boom barrier", path: "/products/boom-barriers" },
  { keyword: "Hydraulic bollards", path: "/products/hydraulic-bollards" },
  { keyword: "Tyre killer", path: "/products/tyre-killers" },
  { keyword: "Automatic number plate recognition", path: "/products/anpr" },
  { keyword: "Vehicle access monitoring", path: "/products/vehicle-monitoring-system" },
  { keyword: "Gate automation solutions", path: "/products" },
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
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  index = true,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const resolvedTitle = title
    ? absoluteTitle
      ? { absolute: title }
      : title
    : { absolute: siteConfig.defaultTitle };
  const ogTitle = title
    ? absoluteTitle
      ? title
      : `${title} | ${siteConfig.brand}`
    : siteConfig.defaultTitle;

  return {
    title: resolvedTitle,
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
      siteName: "TrendwaveTech",
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: "TrendwaveTech",
    alternateName: [...siteConfig.alternateNames],
    legalName: siteConfig.legalName,
    description: siteConfig.companyDescription.join(" "),
    url: siteConfig.url,
    brand: {
      "@type": "Brand",
      "@id": `${siteConfig.url}/#brand`,
      name: "TrendwaveTech",
      alternateName: ["Trendwave", "Trendwave Tech", "Trendwave Technologies"],
    },
    email: siteConfig.email,
    telephone: siteConfig.phones.mobileTel,
    image: absoluteUrl("/Logo1_converted.webp"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/Logo1_converted.webp"),
    },
    knowsAbout: [
      "CCTV installation",
      "Access control systems",
      "Boom barriers",
      "Hydraulic bollards",
      "ANPR",
      "IT infrastructure",
    ],
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
    name: "TrendwaveTech",
    alternateName: ["Trendwave", "Trendwave Tech", "Trendwave Technologies"],
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
