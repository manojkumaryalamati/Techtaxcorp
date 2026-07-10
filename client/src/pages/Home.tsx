import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSEO } from "@/hooks/use-seo";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { industryItems, processSteps } from "@/lib/home-content";
import { Hero3D } from "@/components/home/Hero3D";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { ClientWork } from "@/components/home/ClientWork";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyTTCorpSolutions } from "@/components/home/WhyTTCorpSolutions";
import { TechnologySection } from "@/components/home/TechnologySection";
import { CTASection } from "@/components/home/CTASection";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { fadeUp } from "@/components/home/motion-variants";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (location !== "/") return;
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const t = window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(t);
  }, [location]);

  useSEO({
    title: "TTCorp Solutions | Software Products & Custom Application Development",
    description:
      "TTCorp Solutions builds mobile apps, web platforms, business software, websites, automation systems, and digital solutions—including VahanBooks, MySiteWorks, and OnePrime—for businesses in India and the United States.",
    canonicalPath: "/",
    keywords: [
      "TTCorp Solutions",
      "software development company",
      "custom web application development",
      "mobile app development company",
      "business software development",
      "SaaS product development",
      "VahanBooks",
      "MySiteWorks",
      "OnePrime",
    ],
  });

  return (
    <Layout>
      <Hero3D />
      <TrustStrip />
      <ProductShowcase />
      <ClientWork />
      <ServicesSection />
      <WhyTTCorpSolutions />

      <section
        id="industries"
        className="scroll-mt-24 border-b border-slate-200 bg-white py-14 dark:border-white/5 dark:bg-brand-navy sm:py-20 lg:py-[88px]"
        aria-labelledby="industries-heading"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2
              id="industries-heading"
              className="text-[30px] font-bold tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-[44px]"
            >
              Industries we understand
            </h2>
            <p className="mt-3 text-base font-normal text-slate-600 dark:text-muted-foreground sm:mt-4 sm:text-lg">
              Practical software for the industries we work with most—clear enough for global
              partners to understand.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {industryItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="h-full overflow-hidden border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.05]">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-3 text-base font-bold sm:text-lg text-brand-navy dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-muted-foreground sm:text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-14 dark:border-white/5 dark:bg-brand-navy-deep sm:py-20 lg:py-[88px]"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2
              id="process-heading"
              className="text-[30px] font-bold tracking-tight text-brand-navy dark:text-white sm:text-4xl lg:text-[44px]"
            >
              From idea to a production-ready product
            </h2>
            <p className="mt-3 text-base font-normal text-slate-600 dark:text-muted-foreground sm:mt-4 sm:text-lg">
              Short cycles, visible progress, and decisions you can trace—not a black box.
            </p>
          </motion.div>

          <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06] sm:p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white shadow-md shadow-orange-500/25">
                  {step.step}
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-snug sm:text-base text-brand-navy dark:text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-muted-foreground sm:text-sm">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <TechnologySection />
      <HomeFAQ />
      <CTASection />
    </Layout>
  );
}
