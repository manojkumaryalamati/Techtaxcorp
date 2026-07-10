import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyHighlights } from "@/lib/home-content";
import { fadeUp } from "./motion-variants";

export function WhyTTCorpSolutions() {
  return (
    <section
      className="border-y border-slate-200 bg-orange-50/40 py-14 dark:border-white/5 dark:bg-brand-navy-mid sm:py-20 lg:py-[88px]"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div {...fadeUp}>
            <h2
              id="why-heading"
              className="text-[30px] font-bold tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-[44px]"
            >
              Practical technology built around your business
            </h2>
            <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 dark:text-muted-foreground sm:mt-5 sm:text-lg">
              We design software around real users, workflows, approvals, documents, payments, and
              daily operations—not around unnecessary complexity.
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
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-white/10 dark:bg-white/[0.06] sm:p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500 dark:text-orange-400" aria-hidden />
                <span className="text-sm font-medium leading-snug text-brand-navy dark:text-foreground">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
