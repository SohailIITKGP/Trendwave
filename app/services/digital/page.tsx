import {
  AppWindow,
  ArrowLeftRight,
  BarChart3,
  Bot,
  MessagesSquare,
  MonitorSmartphone,
  Rocket,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

const serviceCards: ServiceCard[] = [
  {
    title: "Custom Software Applications",
    description:
      "Purpose-built software to manage operations, track workflows and improve decision-making across teams and departments.",
    icon: AppWindow,
  },
  {
    title: "Websites & Service Portals",
    description:
      "Modern web platforms designed for information access, service delivery and structured user interaction.",
    icon: MonitorSmartphone,
  },
  {
    title: "Mobile Applications",
    description:
      "High-performance mobile apps that enable real-time access, field coordination and better user engagement.",
    icon: Smartphone,
  },
  {
    title: "Workflow Automation",
    description:
      "Digital systems that simplify approvals, reduce manual effort and bring visibility to day-to-day operations.",
    icon: Workflow,
  },
  {
    title: "Communication Platforms (SMS • IVR • OBD)",
    description:
      "Scalable communication infrastructure for alerts, outreach campaigns and automated user engagement.",
    icon: MessagesSquare,
  },
  {
    title: "Martech & Campaign Enablement",
    description:
      "Technology and execution support to plan, run and measure digital marketing initiatives.",
    icon: Rocket,
  },
  {
    title: "Dashboards & Monitoring Interfaces",
    description:
      "Clear, real-time reporting systems that help leadership track performance and operational metrics.",
    icon: BarChart3,
  },
  {
    title: "System Integration & API Connectivity",
    description:
      "Connecting multiple platforms and tools to ensure seamless data flow and unified digital ecosystems.",
    icon: ArrowLeftRight,
  },
  {
    title: "Software Support & Lifecycle Management",
    description:
      "Ongoing updates, monitoring and performance optimisation to keep systems stable and future-ready.",
    icon: Bot,
  },
];

function IntroSection() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/lsq_hero_bg_img-scaled-1-2.webp')" }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
        <h1 className="mx-auto w-full max-w-5xl text-[clamp(1.7rem,6.8vw,5.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a] sm:leading-[1.08]">
          <span className="block">
            Build, <span style={{ color: "var(--primary-accent-color)" }}>automate</span> <span className="whitespace-nowrap">and <span style={{ color: "var(--primary-accent-color)" }}>scale</span></span>
          </span>
          <span className="block">your digital operations</span>
        </h1>

        <p className="mx-auto mt-6 w-full max-w-4xl text-[clamp(0.98rem,2.9vw,1.7rem)] leading-[1.52] text-[#475569] sm:mt-8 sm:leading-[1.62]">
          <span className="block sm:hidden">Get reliable software products</span>
          <span className="block sm:hidden">and digital platforms that help</span>
          <span className="block sm:hidden">organizations streamline processes,</span>
          <span className="block sm:hidden">improve communication and</span>
          <span className="block sm:hidden">deliver services more efficiently.</span>

          <span className="hidden whitespace-nowrap sm:block">Get reliable software products and digital platforms</span>
          <span className="hidden whitespace-nowrap sm:block">that help organizations streamline processes, improve</span>
          <span className="hidden whitespace-nowrap sm:block">communication and deliver services more efficiently.</span>
        </p>
      </div>
    </div>
  );
}

function ServicesCardsSection() {
  return (
    <div className="mt-12 bg-[#154df5] py-10 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {serviceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#154df5] text-white">
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-bold leading-snug text-[#1a202c]">
                  {card.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ClosingStatementSection() {
  return (
    <div className="mx-auto mt-12 w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <p className="mx-auto max-w-5xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
        We build digital systems that are simple to use, easy to scale and dependable in real operating environments.
      </p>
    </div>
  );
}

export default function DigitalServicesPage() {
  return (
    <div className="bg-white pb-16 pt-36 sm:pb-20 sm:pt-40">
      <section>
        <IntroSection />
        <ServicesCardsSection />
        <ClosingStatementSection />
      </section>
    </div>
  );
}
