"use client";

import { useState } from "react";
import Clinets from "@/app/components/Clinets";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

const servicesData: ServiceCard[] = [
  {
    title: "CCTV Surveillance Systems",
    description: "High-definition CCTV solutions for real-time monitoring, recording and centralized control across campuses, offices, public infrastructure and industrial facilities.",
    image: "/Services/Surveillance/Products/CCTV.webp",
  },
  {
    title: "Boom Barrier Systems",
    description: "Automated boom barriers designed to regulate vehicle entry and exit, ensuring controlled access at parking areas, government premises and secured zones.",
    image: "/Services/Surveillance/Products/Boom Barrier.webp",
  },
  {
    title: "Spike Barriers",
    description: "Heavy-duty spike barrier solutions that prevent unauthorized vehicle movement and enhance perimeter security at high-risk and restricted locations.",
    image: "/Services/Surveillance/Products/Spike Barrier.webp",
  },
  {
    title: "Tyre Killers",
    description: "Robust tyre killer systems engineered to stop forced vehicle intrusion and strengthen security control at entry and exit checkpoints.",
    image: "/Services/Surveillance/Products/Tyre Killer.webp",
  },
  {
    title: "Hydraulic Bollards",
    description: "Retractable hydraulic bollards that provide smart perimeter protection while allowing controlled vehicle access in sensitive and high-security environments.",
    image: "/Services/Surveillance/Products/Bollards.webp",
  },
  {
    title: "Road Blockers",
    description: "Strong road blocker installations designed for anti-ram protection and high-level vehicle restriction at critical infrastructure and secured facilities.",
    image: "/Services/Surveillance/Products/Road Blocker.webp",
  },
  {
    title: "Flap Barrier Systems",
    description: "Intelligent flap barrier solutions for smooth pedestrian flow management and access control in offices, metro stations and institutional buildings.",
    image: "/Services/Surveillance/Products/Flap Barrier.webp",
  },
  {
    title: "Automatic Swing Gates",
    description: "Automated swing gate systems that enable secure and convenient entry management with integration options for access control technologies.",
    image: "/Services/Surveillance/Products/Swing door.webp",
  },
  {
    title: "Automatic Sliding Gates",
    description: "Motorized sliding gate solutions suitable for wide entry points, ensuring reliable operation, safety and efficient vehicle movement control.",
    image: "/Services/Surveillance/Products/Slide door.webp",
  },
  {
    title: "ANPR Systems",
    description: "Smart ANPR technology for automated vehicle identification, parking management and secure access monitoring through number plate detection.",
    image: "/Services/Surveillance/Products/ANPR.webp",
  },
  {
    title: "ACMS",
    description: "Centralized access control software and hardware solutions that help organizations monitor movement, manage permissions and enhance facility security.",
    image: "/Services/Surveillance/Products/ACMS.webp",
  },
  {
    title: "RFID Access Solutions",
    description: "RFID-based entry systems for fast and contactless vehicle or personnel access, improving operational efficiency and reducing manual intervention.",
    image: "/Services/Surveillance/Products/RFID.webp",
  },
  {
    title: "Biometric & Face Recognition Systems",
    description: "Advanced biometric and facial recognition solutions for secure authentication, attendance tracking and restricted area access control.",
    image: "/Services/Surveillance/Products/Biomatric.webp",
  },
  {
    title: "AMC & Maintenance Services",
    description: "Comprehensive annual maintenance services ensuring optimal performance, preventive checks and quick technical support for all surveillance and security deployments.",
    image: "/Services/Surveillance/Products/AMC Services.webp",
  },
];

function ServicesGrid() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-15">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
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
              <h3 className="mb-2 text-lg font-bold text-[#1a202c] sm:text-xl lg:text-lg leading-tight">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4a5568] sm:text-base lg:text-sm">
                {service.description}
              </p>
            </div>
          </div>
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
          preload="metadata"
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
              Built for Secure and Controlled Operations
            </h1>
            <p className="mx-auto mt-6 w-full max-w-3xl text-[clamp(1rem,3.8vw,1.75rem)] leading-[1.55] text-white sm:mt-8 sm:leading-[1.65]">
              <span className="block sm:hidden">Integrated solutions for monitoring,</span>
              <span className="block sm:hidden">access control and perimeter protection</span>
              <span className="block sm:hidden">across critical environments.</span>

              <span className="hidden sm:block">Integrated solutions for monitoring, access control and</span>
              <span className="hidden sm:block">perimeter protection across critical environments.</span>
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
