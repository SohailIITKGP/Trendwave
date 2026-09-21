import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ToastProvider from "./components/ToastProvider";
import ContactUs from "./components/ContactUs";
import OurPartners from "./components/OurPartners";
import Analytics from "./components/Analytics";
import JsonLd from "./components/JsonLd";
import {
  organizationJsonLd,
  siteConfig,
  websiteJsonLd,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  icons: {
    icon: "/browser_logo.PNG",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${geistMono.variable} antialiased font-(family-name:--font-inter)`}
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Analytics />
        <ToastProvider />
        <Navbar />
        <main className="pt-0">{children}</main>
        <ContactUs />
        <OurPartners />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
