import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ name, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => handleNavClick("home")}
          className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {name}
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-slate-600 transition hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-100"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-accent-100 dark:hover:text-accent-100"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
