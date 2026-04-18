import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About({ copy, detailRows }) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Profile"
          title="About"
          subtitle="A concise overview of my background, strengths, and current direction."
        />

        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-base leading-relaxed text-slate-700 dark:text-slate-300"
          >
            {copy}
          </motion.p>

          <ul className="space-y-3 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950/70">
            {detailRows.map((row) => (
              <li key={row.label} className="flex flex-col gap-0.5 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0 dark:border-slate-800">
                <span className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{row.label}</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
