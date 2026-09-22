import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-10 lg:py-8 bg-[#f1f9fe] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 items-center lg:items-start">

          {/* Left Column - Image */}
          <div className="w-full lg:w-[48%] flex flex-col space-y-6">
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden">
              <Image
                src="/About US.webp"
                alt="Trendwave Team at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-[50%] flex flex-col justify-between">
            <div>
              <h2 className="text-center lg:text-left mx-auto lg:mx-0 lg:pl-7 text-[28px] sm:text-[34px] lg:text-[35px] xl:text-[40px] font-bold text-[#0f172a] leading-[1.2] mb-6 tracking-tight">
                Building <span style={{ color: "var(--primary-accent-color)", fontWeight: 700 }}>Future-Ready</span> <br className="hidden xl:block" />
                Digital & Security <br className="hidden xl:block" />
                Infrastructure
              </h2>
              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#475569] leading-[1.7] mb-2 w-full max-w-145 mx-auto lg:mx-0">
                <div className="flex flex-row items-start gap-3">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#e1f0fa] flex items-center justify-center text-[#1c5b8b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-left w-full">
                      At Trendwave, we combine deep technical expertise with real execution capability to deliver technology solutions that solve operational challenges, improve efficiency, and strengthen digital security.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-3 border-t border-gray-200 pt-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#e1f0fa] flex items-center justify-center text-[#1c5b8b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-left w-full">
                      From developing scalable digital platforms to deploying networking infrastructure and surveillance systems, our focus remains on creating dependable technology ecosystems for organizations and government institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text at bottom of right column */}
            <div className="pt-2 w-full text-left">
              <div className="flex flex-row items-start justify-center lg:justify-start gap-0 lg:gap-3">
                <div className="mt-0 shrink-0 w-8 h-8 rounded-full bg-[#e1f0fa] flex items-center justify-center text-[#1c5b8b] invisible"></div>
                <p className="w-full max-w-120 mx-auto lg:mx-0 text-[16px] sm:text-[18px] text-[#475569] leading-[1.7]">
                  We don&apos;t <span className="font-semibold text-[#1e293b]">just build systems</span> we implement, integrate, and support them for sustained performance.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
