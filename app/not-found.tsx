import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Page not found",
  description: "The requested page is not available on Trendwave Technologies.",
  path: "/404",
  index: false,
});

export default function NotFound() {
  return (
    <div className="bg-white px-4 pt-32 pb-20 text-center">
      <h1 className="text-4xl font-bold text-[#0f172a]">Page not found</h1>
      <p className="mt-4 text-slate-600">
        That URL is not part of the Trendwave Technologies website.
      </p>
      <Link href="/" className="mt-8 inline-flex text-[#154df5] font-semibold">
        Back to home
      </Link>
    </div>
  );
}
