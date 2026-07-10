import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { productItems } from "@/lib/home-content";
import { fadeUp } from "./motion-variants";

const accentStyles = {
  orange: {
    border: "border-orange-500/20 hover:border-orange-500/40 dark:border-orange-500/25",
    badge: "bg-orange-500 text-white hover:bg-orange-500",
    outlineBadge: "border-orange-500/30 text-orange-700 dark:text-orange-300",
    button: "bg-orange-500 hover:bg-orange-600",
  },
  sky: {
    border: "border-sky-500/25 hover:border-sky-500/45 dark:border-sky-500/30",
    badge: "bg-sky-600 text-white hover:bg-sky-600",
    outlineBadge: "border-sky-500/35 text-sky-800 dark:text-sky-300",
    button: "bg-sky-600 hover:bg-sky-500",
  },
  violet: {
    border: "border-violet-500/25 hover:border-violet-500/45 dark:border-violet-500/30",
    badge: "bg-violet-600 text-white hover:bg-violet-600",
    outlineBadge: "border-violet-500/35 text-violet-800 dark:text-violet-300",
    button: "bg-violet-600 hover:bg-violet-500",
  },
} as const;

export function ProductShowcase() {
  return (
    <section
      id="products"
      className="scroll-mt-24 border-b border-slate-200 bg-white py-14 dark:border-white/5 dark:bg-brand-navy-deep sm:py-20 lg:py-[88px]"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
          <h2
            id="products-heading"
            className="text-[30px] font-bold tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-[44px]"
          >
            Software products built for real operations
          </h2>
          <p className="mt-3 text-base font-normal text-slate-600 dark:text-muted-foreground sm:mt-4 sm:text-lg">
            Our products simplify transport, construction, local services, business management, and
            everyday workflows.
          </p>
        </motion.div>

        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
          {productItems.map((product, i) => {
            const accent = accentStyles[product.accent];
            const imageFirst = i % 2 === 1;
            return (
              <motion.article
                key={product.id}
                id={product.id}
                className="scroll-mt-24"
                {...fadeUp}
              >
                <div
                  className={`grid overflow-hidden rounded-[18px] border bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)] dark:bg-white/[0.04] lg:grid-cols-2 ${accent.border}`}
                >
                  <div
                    className={`flex min-h-[220px] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50 p-8 dark:from-white/[0.06] dark:to-white/[0.02] ${
                      imageFirst ? "lg:order-2" : ""
                    }`}
                    role="img"
                    aria-label={`${product.name} product screenshot placeholder`}
                  >
                    <span className="text-6xl font-bold tracking-tight text-slate-300 dark:text-white/15">
                      {product.name}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-9">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={`rounded-md ${accent.badge}`}>{product.category}</Badge>
                      <div className="flex flex-wrap gap-1.5">
                        {product.platforms.map((platform) => (
                          <Badge
                            key={platform}
                            variant="outline"
                            className={`rounded-md text-xs font-medium ${accent.outlineBadge}`}
                          >
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <h3 className="mt-5 text-[22px] font-bold leading-tight text-brand-navy dark:text-white sm:text-[26px]">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-muted-foreground sm:text-base">
                      {product.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${product.name} features`}>
                      {product.features.map((f) => (
                        <li key={f}>
                          <Badge variant="secondary" className="rounded-full font-normal">
                            {f}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button className={`rounded-full text-white ${accent.button}`} asChild>
                        <Link href={product.href}>
                          View Product <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                        </Link>
                      </Button>
                      {product.caseStudyHref && (
                        <Button variant="outline" className="rounded-full" asChild>
                          <Link href={product.caseStudyHref}>View Case Study</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
