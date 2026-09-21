export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductRecord = {
  slug: string;
  name: string;
  footerLabel: string;
  navLabel?: string;
  featuredInNav: boolean;
  title: string;
  description: string;
  h1: string;
  intro: string;
  overview: string;
  applications: string[];
  benefits: string[];
  implementation: string;
  amc: string;
  integrations: string[];
  faqs: ProductFaq[];
  related: string[];
  image: string;
};

export const products: ProductRecord[] = [
  {
    slug: "cctv-installation",
    name: "CCTV Installation",
    footerLabel: "CCTV Systems",
    navLabel: "CCTV Installation",
    featuredInNav: true,
    title: "CCTV Installation in Delhi NCR",
    description:
      "Analog and IP CCTV installation for offices, campuses, industrial sites and housing in Gurugram and Delhi NCR, with recording, viewing and AMC support.",
    h1: "CCTV Installation in Delhi NCR",
    intro:
      "Trendwave Technologies designs and installs CCTV surveillance for sites that need reliable recording, live viewing and a system that operations teams can actually manage day to day.",
    overview:
      "We plan camera placement around entry points, yards, corridors, parking and critical rooms rather than dropping cameras at random. Installations cover analog and IP-based systems, local or networked recording, and viewing for security desks. Work is typically carried out from our Gurugram base for Delhi NCR sites, with deployment support for facilities elsewhere in India when the project requires it.",
    applications: [
      "Offices and commercial buildings",
      "Industrial plants and warehouses",
      "Campuses and public infrastructure",
      "Residential communities and parking areas",
      "Government and institutional premises",
    ],
    benefits: [
      "Camera layout based on how the site is actually used",
      "Support for analog and IP systems on the same programme of work",
      "Centralised recording and viewing where the control room needs it",
      "Handover that includes how to review footage and raise issues",
    ],
    implementation:
      "A typical CCTV job starts with a site walk-through, coverage notes and a bill of materials. Cabling, mounting, recorder configuration and user access are completed on site, followed by a check that live and recorded views match the agreed coverage. We do not publish model-level specifications here because hardware is selected per project.",
    amc:
      "Annual maintenance can include camera cleaning checks, recorder health, backup verification and call-out support so recording gaps are noticed before they become a problem.",
    integrations: [
      "ANPR at vehicle gates",
      "Access control and ACMS events",
      "Boom barriers and other vehicle access hardware",
    ],
    faqs: [
      {
        question: "Do you install both analog and IP CCTV?",
        answer:
          "Yes. The existing surveillance page lists analog and IP-based CCTV. The mix depends on the site, cabling and what already exists.",
      },
      {
        question: "Can cameras cover parking and perimeter together?",
        answer:
          "Yes. Parking, gates and building interiors are planned as one layout so operators are not switching between unrelated systems.",
      },
      {
        question: "Is AMC available after installation?",
        answer:
          "Yes. Surveillance AMC and maintenance is part of the same service line as installation.",
      },
    ],
    related: ["anpr", "acms", "vehicle-monitoring-system"],
    image: "/Services/Surveillance/Products/CCTV.webp",
  },
  {
    slug: "boom-barriers",
    name: "Boom Barriers",
    footerLabel: "Boom Barriers",
    navLabel: "Boom Barriers",
    featuredInNav: true,
    title: "Boom Barriers in Delhi NCR",
    description:
      "Boom barrier supply and installation for parking, offices and secured entries in Gurugram and Delhi NCR, with optional ANPR and RFID integration.",
    h1: "Boom Barrier Systems for Vehicle Access",
    intro:
      "Boom barriers are used to control vehicle entry and exit at parking, offices and secured compounds. Trendwave Technologies supplies and installs these systems as part of a wider vehicle-access setup.",
    overview:
      "A boom barrier is only useful if it opens for authorised traffic and stays down for everyone else. We install barriers at the lane, set operating behaviour for the expected traffic, and connect them to push-button, RFID, ANPR or access-control triggers when the project calls for it. Work is delivered for Delhi NCR sites from Gurugram and for other Indian locations as project deployment.",
    applications: [
      "Office and commercial parking",
      "Housing societies and gated communities",
      "Industrial and logistics gates",
      "Government and institutional campuses",
    ],
    benefits: [
      "Clear lane control without a full anti-ram solution",
      "Can work with ticket, RFID or number-plate workflows",
      "Fits into an existing CCTV or access-control plan",
      "AMC available after commissioning",
    ],
    implementation:
      "Installation covers civil or mounting checks, barrier alignment, safety loops or sensors where specified, and a live test with the access method the site will use. Opening time, boom length and crash rating vary by model and are confirmed in the project proposal rather than as generic website specifications.",
    amc:
      "Maintenance typically covers motor and arm condition, sensor checks and failover behaviour so the lane does not stay stuck open or closed.",
    integrations: [
      "ANPR for registered vehicles",
      "RFID tags at staff or resident lanes",
      "CCTV coverage of the gate",
    ],
    faqs: [
      {
        question: "Can a boom barrier work with ANPR?",
        answer:
          "Yes. Number-plate recognition can trigger the barrier for registered vehicles. That combination is how we describe vehicle monitoring on this site — not GPS tracking.",
      },
      {
        question: "Do you only install in Gurugram?",
        answer:
          "Gurugram is the office location. Installations are carried out across Delhi NCR and in other Indian cities when the project requires travel.",
      },
    ],
    related: ["tyre-killers", "anpr", "vehicle-monitoring-system"],
    image: "/Services/Surveillance/Products/Boom Barrier.webp",
  },
  {
    slug: "tyre-killers",
    name: "Tyre Killers",
    footerLabel: "Tyre Killers",
    navLabel: "Tyre Killers",
    featuredInNav: true,
    title: "Tyre Killer Systems in Delhi NCR",
    description:
      "Tyre killer supply and installation for high-security vehicle checkpoints in Delhi NCR, typically combined with boom barriers, CCTV and access control.",
    h1: "Tyre Killer Systems for Vehicle Checkpoints",
    intro:
      "Tyre killers are used where a boom arm is not enough and the site needs a physical stop against a forced vehicle entry.",
    overview:
      "Trendwave Technologies supplies and installs tyre killer systems at checkpoints that already have, or will have, a barrier, cameras and an access process. The equipment is intended to stop a vehicle that ignores the boom, not to replace everyday parking control. Selection of electro-mechanical or hydraulic types is done during design, based on the lane and duty cycle — we do not list unverified model numbers here.",
    applications: [
      "High-security and restricted sites",
      "Industrial and campus main gates",
      "Facilities that already use boom barriers and CCTV",
    ],
    benefits: [
      "Adds a hard stop beyond a boom arm",
      "Can sit in the same lane as a barrier and ANPR camera",
      "Operated as part of the site’s access procedure",
    ],
    implementation:
      "Civil work, pit or surface mounting, drainage where needed, and interlock with the barrier or guard booth are planned together. Commissioning includes local and remote operation checks agreed with the client’s security team.",
    amc:
      "AMC focuses on spike condition, hydraulics or drive units, and fail-safe behaviour during power or control issues.",
    integrations: [
      "Boom barriers in the same lane",
      "Guard-room push buttons",
      "CCTV and ANPR at the checkpoint",
    ],
    faqs: [
      {
        question: "Is a tyre killer the same as a boom barrier?",
        answer:
          "No. A boom barrier manages routine entry. A tyre killer is a hostile-vehicle measure. Many sites use both in one lane.",
      },
      {
        question: "Can it be raised only for unauthorised vehicles?",
        answer:
          "Operating logic is configured with the client. Typical use is default-safe with authorised opening, not an automatic public-parking mode.",
      },
    ],
    related: ["boom-barriers", "road-blockers", "hydraulic-bollards"],
    image: "/Services/Surveillance/Products/Tyre Killer.webp",
  },
  {
    slug: "hydraulic-bollards",
    name: "Hydraulic Bollards",
    footerLabel: "Hydraulic Bollards",
    navLabel: "Hydraulic Bollards",
    featuredInNav: true,
    title: "Hydraulic Bollards in Delhi NCR",
    description:
      "Retractable hydraulic bollards for perimeter and plaza vehicle control in Gurugram and Delhi NCR. Supply and installation — manufacturer status is not claimed.",
    h1: "Hydraulic Bollards for Perimeter Vehicle Control",
    intro:
      "Retractable hydraulic bollards protect a plaza or driveway while still allowing authorised vehicles through when the bollards are lowered.",
    overview:
      "Trendwave Technologies supplies and installs hydraulic bollards as part of perimeter security. The current site describes them as retractable units for sensitive and high-security environments. We do not describe ourselves as the original equipment manufacturer on this website; equipment is specified per project. Installation covers Delhi NCR from Gurugram, with pan-India deployment when contracted.",
    applications: [
      "Embassy, government and high-security approaches",
      "Hotel and commercial drop-off lanes",
      "Campus roads that must close to through traffic",
      "Mixed pedestrian and vehicle plazas",
    ],
    benefits: [
      "Keeps a street or plaza open to people while controlling cars",
      "Works with the same access logic as barriers and RFID",
      "Can be grouped across a wide entry",
    ],
    implementation:
      "Bollard work is civil-heavy: pits, drainage, power and control cabling must be right before the units go in. We coordinate that sequence so the finish level matches the road. Crash ratings and cycle times are taken from the selected product data sheet, not invented on this page.",
    amc:
      "Maintenance usually includes hydraulic health, alignment, and a test of raise/lower under the site’s access procedure.",
    integrations: [
      "Access control / ACMS",
      "Guard-room controls",
      "CCTV covering the bollard line",
    ],
    faqs: [
      {
        question: "Do you manufacture hydraulic bollards?",
        answer:
          "This website presents bollards as a supplied and installed security product. It does not state that Trendwave manufactures the units. Project quotes name the proposed equipment.",
      },
      {
        question: "Are bollards only for government sites?",
        answer:
          "No. Commercial drop-offs and campuses use them wherever a retractable vehicle stop is needed.",
      },
    ],
    related: ["boom-barriers", "tyre-killers", "road-blockers"],
    image: "/Services/Surveillance/Products/Bollards.webp",
  },
  {
    slug: "anpr",
    name: "ANPR Systems",
    footerLabel: "ANPR Systems",
    navLabel: "ANPR",
    featuredInNav: true,
    title: "ANPR Systems in Delhi NCR",
    description:
      "Automatic Number Plate Recognition for parking, campuses and secured gates in Delhi NCR, integrated with boom barriers, RFID and CCTV.",
    h1: "Automatic Number Plate Recognition (ANPR)",
    intro:
      "ANPR reads vehicle number plates so a gate, parking system or control room can log and, where configured, admit registered vehicles without a manual check every time.",
    overview:
      "Trendwave Technologies installs ANPR as part of vehicle identification, parking management and secure access monitoring. Cameras are placed where plates are readable — usually at a controlled lane, not on an unrestricted highway. Software and watchlists are set with the client. This is not a GPS fleet-tracking product.",
    applications: [
      "Office and mall parking",
      "Campus and industrial gates",
      "Sites that already use boom barriers",
      "Audit of vehicles entering a secured facility",
    ],
    benefits: [
      "Faster processing of known vehicles",
      "A time-stamped log of plates at the lane",
      "Can open a barrier when a plate is authorised",
      "Works alongside RFID where mixed credentials are needed",
    ],
    implementation:
      "Accuracy depends on lighting, camera angle, speed of the vehicle and plate condition. We treat those as design inputs, then connect the ANPR output to the barrier or ACMS if required. We do not quote universal capture percentages on this page.",
    amc:
      "Support covers camera cleanliness, software health and a check that logs are still being written.",
    integrations: [
      "Boom barriers",
      "Vehicle monitoring / access stacks",
      "CCTV recorders",
      "ACMS permission lists",
    ],
    faqs: [
      {
        question: "Does ANPR replace RFID?",
        answer:
          "Not always. Some sites use both: RFID for staff and ANPR for visitors or audit.",
      },
      {
        question: "Can ANPR work at night?",
        answer:
          "It can, if the lane lighting and camera are specified for night conditions. That is checked during the site survey.",
      },
    ],
    related: ["vehicle-monitoring-system", "boom-barriers", "cctv-installation"],
    image: "/Services/Surveillance/Products/ANPR.webp",
  },
  {
    slug: "acms",
    name: "ACMS",
    footerLabel: "Access Control & Monitoring Systems (ACMS)",
    navLabel: "ACMS",
    featuredInNav: true,
    title: "ACMS Access Control Systems in Delhi NCR",
    description:
      "Access Control and Management Systems (ACMS) for doors, turnstiles and vehicle gates in Delhi NCR, including permissions, monitoring and AMC.",
    h1: "ACMS — Access Control and Management Systems",
    intro:
      "ACMS is the software and hardware layer that decides who can enter a door, turnstile or vehicle gate, and keeps a record of that movement.",
    overview:
      "On this site, ACMS is described as centralised access control that helps organisations monitor movement, manage permissions and tighten facility security. Trendwave Technologies supplies and implements that stack: controllers, readers, software and the rules the client’s admin team will use. It is not presented as a standalone key-cabinet or key-management product.",
    applications: [
      "Office floors and server rooms",
      "Campuses with mixed pedestrian and vehicle access",
      "Industrial plants with restricted bays",
      "Sites using biometric, RFID or card readers",
    ],
    benefits: [
      "One place to grant or revoke access",
      "Logs for security reviews",
      "Can include vehicle as well as people credentials",
      "Fits with existing CCTV at the same doors",
    ],
    implementation:
      "Implementation includes a door and gate schedule, reader types, network or controller placement, and training for the people who will issue cards or biometrics. Exact software SKUs are confirmed in the proposal.",
    amc:
      "AMC covers controller health, reader failures, software updates the client approves, and help when a credential stop working across many doors.",
    integrations: [
      "Biometric and face recognition readers",
      "RFID vehicle and people tags",
      "Flap barriers and gates",
      "ANPR watchlists where vehicle access is in scope",
    ],
    faqs: [
      {
        question: "Is ACMS the same as a key management system?",
        answer:
          "No. ACMS here means electronic access control. A physical key-management cabinet is not listed among current products, so it is not offered as a separate page.",
      },
      {
        question: "Can ACMS control vehicle gates as well as doors?",
        answer:
          "Yes, when the gate hardware (barrier, RFID, ANPR) is part of the same access design.",
      },
    ],
    related: ["rfid-access", "biometric-face-recognition", "cctv-installation"],
    image: "/Services/Surveillance/Products/ACMS.webp",
  },
  {
    slug: "vehicle-monitoring-system",
    name: "Vehicle Monitoring System",
    footerLabel: "Vehicle Monitoring System",
    navLabel: "Vehicle Monitoring",
    featuredInNav: true,
    title: "Vehicle Monitoring System in Delhi NCR",
    description:
      "Vehicle monitoring at gates using ANPR, boom barriers and RFID — not GPS fleet tracking. Designed for campuses, parking and secured facilities in Delhi NCR.",
    h1: "Vehicle Monitoring at Gates and Parking",
    intro:
      "Vehicle monitoring, as offered here, means knowing which vehicle is at the gate and whether it should be allowed in — using ANPR, boom barriers and RFID, not in-vehicle GPS trackers.",
    overview:
      "Trendwave Technologies builds this as a stack: a readable lane, a barrier, cameras, and a list of authorised plates or tags. Control rooms see events; security teams keep an audit. If a client needs GPS fleet tracking, that is a different category of product and is not described on this page.",
    applications: [
      "Corporate and industrial main gates",
      "Parking with registered-vehicle lists",
      "Campuses with mixed staff and visitor traffic",
      "Facilities that already run CCTV at the perimeter",
    ],
    benefits: [
      "Gate events tied to a plate or tag",
      "Less reliance on a guard remembering every vehicle",
      "Can reuse CCTV and barrier hardware already on site",
    ],
    implementation:
      "We start with how traffic actually arrives — one lane or two, peak hours, visitor process — then place ANPR, the barrier and any RFID readers so they work as one procedure. Visitor exceptions stay with the guard booth unless the client specifies otherwise.",
    amc:
      "Support is the same family as surveillance AMC: cameras, barriers, readers and the software that stores events.",
    integrations: [
      "ANPR",
      "Boom barriers",
      "RFID access",
      "ACMS permissions",
      "CCTV recording",
    ],
    faqs: [
      {
        question: "Is this GPS vehicle tracking?",
        answer:
          "No. It is gate and parking identification using cameras, barriers and RFID.",
      },
      {
        question: "Do we need all three of ANPR, barrier and RFID?",
        answer:
          "No. Many sites start with a barrier and CCTV, then add ANPR or RFID. The stack is sized to the site.",
      },
    ],
    related: ["anpr", "boom-barriers", "rfid-access"],
    image: "/Services/Surveillance/Products/ANPR.webp",
  },
  {
    slug: "spike-barriers",
    name: "Spike Barriers",
    footerLabel: "Spike Barriers",
    featuredInNav: false,
    title: "Spike Barriers in Delhi NCR",
    description:
      "Spike barrier installation for one-way and high-risk vehicle lanes in Delhi NCR, used with boom barriers and tyre killers where a directional stop is required.",
    h1: "Spike Barriers for Directional Vehicle Control",
    intro:
      "Spike barriers discourage vehicles from reversing or entering against the intended flow at a checkpoint.",
    overview:
      "The surveillance catalogue already lists spike barriers as a heavy-duty option for unauthorised vehicle movement. Trendwave Technologies supplies and installs them where a directional stop is part of the lane design, usually next to a boom barrier or guard post.",
    applications: [
      "Exit-only or entry-only lanes",
      "High-risk and restricted sites",
      "Industrial gates with a defined traffic direction",
    ],
    benefits: [
      "Enforces lane direction without a full road blocker",
      "Can sit in the same civil package as other vehicle hardware",
    ],
    implementation:
      "Surface or recessed mounting, drainage and a clear operating procedure are agreed before civil work. Exact spike type is specified in the project documents.",
    amc:
      "Checks cover spike condition, actuators and safe state during maintenance.",
    integrations: ["Boom barriers", "Tyre killers", "CCTV at the lane"],
    faqs: [
      {
        question: "How is a spike barrier different from a tyre killer?",
        answer:
          "Spike barriers are often used to enforce direction. Tyre killers are typically a hostile-vehicle stop. A designer may use either or both depending on the threat and traffic.",
      },
    ],
    related: ["tyre-killers", "boom-barriers", "road-blockers"],
    image: "/Services/Surveillance/Products/Spike Barrier.webp",
  },
  {
    slug: "road-blockers",
    name: "Road Blockers",
    footerLabel: "Road Blockers",
    featuredInNav: false,
    title: "Road Blockers in Delhi NCR",
    description:
      "Road blocker installation for anti-ram vehicle restriction at critical infrastructure and secured facilities in Delhi NCR.",
    h1: "Road Blockers for High-Level Vehicle Restriction",
    intro:
      "Road blockers are used where the site needs a rising wedge or similar stop against a ram-style vehicle attack.",
    overview:
      "Existing product copy describes road blockers for anti-ram protection at critical infrastructure. Trendwave Technologies supplies and installs these units as part of a perimeter package. Ratings and dimensions come from the selected product, not from generic claims on this page.",
    applications: [
      "Critical infrastructure",
      "High-security campuses",
      "Main approaches that must close completely",
    ],
    benefits: [
      "A full-width stop compared with a single bollard",
      "Can be grouped with CCTV and access control at the same approach",
    ],
    implementation:
      "Civil pits, power, control and road finish are the long pole. Commissioning includes raise/lower tests with the client’s security procedure.",
    amc: "Hydraulic or drive-unit checks, alignment and emergency operation tests.",
    integrations: ["Hydraulic bollards", "Tyre killers", "CCTV"],
    faqs: [
      {
        question: "When would you use a road blocker instead of bollards?",
        answer:
          "When the entry is a wide vehicle lane that must be closed as one unit. Bollards are often used where pedestrian flow around the vehicle path still matters.",
      },
    ],
    related: ["hydraulic-bollards", "tyre-killers", "boom-barriers"],
    image: "/Services/Surveillance/Products/Road Blocker.webp",
  },
  {
    slug: "flap-barriers",
    name: "Flap Barrier Systems",
    footerLabel: "Flap Barriers",
    featuredInNav: false,
    title: "Flap Barriers in Delhi NCR",
    description:
      "Flap barrier installation for pedestrian access in offices, metro-style entries and institutions in Delhi NCR, typically tied to ACMS credentials.",
    h1: "Flap Barriers for Pedestrian Access Control",
    intro:
      "Flap barriers manage people flow at a lobby or concourse while still requiring a valid credential to pass.",
    overview:
      "Trendwave Technologies installs flap barriers where pedestrian throughput and access control both matter. They are usually tied to cards, RFID or biometrics through ACMS rather than standing alone.",
    applications: [
      "Office lobbies",
      "Institutional buildings",
      "Sites that need paced pedestrian entry",
    ],
    benefits: [
      "Visible access control without a full-height turnstile look",
      "Works with the same credentials as door readers",
    ],
    implementation:
      "Lane count, disabled-access bypass and reader placement are agreed with facilities before installation.",
    amc: "Motor, flap and reader health plus cleaning guidance for high-traffic lanes.",
    integrations: ["ACMS", "RFID Access", "Biometric readers"],
    faqs: [
      {
        question: "Can visitors pass without a card?",
        answer:
          "Yes, if the reception process issues a temporary credential or a staff escort lane is defined. That process is designed with the client.",
      },
    ],
    related: ["acms", "biometric-face-recognition", "rfid-access"],
    image: "/Services/Surveillance/Products/Flap Barrier.webp",
  },
  {
    slug: "automatic-swing-gates",
    name: "Automatic Swing Gates",
    footerLabel: "Automatic Swing Gates",
    featuredInNav: false,
    title: "Automatic Swing Gates in Delhi NCR",
    description:
      "Automated swing gate installation for secure vehicle or pedestrian entries in Delhi NCR, with optional access-control integration.",
    h1: "Automatic Swing Gates",
    intro:
      "Motorised swing gates are used at entries where a hinged leaf is the right mechanical fit and the site wants controlled opening.",
    overview:
      "Trendwave Technologies installs automatic swing gates and can integrate them with access-control technologies listed elsewhere on the surveillance catalogue.",
    applications: [
      "Residential and campus vehicle gates",
      "Sites with enough swing clearance",
      "Entries that should lock to an access credential",
    ],
    benefits: [
      "Familiar gate form with motorised operation",
      "Can share credentials with ACMS or RFID",
    ],
    implementation:
      "Hinge loads, opening angle, safety edges and backup during power loss are part of the site design. Motor brands are named in quotations, not as a generic website spec.",
    amc: "Hinge, motor and safety-device checks on an agreed interval.",
    integrations: ["ACMS", "RFID", "CCTV"],
    faqs: [
      {
        question: "Swing gate or sliding gate?",
        answer:
          "Swing needs a clear arc. Sliding is often used for wide openings with limited swing space. We recommend based on the opening, not a single default.",
      },
    ],
    related: ["automatic-sliding-gates", "boom-barriers", "acms"],
    image: "/Services/Surveillance/Products/Swing door.webp",
  },
  {
    slug: "automatic-sliding-gates",
    name: "Automatic Sliding Gates",
    footerLabel: "Automatic Sliding Gates",
    featuredInNav: false,
    title: "Automatic Sliding Gates in Delhi NCR",
    description:
      "Motorised sliding gate installation for wide vehicle entries in Delhi NCR, with access-control and CCTV integration where required.",
    h1: "Automatic Sliding Gates",
    intro:
      "Sliding gates suit wide openings where a swing leaf would block a road or sidewalk.",
    overview:
      "Trendwave Technologies installs motorised sliding gates for reliable opening at wide entries, with safety and access-control options as specified on the existing product list.",
    applications: [
      "Industrial yards",
      "Wide campus roads",
      "Sites with limited swing clearance",
    ],
    benefits: [
      "Handles a wide clear opening",
      "Can be tied to the same access stack as barriers",
    ],
    implementation:
      "Track or cantilever type, motor sizing and safety photocells are selected after measuring the opening and usage.",
    amc: "Track, roller, motor and safety-device maintenance.",
    integrations: ["ACMS", "ANPR", "CCTV"],
    faqs: [
      {
        question: "Can a sliding gate replace a boom barrier?",
        answer:
          "They solve different problems. A sliding gate closes the property line; a boom barrier meters vehicles in a lane. Some sites use both.",
      },
    ],
    related: ["automatic-swing-gates", "boom-barriers", "anpr"],
    image: "/Services/Surveillance/Products/Slide door.webp",
  },
  {
    slug: "rfid-access",
    name: "RFID Access Solutions",
    footerLabel: "RFID Access Systems",
    featuredInNav: false,
    title: "RFID Access Systems in Delhi NCR",
    description:
      "RFID access for people and vehicles in Delhi NCR — contactless entry at doors, flap barriers and parking lanes, integrated with ACMS.",
    h1: "RFID Access for People and Vehicles",
    intro:
      "RFID gives a fast, contactless credential at a door or a vehicle lane so staff are not typing a PIN or waiting on a guard for every pass.",
    overview:
      "The surveillance catalogue lists RFID for vehicle or personnel access. Trendwave Technologies implements readers, tags and the ACMS rules behind them. It is not GPS tracking.",
    applications: [
      "Staff doors and turnstiles",
      "Resident or employee parking lanes",
      "Mixed pedestrian and vehicle campuses",
    ],
    benefits: [
      "Fast repeat entry for known users",
      "Works with boom barriers and flap barriers",
      "Credentials can be revoked centrally",
    ],
    implementation:
      "Reader range, tag type and where people actually present the tag are tested on site. Long-range vehicle RFID is a different placement from a wall reader.",
    amc: "Reader health, tag replacement process and ACMS connectivity.",
    integrations: ["ACMS", "Boom barriers", "Vehicle monitoring", "Flap barriers"],
    faqs: [
      {
        question: "RFID or ANPR for parking?",
        answer:
          "RFID is a credential the organisation issues. ANPR reads the plate. Many parking projects use one; some use both.",
      },
    ],
    related: ["acms", "vehicle-monitoring-system", "boom-barriers"],
    image: "/Services/Surveillance/Products/RFID.webp",
  },
  {
    slug: "biometric-face-recognition",
    name: "Biometric & Face Recognition Systems",
    footerLabel: "Biometric & Face Recognition Devices",
    featuredInNav: false,
    title: "Biometric and Face Recognition Access in Delhi NCR",
    description:
      "Biometric and face-recognition access for attendance and restricted rooms in Delhi NCR, implemented with ACMS rather than as a standalone gadget sale.",
    h1: "Biometric and Face Recognition Access",
    intro:
      "Biometric and face readers are used where a card can be shared and the site wants the credential tied to a person.",
    overview:
      "Trendwave Technologies installs biometric and facial recognition devices for authentication, attendance and restricted-area access, as already listed on the surveillance services page. Devices are connected into ACMS wherever central permissions are required.",
    applications: [
      "Attendance at offices and plants",
      "Server rooms and other restricted doors",
      "Lobbies that already use flap barriers",
    ],
    benefits: [
      "Harder to share than a card",
      "Can feed the same ACMS logs as other readers",
    ],
    implementation:
      "Lighting, mounting height and fallback for people who cannot enrol a biometric are part of the design. We do not claim a universal accuracy rate.",
    amc: "Device cleaning, firmware the client approves, and enrolment support.",
    integrations: ["ACMS", "Flap barriers", "CCTV at the same door"],
    faqs: [
      {
        question: "Is face recognition mandatory for every door?",
        answer:
          "No. Many sites keep cards or RFID on general doors and biometrics only on sensitive rooms.",
      },
    ],
    related: ["acms", "flap-barriers", "cctv-installation"],
    image: "/Services/Surveillance/Products/Biomatric.webp",
  },
];

export const surveillanceHubCards = [
  ...products.map((product) => ({
    title: product.name,
    description: product.intro,
    image: product.image,
    href: `/products/${product.slug}`,
  })),
  {
    title: "AMC & Maintenance Services",
    description:
      "Annual maintenance for surveillance and security deployments: checks, call-outs and support so installed systems keep running.",
    image: "/Services/Surveillance/Products/AMC Services.webp",
    href: "#contact",
  },
];

const productBySlug = new Map(products.map((product) => [product.slug, product]));

export function getProduct(slug: string) {
  return productBySlug.get(slug);
}

export function getRelatedProducts(slug: string) {
  const product = getProduct(slug);
  if (!product) return [];
  return product.related
    .map((relatedSlug) => getProduct(relatedSlug))
    .filter((item): item is ProductRecord => Boolean(item));
}

export const navProducts = products.filter((product) => product.featuredInNav);
