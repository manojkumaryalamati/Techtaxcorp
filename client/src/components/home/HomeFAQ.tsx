import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_ORIGIN } from "@/lib/seo-constants";
import { fadeUp } from "./motion-variants";

const faqItems = [
  {
    q: "What does TTCorpSolutions do?",
    a: "TTCorpSolutions designs and develops ledger software, business applications, websites, mobile apps, and SaaS products—including VahanBooks for transport operations and MySiteWorks for construction teams.",
  },
  {
    q: "What is VahanBooks?",
    a: "VahanBooks is transport khata and trip management software designed and developed by TTCorpSolutions. It helps owners, brokers, and fleet operators manage trips, payments, khata, invoices, documents, and reports from one app.",
  },
  {
    q: "What is MySiteWorks?",
    a: "MySiteWorks is construction project management software designed and developed by TTCorpSolutions. It helps owners, contractors, and crews manage projects, expenses, progress, documents, payments, and reports in one place.",
  },
  {
    q: "Does TTCorpSolutions build custom software?",
    a: "Yes. TTCorpSolutions builds custom web applications, mobile apps, ledger software, business dashboards, admin portals, and integrations—alongside our own products when you need something tailored.",
  },
  {
    q: "Where is TTCorpSolutions based and how do I contact you?",
    a: "TTCorpSolutions works with teams remotely and ships software globally. Email techtaxcorp@gmail.com or use the contact page to describe your project—we reply with next steps and a sensible first milestone.",
  },
] as const;

export function HomeFAQ() {
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
    url: `${SITE_ORIGIN}/#faq`,
  };

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-white/5 bg-white py-14 sm:py-20 dark:bg-brand-navy-deep"
      aria-labelledby="faq-heading"
    >
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeUp}>
          <h2 id="faq-heading" className="font-serif text-2xl font-bold tracking-tight text-brand-navy dark:text-white sm:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            Straight answers about TTCorpSolutions products and custom development.
          </p>
        </motion.div>

        <motion.div className="mt-10" {...fadeUp}>
          <Accordion type="single" collapsible className="w-full rounded-2xl border border-border/80 bg-card/80 px-2 shadow-sm backdrop-blur-sm sm:px-4">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-sm font-semibold sm:text-base hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Ready to scope a project?{" "}
          <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
            Contact TTCorpSolutions
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
