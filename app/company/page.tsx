"use client";
import Clinets from "@/app/components/Clinets";

export default function SurveillanceServicesPage() {
  return (
    <div className="relative bg-white pt-20">
      <section className="relative isolate overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh]">
        <img
          src="/Company_Hero.webp"
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover"
          loading="eager"
          aria-hidden="true"
        />

        <div className="absolute inset-0 z-10 bg-[#154df5] opacity-60" aria-hidden="true" />

        <div className="relative z-20 mx-auto flex h-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] w-full max-w-7xl items-center justify-center px-4 pb-32 pt-20 text-center sm:px-6 sm:pb-40 lg:px-8 lg:pb-48">
          <div className="w-full max-w-4xl text-white sm:max-w-5xl">
            <h1 className="mx-auto w-full pt-8 text-[clamp(1.95rem,8.2vw,5.4rem)] font-bold leading-[1.12] tracking-[-0.02em] sm:leading-[1.08]">
              <span className="block">Built on Expertise.</span>
              <span className="block">Driven by Execution.</span>
            </h1>
            <p className="mx-auto mt-6 w-full max-w-3xl text-[clamp(1rem,3.8vw,1.75rem)] leading-[1.55] text-white sm:mt-8 sm:leading-[1.65]">
              <span className="block sm:hidden">Delivering software, infrastructure and</span>
              <span className="block sm:hidden">security systems that work reliably in</span>
              <span className="block sm:hidden">real environments</span>

              <span className="hidden sm:block">Delivering software, infrastructure and security</span>
              <span className="hidden sm:block">systems that work reliably in real environments.</span>
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32 xl:-mt-36">
        <Clinets />
      </div>

      <section className="relative z-10 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight text-[#154df5] sm:text-3xl lg:text-4xl">
              <span className="block">Bridging the Gap Between</span>
              <span className="block">Planning and Execution</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
              In today&apos;s market, many technology solutions look strong in planning but fail during real implementation. At TrendWaveTech, we focus on closing this gap by delivering systems that are practical to deploy, easy to manage and reliable in everyday operations.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-700 sm:text-xl">
              Our approach ensures that technology not only gets implemented but continues to perform consistently over time.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-tl-[2.2rem] rounded-br-[2.2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <img
              src="/Company_Hero.webp"
              alt="Team discussing implementation plans"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.25rem] bg-[#154df5] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              <div className="text-center lg:border-r lg:border-white/35 lg:pr-8">
                <p className="text-3xl font-bold leading-none text-white sm:text-4xl">100+</p>
                <p className="mt-3 text-sm font-medium text-white sm:text-base">Projects Delivered</p>
              </div>

              <div className="text-center lg:border-r lg:border-white/35 lg:px-8">
                <p className="text-3xl font-bold leading-none text-white sm:text-4xl">20+</p>
                <p className="mt-3 text-sm font-medium text-white sm:text-base">Cities Covered</p>
              </div>

              <div className="text-center lg:border-r lg:border-white/35 lg:px-8">
                <p className="text-3xl font-bold leading-none text-white sm:text-4xl">10+ Years</p>
                <p className="mt-3 text-sm font-medium text-white sm:text-base">Average Team Experience</p>
              </div>

              <div className="text-center lg:pl-8">
                <p className="text-xl font-bold leading-tight text-white sm:text-2xl">End-to-End</p>
                <p className="mt-3 text-sm font-medium text-white sm:text-base">Execution Capability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f9ff] pt-2 pb-16 sm:pt-3 sm:pb-20 lg:pt-4 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-6">
            <div className="rounded-none rounded-tl-[1.25rem] rounded-br-[1.25rem] border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:p-8 lg:col-span-2">
              <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">Support and Maintain</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                We stay involved after deployment to ensure systems run smoothly and reliably over time.
              </p>
            </div>

            <div className="rounded-none rounded-tl-[1.25rem] rounded-br-[1.25rem] border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:p-8 lg:col-span-2">
              <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">Design the Right Solution</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                We plan a solution that fits the requirement practical, scalable and easy to manage.
              </p>
            </div>

            <div className="rounded-none rounded-tl-[1.25rem] rounded-br-[1.25rem] border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:p-8 lg:col-span-2">
              <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">Execute with Precision</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                From deployment to integration, we ensure everything is implemented correctly and efficiently.
              </p>
            </div>

            <div className="rounded-none rounded-tl-[1.25rem] rounded-br-[1.25rem] border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:p-8 lg:col-span-3">
              <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">Understand the Requirement</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                We start by clearly understanding operational needs, environment and project scope.
              </p>
            </div>

            <div className="rounded-none rounded-tl-[1.25rem] rounded-br-[1.25rem] border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:p-8 lg:col-span-3">
              <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">Structured approach to every project</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                We focus on clarity, execution and long-term reliability at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}