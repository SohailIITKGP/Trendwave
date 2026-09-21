"use client";

import Clinets from "@/app/components/Clinets";

export default function Header() {
  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        id="home"
        className="relative w-full bg-white pt-24 pb-32 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36"
        style={{ backgroundImage: "url(/lsq_hero_bg_img-scaled-1-2.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <h1 className="text-[clamp(1.9rem,8.4vw,5.4rem)] font-extrabold leading-[1.02] tracking-tight text-black sm:leading-[0.98]">
              <span className="block">TrendwaveTech</span>
              <span className="mt-2 block text-[clamp(1.05rem,3.4vw,2rem)] font-semibold leading-snug tracking-tight text-[#1e293b]">
                Security systems, IT infrastructure and technology solutions
              </span>
            </h1>

            <p className="mt-6 w-full max-w-3xl px-0 text-[0.92rem] leading-[1.45] text-[#3f4650] sm:mt-8 sm:text-[clamp(1.02rem,2.15vw,1.35rem)] sm:leading-snug">
              Trendwave Technologies, based in Gurugram (Gurgaon), Haryana — CCTV, access control, boom barriers, bollards, ANPR and IT support for Delhi NCR and project sites across India.
            </p>

            <button
              type="button"
              onClick={handleGetInTouchClick}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-4 py-2.5 text-base font-semibold text-white shadow-[0_12px_28px_rgba(21,96,255,0.3)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f64ff] sm:mt-10 sm:px-6 sm:py-3 sm:text-xl"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10 -mt-24 sm:-mt-22 lg:-mt-30">
        <Clinets />
      </div>
    </>
  );
}
