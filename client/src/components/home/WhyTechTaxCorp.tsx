import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyHighlights } from "@/lib/home-content";
import { fadeUp } from "./motion-variants";

export function WhyTechTaxCorp() {
  return (
    <section
      className="border-y border-white/5 bg-gradient-to-b from-slate-100/80 via-white to-slate-50 py-14 sm:py-20 dark:from-brand-navy-mid dark:via-brand-navy dark:to-brand-navy-deep"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div {...fadeUp}>
            <h2
              id="why-heading"
              className="font-serif text-2xl font-bold tracking-tight text-brand-navy dark:text-white sm:text-3xl lg:text-4xl"
            >
              Enterprise clarity without enterprise bloat
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
              Many teams still juggle WhatsApp threads, Excel sheets, and paper notes. TechTaxCorp builds focused
              ledger and operations software that brings daily work into one mobile-friendly system—trustworthy,
              fast, and easy to adopt.
            </p>
          </motion.div>
          <motion.ul
            className="grid gap-3 sm:grid-cols-2 sm:gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-48px" }}
            variants={{
              hidden: {},
              show: { opacity: 1, transition: { staggerChildren: 0.06 } },
            }}
          >
            {whyHighlights.map((text) => (
              <motion.li
                key={text}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/90 p-3.5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:ring-white/10 sm:p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500 dark:text-orange-400" aria-hidden />
                <span className="text-sm font-medium leading-snug text-foreground">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
