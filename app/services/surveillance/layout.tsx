import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Security Items Vendor in Delhi NCR",
  description:
    "Trendwave Technologies supplies and installs CCTV, ANPR, boom barriers, bollards, tyre killers, gates and ACMS across Gurugram and Delhi NCR.",
  path: "/services/surveillance",
});

export default function SurveillanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
