export const personalInfo = {
  name: "Subitha K",
  role: "Junior Software Developer",
  location: "Sivakasi, Tamil Nadu, India",
  email: "subi83.k@gmail.com",
  phone: "+91 82701 30997",
  headline: "Building practical software across Java, Flutter, and modern web stacks.",
  valueProposition:
    "I design and ship clean, reliable applications with strong fundamentals in product thinking, UI quality, and maintainable code.",
  cvUrl: "/img/Resume.pdf",
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/subithak200583",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/subi_83?igsh=MTZnemY2d29nZm9wdA==",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/share/19VstEv85J/",
    },
  ],
};

export const aboutSummary =
  "I am a Computer Science graduate and current M.Sc. student focused on building software that is useful in real-world workflows. My experience spans Java applications, Flutter mobile products, and web interfaces, with a strong focus on usability, data flow, and clean architecture.";

export const skillGroups = [
  {
    title: "Frontend",
    description: "Creating responsive interfaces that feel fast, clear, and production-ready.",
    items: [
      { name: "React", level: 82 },
      { name: "JavaScript", level: 86 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend & Mobile",
    description: "Building application logic, APIs, and app experiences that scale with product needs.",
    items: [
      { name: "Java", level: 90 },
      { name: "Python", level: 84 },
      { name: "Flutter", level: 82 },
      { name: "Firebase / Supabase", level: 85 },
    ],
  },
  {
    title: "Tools & Engineering",
    description: "Using modern workflows for collaboration, quality, and delivery.",
    items: [
      { name: "Git & GitHub", level: 83 },
      { name: "REST APIs", level: 80 },
      { name: "Problem Solving", level: 88 },
      { name: "Team Delivery", level: 86 },
    ],
  },
];

export const projects = [
  {
    title: "Cart Blanche",
    subtitle: "Dual-App E-Commerce Platform",
    purpose:
      "Built a consumer app and an admin app to streamline browsing, order flow, and catalog operations in one product ecosystem.",
    description:
      "Implemented product browsing, role-based access, inventory updates, and data-driven screens to support both shoppers and admins.",
    stack: ["Flutter", "Supabase", "Authentication", "PostgreSQL"],
    impact:
      "Reduced admin effort by centralizing product control and created a smoother buying journey through a mobile-first interface.",
  },
  {
    title: "Question Generating AI",
    subtitle: "NLP Internship Project",
    purpose:
      "Developed an automated tool to generate MCQs and answer keys from input text for faster academic content preparation.",
    description:
      "Used NLP preprocessing and scoring logic to extract relevant prompts, format questions, and maintain answer consistency.",
    stack: ["Python", "NLP", "Text Processing"],
    impact:
      "Improved content creation speed and strengthened my ability to design algorithmic workflows for practical use cases.",
  },
  {
    title: "Tic Tac Toe",
    subtitle: "Cross-Platform Flutter App",
    purpose:
      "Created a compact game experience to practice state management, interaction feedback, and reusable widget design.",
    description:
      "Implemented turn logic, win-detection states, and responsive layouts optimized for both Android and iOS screens.",
    stack: ["Flutter", "Dart", "UI State Management"],
    impact:
      "Delivered a polished learning project that improved my confidence in building interactive mobile experiences end-to-end.",
  },
];

export const contactCopy = {
  heading: "Let us build something useful",
  body: "I am open to junior opportunities in Java, Flutter, and Web Development where I can contribute to real products, learn quickly, and deliver measurable improvements.",
};

export const educationTimeline = [
  {
    year: "2021-2022",
    title: "Higher Secondary School",
    institution: "S.H.N.V Matric Hr Sec School",
    description:
      "Completed higher secondary studies with strong focus on computer science and mathematics, building the foundation for problem solving and programming.",
    isCurrent: false,
  },
  {
    year: "2022-2025",
    title: "B.Sc Computer Science",
    institution: "Ayya Nadar Janaki Ammal College",
    description:
      "Built practical skills in software development, databases, and mobile application workflows through coursework and project implementation.",
    isCurrent: false,
  },
  {
    year: "2025-2027",
    title: "M.Sc Computer Science",
    institution: "Ayya Nadar Janaki Ammal College",
    description:
      "Currently specializing in advanced computing concepts and applied software engineering with focus on real-world product development.",
    isCurrent: true,
  },
];

export const chatbotProfile = {
  name: "Subitha K",
  role: "Java, Flutter, Web Developer",
  projects: ["Cart Blanche", "Tic Tac Toe", "Question Generator AI"],
  skills: ["Java", "Flutter", "Android", "Firebase", "Supabase", "JavaScript"],
};
