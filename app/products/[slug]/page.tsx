import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/app/components/JsonLd";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import {
  getProduct,
  getRelatedProducts,
  products,
} from "@/content/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildPageMetadata({
    title: product.title,
    description: product.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Surveillance & Security", path: "/services/surveillance" },
    { name: product.name, path: `/products/${product.slug}` },
  ];

  return (
    <article className="bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          serviceJsonLd({
            name: product.name,
            description: product.description,
            path: `/products/${product.slug}`,
            image: product.image,
          }),
          faqJsonLd(product.faqs),
        ]}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <ol className="flex flex-wrap gap-2">
            {breadcrumbs.map((item, index) => (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-slate-800">{item.name}</span>
                ) : (
                  <Link href={item.path} className="hover:text-[#154df5]">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-tight tracking-tight text-[#0f172a]">
              {product.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{product.intro}</p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-[#154df5] px-6 py-3 font-semibold text-white hover:bg-[#103ab5]"
            >
              Request a site discussion
            </a>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm aspect-[3/2]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0f172a]">Overview</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{product.overview}</p>
        </section>

        <section className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0f172a]">Typical applications</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0f172a]">What you gain</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              {product.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0f172a]">Installation and implementation</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{product.implementation}</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0f172a]">Maintenance and AMC</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{product.amc}</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0f172a]">Integrations</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {product.integrations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0f172a]">Questions we hear on site</h2>
          <div className="mt-6 space-y-6">
            {product.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-[#0f172a]">{faq.question}</h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {related.length > 0 ? (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-[#0f172a]">Related systems</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-[#154df5] hover:border-[#154df5]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <p className="mt-12 text-slate-600">
          Also see{" "}
          <Link href="/services/surveillance" className="font-medium text-[#154df5]">
            surveillance and security services
          </Link>{" "}
          and{" "}
          <Link href="/blog" className="font-medium text-[#154df5]">
            implementation notes
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
