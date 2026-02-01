import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { pricingPlans } from "@/lib/data";

export default function Pricing() {
  useSEO({
    title: "Pricing - Website & Accounting Packages",
    description: "Transparent pricing for website design and accounting services. Choose from Starter, Growth, and Pro packages for websites and Essential, Business, and Enterprise accounting plans.",
  });

  const webPlans = pricingPlans.filter((p) => p.category === "websites");
  const accPlans = pricingPlans.filter((p) => p.category === "accounting");

  return (
    <Layout>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Transparent, Fair Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. All plans include our commitment to quality and
              exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="websites" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="websites" data-testid="tab-websites">Web Design</TabsTrigger>
                <TabsTrigger value="accounting" data-testid="tab-accounting">Accounting</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="websites">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl font-bold mb-2">Website Packages</h2>
                <p className="text-muted-foreground">One-time investment in your online presence</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {webPlans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative ${plan.highlighted ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="font-serif text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-6">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                      <ul className="space-y-3 text-left">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        variant={plan.highlighted ? "default" : "outline"}
                        asChild
                        data-testid={`button-select-${plan.id}`}
                      >
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="accounting">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl font-bold mb-2">Accounting Packages</h2>
                <p className="text-muted-foreground">Monthly plans for ongoing financial support</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {accPlans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative ${plan.highlighted ? "border-chart-2 shadow-lg ring-2 ring-chart-2/20" : ""}`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-chart-2">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="font-serif text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-6">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                      <ul className="space-y-3 text-left">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-chart-2 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        variant={plan.highlighted ? "default" : "outline"}
                        asChild
                        data-testid={`button-select-${plan.id}`}
                      >
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every business is unique. If our standard packages don't quite fit your needs, we'll
              create a custom solution just for you. Contact us for a personalized quote.
            </p>
            <Button size="lg" asChild data-testid="button-custom-quote">
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="font-semibold">Do you offer payment plans?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! For website projects, we offer 50% upfront and 50% upon completion. Accounting
                services are billed monthly.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">What's included in the website price?</h3>
              <p className="text-sm text-muted-foreground">
                All packages include custom design, development, basic SEO, mobile optimization, and
                training on how to update your site.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Can I upgrade my plan later?</h3>
              <p className="text-sm text-muted-foreground">
                Absolutely! You can upgrade your accounting plan at any time. For websites, we can
                discuss adding features or services.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Is there a contract commitment?</h3>
              <p className="text-sm text-muted-foreground">
                Accounting services are month-to-month with no long-term commitment. Website projects
                have milestone-based agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Book a free consultation to discuss your project and get a detailed quote.
          </p>
          <Button size="lg" variant="secondary" asChild data-testid="button-book-consultation-pricing">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
