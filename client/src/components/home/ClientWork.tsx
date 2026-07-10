import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { clientCaseStudies } from "@/lib/home-content";
import { fadeUp } from "./motion-variants";

export function ClientWork() {
  return (
    <section
      id="client-work"
      className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-14 dark:border-white/5 dark:bg-brand-navy sm:py-20 lg:py-[88px]"
      aria-labelledby="client-work-heading"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
          <h2
            id="client-work-heading"
            className="text-[30px] font-bold tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-[44px]"
          >
            Selected client work
          </h2>
          <p className="mt-3 text-base font-normal text-slate-600 dark:text-muted-foreground sm:mt-4 sm:text-lg">
            Websites, business systems, and digital experiences designed and developed for growing
            companies.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-2">
          {clientCaseStudies.map((client, i) => (
            <motion.article
              key={client.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div
                className={`flex min-h-[180px] items-center justify-center p-8 ${
                  client.logo && client.logoBg === "dark"
                    ? "bg-gradient-to-br from-slate-900 to-black"
                    : "bg-gradient-to-br from-slate-100 to-slate-50 dark:from-white/[0.06] dark:to-white/[0.02]"
                }`}
                role="img"
                aria-label={`${client.name} logo`}
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-24 w-auto max-w-[200px] object-contain sm:max-h-28"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-3xl font-bold tracking-tight text-slate-300 dark:text-white/15 text-center">
                    {client.name}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <Badge variant="outline" className="w-fit rounded-md border-blue-500/30 text-blue-700 dark:text-blue-300">
                  {client.category}
                </Badge>
                <h3 className="mt-4 text-[20px] font-bold leading-snug text-brand-navy dark:text-white sm:text-[22px]">
                  {client.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-muted-foreground sm:text-base">
                  {client.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${client.name} technologies used`}>
                  {client.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge variant="secondary" className="rounded-full font-normal">
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="rounded-full"
                    disabled
                    data-testid={`button-view-project-${client.id}`}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
