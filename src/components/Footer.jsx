export default function Footer({ name, socials }) {
  return (
    <footer className="border-t border-slate-200 px-4 py-10 sm:px-6 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {new Date().getFullYear()} {name}. Built with React and Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-600 transition hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
