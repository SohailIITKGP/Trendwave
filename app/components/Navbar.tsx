"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const mobileMenuLinkClass = "text-[#1a202c] text-[18px] hover:text-[var(--primary-accent-color)] transition-colors";

  const closeMobileMenus = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const toggleMobileMenu = () => {
    setOpen((prev) => {
      const next = !prev;
      if (!next) {
        setServicesOpen(false);
      }
      return next;
    });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -80;
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    closeMobileMenus();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white/85 backdrop-blur-md border-b border-gray-200/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 -ml-2">
              <Link href="/" className="flex items-center gap-3">
                <img src="/Logo1_converted.webp" alt="TrendWave Logo" className="h-16 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-10">

                {/* Our Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1 nav-link"
                  >
                    Our Services
                    <svg
                      className={`w-3 h-3 ml-1 text-black transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-blue-600' : 'hover:text-blue-600'}`}
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 6L0.669873 0.75L9.33013 0.75L5 6Z" fill="currentColor" />
                    </svg>
                  </button>

                  <div className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-200 transform p-4 mt-2 border border-gray-100 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <Link href="/services/digital" className="nav-dropdown-item px-4 py-3 rounded-lg">
                      Digital & Software Development
                    </Link>
                    <Link href="/services/it-infra" className="nav-dropdown-item px-4 py-3 rounded-lg">
                      IT Infrastructure & Networking
                    </Link>
                    <Link href="/services/surveillance" className="nav-dropdown-item px-4 py-3 rounded-lg">
                      Surveillance & Security Solutions
                    </Link>
                  </div>
                </div>

                <Link href="/services/surveillance" className="nav-link">
                  Products
                </Link>
                <Link href="/company" className="nav-link">
                  Company
                </Link>
                <Link href="tel:+919821801122" className="nav-link">
                  +91-9821801122
                </Link>
              </div>

              <Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden relative z-50 border-b border-gray-200/50">
        <div className="bg-white/85 backdrop-blur-md px-5 sm:px-7 md:px-10 h-20 flex items-center justify-between relative z-50">
          {/* Hamburger Menu Token */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="text-[var(--primary-accent-color)] w-[2.4rem] h-[2.4rem] text-[2rem] border-none relative bg-transparent outline-none flex items-center justify-center p-0"
          >
            {open ? (
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 pl-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/Logo1_converted.webp" alt="TrendWave Logo" className="h-13 w-auto object-contain" />
            </Link>
          </div>

          {/* Contact Button - Shows only on tablet (md) */}
          <div className="hidden md:flex w-[1.8rem] md:w-auto justify-end">
            <Link
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="btn-primary text-sm px-4 py-2 flex"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 w-full bg-white/85 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden z-40 ${open ? "max-h-[800px] pb-10 border-t border-gray-700/50 shadow-2xl" : "max-h-0"
            }`}
        >
          <div className="flex flex-col items-center pt-8 space-y-7 text-center">

            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center justify-center gap-1.5 ${mobileMenuLinkClass} focus:outline-none`}
              >
                Our Services
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 6L0.669873 0.75L9.33013 0.75L5 6Z" fill="currentColor" />
                </svg>
              </button>
              <div className={`flex-col items-center mt-6 space-y-6 w-full ${servicesOpen ? 'flex' : 'hidden'}`}>
                <Link
                  href="/services/digital"
                  onClick={closeMobileMenus}
                  className={mobileMenuLinkClass}
                >
                  Digital & Software Development
                </Link>
                <Link
                  href="/services/it-infra"
                  onClick={closeMobileMenus}
                  className={mobileMenuLinkClass}
                >
                  IT Infrastructure & Networking
                </Link>
                <Link
                  href="/services/surveillance"
                  onClick={closeMobileMenus}
                  className={mobileMenuLinkClass}
                >
                  Surveillance & Security Solutions
                </Link>
              </div>
            </div>

            <Link
              href="/services/surveillance"
              onClick={closeMobileMenus}
              className={mobileMenuLinkClass}
            >
              Products
            </Link>
            <Link
              href="/company"
              onClick={closeMobileMenus}
              className={mobileMenuLinkClass}
            >
              Company
            </Link>
            <Link
              href="/terms-conditions"
              onClick={closeMobileMenus}
              className={mobileMenuLinkClass}
            >
              +91-9821801122
            </Link>

            {/* Contact Button inside dropdown for small mobile screens */}
            <div className="pt-2 w-full flex md:hidden justify-center">
              <Link
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="btn-primary text-[18px] px-6 py-2.5"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}