import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/app/components/JsonLd";
import { articles, getArticle } from "@/content/articles";
import { articleJsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Implementation notes", path: "/blog" },
    { name: article.title, path: `/blog/${article.slug}` },
  ];

  return (
    <article className="bg-white pt-28 pb-16 sm:pt-32">
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          articleJsonLd({
            title: article.title,
            description: article.description,
            path: `/blog/${article.slug}`,
            datePublished: article.datePublished,
          }),
        ]}
      />
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          <Link href="/blog" className="text-[#154df5]">
            Implementation notes
          </Link>{" "}
          · {article.datePublished} · Trendwave Technologies
        </p>
        <h1 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight text-[#0f172a]">
          {article.h1}
        </h1>
        <div className="mt-8 space-y-8">
          {article.body.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]}>
              {section.heading ? (
                <h2 className="text-2xl font-bold text-[#0f172a]">{section.heading}</h2>
              ) : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-4 text-base leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
        <aside className="mt-12 rounded-2xl bg-[#f1f9fe] p-6">
          <h2 className="text-lg font-bold text-[#0f172a]">Continue on the site</h2>
          <ul className="mt-3 space-y-2">
            {article.relatedPaths.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#154df5] hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
