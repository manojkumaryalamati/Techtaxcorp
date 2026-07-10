import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { serviceGroups } from "@/lib/home-content";
import { fadeUp } from "./motion-variants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-slate-200 bg-white py-14 dark:border-white/5 dark:bg-brand-navy-deep sm:py-20 lg:py-[88px]"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
          <h2
            id="services-heading"
            className="text-[30px] font-bold tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-[44px]"
          >
            Complete software and digital services
          </h2>
          <p className="mt-3 text-base font-normal text-slate-600 dark:text-muted-foreground sm:mt-4 sm:text-lg">
            From product strategy to launch and ongoing support, TTCorp Solutions delivers complete
            digital solutions under one team.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {serviceGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col rounded-[16px] border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-orange-500/10 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                <group.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-[20px] font-semibold leading-snug text-brand-navy dark:text-white sm:text-[22px]">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-muted-foreground">
                {group.description}
              </p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-600 dark:text-muted-foreground sm:mt-12">
          Need a roadmap or estimate?{" "}
          <Link href="/contact" className="font-semibold text-orange-600 underline-offset-4 hover:underline dark:text-orange-400">
            Tell us what you want to ship
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
