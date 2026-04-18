import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Projects({ items }) {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Each project reflects practical delivery, technical ownership, and product-focused execution."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent-400 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-accent-700 dark:text-accent-100">{project.subtitle}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-slate-100">Purpose:</span> {project.purpose}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-slate-100">Impact:</span> {project.impact}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
