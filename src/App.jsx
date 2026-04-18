import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import EducationTimeline from "./components/EducationTimeline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {
    aboutSummary,
    chatbotProfile,
    contactCopy,
    educationTimeline,
    personalInfo,
    projects,
    skillGroups,
} from "./data/portfolioData";
import useTheme from "./hooks/useTheme";

const detailRows = [
  { label: "Current Focus", value: "Java + Flutter + React Development" },
  { label: "Degree", value: "M.Sc. Computer Science (In Progress)" },
  { label: "Based In", value: personalInfo.location },
  { label: "Open To", value: "Junior Java, Flutter, and Web Developer Roles" },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 transition-colors dark:from-slate-950 dark:via-slate-950 dark:to-ink-950 dark:text-white">
      <Navbar name={personalInfo.name} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero profile="/img/profile1.jpg" info={personalInfo} />
        <About copy={aboutSummary} detailRows={detailRows} />
        <EducationTimeline items={educationTimeline} />
        <Skills groups={skillGroups} />
        <Projects items={projects} />
        <Contact copy={contactCopy} info={personalInfo} />
      </main>
      <Footer name={personalInfo.name} socials={personalInfo.socials} />
      <Chatbot profile={chatbotProfile} info={personalInfo} projectItems={projects} />
    </div>
  );
}
