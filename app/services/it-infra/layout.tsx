import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "IT Support Vendor in Delhi NCR",
  description:
    "IT support, structured cabling, servers, networking, cloud, wireless and IT AMC from Trendwave Technologies in Gurugram, Delhi NCR and across India.",
  path: "/services/it-infra",
});

export default function ItInfraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
