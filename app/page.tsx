import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
    </>
  );
}
