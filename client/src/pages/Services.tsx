import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import heroBg from "@/assets/images/hero-bg.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

export default function Services() {
  useSEO({
    title: "Our Services - Web Design & Accounting",
    description: "TechTaxCorp offers website design, development, bookkeeping, tax preparation, and financial consulting services for small businesses and individuals.",
  });

  return (
    <Layout>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Complete Business Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              From stunning websites to expert accounting, we provide the essential services your
              business needs to succeed in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary mb-6">
                <Globe className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="font-serif text-3xl font-bold mb-4">Web Design & Development</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your website is your digital storefront. We create beautiful, fast, and
                conversion-optimized websites that help your business stand out and attract customers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Business Websites - Professional sites for companies of all sizes",
                  "Personal Websites - Showcase your personal brand and expertise",
                  "Portfolio Sites - Display your work in a stunning gallery format",
                  "Landing Pages - High-converting pages for campaigns and offers",
                  "Website Maintenance - Keep your site secure and up-to-date",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild data-testid="button-explore-websites">
                <Link href="/services/websites">
                  Explore Web Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Custom Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Every website we create is custom-designed to match your brand and business goals.
                    No templates, no cookie-cutter solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Mobile-First Approach</h3>
                  <p className="text-sm text-muted-foreground">
                    Over 60% of web traffic comes from mobile devices. We ensure your site looks and
                    works perfectly on every screen size.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">SEO Optimized</h3>
                  <p className="text-sm text-muted-foreground">
                    We build websites that search engines love. Proper structure, fast loading, and
                    optimized content help you rank higher.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 grid gap-4">
              <Card className="border-chart-2/20 bg-chart-2/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Accurate Records</h3>
                  <p className="text-sm text-muted-foreground">
                    We maintain meticulous financial records so you always know where your business
                    stands financially.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-chart-2/20 bg-chart-2/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Tax Savings</h3>
                  <p className="text-sm text-muted-foreground">
                    Our tax professionals know the code inside and out. We find every legitimate
                    deduction to minimize your tax burden.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-chart-2/20 bg-chart-2/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Peace of Mind</h3>
                  <p className="text-sm text-muted-foreground">
                    Focus on running your business while we handle the numbers. Sleep easy knowing
                    your finances are in expert hands.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-chart-2 mb-6">
                <Calculator className="h-7 w-7 text-white" />
              </div>
              <h2 className="font-serif text-3xl font-bold mb-4">Accounting & Tax Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Keep your finances organized and compliant with our comprehensive accounting services.
                From daily bookkeeping to annual tax preparation, we've got you covered.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Bookkeeping - Monthly reconciliation and expense tracking",
                  "Tax Preparation - Personal and business tax filing",
                  "Business Accounting - Complete financial management",
                  "Payroll Services - Accurate, timely payroll processing",
                  "Financial Advisory - Strategic guidance for growth",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-chart-2 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild data-testid="button-explore-accounting">
                <Link href="/services/accounting">
                  Explore Accounting Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">
            Need Both Services?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Many of our clients use both our web design and accounting services. Bundle them together
            and save. Contact us for a custom package quote.
          </p>
          <Button size="lg" variant="secondary" asChild data-testid="button-get-quote">
            <Link href="/contact">Get a Custom Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
