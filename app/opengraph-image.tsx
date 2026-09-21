import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = siteConfig.ogImageAlt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0f172a",
          color: "white",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, color: "#93c5fd", marginBottom: 24 }}>
          TrendwaveTech · Gurugram · Delhi NCR
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.brand}
        </div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#e2e8f0", maxWidth: 900 }}>
          IT infrastructure, CCTV, ANPR, boom barriers, bollards and access control.
        </div>
      </div>
    ),
    size
  );
}
