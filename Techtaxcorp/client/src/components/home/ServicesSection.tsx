import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { serviceItems } from "@/lib/home-content";
import { fadeUp } from "./motion-variants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-white/5 bg-white py-14 sm:py-20 dark:bg-brand-navy-deep"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
          <h2
            id="services-heading"
            className="font-serif text-2xl font-bold tracking-tight text-brand-navy dark:text-white sm:text-3xl lg:text-4xl"
          >
            What TechTaxCorp builds
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
            From productized apps to bespoke software—design, build, launch, and iterate with one team. See the{" "}
            <Link href="/services" className="font-semibold text-orange-600 underline-offset-4 hover:underline dark:text-orange-400">
              full services overview
            </Link>{" "}
            for web apps, mobile, ledger software, SaaS, and more.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {serviceItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="h-full border-white/10 bg-gradient-to-b from-white to-slate-50/80 shadow-md ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:from-white/[0.07] dark:to-white/[0.03] dark:ring-white/10">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400 sm:h-11 sm:w-11">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold leading-snug sm:text-base">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground sm:mt-12">
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
