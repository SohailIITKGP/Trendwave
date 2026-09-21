import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "TrendwaveTech Gurugram | Security Systems and IT",
  description:
    "Trendwave Technologies (TrendwaveTech) is based at Welldone Tech Park, Sector 48, Sohna Road, Gurugram, Haryana, delivering IT and security systems across Delhi NCR.",
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
