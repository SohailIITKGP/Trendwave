
"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from "lucide-react";

interface ServiceCard {
  id: string;
  heading: string;
  subheading: string;
  bgColor: string;
  imageUrl: string;
  vectorUrl: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 'software-dev',
    heading: 'Digital & Software Development',
    subheading: 'We design and develop powerful digital platforms and customized software solutions tailored to business and government requirements.',
    bgColor: 'black',
    imageUrl: '/Home_Service/Software Service Home page.webp',
    vectorUrl: '/V1.png'
  },
  {
    id: 'it-infra',
    heading: 'IT Infrastructure & Networking',
    subheading: 'We provide complete IT infrastructure planning, deployment, and maintenance services that enable organizations to operate with stability and speed.',
    bgColor: '#154df5',
    imageUrl: '/Home_Service/IT Infra  Service Home page.webp',
    vectorUrl: '/V2.png'
  },
  {
    id: 'security',
    heading: 'Surveillance & Security Solutions',
    subheading: 'Delivering integrated surveillance and security technology solutions to enhance monitoring, access control, and operational safety.',
    bgColor: 'black',
    imageUrl: '/Home_Service/Security service Home page.webp',
    vectorUrl: '/V3.png'
  }
];

const serviceRoutes: { [key: string]: string } = {
  'software-dev': '/services/digital',
  'it-infra': '/services/it-infra',
  'security': '/services/surveillance'
};

export default function Services() {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const handleNavigate = (serviceId: string) => {
    const route = serviceRoutes[serviceId];
    if (route) {
      router.push(route);
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
   
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && window.innerWidth >= 1024) {
        setActiveCard(servicesData[0].id);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="w-full py-10 flex flex-col items-center bg-white font-sans mt-5">
      {/* Section Header */}
      <div className="text-center mb-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold" style={{ color: 'var(--primary-accent-color)' }}>
          Our Core Services
        </h2>
      </div>

      {/* Accordion Container: flex-col on mobile/tab (one column), flex-row on desktop (lg) */}
      {/* Centered with specific mobile gap and desktop gap */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 w-full max-w-7xl items-center lg:items-stretch lg:h-115 px-5 sm:px-6 lg:px-8 overflow-hidden lg:overflow-visible">
        {servicesData.map((service) => {
          const isActive = isDesktop && activeCard === service.id;

          return (
            <div 
              key={service.id}
              onMouseEnter={() => isDesktop && setActiveCard(service.id)}
              onClick={() => {
                if (isDesktop) {
                  setActiveCard(service.id);
                } else {
                  handleNavigate(service.id);
                }
              }}
              className={`group relative flex flex-col lg:flex-row rounded-2xl overflow-hidden cursor-pointer transition-all duration-600 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                isActive 
                  ? 'lg:h-full lg:flex-[2.5] shadow-[0_8px_32px_rgba(0,0,0,0.15)]' 
                  : 'w-[90%] sm:w-[85%] lg:w-auto transform-gpu lg:flex-1 shadow-none aspect-[1.1] sm:aspect-square lg:aspect-auto lg:h-full'
              } border border-white/5 shrink-0 mx-auto lg:mx-0 max-w-85 sm:max-w-105 lg:max-w-none`}
              style={{ backgroundColor: service.bgColor }}
            >
              
              {/* --- COLLAPSED STATE CONTENT LOGIC --- */}
              <div 
                className={`absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-opacity duration-300 z-10 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <img
                  src={service.vectorUrl} 
                  alt="" 
                  className="absolute right-6 top-6 lg:top-8 lg:translate-y-0 w-20 h-28 sm:w-28 sm:h-28 lg:w-24 lg:h-24 object-contain opacity-40 drop-shadow-md"
                />
                
                <h3 className="text-white text-2xl sm:text-3xl lg:text-2xl font-bold mb-6 lg:mb-8 pr-16 lg:pr-0 leading-tight break-words">
                  {service.heading}
                </h3>
                
                <div 
                  className="flex items-center text-white/80 cursor-pointer lg:hidden"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate(service.id);
                  }}
                >
                   <ArrowRight className="w-12 h-12 sm:w-12 sm:h-12 lg:w-11 lg:h-11 transform transition-transform duration-300 group-hover:translate-x-2" strokeWidth={2} />
                </div>
              </div>


              {/* --- EXPANDED STATE CONTENT LOGIC --- */}
              {/* Only renders logic on desktop to ensure zero layout bugs on mobile devices */}
              <div 
                className={`absolute inset-0 flex flex-col lg:flex-row transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100 delay-[150ms]' : 'opacity-0 pointer-events-none'}`}
              >
                {/* Desktop: Left Photo */}
                <div className="hidden lg:block lg:w-[40%] lg:h-full relative shrink-0">
                  <img src={service.imageUrl} className="absolute inset-0 w-full h-full object-cover" alt={service.heading} />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                
                {/* Desktop: Right Content */}
                <div className="hidden lg:flex lg:w-[60%] lg:h-full flex-col justify-center lg:p-8 xl:p-12 lg:border-l border-white/5 shrink-0 overflow-hidden relative" style={{ backgroundColor: service.bgColor }}>
                  
                  <img 
                    src={service.vectorUrl} 
                    alt="" 
                    className="absolute -top-10 -right-10 lg:w-64 lg:h-64 object-contain opacity-[0.07] pointer-events-none"
                  />

                  <div className="w-full relative z-10 lg:pr-4">
                    <h2 className="lg:text-2xl xl:text-3xl font-bold text-white lg:mb-4 xl:mb-5 leading-snug">
                      {service.heading}
                    </h2>
                    
                    <p className="text-white lg:text-base xl:text-lg leading-relaxed lg:mb-8 lg:line-clamp-none">
                      {service.subheading}
                    </p>

                    <button 
                      onClick={() => handleNavigate(service.id)}
                      className="bg-white text-[#154df5] border-none lg:py-2 lg:px-2 rounded-md font-bold lg:text-base cursor-pointer transition-all duration-300 hover:bg-slate-200 hover:-translate-y-1 flex w-fit items-center justify-center gap-1 group/btn">
                      Learn More
                      <ArrowRight size={19} className="transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
