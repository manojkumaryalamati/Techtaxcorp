import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { softwareServiceSections } from "@/lib/services-seo-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_ORIGIN } from "@/lib/seo-constants";

const orgId = `${SITE_ORIGIN}/#organization`;

export default function Services() {
  useSEO({
    title: "TTCorp Solutions Services | Web Apps, Mobile Apps, Ledger & SaaS Development",
    description:
      "TTCorp Solutions provides custom web application development, mobile app development, ledger software, business software, website design, digital marketing support, and SaaS product development—plus accounting services.",
    canonicalPath: "/services",
    keywords: [
      "custom web application development",
      "mobile app development company",
      "ledger software development",
      "business software development",
      "SaaS product development",
      "website design and development",
      "digital marketing support",
      "TTCorp Solutions services",
    ],
  });

  const serviceSchemas = softwareServiceSections.map((s) => ({
    "@type": "Service",
    name: s.heading,
    description: s.intro,
    url: `${SITE_ORIGIN}/services#${s.id}`,
    provider: { "@type": "Organization", "@id": orgId },
    areaServed: { "@type": "Place", name: "Worldwide" },
  }));

  return (
    <Layout>
      <JsonLd data={serviceSchemas} />

      <PageHero
        id="services-hero-heading"
        eyebrow="Services"
        title={
          <>
            Business software, web &amp; mobile development from{" "}
            <span className="bg-gradient-to-r from-orange-400 to-sky-400 bg-clip-text text-transparent">
              TTCorp Solutions
            </span>
          </>
        }
        description="TTCorp Solutions designs and develops ledger software, SaaS products like VahanBooks and MySiteWorks, custom applications, and modern websites—then helps you ship improvements as usage grows. We also offer accounting and tax support for clients who need it."
        actions={
          <Button
            className="h-12 rounded-full border-0 bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:from-orange-400 hover:to-orange-500"
            size="lg"
            asChild
          >
            <Link href="/contact">
              Discuss your project
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        }
      />

      <section className="border-b py-12 sm:py-16" aria-label="Software development services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl font-serif text-xl font-semibold text-foreground sm:text-2xl">
            Software and application services
          </p>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Each engagement starts with how work really happens—then we design a focused system your team can adopt
            quickly. Explore the categories below and{" "}
            <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
              contact TTCorp Solutions
            </Link>{" "}
            for a roadmap and estimate.
          </p>

          <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {softwareServiceSections.map((s) => (
              <Card key={s.id} id={s.id} className="scroll-mt-24 border-border/60">
                <CardContent className="p-6">
                  <h2 className="font-serif text-lg font-bold">{s.heading}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
                  <ul className="mt-4 space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-label="Accounting and tax services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col rounded-2xl border border-border/60 bg-card p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-chart-2">
                <Calculator className="h-7 w-7 text-white" aria-hidden />
              </div>
              <h2 id="accounting-services-heading" className="mb-4 font-serif text-3xl font-bold">
                Accounting &amp; tax services
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                For clients who need it, TTCorp Solutions also provides bookkeeping, tax preparation, payroll support, and
                financial advisory—alongside your software initiatives.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Bookkeeping and monthly reconciliation",
                  "Tax preparation for individuals and businesses",
                  "Payroll processing and compliance support",
                  "Financial advisory for growth decisions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-chart-2" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild data-testid="button-explore-accounting">
                <Link href="/services/accounting">
                  Explore accounting services <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col rounded-2xl border border-border/60 bg-card p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                <Globe className="h-7 w-7 text-primary-foreground" aria-hidden />
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold">Website design &amp; development</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Fast, modern marketing sites and product pages built for SEO—with clear calls-to-action and
                layouts that convert.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Business and product websites",
                  "Landing pages for campaigns and demos",
                  "SEO-aware structure and content hierarchy",
                  "Responsive design across all devices",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild data-testid="button-explore-websites">
                <Link href="/services/websites">
                  Explore website services <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground sm:py-24" aria-labelledby="services-bundle-heading">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="services-bundle-heading" className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
            Bundle software delivery with marketing and accounting
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Many teams want a website refresh, a mobile app, and dependable books in the same season. Tell us what
            you are trying to ship—we will propose a sensible sequence and milestones.
          </p>
          <Button size="lg" variant="secondary" asChild data-testid="button-get-quote">
            <Link href="/contact">Get a custom quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
