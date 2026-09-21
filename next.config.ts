import path from "node:path";
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/company", permanent: true },
      {
        source: "/services/security-systems",
        destination: "/services/surveillance",
        permanent: true,
      },
      {
        source: "/services/it-infrastructure",
        destination: "/services/it-infra",
        permanent: true,
      },
      {
        source: "/services/cctv-installation",
        destination: "/products/cctv-installation",
        permanent: true,
      },
      {
        source: "/services/access-control",
        destination: "/products/acms",
        permanent: true,
      },
      {
        source: "/services/gate-automation",
        destination: "/products",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          ...securityHeaders,
        ],
      },
    ];
  },
};

export default nextConfig;
