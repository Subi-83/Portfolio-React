import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function EducationTimeline({ items }) {
  return (
    <section id="education" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Academic Path"
          title="Education Timeline"
          subtitle="A concise timeline of my academic progression and current specialization."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-slate-300 md:left-1/2 md:-translate-x-1/2 dark:bg-slate-700" />

          <div className="space-y-8 md:space-y-10">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: isEven ? -26 : 26, y: 18 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <div className={`${isEven ? "md:col-start-1" : "md:col-start-2"} pl-12 md:pl-0`}>
                    <div
                      className={`rounded-2xl border p-6 shadow-sm transition ${
                        item.isCurrent
                          ? "border-cyan-400 bg-cyan-50/70 shadow-glow dark:border-cyan-300 dark:bg-cyan-950/30"
                          : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-accent-700 dark:text-accent-100">
                        {item.year}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{item.institution}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>

                      {item.isCurrent && (
                        <span className="mt-4 inline-flex rounded-full border border-cyan-400 px-3 py-1 text-xs font-semibold text-cyan-700 dark:border-cyan-300 dark:text-cyan-100">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className="absolute left-5 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-accent-600 md:left-1/2 dark:border-slate-950"
                    aria-hidden="true"
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
