import Link from "next/link";
import { products } from "@/content/products";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Security and access products",
  description:
    "TrendwaveTech product range: CCTV, boom barriers, hydraulic bollards, tyre killers, ANPR, ACMS, RFID and gate automation supplied and installed from Gurugram.",
  path: "/products",
});

export default function ProductsHubPage() {
  return (
    <div className="bg-white pt-28 pb-16 sm:pt-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-tight text-[#0f172a]">
          Products
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Security and vehicle-access products Trendwave Technologies supplies and installs. These are project systems, not a claim that we manufacture every unit.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className="block h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:border-[#154df5]"
              >
                <h2 className="text-xl font-bold text-[#0f172a]">{product.name}</h2>
                <p className="mt-3 text-slate-600">{product.intro}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-slate-600">
          Installation programmes sit under{" "}
          <Link href="/services/surveillance" className="font-medium text-[#154df5]">
            surveillance and security services
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
