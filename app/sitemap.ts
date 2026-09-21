import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { products } from "@/content/products";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-09-21");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/company",
    "/contact",
    "/services",
    "/services/surveillance",
    "/services/it-infra",
    "/services/digital",
    "/products",
    "/blog",
    "/privacy-policy",
    "/terms-conditions",
    "/refund-policy",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path || "/"),
      lastModified,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/products/${product.slug}`),
      lastModified,
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: new Date(article.datePublished),
    })),
  ];
}
