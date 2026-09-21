export type ArticleRecord = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  h1: string;
  body: { heading?: string; paragraphs: string[] }[];
  relatedPaths: { href: string; label: string }[];
};

export const articles: ArticleRecord[] = [
  {
    slug: "cctv-installation-checklist-delhi-ncr-campuses",
    title: "CCTV Installation Checklist for Delhi NCR Campuses",
    description:
      "A practical checklist for campus CCTV in Delhi NCR: coverage, recording, viewing, cabling and handover — without model-name padding.",
    datePublished: "2026-09-21",
    h1: "CCTV Installation Checklist for Delhi NCR Campuses",
    body: [
      {
        paragraphs: [
          "Campus CCTV fails more often from a weak plan than from a weak camera. A Gurugram office park, a Noida institute and a Faridabad plant all share the same problem: too many edges, too many people, and a control room that still needs to find last Tuesday’s incident.",
          "This checklist is how Trendwave Technologies typically frames a campus survey before hardware is locked. It is not a tender specification.",
        ],
      },
      {
        heading: "Walk the perimeter before you pick cameras",
        paragraphs: [
          "List vehicle gates, pedestrian gates, parking, loading, hostels or blocks, and rooms that actually need evidence (stores, exam cells, plant rooms). Indoor corridors and outdoor yards need different mounting and lighting. If ANPR is in scope, the vehicle lane is a separate camera problem, not a leftover PTZ.",
        ],
      },
      {
        heading: "Recording and who will watch it",
        paragraphs: [
          "Agree retention in days, who can export footage, and whether viewing is local, networked, or both. Analog and IP can coexist on a campus that is being upgraded in phases; the recorder and viewing PCs have to match that mix.",
        ],
      },
      {
        heading: "Cabling, power and AMC",
        paragraphs: [
          "Campus jobs die in the ceiling void: power, PoE budgets, and fibre between blocks. Budget AMC for cleaning, recorder health and a call-out path so a dead camera is noticed. For installation scope, see our CCTV installation page.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/cctv-installation", label: "CCTV installation" },
      { href: "/products/anpr", label: "ANPR systems" },
      { href: "/services/surveillance", label: "Surveillance services" },
    ],
  },
  {
    slug: "boom-barrier-vs-tyre-killer",
    title: "Boom Barrier vs Tyre Killer",
    description:
      "When a boom barrier is enough, when a tyre killer is justified, and how Delhi NCR sites often use both in one lane.",
    datePublished: "2026-09-21",
    h1: "Boom Barrier vs Tyre Killer",
    body: [
      {
        paragraphs: [
          "A boom barrier is a traffic tool. A tyre killer is a hostile-vehicle tool. Mixing them up in a bill of quantities is how parking sites buy over-specified pits, and how high-security sites buy a painted arm and hope.",
        ],
      },
      {
        heading: "What a boom barrier is for",
        paragraphs: [
          "Office parking, society gates and campus entries use a boom to meter vehicles and to pair with RFID or ANPR. If the threat is “someone might sneak in,” a barrier plus a process is usually the right first layer.",
        ],
      },
      {
        heading: "What a tyre killer is for",
        paragraphs: [
          "If the threat is a vehicle that will ignore the arm, a tyre killer (often with a barrier in the same lane) is the conversation to have. Civil work, drainage and fail-safe behaviour matter more than brochure cycle times.",
        ],
      },
      {
        heading: "Using both",
        paragraphs: [
          "Many Delhi NCR industrial and institutional gates run a boom for daily traffic and a tyre killer for the same checkpoint’s security policy. Design them as one procedure, not two separate gadgets. See the boom barrier and tyre killer product pages for how we scope supply and installation — we do not claim to manufacture either.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/boom-barriers", label: "Boom barriers" },
      { href: "/products/tyre-killers", label: "Tyre killers" },
      { href: "/products/vehicle-monitoring-system", label: "Vehicle monitoring" },
    ],
  },
  {
    slug: "anpr-for-parking-in-gurugram",
    title: "ANPR for Parking in Gurugram",
    description:
      "How ANPR helps Gurugram parking and office gates, what lighting and lane design decide, and how it sits with barriers and RFID.",
    datePublished: "2026-09-21",
    h1: "ANPR for Parking in Gurugram",
    body: [
      {
        paragraphs: [
          "Gurugram parking is stop-start, mixed lighting and a lot of visitor exceptions. Automatic Number Plate Recognition only helps if the plate is readable at the moment the vehicle is supposed to be identified — usually a controlled lane, not a sweeping overview camera.",
        ],
      },
      {
        heading: "Put the camera where the plate is",
        paragraphs: [
          "The ANPR camera wants a predictable speed, a predictable distance and light on the plate. Boom barriers help because they create that moment. A free-flow basement ramp without lighting work will waste the software.",
        ],
      },
      {
        heading: "Lists, visitors and RFID",
        paragraphs: [
          "Staff lists are the easy case. Visitors still need a reception or guard process unless the client accepts a fully open log. RFID remains useful when plates are dirty, covered, or when the organisation already issues tags. ANPR here is identification at the gate, not GPS tracking of cars around the city.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/anpr", label: "ANPR systems" },
      { href: "/products/boom-barriers", label: "Boom barriers" },
      { href: "/products/vehicle-monitoring-system", label: "Vehicle monitoring" },
    ],
  },
  {
    slug: "what-is-acms",
    title: "What Is ACMS?",
    description:
      "A plain-language explanation of Access Control and Management Systems: doors, credentials, logs, and how ACMS differs from a key cabinet.",
    datePublished: "2026-09-21",
    h1: "What Is ACMS?",
    body: [
      {
        paragraphs: [
          "ACMS means Access Control and Management System: the controllers, readers and software that decide whether a credential may open a door, turnstile or vehicle gate, and that keep a log of the attempt.",
        ],
      },
      {
        heading: "What it is not",
        paragraphs: [
          "It is not a physical key-management cabinet. Trendwave Technologies does not currently list a Key Management System as a product, so ACMS should not be used as a stand-in keyword for that category.",
        ],
      },
      {
        heading: "What usually sits around it",
        paragraphs: [
          "Cards, RFID, biometrics and face readers are inputs. Flap barriers and locks are outputs. CCTV is the picture of the same doorway. Vehicle gates can share the same permission store when the project is designed that way.",
          "If you are scoping a Delhi NCR office or plant, start with a door schedule and who is allowed to enrol users. Hardware comes after that list is honest.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/acms", label: "ACMS" },
      { href: "/products/rfid-access", label: "RFID access" },
      { href: "/products/biometric-face-recognition", label: "Biometric access" },
    ],
  },
  {
    slug: "it-amc-vs-break-fix-support",
    title: "IT AMC vs Break-Fix Support",
    description:
      "How annual IT maintenance differs from call-only break-fix work for offices and plants that need cabling, servers and network uptime.",
    datePublished: "2026-09-21",
    h1: "IT AMC vs Break-Fix Support",
    body: [
      {
        paragraphs: [
          "Break-fix means you call when something is already down. An IT AMC is a planned relationship: monitoring, preventive visits, and a response path before the mail server or the firewall becomes a surprise.",
        ],
      },
      {
        heading: "When break-fix is enough",
        paragraphs: [
          "A small office with one internet link and no on-site server can live on break-fix if someone on staff can describe the fault. You still want a named vendor so you are not starting a vendor search during an outage.",
        ],
      },
      {
        heading: "When AMC is the cheaper year",
        paragraphs: [
          "Structured cabling, switches, firewalls, servers and Wi-Fi across a campus produce quiet failures: a dirty UPS, a switch reboot loop, a backup that stopped last month. Trendwave Technologies lists IT AMC and technical support as a service alongside installation. The AMC does not replace good design; it keeps the design honest after handover.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/services/it-infra", label: "IT infrastructure and support" },
      { href: "/company", label: "About Trendwave Technologies" },
    ],
  },
  {
    slug: "vehicle-access-control-stack",
    title: "Vehicle Access Control Stack",
    description:
      "How boom barriers, ANPR, RFID, CCTV and ACMS fit together at a gate — a stack, not a catalogue of isolated gadgets.",
    datePublished: "2026-09-21",
    h1: "Vehicle Access Control Stack",
    body: [
      {
        paragraphs: [
          "A working gate is a stack. The barrier is the muscle, ANPR or RFID is the credential, CCTV is the evidence, and ACMS is the list of who is allowed. Buying only one layer and hoping the guard fills the rest is how queues and incidents both get worse.",
        ],
      },
      {
        heading: "A simple order of design",
        paragraphs: [
          "1. How many lanes, and what happens to visitors. 2. What credential staff already have. 3. Whether the threat is parking discipline or a hostile vehicle. 4. Where the control room will sit. Tyre killers and road blockers enter only at step 3, not because they look serious in a brochure.",
        ],
      },
      {
        heading: "What this site means by vehicle monitoring",
        paragraphs: [
          "Vehicle monitoring here is that gate stack — ANPR, barriers and RFID — not GPS trackers in the fleet. If you need the former in Delhi NCR, start from the vehicle monitoring page and pull in only the layers the site will actually operate.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/vehicle-monitoring-system", label: "Vehicle monitoring" },
      { href: "/products/anpr", label: "ANPR" },
      { href: "/products/boom-barriers", label: "Boom barriers" },
      { href: "/products/acms", label: "ACMS" },
    ],
  },
];

const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

export function getArticle(slug: string) {
  return articleBySlug.get(slug);
}
