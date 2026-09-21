import Script from "next/script";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export default function Analytics() {
  if (!gtmId) {
    return null;
  }

  return (
    <>
      <Script
        id="gtm-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`}
      />
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });`}
      </Script>
    </>
  );
}
