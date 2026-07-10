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
    q: "What services does TTCorp Solutions provide?",
    a: "TTCorp Solutions provides custom web application development, Android and iOS app development, cross-platform mobile apps, business software and SaaS development, website design and development, UI/UX design, admin dashboards, workflow automation, digital marketing, and application maintenance and support.",
  },
  {
    q: "Do you build Android and iOS applications?",
    a: "Yes. We design and develop native-quality Android and iOS applications, as well as cross-platform apps, and support deployment to the Google Play Store and Apple App Store.",
  },
  {
    q: "Can you develop custom business software?",
    a: "Yes. We build custom web applications, admin dashboards, business portals, and workflow automation tailored to how your team actually operates—alongside products like VahanBooks, MySiteWorks, and OnePrime.",
  },
  {
    q: "Do you redesign existing websites and applications?",
    a: "Yes. We regularly redesign and modernize existing websites and applications, improving performance, usability, and visual design while preserving the workflows your business depends on.",
  },
  {
    q: "Do you provide digital marketing services?",
    a: "Yes. We support digital marketing, social media campaigns, SEO foundations, marketing creatives, and lead-generation setup alongside our development work.",
  },
  {
    q: "Can you deploy apps to the App Store and Play Store?",
    a: "Yes. We handle Apple App Store and Google Play Store submissions, including store listings, review requirements, and release management.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes. We provide ongoing application maintenance and support after launch, including monitoring, updates, and iterative improvements based on real usage.",
  },
  {
    q: "How can a business start a project?",
    a: "Use the contact page or email us to describe your project—we reply with next steps, a rough timeline, and what a sensible first milestone looks like.",
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
      className="scroll-mt-24 border-t border-slate-200 bg-white py-14 dark:border-white/5 dark:bg-brand-navy-deep sm:py-20 lg:py-[88px]"
      aria-labelledby="faq-heading"
    >
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeUp}>
          <h2 id="faq-heading" className="text-[30px] font-bold tracking-tight text-brand-navy dark:text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-base font-normal text-slate-600 dark:text-muted-foreground sm:text-lg">
            Clear answers about software development, mobile apps, websites, digital marketing,
            project timelines, and ongoing support.
          </p>
        </motion.div>

        <motion.div className="mt-10" {...fadeUp}>
          <Accordion type="single" collapsible className="w-full rounded-2xl border border-slate-200 bg-white px-2 shadow-sm dark:border-border/80 dark:bg-card/80 sm:px-4">
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

        <p className="mt-8 text-center text-sm text-slate-600 dark:text-muted-foreground">
          Ready to scope a project?{" "}
          <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
            Contact TTCorp Solutions
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
