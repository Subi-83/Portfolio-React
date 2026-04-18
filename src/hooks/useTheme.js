import { useEffect, useState } from "react";

const THEME_KEY = "portfolio-theme";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
