import { motion } from "framer-motion";
import { technologyItems } from "@/lib/home-content";
import { fadeUp } from "./motion-variants";

export function TechnologySection() {
  return (
    <section
      className="border-b border-slate-200 bg-white py-10 dark:border-white/5 dark:bg-brand-navy-deep sm:py-14"
      aria-labelledby="technology-heading"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.p
          id="technology-heading"
          className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-muted-foreground"
          {...fadeUp}
        >
          Technology built for modern products
        </motion.p>
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {technologyItems.map((tech) => (
            <motion.span
              key={tech}
              variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
              className="text-sm font-medium text-slate-500 dark:text-muted-foreground"
              data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
