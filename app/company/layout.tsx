import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "TrendwaveTech, Trendwave and Trendwave Tech | Gurugram",
  description:
    "TrendwaveTech is the same Gurugram company as Trendwave and Trendwave Tech (Trendwave Technologies). Office: Welldone Tech Park, Sector 48, Sohna Road.",
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
