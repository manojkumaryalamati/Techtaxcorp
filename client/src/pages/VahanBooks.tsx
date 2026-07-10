import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { useSEO } from "@/hooks/use-seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_ORIGIN } from "@/lib/seo-constants";
import { vahanbooksFeatures } from "@/lib/home-content";
import { ArrowRight, CheckCircle2, Truck } from "lucide-react";

const orgId = `${SITE_ORIGIN}/#organization`;

export default function VahanBooks() {
  useSEO({
    title: "VahanBooks by TTCorp Solutions | Transport Khata & Trip Management Software",
    description:
      "VahanBooks helps transport owners, brokers, and fleet operators manage trips, payments, khata, invoices, documents, and reports from one simple app—designed and developed by TTCorp Solutions.",
    canonicalPath: "/vahanbooks",
    keywords: ["VahanBooks", "TTCorp Solutions", "transport khata software", "trip management software", "truck fleet software India", "transport ledger", "fleet khata app"],
  });

  const softwareJsonLd = {
    "@type": "SoftwareApplication",
    name: "VahanBooks",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: "VahanBooks, designed and developed by TTCorp Solutions, helps transport businesses manage trips, payments, khata, invoices, and reports easily.",
    url: `${SITE_ORIGIN}/vahanbooks`,
    author: { "@type": "Organization", "@id": orgId },
    publisher: { "@type": "Organization", "@id": orgId },
    offers: { "@type": "Offer", availability: "https://schema.org/OnlineOnly", url: `${SITE_ORIGIN}/contact` },
  };

  const breadcrumbJsonLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "VahanBooks", item: `${SITE_ORIGIN}/vahanbooks` },
    ],
  };

  return (
    <Layout>
      <JsonLd data={[softwareJsonLd, breadcrumbJsonLd]} />
      <article>
        <PageHero
          id="vahanbooks-hero-heading"
          eyebrow="Transport software"
          title="VahanBooks by TTCorp Solutions"
          description={
            <>
              <span className="block text-orange-300">
                Simple transport khata and trip management for Indian truck businesses.
              </span>
              <span className="mt-3 block">
                VahanBooks, designed and developed by TTCorp Solutions, helps transport businesses manage trips,
                payments, khata, invoices, and reports easily—one practical app for owners, brokers, and fleet
                operators.
              </span>
            </>
          }
          actions={
            <>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full border-0 bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:from-orange-400 hover:to-orange-500"
              >
                <Link href="/contact?interest=vahanbooks">
                  Ask about VahanBooks <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
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

        <section className="py-12 sm:py-16" aria-labelledby="vahanbooks-capabilities-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="vahanbooks-capabilities-heading" className="font-serif text-2xl font-bold sm:text-3xl">What VahanBooks helps you run</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">Built for day-to-day transport workflows—clear enough for crews, structured enough for owners and brokers.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {vahanbooksFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border bg-card/80 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden />
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t bg-muted/15 py-12 sm:py-16" aria-labelledby="vahanbooks-why-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="vahanbooks-why-heading" className="font-serif text-2xl font-bold sm:text-3xl">Why teams choose VahanBooks</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card><CardContent className="p-6"><h3 className="font-semibold">Khata-first clarity</h3><p className="mt-2 text-sm text-muted-foreground">Party and supplier balances stay visible—so collections and follow-ups do not depend on scattered notebooks.</p></CardContent></Card>
              <Card><CardContent className="p-6"><h3 className="font-semibold">Trip operations in one flow</h3><p className="mt-2 text-sm text-muted-foreground">Trips, PODs, and documents stay attached to the job—reducing disputes and lost paperwork.</p></CardContent></Card>
              <Card><CardContent className="p-6"><h3 className="font-semibold">Built by TTCorp Solutions</h3><p className="mt-2 text-sm text-muted-foreground">Product ownership, roadmap, and engineering sit with one team—so improvements stay aligned with field reality.</p></CardContent></Card>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16" aria-labelledby="vahanbooks-cta-heading">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <Truck className="mx-auto h-10 w-10 text-orange-500" aria-hidden />
            <h2 id="vahanbooks-cta-heading" className="mt-4 font-serif text-2xl font-bold">See if VahanBooks fits your fleet or brokerage</h2>
            <p className="mt-3 text-muted-foreground">Tell us how you run trips and khata today—we will suggest a practical rollout and what to automate first.</p>
            <Button asChild size="lg" className="mt-6 rounded-full bg-orange-500 hover:bg-orange-600">
              <Link href="/contact?interest=vahanbooks">Contact TTCorp Solutions</Link>
            </Button>
          </div>
        </section>
      </article>
    </Layout>
  );
}
