import { motion } from "framer-motion";

export default function Hero({ profile, info }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6">
      <div className="hero-grid absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 font-display text-sm uppercase tracking-[0.26em] text-accent-700 dark:text-accent-100">
            {info.role} | {info.location}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            {info.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {info.valueProposition}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={info.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent-600 hover:text-accent-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent-100 dark:hover:text-accent-100"
            >
              Explore Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-sm"
        >
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-amber-200/70 blur-2xl dark:bg-amber-400/30" />
          <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-cyan-200/70 blur-2xl dark:bg-cyan-400/30" />
          <img
            src={profile}
            alt="Portrait of Subitha K"
            className="relative w-full rounded-[2rem] border border-white/40 object-cover shadow-2xl dark:border-slate-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
