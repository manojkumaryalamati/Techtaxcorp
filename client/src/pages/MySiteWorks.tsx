import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { useSEO } from "@/hooks/use-seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_ORIGIN } from "@/lib/seo-constants";
import { mysiteworksFeatures } from "@/lib/home-content";
import { ArrowRight, CheckCircle2, HardHat } from "lucide-react";

const orgId = `${SITE_ORIGIN}/#organization`;

export default function MySiteWorks() {
  useSEO({
    title: "MySiteWorks by TTCorp Solutions | Construction Project Management Software",
    description:
      "MySiteWorks helps owners, contractors, and construction teams manage projects, expenses, progress, documents, payments, and reports in one place—designed and developed by TTCorp Solutions.",
    canonicalPath: "/mysiteworks",
    keywords: ["MySiteWorks", "TTCorp Solutions", "construction project management software", "construction expense tracking", "site management app", "builder software India"],
  });

  const softwareJsonLd = {
    "@type": "SoftwareApplication",
    name: "MySiteWorks",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: "MySiteWorks, designed and developed by TTCorp Solutions, helps construction teams manage projects, expenses, progress, documents, and payments from one simple app.",
    url: `${SITE_ORIGIN}/mysiteworks`,
    author: { "@type": "Organization", "@id": orgId },
    publisher: { "@type": "Organization", "@id": orgId },
    offers: { "@type": "Offer", availability: "https://schema.org/OnlineOnly", url: `${SITE_ORIGIN}/contact` },
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
        <PageHero
          id="mysiteworks-hero-heading"
          eyebrow="Construction software"
          title="MySiteWorks by TTCorp Solutions"
          description={
            <>
              <span className="block text-sky-300">
                Simple construction project management for modern builders.
              </span>
              <span className="mt-3 block">
                MySiteWorks, designed and developed by TTCorp Solutions, helps construction teams manage projects,
                expenses, progress, documents, and payments from one simple app.
              </span>
            </>
          }
          actions={
            <>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full border-0 bg-gradient-to-r from-sky-500 to-sky-600 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:from-sky-400 hover:to-sky-500"
              >
                <Link href="/contact?interest=mysiteworks">
                  Ask about MySiteWorks <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border border-white/20 bg-white/[0.06] px-8 text-base text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/[0.11]"
              >
                <Link href="/#products">Back to products overview</Link>
              </Button>
            </>
          }
        />

        <section className="py-12 sm:py-16" aria-labelledby="mysiteworks-capabilities-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="mysiteworks-capabilities-heading" className="font-serif text-2xl font-bold sm:text-3xl">What MySiteWorks covers on site</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">Mobile-first workflows for owners and crews—progress and costs stay visible without spreadsheet chaos.</p>
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
            <h2 id="mysiteworks-why-heading" className="font-serif text-2xl font-bold sm:text-3xl">Why construction teams use MySiteWorks</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card><CardContent className="p-6"><h3 className="font-semibold">Site-first updates</h3><p className="mt-2 text-sm text-muted-foreground">Progress photos, notes, and approvals stay tied to the project—so clients see a clear story, not random chat threads.</p></CardContent></Card>
              <Card><CardContent className="p-6"><h3 className="font-semibold">Spend visibility</h3><p className="mt-2 text-sm text-muted-foreground">Expenses and commitments stay organized by project—helping owners protect margin before invoices pile up.</p></CardContent></Card>
              <Card><CardContent className="p-6"><h3 className="font-semibold">Designed and developed by TTCorp Solutions</h3><p className="mt-2 text-sm text-muted-foreground">One accountable product team—from discovery to releases you can plan around.</p></CardContent></Card>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16" aria-labelledby="mysiteworks-cta-heading">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <HardHat className="mx-auto h-10 w-10 text-sky-600" aria-hidden />
            <h2 id="mysiteworks-cta-heading" className="mt-4 font-serif text-2xl font-bold">Plan your next build on one system</h2>
            <p className="mt-3 text-muted-foreground">Share how you track projects today—we will map a simple rollout and what to digitize first.</p>
            <Button asChild size="lg" className="mt-6 rounded-full bg-sky-600 hover:bg-sky-500">
              <Link href="/contact?interest=mysiteworks">Contact TTCorp Solutions</Link>
            </Button>
          </div>
        </section>
      </article>
    </Layout>
  );
}
