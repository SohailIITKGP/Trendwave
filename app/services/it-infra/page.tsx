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
    title: "Structured Cabling Solutions",
    description:
      "Design and implementation of organized copper and fiber structured cabling systems that enable reliable data transmission, network scalability and efficient infrastructure management across offices, campuses and industrial facilities",
    image: "/Services/It/Products/Structured_Cabling_Solutions.webp",
  },
  {
    title: "Server Installation & Configuration",
    description:
      "Professional server setup and configuration services to ensure secure data management, system performance and reliable application hosting environments",
    image:
      "/Services/It/Products/Server_Installation_Configuration.webp",
  },
  {
    title: "Router, Switch & Firewall Deployment",
    description:
      "Installation and configuration of enterprise-grade networking hardware to ensure optimized network performance, traffic control and enhanced security",
    image:
      "/Services/It/Products/Router_Switch_Firewall_Deployment.webp",
  },
  {
    title: "Cloud Infrastructure Setup",
    description:
      "Deployment of cloud-based environments that support scalability, remote access, data backup and efficient resource utilization for modern organizations",
    image:
      "/Services/It/Products/Cloud_Infrastructure_Setup.webp",
  },
  {
    title: "Data Center Support Services",
    description:
      "Infrastructure setup, rack installation, power management and connectivity solutions to support stable data center operations and system availability",
    image: "/Services/It/Products/Data_Center_Support_Services.webp",
  },
  {
    title: "Hardware Procurement & Deployment",
    description:
      "End-to-end sourcing and installation of IT hardware including servers, networking devices and computing systems aligned with project requirements",
    image:
      "/Services/It/Products/Hardware_Procurement_Deployment.webp",
  },
  {
    title: "Network Security Implementation",
    description:
      "Configuration of firewalls, secure access systems and monitoring tools to protect organizational networks from threats and unauthorized access",
    image:
      "/Services/It/Products/Network_Security_Implementation.webp",
  },
  {
    title: "Wireless Network Solutions",
    description:
      "Design and deployment of secure Wi-Fi and wireless networking systems that ensure uninterrupted connectivity across offices, campuses and public spaces",
    image:
      "/Services/It/Products/Wireless_Network_Solutions.webp",
  },
  {
    title: "IT AMC & Technical Support",
    description:
      "Structured annual maintenance services covering system monitoring, troubleshooting, upgrades and preventive maintenance for uninterrupted operations",
    image:
      "/Services/It/Products/IT_AMC_Technical_Support.webp",
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
                  <span className="text-sm text-gray-600">
                    Image not available
                  </span>
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
        <img
          src="/Services/It/Products/IT_AMC_Technical_Support.webp"
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover"
          loading="eager"
          aria-hidden="true"
        />

        <div className="absolute inset-0 z-10 bg-[#154df5] opacity-60" aria-hidden="true" />

        <div className="relative z-20 mx-auto flex h-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] w-full max-w-7xl items-center justify-center px-4 pb-32 pt-20 text-center sm:px-6 sm:pb-40 lg:px-8 lg:pb-48">
          <div className="w-full max-w-4xl text-white sm:max-w-5xl">
            <h1 className="mx-auto w-full pt-8 text-[clamp(1.95rem,8.2vw,5.4rem)] font-bold leading-[1.12] tracking-[-0.02em] sm:leading-[1.08]">
              <span className="block">Modern IT Infrastructure</span>
              <span className="block">&amp; Networking</span>
            </h1>
            <p className="mx-auto mt-6 w-full max-w-3xl text-[clamp(1rem,3.8vw,1.75rem)] leading-[1.55] text-white sm:mt-8 sm:leading-[1.65]">
              <span className="block sm:hidden">End-to-end setup, deployment and support</span>
              <span className="block sm:hidden">for stable, secure and high-performance</span>
              <span className="block sm:hidden">IT environments.</span>

              <span className="hidden sm:block">End-to-end setup, deployment and support for stable,</span>
              <span className="hidden sm:block">secure and high-performance IT environments.</span>
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
