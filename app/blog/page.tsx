import Link from "next/link";
import { articles } from "@/content/articles";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Implementation notes on IT and security systems",
  description:
    "Practical notes from Trendwave Technologies on CCTV, boom barriers, ANPR, ACMS, IT AMC and vehicle access — written for Delhi NCR operators.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <div className="bg-white pt-28 pb-16 sm:pt-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-tight text-[#0f172a]">
          Implementation notes
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Short, original explainers that sit behind our product and service pages. They are not case studies and they do not invent project names.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.slug} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-sm text-slate-500">{article.datePublished}</p>
              <h2 className="mt-2 text-xl font-bold text-[#0f172a]">
                <Link href={`/blog/${article.slug}`} className="hover:text-[#154df5]">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 text-slate-600">{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
