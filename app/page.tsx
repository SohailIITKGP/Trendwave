import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "Trendwave Technologies provides IT support, CCTV, ANPR, boom barriers, bollards, ACMS and software from Gurugram across Delhi NCR and India.",
  path: "/",
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
