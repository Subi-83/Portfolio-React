import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 font-display text-sm uppercase tracking-[0.25em] text-accent-600 dark:text-accent-100">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{subtitle}</p>
      )}
    </motion.div>
  );
}
