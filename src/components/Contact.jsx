import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact({ copy, info }) {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title={copy.heading} subtitle={copy.body} />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 md:grid-cols-3 md:p-10"
        >
          <a
            href={`mailto:${info.email}`}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-accent-500 dark:border-slate-700 dark:bg-slate-950/70"
          >
            <Mail className="mb-3 text-accent-700 dark:text-accent-100" size={20} />
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Email</p>
            <p className="mt-1 break-words text-sm font-semibold text-slate-800 dark:text-slate-100">{info.email}</p>
          </a>

          <a
            href={`tel:${info.phone.replace(/\s+/g, "")}`}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-accent-500 dark:border-slate-700 dark:bg-slate-950/70"
          >
            <Phone className="mb-3 text-accent-700 dark:text-accent-100" size={20} />
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Phone</p>
            <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">{info.phone}</p>
          </a>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950/70">
            <MapPin className="mb-3 text-accent-700 dark:text-accent-100" size={20} />
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Location</p>
            <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">{info.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
