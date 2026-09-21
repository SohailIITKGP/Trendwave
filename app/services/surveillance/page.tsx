"use client";

import { useState } from "react";
import Link from "next/link";
import Clinets from "@/app/components/Clinets";
import { surveillanceHubCards } from "@/content/products";

function ServicesGrid() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-15">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-[#1a202c] sm:text-3xl">Security products we install</h2>
        <p className="mt-3 text-slate-600">
          CCTV, vehicle access, ANPR and access control for commercial, industrial and institutional sites in Delhi NCR, with pan-India deployment when the project requires it.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {surveillanceHubCards.map((service, index) => (
          <Link
            key={service.title}
            href={service.href}
            className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative h-48 w-full overflow-hidden bg-gray-200 sm:h-52 lg:h-56">
              {imageErrors[index] ? (
                <div className="flex h-full w-full items-center justify-center bg-gray-300">
                  <span className="text-sm text-gray-600">Image not available</span>
                </div>
              ) : (
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={() => handleImageError(index)}
                />
              )}
            </div>
            <div className="p-4 sm:p-5 lg:p-6">
              <h3 className="mb-2 text-lg font-bold leading-tight text-[#1a202c] sm:text-xl lg:text-lg">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4a5568] sm:text-base lg:text-sm">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function SurveillanceServicesPage() {
  return (
    <div className="relative bg-white pt-20">
      <section className="relative isolate overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh]">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/Services/Surveillance/Products/CCTV.webp"
          aria-hidden="true"
        >
          <source
            src="/Services/Surveillance/security-video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 z-10 bg-[#154df5] opacity-60" aria-hidden="true" />

        <div className="relative z-20 mx-auto flex h-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] w-full max-w-7xl items-center justify-center px-4 pb-32 pt-20 text-center sm:px-6 sm:pb-40 lg:px-8 lg:pb-48">
          <div className="w-full max-w-4xl text-white sm:max-w-5xl">
            <h1 className="mx-auto w-full pt-8 text-[clamp(1.95rem,8.2vw,5.4rem)] font-bold leading-[1.12] tracking-[-0.02em] sm:leading-[1.08]">
              Security Systems for Controlled Operations
            </h1>
            <p className="mx-auto mt-6 w-full max-w-3xl text-[clamp(1rem,3.8vw,1.75rem)] leading-[1.55] text-white sm:mt-8 sm:leading-[1.65]">
              CCTV, vehicle access and access control for sites in Delhi NCR, with installation and AMC from Gurugram.
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32 xl:-mt-36">
        <Clinets />
      </div>

      <div className="relative mt-12 bg-white py-10 sm:mt-16 sm:py-12 lg:mt-18">
        <ServicesGrid />
      </div>
    </div>
  );
}
