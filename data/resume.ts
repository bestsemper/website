export const personalInfo = {
  name: "John Kim",
  title: "Computer Science Student & Researcher",
  email: "futurekim07@gmail.com",
  github: "https://github.com/bestsemper",
  linkedin: "https://www.linkedin.com/in/john-kim-190a89334/",
};

export const about = {
  description: "Computer Science student at the University of Virginia and software engineer at N2O. I like building full-stack apps, working on AI research, and doing competitive math and programming.",
};

export const education = [
  {
    degree: "B.S. in Computer Science",
    school: "University of Virginia",
    location: "Charlottesville, VA",
    period: "August 2025 - May 2028",
    gpa: "4.0 / 4.0",
  },
  {
    degree: "Advanced Studies Diploma",
    school: "Thomas Jefferson High School for Science and Technology",
    location: "Alexandria, VA",
    period: "August 2021 - June 2025",
    gpa: "4.463 / 4.0",
    achievements: [
      "AP Computer Science A (5)",
      "AP Calculus BC (5)",
      "AP Physics (5 Mechanics, 5 E&M)",
      "AP Chemistry (5)",
    ],
    coursework: [
      "AI 1 & 2",
      "Machine Learning 1 & 2",
      "Web & Mobile App Development",
      "Multivariable Calculus",
      "Linear Algebra",
    ],
  },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "N2O (Deaver Varney LLC), Enterprise & Government Software Consultancy",
    location: "Remote",
    period: "May 2026 - Present",
    description: [
      "Developed a learning content platform to replace an enterprise client's commercial system (client under NDA)",
      "Owned client projects end-to-end (design, implementation, testing, and deployment), rotating to a new system every few weeks, working directly with the CTO on a small distributed engineering team",
      "Built and maintained internal tooling, including the company's time-tracking site and its internal data platform",
    ],
  },
  {
    title: "Researcher",
    company: "ML@UVA × Johns Hopkins APL",
    location: "University of Virginia, Charlottesville, VA",
    period: "September 2025 - Present",
    description: [
      "Researched agentic AI and human-aligned decision-making in LLM agents through the strategy game Diplomacy",
      "Designed benchmarks to evaluate LLM agent performance in multi-agent gameplay",
      "Applied steering vectors and prompting techniques to align agent behavior with distinct human playstyles",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "MySmaX (AIoT Startup), Seoul National University",
    location: "Seoul, South Korea",
    period: "June 2025 - August 2025",
    description: [
      "Designed and deployed an AI agent that automates IoT device workflows using Model Context Protocol (MCP)",
      "Applied machine learning-based anomaly detection to analyze real-time IoT device telemetry",
      "Built MySmaX's production website frontend in Next.js as primary contributor, implementing Figma designs",
    ],
  },
  {
    title: "Competitive Programming & Mathematics",
    company: "Clubs & Competitions",
    location: "Charlottesville, VA",
    period: "2021 - Present",
    description: [
      "USACO Gold Division",
      "American Invitational Mathematics Examination Qualifier (4x)",
      "Active member of the Putnam Club and ICPC Club at UVA; former TJ Varsity Math Team member",
      "Jane Street Estimathon Winner in 2024, 2025",
    ],
  },
];

export const projects = [
  {
    title: "Hide in Plain Sight!",
    description: "Solo-developed and shipped a cross-platform (PC, mobile, tablet) multiplayer hide-and-seek Roblox game.",
    technologies: ["Lua", "Roblox Studio", "Blender"],
    highlights: [
      "Engineered a wall- and ceiling-climbing character controller and a surface-camouflage paint system in Lua",
      "Modeled the game's 3D characters in Blender",
      "Reached the top 10,000 Roblox games within a month of release, with 72K+ visits and 150 peak concurrent players",
    ],
    link: "https://www.roblox.com/games/112146781421413/Hide-in-Plain-Sight",
    period: "June 2026 - Present",
  },
  {
    title: "Hoos' Plan",
    description: "A course planning site for UVA students to map out their semesters and check prerequisites, corequisites, and other enrollment restrictions.",
    technologies: ["TypeScript", "Next.js", "Python", "Prisma", "Tailwind CSS"],
    highlights: [
      "Built full-stack from scratch — database schema, REST API, and React frontend",
      "Scraped UVA's course catalog to build out prerequisite and corequisite graphs",
      "Checks enrollment restrictions in real-time as students plan their schedules",
    ],
    link: "https://hoosplan.com/",
    github: "https://github.com/bestsemper/hoos-plan",
  },
  {
    title: "ML@UVA Club Website",
    description: "Ongoing development and maintenance of ML@UVA's official organization website.",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Migrated the codebase from Vite to Next.js to secure API keys server-side",
      "Completely redesigned the UI across all pages",
      "Added and reorganized site pages and kept content up to date",
    ],
    link: "https://www.mlatuva.org/",
    github: "https://github.com/ML-UVA/website",
  },
  {
    title: "ModDuel Arena",
    description: "Hackathon project — a sandbox for evaluating whether AI agents become deceptive, manipulative, or engage in self-preservation behaviors when facing shutdown or replacement.",
    technologies: ["TypeScript", "Next.js", "Python", "FastAPI", "Tailwind CSS"],
    highlights: [
      "Built 13 test scenarios covering misalignment behaviors like self-preservation, prompt injection, role drift, and deceptive reasoning",
      "Tracked alignment scores, deception indicators, unsafe action rates, and shutdown interference across runs",
    ],
    link: "https://modduel.vercel.app/",
    github: "https://github.com/averyli1375/ModDuel",
  },
  {
    title: "Alpine Ski Racing AI Analysis Model",
    description: "Deep neural network using CNNs to provide ski racers with quantitative feedback from video analysis.",
    technologies: ["Python", "YOLO", "PyTorch", "CNNs"],
    highlights: [
      "Built a computer vision pipeline that extracts skiers' pose data from race videos to give technique feedback",
      "Validated the model against real races, showing technique scores correlated with finish times",
    ],
    github: "https://github.com/bestsemper/ski-racing-video-analysis",
    period: "August 2024 - May 2025",
  },
  {
    title: "Offline AI Model for North Korea",
    description: "Offline generative AI solution for securely distributing reliable information in North Korea.",
    technologies: ["Python", "LangChain", "HuggingFace", "Unsloth"],
    highlights: [
      "Researched secure ways for distributing reliable information in North Korea",
      "Developed an offline generative AI solution by fine-tuning existing LLMs",
      "Received a $7,500 grant from the Human Rights Foundation recognizing innovation and potential social impact",
    ],
    link: "https://nkdigitalfreedom.org",
    period: "June 2024 - May 2025",
  },
];

export const skillDefinitions = {
  "Python": "Primary language for AI/ML research and backend development.",
  "Java": "Object-oriented programming for scalable applications.",
  "C++": "High-performance computing and systems programming.",
  "JavaScript": "Core technology for interactive web development.",
  "Lua": "Lightweight scripting language used for Roblox game development.",
  "TypeScript": "Typed superset of JavaScript for robust application scale.",
  "HTML": "Standard markup language for web documents.",
  "CSS": "Style sheet language for web presentation.",
  "React": "A JavaScript library for building user interfaces.",
  "Next.js": "The React Framework for the Web.",
  "Django": "A high-level Python Web framework that encourages rapid development.",
  "FastAPI": "A modern web framework for building APIs with Python.",
  "Tailwind CSS": "A utility-first CSS framework for rapidly building custom designs.",
  "MCP": "Model Context Protocol that enables AI agents to access external tools and data.",
  "Git": "Distributed version control system.",
  "Docker": "Platform for developing, shipping, and running applications in containers.",
  "Linux Shell": "Command-line interface for interacting with the operating system.",
  "Jira": "Issue tracking and project management tool.",
  "Blender": "Open-source 3D modeling and animation software.",
  "Roblox Studio": "Development environment for building Roblox games.",
  "AWS": "Comprehensive cloud computing platform.",
  "PyTorch": "Open source machine learning framework.",
  "TensorFlow": "End-to-end open source platform for machine learning.",
  "pandas": "Data manipulation and analysis library for Python.",
  "LangChain": "Framework for developing applications powered by LLMs.",
  "HuggingFace": "Platform and community for open-source machine learning models.",
  "Agno": "Multi-agent framework for building private and secure AI products.",
  "Unsloth": "Optimized library for faster LLM fine-tuning.",
  "YOLO": "Real-time object detection system.",
  "CNNs": "Convolutional Neural Networks for visual imagery analysis.",
  "Prisma": "Next-generation ORM for Node.js and TypeScript.",
};

export const skills = {
  "Programming Languages": [
    { name: "Python", description: skillDefinitions["Python"] },
    { name: "Java", description: skillDefinitions["Java"] },
    { name: "C++", description: skillDefinitions["C++"] },
    { name: "JavaScript", description: skillDefinitions["JavaScript"] },
    { name: "TypeScript", description: skillDefinitions["TypeScript"] },
    { name: "Lua", description: skillDefinitions["Lua"] },
    { name: "HTML", description: skillDefinitions["HTML"] },
    { name: "CSS", description: skillDefinitions["CSS"] },
  ],
  "Frameworks": [
    { name: "React", description: skillDefinitions["React"] },
    { name: "Next.js", description: skillDefinitions["Next.js"] },
    { name: "Django", description: skillDefinitions["Django"] },
    { name: "Tailwind CSS", description: skillDefinitions["Tailwind CSS"] },
    { name: "MCP", description: skillDefinitions["MCP"] },
    { name: "FastAPI", description: skillDefinitions["FastAPI"] },
  ],
  "Developer Tools": [
    { name: "Git", description: skillDefinitions["Git"] },
    { name: "Docker", description: skillDefinitions["Docker"] },
    { name: "Linux Shell", description: skillDefinitions["Linux Shell"] },
    { name: "Blender", description: skillDefinitions["Blender"] },
    { name: "Jira", description: skillDefinitions["Jira"] },
    { name: "AWS", description: skillDefinitions["AWS"] },
  ],
  "AI & ML": [
    { name: "PyTorch", description: skillDefinitions["PyTorch"] },
    { name: "TensorFlow", description: skillDefinitions["TensorFlow"] },
    { name: "pandas", description: skillDefinitions["pandas"] },
    { name: "LangChain", description: skillDefinitions["LangChain"] },
    { name: "HuggingFace", description: skillDefinitions["HuggingFace"] },
    { name: "Agno", description: skillDefinitions["Agno"] },
    { name: "Unsloth", description: skillDefinitions["Unsloth"] },
  ],
};

export const languages = ["English (Native)", "Korean (Native)", "Latin (Advanced Prose & Poetry)"];

export const activities = [
  "ML@UVA Operations Officer",
  "Alpine ski racer",
  "Certified junior ski coach",
  "USACO Gold Division",
  "4x AIME Qualifier",
  "Putnam & ICPC Club member",
];
