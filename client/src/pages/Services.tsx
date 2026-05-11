import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import heroBg from "@/assets/images/hero-bg-optimized.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { softwareServiceSections } from "@/lib/services-seo-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_ORIGIN } from "@/lib/seo-constants";

const orgId = `${SITE_ORIGIN}/#organization`;

export default function Services() {
  useSEO({
    title: "TechTaxCorp Services | Web Apps, Mobile Apps, Ledger & SaaS Development",
    description:
      "TechTaxCorp provides custom web application development, mobile app development, ledger software, business software, website design, digital marketing support, and SaaS product development—plus accounting services.",
    canonicalPath: "/services",
    keywords: [
      "custom web application development",
      "mobile app development company",
      "ledger software development",
      "business software development",
      "SaaS product development",
      "website design and development",
      "digital marketing support",
      "TechTaxCorp services",
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

      <section className="relative overflow-hidden py-16 sm:py-24" aria-labelledby="services-hero-heading">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Services
            </Badge>
            <h1 id="services-hero-heading" className="mb-6 font-serif text-4xl font-bold sm:text-5xl">
              Business software, web &amp; mobile development from TechTaxCorp
            </h1>
            <p className="text-lg text-muted-foreground">
              TechTaxCorp designs and develops ledger software, SaaS products like VahanBooks and MySiteWorks, custom
              applications, and modern websites—then helps you ship improvements as usage grows. We also offer
              accounting and tax support for clients who need it.
            </p>
            <Button className="mt-8 rounded-full" size="lg" asChild>
              <Link href="/contact">
                Discuss your project
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b py-12 sm:py-16" aria-label="Software development services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl font-serif text-xl font-semibold text-foreground sm:text-2xl">
            Software and application services
          </p>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Each engagement starts with how work really happens—then we design a focused system your team can adopt
            quickly. Explore the categories below and{" "}
            <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
              contact TechTaxCorp
            </Link>{" "}
            for a roadmap and estimate.
          </p>

          <div className="mt-12 space-y-16">
            {softwareServiceSections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28" aria-labelledby={`${s.id}-heading`}>
                <h2 id={`${s.id}-heading`} className="font-serif text-xl font-bold sm:text-2xl">
                  {s.heading}
                </h2>
                <p className="mt-3 max-w-3xl text-muted-foreground">{s.intro}</p>
                <ul className="mt-6 space-y-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
                    Request a consult for {s.heading.toLowerCase()}
                  </Link>
                  .
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="website-services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                <Globe className="h-7 w-7 text-primary-foreground" aria-hidden />
              </div>
              <h2 id="website-services-heading" className="mb-4 font-serif text-3xl font-bold">
                Website projects &amp; ongoing care
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                From marketing sites to landing pages, we build fast, accessible pages with SEO-friendly structure—so
                your software story is easy to understand and share.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Business websites for companies and product brands",
                  "Landing pages for campaigns and launch moments",
                  "Performance, accessibility, and metadata hygiene",
                  "Maintenance options to keep content and dependencies current",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild data-testid="button-explore-websites">
                <Link href="/services/websites">
                  Explore web services <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Custom design &amp; build</h3>
                  <p className="text-sm text-muted-foreground">
                    Layouts and components aligned to your brand—without bloated templates that fight your content.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Mobile-first delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Most buyers check you on a phone first. We validate breakpoints and touch targets early.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-accent/30 py-16 sm:py-24" aria-labelledby="accounting-services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 grid gap-4 lg:order-1">
              <Card className="border-chart-2/20 bg-chart-2/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Accurate records</h3>
                  <p className="text-sm text-muted-foreground">
                    Meticulous bookkeeping so you always know where your business stands financially.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-chart-2/20 bg-chart-2/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Tax preparation support</h3>
                  <p className="text-sm text-muted-foreground">
                    Personal and business tax filing with a practical, compliance-minded approach.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-chart-2">
                <Calculator className="h-7 w-7 text-white" aria-hidden />
              </div>
              <h2 id="accounting-services-heading" className="mb-4 font-serif text-3xl font-bold">
                Accounting &amp; tax services
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                For clients who need it, TechTaxCorp also provides bookkeeping, tax preparation, payroll support, and
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
