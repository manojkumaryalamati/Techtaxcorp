import { motion } from "framer-motion";
import { trustStripItems } from "@/lib/home-content";
import { fadeUp } from "./motion-variants";

export function TrustStrip() {
  return (
    <section
      className="border-b border-slate-200 bg-slate-50 py-10 dark:border-white/5 dark:bg-brand-navy sm:py-14"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.p
          id="trust-heading"
          className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-muted-foreground"
          {...fadeUp}
        >
          Products and solutions built for real businesses
        </motion.p>
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        >
          {trustStripItems.map((name) => (
            <motion.span
              key={name}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
              data-testid={`trust-chip-${name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
