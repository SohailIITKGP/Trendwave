import { CheckCircle2, PenTool, Rocket, Wrench, LifeBuoy } from "lucide-react";

const reasons = [
  "100+ Projects Delivered - Successful implementation of software, infrastructure and surveillance solutions across diverse operational environments.",
  "Government Project Understanding - Experience handling structured and compliance-driven deployments.",
  "Multi-Location Deployment Experience - Capability to execute and manage IT and Security projects across cities and distributed facilities.",
  "Skilled Technical & Engineering Team - Dedicated professionals with expertise in digital development, networking and security systems.",
  "Long-Term Client Support - Ongoing maintenance, upgrades and technical assistance ensuring uninterrupted system performance."
];

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full py-10 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-20">

        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-bold text-[#0f172a] leading-[1.2] mb-6 tracking-tight">
            Why Go with <br className="hidden sm:block lg:hidden" />
            <span style={{ color: "var(--primary-accent-color)", fontWeight: 700 }}>Trendwave Technologies</span>
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#475569] leading-[1.7] mb-8 max-w-[540px]">
            Delivering Technology Solutions with Proven Execution Capability
          </p>

          {/* Feature List */}
          <ul className="flex flex-col gap-5 w-full max-w-[500px]">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-[var(--primary-accent-color)]">
                  <CheckCircle2 size={22} strokeWidth={2.5} />
                </div>
                <span className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.5] text-left font-medium">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Graphic / Illustration area (following reference image style) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:mt-0 relative">
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Circular cycle graphic mimicking the reference image */}
            <div className="absolute inset-0 m-auto w-[70%] h-[70%] rounded-full border-[3px] border-dashed border-[#bee2fd] animate-[spin_60s_linear_infinite]" />

            {/* Center Element */}
            <div className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-full shadow-[0_8px_30px_rgba(28,91,139,0.12)] flex items-center justify-center z-10 border border-[#e1f0fa]">
              <span className="text-[#0f172a] font-bold text-sm text-center leading-tight">Technology<br />Partner</span>
            </div>

            {/* Orbital Nodes (Text & Icons alternating) */}

            {/* 12 o'clock: Text */}
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-28 sm:w-52 px-2 sm:px-3 py-1.5 rounded-full shadow-md border border-gray-100 flex items-center justify-center z-20">
              <span className="text-[#0f172a] font-bold text-[10px] sm:text-[11px] text-center leading-tight sm:hidden">100+ Projects</span>
              <span className="text-[#0f172a] font-bold text-[10px] sm:text-[11px] text-center leading-tight hidden sm:block">100+ Projects Delivered</span>
            </div>

            {/* 1:30 (45deg): Icon - positioned slightly outside */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 bg-[#e1f0fa] w-10 h-10 rounded-full shadow-sm border border-white flex items-center justify-center z-20" style={{ top: '21%', left: '79%' }}>
              <span className="text-[var(--primary-accent-color)]"><Rocket size={18} /></span>
            </div>

            {/* 3 o'clock: Text */}
            <div className="absolute top-1/2 left-[85%] -translate-x-1/2 -translate-y-1/2 bg-white w-28 sm:w-56 px-2 sm:px-3 py-1.5 rounded-full shadow-md border border-gray-100 flex items-center justify-center z-20">
              <span className="text-[#0f172a] font-bold text-[10px] sm:text-[11px] text-center leading-tight sm:hidden">Pan-India Reach</span>
              <span className="text-[#0f172a] font-bold text-[10px] sm:text-[11px] text-center leading-tight hidden sm:block">Pan-India Deployment Capability</span>
            </div>

            {/* 4:30 (135deg): Icon - positioned slightly outside */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 bg-[#e1f0fa] w-10 h-10 rounded-full shadow-sm border border-white flex items-center justify-center z-20" style={{ top: '79%', left: '79%' }}>
              <span className="text-[var(--primary-accent-color)]"><Wrench size={18} /></span>
            </div>

            {/* 6 o'clock: Text */}
            <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-28 sm:w-52 px-2 sm:px-3 py-1.5 rounded-full shadow-md border border-gray-100 flex items-center justify-center z-20">
              <span className="text-[#0f172a] font-bold text-[10px] sm:text-[11px] text-center leading-tight sm:hidden">Tech Expertise</span>
              <span className="text-[#0f172a] font-bold text-[10px] sm:text-[11px] text-center leading-tight hidden sm:block">Integrated Technical Expertise</span>
            </div>

            {/* 7:30 (225deg): Icon - positioned slightly outside */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 bg-[#e1f0fa] w-10 h-10 rounded-full shadow-sm border border-white flex items-center justify-center z-20" style={{ top: '79%', left: '21%' }}>
              <span className="text-[var(--primary-accent-color)]"><LifeBuoy size={18} /></span>
            </div>

            {/* 9 o'clock: Text */}
            <div className="absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 bg-white w-28 sm:w-56 px-2 sm:px-3 py-1.5 rounded-full shadow-md border border-gray-100 flex items-center justify-center z-20">
              <span className="text-[#0f172a] font-bold text-[10px] sm:text-[11px] text-center leading-tight sm:hidden">Post Support</span>
              <span className="text-[#0f172a] font-bold text-[10px] sm:text-[11px] text-center leading-tight hidden sm:block">Reliable Post-Implementation Support</span>
            </div>

            {/* 10:30 (315deg): Icon - positioned slightly outside */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 bg-[#e1f0fa] w-10 h-10 rounded-full shadow-sm border border-white flex items-center justify-center z-20" style={{ top: '21%', left: '21%' }}>
              <span className="text-[var(--primary-accent-color)]"><PenTool size={18} /></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
