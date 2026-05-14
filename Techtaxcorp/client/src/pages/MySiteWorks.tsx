import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_ORIGIN } from "@/lib/seo-constants";
import { mysiteworksFeatures } from "@/lib/home-content";
import { ArrowRight, CheckCircle2, HardHat } from "lucide-react";

const orgId = `${SITE_ORIGIN}/#organization`;

export default function MySiteWorks() {
  useSEO({
    title: "MySiteWorks by TechTaxCorp | Construction Project Management Software",
    description:
      "MySiteWorks helps owners, contractors, and construction teams manage projects, expenses, progress, documents, payments, and reports in one place—designed and developed by TechTaxCorp.",
    canonicalPath: "/mysiteworks",
    keywords: [
      "MySiteWorks",
      "TechTaxCorp",
      "construction project management software",
      "construction expense tracking",
      "site management app",
      "builder software India",
    ],
  });

  const softwareJsonLd = {
    "@type": "SoftwareApplication",
    name: "MySiteWorks",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description:
      "MySiteWorks, designed and developed by TechTaxCorp, helps construction teams manage projects, expenses, progress, documents, and payments from one simple app.",
    url: `${SITE_ORIGIN}/mysiteworks`,
    author: { "@type": "Organization", "@id": orgId },
    publisher: { "@type": "Organization", "@id": orgId },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/OnlineOnly",
      url: `${SITE_ORIGIN}/contact`,
    },
  };

  const breadcrumbJsonLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "MySiteWorks", item: `${SITE_ORIGIN}/mysiteworks` },
    ],
  };

  return (
    <Layout>
      <JsonLd data={[softwareJsonLd, breadcrumbJsonLd]} />

      <article>
        <section className="border-b bg-muted/20 py-12 sm:py-16" aria-labelledby="mysiteworks-hero-heading">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge className="mb-4 rounded-md bg-sky-600 text-white">Construction software</Badge>
            <h1 id="mysiteworks-hero-heading" className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              MySiteWorks by TechTaxCorp
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sky-800 dark:text-sky-300">
              Simple construction project management for modern builders.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">
              MySiteWorks, designed and developed by TechTaxCorp, helps construction teams manage projects, expenses,
              progress, documents, and payments from one simple app.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-sky-600 hover:bg-sky-500">
                <Link href="/contact?interest=mysiteworks">
                  Ask about MySiteWorks
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/#products">Back to products overview</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16" aria-labelledby="mysiteworks-capabilities-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="mysiteworks-capabilities-heading" className="font-serif text-2xl font-bold sm:text-3xl">
              What MySiteWorks covers on site
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Mobile-first workflows for owners and crews—progress and costs stay visible without spreadsheet chaos.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {mysiteworksFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border bg-card/80 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" aria-hidden />
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t bg-muted/15 py-12 sm:py-16" aria-labelledby="mysiteworks-why-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="mysiteworks-why-heading" className="font-serif text-2xl font-bold sm:text-3xl">
              Why construction teams use MySiteWorks
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold">Site-first updates</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Progress photos, notes, and approvals stay tied to the project—so clients see a clear story, not
                    random chat threads.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold">Spend visibility</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Expenses and commitments stay organized by project—helping owners protect margin before invoices
                    pile up.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold">Designed and developed by TechTaxCorp</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    One accountable product team—from discovery to releases you can plan around.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16" aria-labelledby="mysiteworks-cta-heading">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <HardHat className="mx-auto h-10 w-10 text-sky-600" aria-hidden />
            <h2 id="mysiteworks-cta-heading" className="mt-4 font-serif text-2xl font-bold">
              Plan your next build on one system
            </h2>
            <p className="mt-3 text-muted-foreground">
              Share how you track projects today—we will map a simple rollout and what to digitize first.
            </p>
            <Button asChild size="lg" className="mt-6 rounded-full bg-sky-600 hover:bg-sky-500">
              <Link href="/contact?interest=mysiteworks">Contact TechTaxCorp</Link>
            </Button>
          </div>
        </section>
      </article>
    </Layout>
  );
}
