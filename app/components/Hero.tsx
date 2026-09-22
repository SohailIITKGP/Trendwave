"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Clinets from "@/app/components/Clinets";

const rotatingPhrases = [
  "Building Software",
  "IT Infrastructure",
  "Security Systems",
];

function RotatingPhrase() {
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePhraseIndex((previousIndex) => (previousIndex + 1) % rotatingPhrases.length);
    }, 2200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={rotatingPhrases[activePhraseIndex]}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -26 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {rotatingPhrases[activePhraseIndex]}
      </motion.span>
    </AnimatePresence>
  );
}

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
              <span className="relative hidden sm:inline-flex flex-wrap items-end justify-center gap-x-2 lg:flex-nowrap lg:whitespace-nowrap">
                <span>Your</span>
                <span className="marker-underline">Trusted Partner</span>
                <span>in</span>
              </span>
              <span className="relative inline-flex items-end justify-center gap-x-2 sm:hidden">
                <span>Your</span>
                <span className="marker-underline">Trusted</span>
              </span>
              <span className="mt-1 block sm:hidden">Partner in</span>
              <br className="hidden sm:block" />
              <span className="mt-1.5 block h-[1.2em] min-w-[8.8ch] items-center justify-center overflow-hidden align-bottom sm:mt-6 sm:inline-flex sm:min-w-[10.5ch]">
                <RotatingPhrase />
              </span>
            </h1>

            <p className="mt-6 w-full px-0 text-[0.92rem] leading-[1.35] tracking-[-0.01em] text-[#3f4650] max-[420px]:text-[0.86rem] max-[380px]:text-[0.8rem] max-[340px]:text-[0.74rem] sm:mt-8 sm:max-w-4xl sm:text-[clamp(1.02rem,2.15vw,1.55rem)] sm:leading-snug sm:tracking-normal">
              <span className="sm:hidden">
                <span className="block whitespace-nowrap">End-to-end technology services covering software</span>
                <span className="block whitespace-nowrap">systems, IT infrastructure, and security solutions</span>
                <span className="block whitespace-nowrap">designed for real operational needs.</span>
              </span>
              <span className="hidden sm:inline">
                <span className="block whitespace-nowrap">End-to-end technology services covering software</span>
                <span className="block whitespace-nowrap">systems, IT infrastructure, and security solutions</span>
                <span className="block whitespace-nowrap">designed for real operational needs.</span>
              </span>
            </p>

            <button
              type="button"
              onClick={handleGetInTouchClick}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-4 sm:px-6 sm:py-3 py-2.5 text-base font-semibold text-white shadow-[0_12px_28px_rgba(21,96,255,0.3)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f64ff] sm:mt-10 sm:text-xl"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
        .marker-underline {
          position: relative;
          display: inline-block;
          vertical-align: baseline;
          overflow: hidden;
          z-index: 0;
        }

        .marker-underline::after {
          position: absolute;
          content: "";
          background-color: #3b82f6;
          -webkit-mask-image: url("/yellow_line.svg");
          mask-image: url("/yellow_line.svg");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: cover;
          mask-size: cover;
          width: 96%;
          height: 11px;
          left: 2%;
          bottom: -2px;
          border-radius: 999px;
          z-index: -1;
          pointer-events: none;
        }

        @media only screen and (min-width: 768px) and (max-width: 1199px) {
          .marker-underline::after {
            height: 8px;
            bottom: -2px;
          }
        }

        @media only screen and (max-width: 767px) {
          .marker-underline::after {
            height: 6px;
            bottom: -1px;
          }
        }
      `}} />
      </header>

      <div className="relative z-10 -mt-24 sm:-mt-22 lg:-mt-30">
        <Clinets />
      </div>
    </>
  );
}
