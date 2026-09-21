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
  {
    slug: "how-to-choose-cctv-installation-provider",
    title: "How to Choose a CCTV Installation Provider",
    description:
      "What to check before hiring a CCTV installer in Gurugram or Delhi NCR: site survey, recording, cabling, handover and AMC — without brochure language.",
    datePublished: "2026-09-21",
    h1: "How to Choose a CCTV Installation Provider",
    body: [
      {
        paragraphs: [
          "A CCTV installer is not a camera shop. The useful test is whether they will walk the site, say where a camera cannot see, and name who will keep the recorder healthy after handover.",
        ],
      },
      {
        heading: "Ask for a coverage plan, not a model list",
        paragraphs: [
          "Gates, parking, stores and corridors need different mounting and light. If the quote is only SKUs, the layout is still guesswork. Analog and IP can share a campus; the recorder and viewing PCs have to match that mix.",
        ],
      },
      {
        heading: "Recording, export and AMC",
        paragraphs: [
          "Agree how many days of video you keep, who can export an incident, and what happens when a camera goes dark. Trendwave Technologies installs analog and IP CCTV from Gurugram; the installation page describes that work without invented accuracy percentages.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/cctv-installation", label: "CCTV installation" },
      { href: "/contact", label: "Contact TrendwaveTech" },
    ],
  },
  {
    slug: "boom-barrier-selection-guide",
    title: "Boom Barrier Selection Guide",
    description:
      "How to size a boom barrier for parking or a secured gate: lane width, traffic, RFID or ANPR, and when a tyre killer is a different job.",
    datePublished: "2026-09-21",
    h1: "Boom Barrier Selection Guide",
    body: [
      {
        paragraphs: [
          "A boom barrier meters vehicles. It is not an anti-ram product. Choose it for parking, office gates and campus lanes where authorised traffic should pass and everyone else should wait.",
        ],
      },
      {
        heading: "Lane first, hardware second",
        paragraphs: [
          "Count lanes, peak arrivals and how visitors are processed. Then pick boom length and how the arm is opened: button, RFID, ANPR or a mix. Cycle times belong on the data sheet of the unit you actually buy, not on a generic website.",
        ],
      },
      {
        heading: "When a barrier is not enough",
        paragraphs: [
          "If the threat is a vehicle that will ignore the arm, read the tyre killer page. Many Delhi NCR industrial gates use both in one procedure. Trendwave Technologies supplies and installs barriers; we do not claim to manufacture them on this site.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/boom-barriers", label: "Boom barriers" },
      { href: "/products/tyre-killers", label: "Tyre killers" },
    ],
  },
  {
    slug: "hydraulic-bollards-applications",
    title: "Hydraulic Bollards: Applications and Considerations",
    description:
      "Where retractable hydraulic bollards fit — plazas, drop-offs and high-security approaches — and the civil work they need in Gurugram projects.",
    datePublished: "2026-09-21",
    h1: "Hydraulic Bollards: Applications and Considerations",
    body: [
      {
        paragraphs: [
          "Retractable bollards keep a plaza open to people and closed to cars until an authorised vehicle is lowered through. They are a civil job as much as a security job: pits, drainage and road finish decide whether the units last.",
        ],
      },
      {
        heading: "Typical uses",
        paragraphs: [
          "Hotel and commercial drop-offs, campus roads that must close, and high-security approaches. A wide vehicle-only lane may need a road blocker instead. Crash ratings come from the selected product sheet, not from this article.",
        ],
      },
      {
        heading: "Supply, not a factory claim",
        paragraphs: [
          "Trendwave Technologies supplies and installs hydraulic bollards from Gurugram. This website does not state that we manufacture the units.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/hydraulic-bollards", label: "Hydraulic bollards" },
      { href: "/products/road-blockers", label: "Road blockers" },
    ],
  },
  {
    slug: "anpr-systems-for-vehicle-access",
    title: "ANPR Systems for Vehicle Access Management",
    description:
      "How Automatic Number Plate Recognition works at a gate or parking lane, what lighting decides, and how it sits with boom barriers and RFID.",
    datePublished: "2026-09-21",
    h1: "ANPR Systems for Vehicle Access Management",
    body: [
      {
        paragraphs: [
          "ANPR reads a plate at a controlled moment — usually a barrier lane — so a list of authorised vehicles can open the arm or write a log. It is not GPS tracking of cars around a city.",
        ],
      },
      {
        heading: "Make the plate readable",
        paragraphs: [
          "Camera height, angle, speed and light on the plate matter more than software branding. Night work needs lighting designed for that lane. Dirty or covered plates still need a guard or RFID fallback.",
        ],
      },
      {
        heading: "Lists and visitors",
        paragraphs: [
          "Staff lists are straightforward. Visitors need a reception process unless the site accepts an open log. Trendwave Technologies installs ANPR as part of vehicle access in Delhi NCR; see the ANPR and vehicle monitoring pages for scope.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/anpr", label: "ANPR systems" },
      { href: "/products/vehicle-monitoring-system", label: "Vehicle monitoring" },
    ],
  },
  {
    slug: "access-control-system-implementation",
    title: "Access Control System Implementation",
    description:
      "How to implement ACMS: door schedules, credentials, logs and how readers connect to flap barriers or vehicle gates.",
    datePublished: "2026-09-21",
    h1: "Access Control System Implementation",
    body: [
      {
        paragraphs: [
          "ACMS is the list of who may open a door, turnstile or gate, plus the log of the attempt. Implementation starts with a door schedule, not with a reader catalogue.",
        ],
      },
      {
        heading: "Credentials and fallbacks",
        paragraphs: [
          "Cards, RFID, PIN and biometrics are inputs. Decide which doors need a person-bound credential and which can stay on a card. Enrolment, visitors and lost cards need a named owner on the client side.",
        ],
      },
      {
        heading: "What this is not",
        paragraphs: [
          "It is not a physical key-management cabinet. Trendwave Technologies does not list that product today. Vehicle gates can share the same permission store when the barrier, ANPR or RFID is designed into the same project.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/products/acms", label: "ACMS" },
      { href: "/products/rfid-access", label: "RFID access" },
    ],
  },
  {
    slug: "it-infrastructure-security-checklist",
    title: "IT Infrastructure Security Checklist",
    description:
      "A practical checklist for office and campus networks: cabling, firewalls, Wi-Fi, backups and AMC versus break-fix support.",
    datePublished: "2026-09-21",
    h1: "IT Infrastructure Security Checklist",
    body: [
      {
        paragraphs: [
          "Network security is mostly boring hygiene: who is on the Wi-Fi, whether the firewall rules still match the office, and whether last month’s backup actually restored.",
        ],
      },
      {
        heading: "Physical and logical layers",
        paragraphs: [
          "Structured cabling and rack hygiene sit under the same programme as firewalls and wireless. A clean cabinet does not replace access control on the server room door, but a messy one makes every outage slower.",
        ],
      },
      {
        heading: "Support after install",
        paragraphs: [
          "Break-fix is a call after failure. IT AMC is planned checks. Trendwave Technologies lists both installation and IT AMC from Gurugram; the IT infrastructure hub is the service page for that work.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/services/it-infra", label: "IT infrastructure and support" },
      { href: "/blog/it-amc-vs-break-fix-support", label: "IT AMC vs break-fix" },
    ],
  },
  {
    slug: "security-system-maintenance-guide",
    title: "Security System Maintenance Guide",
    description:
      "What AMC should cover for CCTV, barriers, ANPR and access control so a Gurugram or Delhi NCR site does not discover a dead camera during an incident.",
    datePublished: "2026-09-21",
    h1: "Security System Maintenance Guide",
    body: [
      {
        paragraphs: [
          "Security hardware fails quietly: dirty camera domes, a barrier that sticks, an ANPR log that stopped writing. Maintenance is how you notice before an incident.",
        ],
      },
      {
        heading: "What to put on the visit list",
        paragraphs: [
          "Camera cleanliness and recorder health, barrier sensors and arms, reader failures, and a test that footage or event logs still export. Exact intervals belong in the AMC document, not as a universal calendar on a website.",
        ],
      },
      {
        heading: "One vendor, several layers",
        paragraphs: [
          "Sites that bought CCTV, a boom and ACMS separately often have three call-out numbers. Trendwave Technologies offers surveillance AMC alongside installation from Gurugram so those layers can be checked as one site.",
        ],
      },
    ],
    relatedPaths: [
      { href: "/services/surveillance", label: "Surveillance services" },
      { href: "/contact", label: "Request a discussion" },
    ],
  },
];

const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

export function getArticle(slug: string) {
  return articleBySlug.get(slug);
}
