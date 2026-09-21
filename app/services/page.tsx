import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "IT, security and software services",
  description:
    "TrendwaveTech services from Gurugram: security systems, IT infrastructure and networking, and digital software development for organisations in Delhi NCR and India.",
  path: "/services",
});

const hubs = [
  {
    href: "/services/surveillance",
    title: "Surveillance and security systems",
    body: "CCTV, ANPR, boom barriers, bollards, tyre killers, gates and access control — supply, installation and AMC.",
  },
  {
    href: "/services/it-infra",
    title: "IT infrastructure and support",
    body: "Structured cabling, servers, networks, firewalls, wireless, cloud, hardware supply and IT AMC.",
  },
  {
    href: "/services/digital",
    title: "Digital and software development",
    body: "Custom applications, websites, mobile apps, workflow automation and martech.",
  },
];

export default function ServicesHubPage() {
  return (
    <div className="bg-white pt-28 pb-16 sm:pt-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-tight text-[#0f172a]">
          Services
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Three lines of work from Trendwave Technologies in Gurugram. Pick the hub that matches the job rather than mixing security hardware with software keywords on one page.
        </p>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {hubs.map((hub) => (
            <li key={hub.href} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#0f172a]">
                <Link href={hub.href} className="hover:text-[#154df5]">
                  {hub.title}
                </Link>
              </h2>
              <p className="mt-3 text-slate-600">{hub.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
