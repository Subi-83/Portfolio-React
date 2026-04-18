/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#ecfeff",
          100: "#cffafe",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
        },
        ink: {
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "sans-serif"],
        body: ["IBM Plex Sans", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(6, 182, 212, 0.22), 0 12px 42px rgba(14, 116, 144, 0.24)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 10% 0%, rgba(6,182,212,0.18), transparent 30%), radial-gradient(circle at 90% 20%, rgba(245,158,11,0.2), transparent 35%), radial-gradient(circle at 55% 100%, rgba(14,116,144,0.18), transparent 30%)",
      },
    },
  },
  plugins: [],
};
