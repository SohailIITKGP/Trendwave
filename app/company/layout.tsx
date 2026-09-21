import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About us",
  description:
    "Trendwave Technologies is a Gurugram-based IT and security solutions company delivering software, infrastructure and surveillance across Delhi NCR and India.",
  path: "/company",
});

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
