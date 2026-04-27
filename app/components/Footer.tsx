"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const productItems = [
    'CCTV Systems',
    'Boom Barriers',
    'Spike Barriers',
    'Tyre Killers',
    'Hydraulic Bollards',
    'Road Blockers',
    'Flap Barriers',
    'Automatic Swing Gates',
    'Automatic Sliding Gates',
    'ANPR Systems',
    'Access Control & Monitoring Systems (ACMS)',
    'RFID Access Systems',
    'Biometric & Face Recognition Devices',
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -80; // Offset for sticky navbar
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-black text-white pt-6 pb-4 border-t border-gray-800 mt-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-2 py-2">

        {/* Top Section - Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-20 justify-between mb-8 w-full">

          {/* Column 1: Our Products */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[18px] font-semibold text-white mb-2">Our Products</h4>
            <ul className="flex flex-col gap-2 text-[14px] text-[#8c96af]">
              {productItems.map((item) => (
                <li key={item}>
                  <Link href="/services/surveillance" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Our Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[18px] font-semibold text-white mb-2">Our Services</h4>
            <ul className="flex flex-col gap-2 text-[14px] text-[#8c96af]">
              <li>
                <Link href="/services/digital" className="hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital" className="hover:text-white transition-colors">
                  Mobile Application Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital" className="hover:text-white transition-colors">
                  Digital Marketing &amp; Performance Campaigns
                </Link>
              </li>
              <li>
                <Link href="/services/digital" className="hover:text-white transition-colors">
                  Bulk SMS Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/digital" className="hover:text-white transition-colors">
                  IVR Setup &amp; Integration
                </Link>
              </li>
              <li>
                <Link href="/services/digital" className="hover:text-white transition-colors">
                  API Integration &amp; System Connectivity
                </Link>
              </li>
              <li>
                <Link href="/services/it-infra" className="hover:text-white transition-colors">
                  Server Installation &amp; Configuration
                </Link>
              </li>
              <li>
                <Link href="/services/it-infra" className="hover:text-white transition-colors">
                  Network Design &amp; Deployment
                </Link>
              </li>
              <li>
                <Link href="/services/it-infra" className="hover:text-white transition-colors">
                  Structured Cabling
                </Link>
              </li>
              <li>
                <Link href="/services/it-infra" className="hover:text-white transition-colors">
                  Cloud Infrastructure Setup
                </Link>
              </li>
              <li>
                <Link href="/services/it-infra" className="hover:text-white transition-colors">
                  Network Security Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/it-infra" className="hover:text-white transition-colors">
                  Wireless Network Deployment
                </Link>
              </li>
              <li>
                <Link href="/services/it-infra" className="hover:text-white transition-colors">
                  Data Center Support
                </Link>
              </li>
              <li>
                <Link href="/services/it-infra" className="hover:text-white transition-colors">
                  IT AMC &amp; Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[18px] font-semibold text-white mb-2">Company</h4>
            <ul className="flex flex-col gap-2 text-[14px] text-[#8c96af]">
              <li>
                <Link href="/company" className="hover:text-white transition-colors">About us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-white transition-colors">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[18px] font-semibold text-white mb-2">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-[14px] text-[#8c96af]">
              <p className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-current" aria-hidden="true" />
                <span>0124-4580307</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-current" aria-hidden="true" />
                <span>+91-9821801122</span>
              </p>
              <p className="flex items-start gap-2.5 break-all sm:break-normal">
                <Mail size={16} className="mt-0.5 shrink-0 text-current" aria-hidden="true" />
                <span>office@trendwavetech.com</span>
              </p>
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin size={16} className="mt-0.5 shrink-0 text-current" aria-hidden="true" />
                <span>
                  304, Welldone Tech Park, Sector 48,
                  Sohna Road, Gurugram, Haryana, 122018
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-white/60 mb-8" />

        {/* Bottom Section - Copyright & Legal */}
        <div className="flex justify-center items-center w-full">
          <p className="text-[16px] text-white text-center">
            &copy; {currentYear} TrendWaveTech. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
