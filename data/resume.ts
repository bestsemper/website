export const personalInfo = {
  name: "John Kim",
  title: "Computer Science Student & Researcher",
  email: "futurekim07@gmail.com",
  github: "https://github.com/bestsemper",
  linkedin: "https://www.linkedin.com/in/john-kim-190a89334/",
};

export const about = {
  description: "I am a researcher and developer driven by the challenge of aligning artificial intelligence with human values. At ML@UVA, I collaborate with Johns Hopkins APL to study decision-making in LLM agents, exploring how we can make AI systems more reliable and interpretable. Beyond research, I enjoy building practical full-stack applications and solving challenging math & cs problems.",
};

export const education = [
  {
    degree: "B.S. in Computer Science",
    school: "University of Virginia",
    location: "Charlottesville, VA",
    period: "August 2025 - Present",
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
    title: "ML Researcher",
    company: "ML@UVA × Johns Hopkins APL",
    location: "University of Virginia, Charlottesville, VA",
    period: "September 2025 - Present",
    description: [
      "Explored the strategy game Diplomacy to study human-aligned decision-making in LLM agents",
      "Investigated methods for aligning AI decisions with human behavior distributions using fine-tuning",
      "Experimented with steering vectors and prompting techniques to mimic distinct human playstyles",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "MySmaX Lab (AIoT Startup), Seoul National University",
    location: "Seoul, South Korea",
    period: "June 2025 - August 2025",
    description: [
      "Built and deployed an AI agent for automating IoT workflows using Model Context Protocol (MCP)",
      "Applied machine learning–based anomaly detection to analyze IoT device data",
      "Served as a primary contributor to MySmaX’s user-facing production website using Next.js",
    ],
  },
  {
    title: "Competitive Programming & Mathematics",
    company: "Clubs & Competitions",
    location: "Charlottesville, VA",
    period: "2021 - Present",
    description: [
      "USACO Gold Division",
      "American Invitational Mathematics Examination (AIME) Qualifier (4 times)",
      "Member of the Putnam and ICPC Club at UVA",
      "Former member of TJ Varsity Math Team",
    ],
  },
];

export const projects = [
  {
    title: "Alpine Ski Racing AI Analysis Model",
    description: "Deep neural network using CNNs to provide ski racers with quantitative feedback from video analysis.",
    technologies: ["Python", "YOLO", "PyTorch", "CNNs"],
    highlights: [
      "Built a deep neural network using CNNs to analyze ski racing technique",
      "Used YOLO for pose extraction and frame-by-frame analysis",
      "Achieved reliable results aligning with real race performances",
    ],
    github: "https://github.com/bestsemper/ski-racing-video-analysis",
    period: "August 2024 - May 2025",
  },
  {
    title: "Offline AI Model for North Korea",
    description: "Offline generative AI solution for distributing reliable information in North Korea. Received $7,500 grant from Human Rights Foundation.",
    technologies: ["Python", "LangChain", "HuggingFace", "Unsloth"],
    highlights: [
      "Developed offline AI solution by fine-tuning LLMs for edge devices",
      "Received $7,500 grant from Human Rights Foundation",
      "Optimized for resource-constrained hardware",
    ],
    period: "June 2024 - May 2025",
  },
];

export const skillDefinitions = {
  "Python": "Primary language for AI/ML research and backend development.",
  "Java": "Object-oriented programming for scalable applications.",
  "C++": "High-performance computing and systems programming.",
  "JavaScript": "Core technology for interactive web development.",
  "TypeScript": "Typed superset of JavaScript for robust application scale.",
  "HTML": "Standard markup language for web documents.",
  "CSS": "Style sheet language for web presentation.",
  "React": "A JavaScript library for building user interfaces.",
  "Next.js": "The React Framework for the Web.",
  "Django": "A high-level Python Web framework that encourages rapid development.",
  "FastAPI": "A modern web framework for building APIs with Python.",
  "Tailwind CSS": "A utility-first CSS framework for rapidly building custom designs.",
  "Git": "Distributed version control system.",
  "Docker": "Platform for developing, shipping, and running applications in containers.",
  "Linux Shell": "Command-line interface for interacting with the operating system.",
  "Jira": "Issue tracking and project management tool.",
  "AWS": "Comprehensive cloud computing platform.",
  "CI/CD": "Automating build, test, and deployment pipelines.",
  "PyTorch": "Open source machine learning framework.",
  "TensorFlow": "End-to-end open source platform for machine learning.",
  "LangChain": "Framework for developing applications powered by LLMs.",
  "Agno": "Multi-agent framework for building private and secure AI products.",
  "MCP": "Model Context Protocol that enables AI agents to access external tools and data.",
  "Unsloth": "Optimized library for faster LLM fine-tuning.",
  "YOLO": "Real-time object detection system.",
  "CNNs": "Convolutional Neural Networks for visual imagery analysis.",
  "HuggingFace": "Platform and community for open-source machine learning models.",
};

export const skills = {
  "Programming Languages": [
    { name: "Python", description: skillDefinitions["Python"] },
    { name: "Java", description: skillDefinitions["Java"] },
    { name: "C++", description: skillDefinitions["C++"] },
    { name: "JavaScript", description: skillDefinitions["JavaScript"] },
    { name: "TypeScript", description: skillDefinitions["TypeScript"] },
    { name: "HTML", description: skillDefinitions["HTML"] },
    { name: "CSS", description: skillDefinitions["CSS"] },
  ],
  "Web Development": [
    { name: "React", description: skillDefinitions["React"] },
    { name: "Next.js", description: skillDefinitions["Next.js"] },
    { name: "Django", description: skillDefinitions["Django"] },
    { name: "FastAPI", description: skillDefinitions["FastAPI"] },
    { name: "Tailwind CSS", description: skillDefinitions["Tailwind CSS"] },
  ],
  "Developer Tools": [
    { name: "Git", description: skillDefinitions["Git"] },
    { name: "Docker", description: skillDefinitions["Docker"] },
    { name: "Linux Shell", description: skillDefinitions["Linux Shell"] },
    { name: "Jira", description: skillDefinitions["Jira"] },
    { name: "AWS", description: skillDefinitions["AWS"] },
    { name: "CI/CD", description: skillDefinitions["CI/CD"] },
  ],
  "AI & ML": [
    { name: "PyTorch", description: skillDefinitions["PyTorch"] },
    { name: "TensorFlow", description: skillDefinitions["TensorFlow"] },
    { name: "LangChain", description: skillDefinitions["LangChain"] },
    { name: "Agno", description: skillDefinitions["Agno"] },
    { name: "MCP", description: skillDefinitions["MCP"] },
    { name: "Unsloth", description: skillDefinitions["Unsloth"] },
    { name: "YOLO", description: skillDefinitions["YOLO"] },
  ],
};

export const languages = ["English (Native)", "Korean (Native)", "Latin (Advanced Prose & Poetry)"];

export const activities = [
  "Alpine ski racer",
  "Certified junior ski coach",
  "USACO Gold Division",
  "4x AIME Qualifier",
  "Putnam & ICPC Club member",
];
