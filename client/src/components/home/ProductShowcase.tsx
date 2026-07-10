import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mysiteworksFeatures, vahanbooksFeatures } from "@/lib/home-content";
import { fadeUp } from "./motion-variants";

export function ProductShowcase() {
  return (
    <section
      id="products"
      className="scroll-mt-24 border-b border-white/5 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20 dark:from-slate-950 dark:via-brand-navy dark:to-brand-navy-deep"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
          <h2
            id="products-heading"
            className="font-serif text-2xl font-bold tracking-tight text-brand-navy dark:text-white sm:text-3xl lg:text-4xl"
          >
            Flagship products
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
            VahanBooks and MySiteWorks are built for field teams—then we extend with custom software when you need a
            tailored fit.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-2">
          <motion.article id="vahanbooks" className="scroll-mt-24" {...fadeUp}>
            <Card className="group h-full overflow-hidden border-orange-500/20 bg-white/80 shadow-2xl shadow-orange-500/5 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/35 hover:shadow-orange-500/15 dark:border-orange-500/25 dark:bg-white/[0.07] dark:ring-white/10">
              <CardContent className="flex h-full flex-col p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-md bg-orange-500 text-white hover:bg-orange-500">Transport</Badge>
                  <Badge variant="outline" className="rounded-md border-orange-500/30 text-orange-700 dark:text-orange-300">
                    Khata &amp; trips
                  </Badge>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold sm:text-2xl lg:text-3xl">VahanBooks</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-orange-600 dark:text-orange-400">
                  VahanBooks by TTCorpSolutions — Simple transport khata and trip management for Indian truck businesses.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Trip and khata software for owners, brokers, and fleet operators. One app for trips, payments,
                  invoices, documents, and reports.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="VahanBooks features">
                  {vahanbooksFeatures.map((f) => (
                    <li key={f}>
                      <Badge variant="secondary" className="rounded-full font-normal">{f}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="outline" className="rounded-full" asChild>
                    <Link href="/vahanbooks">VahanBooks product page</Link>
                  </Button>
                  <Button className="rounded-full bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href="/contact?interest=vahanbooks">Ask about VahanBooks</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.article>

          <motion.article id="mysiteworks" className="scroll-mt-24" {...fadeUp}>
            <Card className="group h-full overflow-hidden border-sky-500/25 bg-white/80 shadow-2xl shadow-sky-500/10 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-sky-500/20 dark:border-sky-500/30 dark:bg-white/[0.07] dark:ring-white/10">
              <CardContent className="flex h-full flex-col p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-md bg-sky-600 text-white hover:bg-sky-600">Construction</Badge>
                  <Badge variant="outline" className="rounded-md border-sky-500/35 text-sky-800 dark:text-sky-300">
                    Site-first
                  </Badge>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold sm:text-2xl lg:text-3xl">MySiteWorks</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-sky-700 dark:text-sky-400">
                  MySiteWorks by TTCorpSolutions — Simple construction project management for modern builders.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Mobile-first construction software for owners, contractors, and crews—projects, expenses, progress,
                  documents, and payments in one flow.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="MySiteWorks features">
                  {mysiteworksFeatures.map((f) => (
                    <li key={f}>
                      <Badge variant="secondary" className="rounded-full font-normal">{f}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="outline" className="rounded-full" asChild>
                    <Link href="/mysiteworks">MySiteWorks product page</Link>
                  </Button>
                  <Button className="rounded-full bg-sky-600 text-white hover:bg-sky-500" asChild>
                    <Link href="/contact?interest=mysiteworks">Ask about MySiteWorks</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
