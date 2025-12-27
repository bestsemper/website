export const personalInfo = {
  name: "John Kim",
  title: "Computer Science Student & Researcher",
  email: "futurekim07@gmail.com",
  github: "https://github.com/bestsemper",
  linkedin: "https://www.linkedin.com/in/john-kim-190a89334/",
};

export const about = {
  description: "Computer Science student at the University of Virginia with a passion for machine learning, AI research, and full-stack development. Currently researching human-aligned decision-making in LLM agents at ML@UVA in collaboration with Johns Hopkins APL.",
};

export const education = [
  {
    degree: "B.S. in Computer Science",
    school: "University of Virginia, School of Engineering and Applied Sciences",
    location: "Charlottesville, VA",
    period: "August 2025 - Present",
  },
  {
    degree: "Advanced Studies Diploma",
    school: "Thomas Jefferson High School for Science and Technology",
    location: "Alexandria, VA",
    period: "August 2021 - June 2025",
    gpa: "4.463/4.0",
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
      "Exploring the strategy game Diplomacy to study human-aligned decision-making in Large Language Model (LLM) agents",
      "Investigating methods for aligning AI decisions with human behavior distributions using fine-tuning techniques",
      "Experimenting with steering vectors and advanced prompting techniques to mimic distinct human playstyles",
      "Collaborating with Johns Hopkins Applied Physics Laboratory on cutting-edge AI alignment research",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "MySmaX Lab (AIoT Startup), Seoul National University",
    location: "Seoul, South Korea",
    period: "June 2025 - August 2025",
    description: [
      "Developed and deployed an AI Agent using Model Context Protocol (MCP) that automated key IoT workflows",
      "Served as a primary contributor to MySmaX's user-facing production web platform using Next.js",
      "Reduced manual configuration time for internal users and improved system responsiveness",
    ],
  },
  {
    title: "Competitive Programming & Mathematics",
    company: "Clubs & Competitions",
    location: "Charlottesville, VA",
    period: "2021 - Present",
    description: [
      "USACO Gold Division competitor",
      "American Invitational Mathematics Examination (AIME) Qualifier (4 times)",
      "Active member of the Putnam and ICPC Club at UVA",
      "Former member of TJ Varsity Math Team",
    ],
  },
];

export const projects = [
  {
    title: "Alpine Ski Racing AI Analysis Model",
    description: "Deep neural network using CNNs to provide ski racers with quantitative feedback from video analysis.",
    technologies: ["Python", "YOLO", "PyTorch", "CNNs", "Computer Vision"],
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
    technologies: ["Python", "LangChain", "HuggingFace", "Unsloth", "LLM Fine-tuning"],
    highlights: [
      "Developed offline AI solution by fine-tuning LLMs for edge devices",
      "Received $7,500 grant from Human Rights Foundation",
      "Optimized for resource-constrained hardware",
    ],
    period: "June 2024 - May 2025",
  },
  {
    title: "MySmaX Production Web Platform",
    description: "Production-ready web platform for AIoT startup at Seoul National University built with Next.js.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MCP"],
    highlights: [
      "Primary contributor to user-facing production platform",
      "Integrated AI Agent built with Model Context Protocol",
      "Reduced manual configuration time by 60%",
    ],
    period: "June 2025 - August 2025",
  },
  {
    title: "Diplomacy AI Agent Research",
    description: "Research project exploring human-aligned decision-making in the strategy game Diplomacy.",
    technologies: ["Python", "PyTorch", "LangChain", "OpenAI API"],
    highlights: [
      "Studying LLM agent decision-making alignment",
      "Experimenting with fine-tuning and steering vectors",
      "Collaborating with Johns Hopkins APL",
    ],
    period: "September 2025 - Present",
  },
];

export const skills = {
  "Programming Languages": ["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  "Frameworks": ["React", "Next.js", "Django", "Tailwind CSS", "MCP", "FastAPI"],
  "Developer Tools": ["Git", "Docker", "Linux Shell", "Jira", "AWS", "VS Code"],
  "ML/AI Libraries": ["PyTorch", "TensorFlow", "NumPy", "pandas", "LangChain", "HuggingFace", "Agno", "Unsloth", "YOLO"],
};

export const languages = ["English (Native)", "Korean (Native)", "Latin (Advanced Prose & Poetry)"];

export const activities = [
  "Alpine ski racer",
  "Certified junior ski coach",
  "USACO Gold Division",
  "4x AIME Qualifier",
  "Putnam & ICPC Club member",
];
