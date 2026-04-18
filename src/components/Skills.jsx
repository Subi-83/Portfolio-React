import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function SkillBar({ name, level, index }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: index * 0.07 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-amber-400"
        />
      </div>
    </div>
  );
}

export default function Skills({ groups }) {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          subtitle="Grouped by how I contribute across web, backend, and mobile product delivery."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {groups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{group.description}</p>
              <div className="mt-6 space-y-4">
                {group.items.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
