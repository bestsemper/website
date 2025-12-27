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
      "USACO Gold Division",
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
  "Programming Languages": [
    { name: "Python", description: "Primary language for AI/ML research and backend development." },
    { name: "Java", description: "Object-oriented programming for scalable applications." },
    { name: "C++", description: "High-performance computing and systems programming." },
    { name: "JavaScript", description: "Core technology for interactive web development." },
    { name: "TypeScript", description: "Typed superset of JavaScript for robust application scale." },
    { name: "HTML", description: "Standard markup language for web documents." },
    { name: "CSS", description: "Style sheet language for web presentation." },
  ],
  "Frameworks": [
    { name: "React", description: "A JavaScript library for building user interfaces." },
    { name: "Next.js", description: "The React Framework for the Web." },
    { name: "Django", description: "A high-level Python Web framework that encourages rapid development." },
    { name: "Tailwind CSS", description: "A utility-first CSS framework for rapidly building custom designs." },
    { name: "MCP", description: "Model Context Protocol for connecting AI models to data and tools." },
    { name: "FastAPI", description: "A modern, fast (high-performance), web framework for building APIs with Python." },
  ],
  "Developer Tools": [
    { name: "Git", description: "Distributed version control system." },
    { name: "Docker", description: "Platform for developing, shipping, and running applications in containers." },
    { name: "Linux Shell", description: "Command-line interface for interacting with the operating system." },
    { name: "Jira", description: "Issue tracking and project management tool." },
    { name: "AWS", description: "Comprehensive cloud computing platform." },
    { name: "CI/CD", description: "Continuous Integration and Continuous Delivery practices." },
  ],
  "ML/AI Libraries": [
    { name: "PyTorch", description: "Open source machine learning framework." },
    { name: "TensorFlow", description: "End-to-end open source platform for machine learning." },
    { name: "NumPy", description: "Fundamental package for scientific computing with Python." },
    { name: "pandas", description: "Data analysis and manipulation tool." },
    { name: "LangChain", description: "Framework for developing applications powered by language models." },
    { name: "Agno", description: "Multi-agent framework for building private and secure AI products." },
    { name: "Unsloth", description: "Optimized library for faster LLM fine-tuning." },
    { name: "YOLO", description: "Real-time object detection system." },
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
