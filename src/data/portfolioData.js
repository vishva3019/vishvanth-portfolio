export const personalInfo = {
  name: "Vishvanth",
  role: "Full-Stack Engineer & Security Researcher",
  institution: "Alliance University",
  degree: "B.Tech in Computer Science & Engineering",
  status: "Available for Summer 2026 Engineering Opportunities",
  location: "Bengaluru, Karnataka, India",
  email: "vishvanth193049@gmail.com",
  github: "https://github.com/vishva3019",
  linkedin: "https://www.linkedin.com/in/vishvanth",
  portfolio: "https://vishvanth-portfolio.vercel.app/",
  resumeUrl: "/resume.pdf",
  portraitUrl: "/images/profile.jpg",
  bio: {
    eyebrow: "COMPUTER SCIENCE · SOFTWARE · SECURITY",
    headline: "Building what comes next.",
    summary:
      "I build thoughtful digital experiences and intelligent solutions at the intersection of software engineering, cybersecurity, and AI. Focused on resilient architectures, real-world utility, and clean craft.",
    story: [
      "I am a Computer Science & Engineering undergraduate at Alliance University, Bangalore, driven by a deep curiosity about how distributed systems operate, scale, and withstand security threats.",
      "My work spans from mission-critical disaster response routing engines (RiskN-ResQ) and high-density municipal transit data processing (NammaRoute), to Gemini-powered multimodal campus utility platforms (CampusRetain 2.0).",
      "Beyond full-stack web and mobile engineering, I actively explore ethical hacking, networking protocols, and AI-driven automation—consistently validating concepts by competing in fast-paced hackathons and shipping production-grade software."
    ],
  },
  metrics: [
    { value: "04+", label: "Flagship Architectures", subtext: "Full-stack & mobile systems" },
    { value: "03rd", label: "Place — Team CODEX", subtext: "CodeVeda 2026 Hackathon" },
    { value: "Top 7%", label: "ANVATION 2026", subtext: "7th / 95 teams (ResilientUrban)" },
    { value: "9.9K+", label: "Transit Stops Grounded", subtext: "SQLite GTFS database" },
  ]
};

export const featuredProjects = [
  {
    id: "risknresq",
    number: "01",
    title: "RiskN-ResQ",
    subtitle: "Hyper-Local Disaster Early Warning & Resilient Routing Engine",
    category: "Geospatial Resilience · Mobile",
    description:
      "A mission-critical disaster response application engineered to provide hyper-local situational awareness during municipal emergencies (such as urban flooding in Bengaluru) through dynamic obstacle recalculation and community responder coordination.",
    highlights: [
      "Custom Dijkstra graph routing calculating safe corridors around dynamically flooded and blocked road segments.",
      "Circular hazard geofencing computing 4-tier risk classifications (LOW, MODERATE, HIGH, CRITICAL) in real time.",
      "100-point transparent volunteer-to-incident triage engine evaluating Haversine distance, urgency, and capability.",
      "Resilient device geolocation via Expo Location with deterministic fallback simulator for offline field operation."
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "react-native-maps",
      "expo-location",
      "Dijkstra Algorithm",
      "FastAPI"
    ],
    github: "https://github.com/vishva3019/RiskNResQ",
    demo: null,
    badge: "7th / 95 Teams · ANVATION 2026",
    color: "#60a5fa",
    accentGlow: "rgba(96, 165, 250, 0.25)",
    previewType: "map-network",
  },
  {
    id: "campusretain",
    number: "02",
    title: "CampusRetain 2.0",
    subtitle: "AI-Powered Multimodal Lost & Found University Ecosystem",
    category: "Artificial Intelligence · Web Platform",
    description:
      "A production-grade campus property recovery platform replacing chaotic lost-and-found registers with automated AI vision ingestion, semantic matching, and cryptographic session-verified ownership triage.",
    highlights: [
      "Multimodal Gemini vision analysis extracting brand, color, physical dimensions, and serial markings from user photos.",
      "Autonomous matching engine correlating lost query requests against active found catalog without human delays.",
      "Session-authenticated claim identity preventing email spoofing and fraudulent asset recovery.",
      "Optimized Neon PostgreSQL backend leveraging eager loading and grouped aggregation to eliminate N+1 latency."
    ],
    technologies: [
      "Python",
      "Flask",
      "Google Gemini AI",
      "PostgreSQL (Neon)",
      "SQLAlchemy",
      "JavaScript",
      "Tailwind CSS",
      "Vercel"
    ],
    github: "https://github.com/vishva3019/CAMPUS_RETAIN_2.0",
    demo: "https://campusretain.in",
    badge: "Live Production Platform",
    color: "#c084fc",
    accentGlow: "rgba(192, 132, 252, 0.25)",
    previewType: "ai-vision",
  },
  {
    id: "nammaroute",
    number: "03",
    title: "NammaRoute",
    subtitle: "Bengaluru BMTC Public Transit Gateway & GTFS Telemetry Engine",
    category: "Distributed Data · Civic Tech",
    description:
      "An authoritative municipal transit intelligence system indexing the complete Bangalore Metropolitan Transport Corporation (BMTC) public network to power accurate sequence-aware commuter journeys and conductor terminal operations.",
    highlights: [
      "Ingests 4,434 transit routes and 9,960 registered bus stops backed by an optimized 367 MB SQLite database.",
      "Official BMTC real-time telemetry feed parsing for exact vehicle positions and schedule adherence.",
      "Conductor & Crew ETM simulation generating physical thermal receipts with cryptographic HMAC verification codes.",
      "Contextual AI Transit Assistant interpreting natural-language transit routing and transfer queries."
    ],
    technologies: [
      "FastAPI",
      "Python",
      "Expo Web",
      "React Native",
      "SQLite",
      "GTFS Pipeline",
      "HMAC Cryptography"
    ],
    github: "https://github.com/vishva3019/namma-route",
    demo: null,
    badge: "4,434 BMTC Routes Grounded",
    color: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.25)",
    previewType: "transit-telemetry",
  },
  {
    id: "spendahead",
    number: "04",
    title: "SPENDAHEAD",
    subtitle: "Contextual AI Financial Decision-Support & Expenditure Forecaster",
    category: "Financial Technology · AI Modeling",
    description:
      "An intelligent expense evaluation architecture that acts as a cognitive financial firewall, analyzing whether an upcoming purchase fits the user's short-term liquidity, debt commitments, and predictive cash flow goals.",
    highlights: [
      "Real-time expense suitability evaluation assessing immediate liquidity risk before checkout.",
      "Predictive budgetary foresight highlighting downstream impact on recurring monthly liabilities.",
      "Explainable AI decision engine translating raw transaction graphs into actionable financial advice.",
      "Clean modular API architecture engineered for plug-and-play integration with digital wallets."
    ],
    technologies: [
      "React",
      "Node.js",
      "AI Decision Models",
      "RESTful API",
      "Tailwind CSS",
      "JavaScript"
    ],
    github: "https://github.com/vishva3019",
    demo: null,
    badge: "Predictive Decision Engine",
    color: "#e2d9c8",
    accentGlow: "rgba(226, 217, 200, 0.25)",
    previewType: "fintech-score",
  }
];

export const secondaryProjects = [
  {
    title: "Goflyp",
    category: "Campus Micro-Mobility",
    description: "Alliance University student bike sharing and live route telemetry mobile app built with Expo Router and custom geolocation dispatch.",
    technologies: ["React Native", "Expo", "TypeScript", "Maps", "Location Services"],
    github: "https://github.com/vishva3019/Goflyp"
  },
  {
    title: "ChitHub",
    category: "Fintech Platform",
    description: "Digital chit fund auction and member ledger platform featuring automated monthly bidding, transparent winner selection, and audited reports.",
    technologies: ["Python", "Flask", "SQL", "HTML5", "CSS3"],
    github: "https://github.com/vishva3019/Chithub"
  },
  {
    title: "Furniture Rental Dashboard",
    category: "E-Commerce & Logistics",
    description: "Modern furniture catalog and booking portal featuring product availability trackers, user authentication, and admin inventory control.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/vishva3019/furniture-rental-dashboard"
  },
  {
    title: "Robotic Grabber Mechanism",
    category: "Hardware & CAD Design",
    description: "Precision robotic end-effector modeled in Autodesk Fusion 360, engineered with Aluminum 6061 and ABS polymer tolerances.",
    technologies: ["Fusion 360", "Mechanical Engineering", "Aluminum 6061", "ABS 3D"],
    github: "https://github.com/vishva3019"
  }
];

export const skillCategories = [
  {
    name: "Programming Languages",
    domain: "Core Engineering",
    description: "Foundational and modern compiled/interpreted languages for systems, algorithms, and applications.",
    skills: [
      { name: "C", context: "Low-level memory management & system fundamentals" },
      { name: "C++", context: "Object-oriented architectures & algorithmic problem solving" },
      { name: "Java", context: "Enterprise OOP, data structures & concurrency" },
      { name: "Python", context: "FastAPI, Flask, data engineering & AI pipelines" },
      { name: "JavaScript (ES6+)", context: "Asynchronous runtime, DOM & cross-platform logic" },
      { name: "TypeScript", context: "Strict static typing, interfaces & large-scale apps" },
      { name: "SQL", context: "Complex relational queries, indexing & schema design" }
    ]
  },
  {
    name: "Frontend Development",
    domain: "User Interface & Experience",
    description: "Crafting fluid, high-performance web and native interfaces with modern component architectures.",
    skills: [
      { name: "React", context: "Component lifecycle, hooks, state machines & v19 patterns" },
      { name: "React Native", context: "Cross-platform mobile applications for iOS & Android" },
      { name: "Expo", context: "Managed workflows, native device modules & web builds" },
      { name: "HTML5 & Semantic Markup", context: "Accessible DOM structures & SEO best practices" },
      { name: "CSS3 & Modern Layouts", context: "Flexbox, CSS Grid, keyframes, transitions & variables" },
      { name: "Tailwind CSS", context: "Utility-first design systems & responsive utility tokens" },
      { name: "Motion & Animation", context: "Spring physics, scroll-linked triggers & micro-interactions" }
    ]
  },
  {
    name: "Backend & Systems",
    domain: "Server-side & Distributed Logic",
    description: "Building resilient RESTful services, telemetry pipelines, and computational engines.",
    skills: [
      { name: "FastAPI", context: "High-throughput asynchronous Python microservices" },
      { name: "Flask", context: "Lightweight WSGI applications, blueprints & authentication" },
      { name: "Node.js & Express", context: "Event-driven backends, middleware & REST APIs" },
      { name: "RESTful API Design", context: "Resource modeling, HTTP status semantics & contracts" },
      { name: "AI Integration", context: "Google Gemini multimodal APIs, vision parsing & prompting" }
    ]
  },
  {
    name: "Databases & Storage",
    domain: "Data Persistence",
    description: "Designing structured and document-oriented storage with query optimization.",
    skills: [
      { name: "PostgreSQL (Neon)", context: "Cloud-native serverless SQL, joins & relational integrity" },
      { name: "SQLite", context: "Embedded databases (360MB+ GTFS transit databases)" },
      { name: "MongoDB", context: "Document collections & flexible NoSQL schemas" },
      { name: "Firebase", context: "Real-time sync, auth & cloud Firestore" },
      { name: "SQLAlchemy", context: "Declarative ORM models, eager loading & migrations" }
    ]
  },
  {
    name: "Cybersecurity & Networks",
    domain: "Security & Infrastructure",
    description: "Practical security, offensive-defensive concepts, and networking protocols.",
    skills: [
      { name: "Ethical Hacking", context: "Vulnerability analysis, web attack vectors & threat models" },
      { name: "Kali Linux", context: "Penetration testing environment, tools & terminal workflows" },
      { name: "Networking (CCNA Concepts)", context: "OSI model, TCP/IP, subnetting, routing & packet flow" },
      { name: "API Security", context: "Session identity, HMAC validation, CORS & credential protection" },
      { name: "Cryptography Concepts", context: "Hashing algorithms, symmetric/asymmetric encryption & salts" }
    ]
  },
  {
    name: "Tools & Workflow",
    domain: "Developer Tooling",
    description: "Professional tools, version control, and CAD design software.",
    skills: [
      { name: "Git & GitHub", context: "Trunk-based workflow, branches, rebasing & PR reviews" },
      { name: "VS Code", context: "Modern IDE extensions, debugging & workspace automation" },
      { name: "Vercel", context: "Edge deployment, continuous integration & serverless functions" },
      { name: "Fusion 360", context: "3D CAD modeling, component tolerancing & mechanical design" },
      { name: "Jest & Automated Testing", context: "Unit tests, integration suites & regression testing" },
      { name: "Postman", context: "API endpoint verification, payloads & automated monitors" }
    ]
  }
];

export const achievements = [
  {
    id: "codeveda",
    year: "2026",
    date: "April 17, 2026",
    title: "Bronze Award (3rd Place) — Team CODEX",
    organization: "CodeVeda 2026 · Alliance University in collaboration with HackerRank",
    description:
      "Served as Team Leader of Team CODEX at CodeVeda 2026, leading the design and rapid development of an award-winning technical solution under rigorous competitive hackathon constraints. Award signed by Harishankaran K (Co-Founder & CTO, HackerRank) and Dr. Oswalt Manoj S (Faculty Co-ordinator).",
    badge: "Hackathon Bronze Award",
    certificateImage: "/certificates/Certificate_Vishvanth.jpg",
    certificateFile: "/certificates/Certificate_Vishvanth.jpg",
    type: "hackathon"
  },
  {
    id: "anvation",
    year: "2026",
    date: "2026",
    title: "7th Place out of 95 Teams — ANVATION 2026",
    organization: "ANVATION 2026 National Hackathon",
    description:
      "Engineered ResilientUrban (RiskNResQ) to finish in the top 7% nationally out of 95 competitive university teams, demonstrating live Dijkstra rerouting around flooded streets and explainable volunteer triage during municipal emergencies.",
    badge: "National Finalist (Top 7%)",
    certificateImage: null,
    certificateFile: null,
    type: "hackathon"
  },
  {
    id: "oracle-ai",
    year: "2026",
    date: "2026",
    title: "Oracle Certified Foundations Associate — Agentic AI",
    organization: "Oracle University",
    description:
      "Formal credential verifying foundational mastery of Agentic AI architectures, autonomous decision loops, multi-agent coordination, and enterprise AI orchestration.",
    badge: "Oracle Certified Associate",
    certificateImage: null,
    certificateFile: "/certificates/eCertificate_.pdf",
    type: "certification"
  },
  {
    id: "siemens-pm",
    year: "2026",
    date: "2026",
    title: "Project Manager Job Simulation",
    organization: "Siemens / Forage",
    description:
      "Completed virtual job simulation covering agile sprint planning, risk mitigation matrix, cross-functional stakeholder communication, and delivery verification for engineering initiatives.",
    badge: "Siemens Professional Simulation",
    certificateImage: null,
    certificateFile: "/certificates/SEIMENS_CERTIFICATE%20(1).pdf",
    type: "certification"
  },
  {
    id: "claude-workshop",
    year: "2026",
    date: "2026",
    title: "AI Tools & Claude Engineering Certification",
    organization: "Be10X",
    description:
      "Specialized training covering modern AI developer tools, automated workflows, LLM prompt engineering, and conversational UI integration.",
    badge: "Technical Workshop",
    certificateImage: null,
    certificateFile: "/certificates/Certificate.pdf",
    type: "certification"
  },
  {
    id: "hackerrank-orchestrate",
    year: "2025 - 2026",
    date: "Continuous",
    title: "HackerRank Orchestrate & Problem Solving Badges",
    organization: "HackerRank",
    description:
      "Verified problem-solving accolades and algorithmic proficiency badges across core computer science competencies, data structures, and procedural programming.",
    badge: "Competitive Coding",
    certificateImage: null,
    certificateFile: null,
    type: "honor"
  }
];

export const journeyTimeline = [
  {
    period: "2023 — Present",
    stage: "B.Tech in Computer Science & Engineering",
    institution: "Alliance University, Bengaluru",
    details:
      "Immersed in advanced computer science coursework: Data Structures, Analysis of Algorithms, Operating Systems, Database Systems, Computer Networks, and Cyber Security. Consistently applying theoretical concepts to live software platforms.",
    tag: "Academic Foundation"
  },
  {
    period: "2025 — 2026",
    stage: "Hackathon Competitor & Team Lead",
    institution: "CodeVeda · ANVATION · HackerRank",
    details:
      "Led Team CODEX to a 3rd-place podium finish at CodeVeda 2026 and propelled ResilientUrban to 7th place out of 95 teams at ANVATION 2026. Specialized in taking complex algorithmic ideas from whiteboard to functional deployment within 36 hours.",
    tag: "Competitive Engineering"
  },
  {
    period: "2025 — 2026",
    stage: "Civic & Campus Infrastructure Systems",
    institution: "Independent & Open Source Builds",
    details:
      "Architected and deployed CampusRetain 2.0 (Gemini AI lost & found platform) and the NammaRoute BMTC transit engine grounding over 9,900 bus stops and 4,400 routes with live telemetry pipelines.",
    tag: "Production Deployments"
  },
  {
    period: "Ongoing",
    stage: "Cybersecurity & Agentic AI Specialization",
    institution: "Autonomous Research & Certifications",
    details:
      "Earning industry certifications including Oracle Agentic AI Associate, studying CCNA networking concepts, practicing offensive/defensive methodologies in Kali Linux, and engineering intelligent software systems.",
    tag: "Active Focus"
  }
];
