import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Trendwave Technologies | IT and Security Solutions",
  description: siteConfig.defaultDescription,
  path: "/company",
  absoluteTitle: true,
});

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
