import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import heroBg from "@/assets/images/hero-bg-optimized.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Globe,
  Calculator,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Award,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { faqs } from "@/lib/data";

const trustBadges = [
  { icon: Shield, text: "Secure & Confidential" },
  { icon: Clock, text: "Fast Turnaround" },
  { icon: Zap, text: "Expert Team" },
  { icon: Award, text: "5-Star Reviews" },
];

export default function Home() {
  useSEO({
    title: "Professional Website Design & Accounting Services",
    description: "TechTaxCorp offers professional website design, development, and accounting services for small businesses and individuals. Expert bookkeeping, tax preparation, and custom web solutions.",
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
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-1.5" data-testid="badge-hero">
                Trusted by Small Businesses Nationwide
              </Badge>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Website Design <span className="text-primary">&</span> Accounting{" "}
                <span className="text-primary">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Your one-stop partner for professional website creation and comprehensive accounting
                services. We help small businesses and individuals succeed online and stay financially
                organized.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild data-testid="button-hero-get-started">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-hero-view-services">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                {trustBadges.map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <badge.icon className="h-4 w-4 text-primary" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-1">
                <div className="rounded-xl bg-card p-6 sm:p-8">
                  <div className="grid gap-4">
                    <Card className="border-primary/20 bg-primary/5">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                          <Globe className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Website Design</h3>
                          <p className="text-sm text-muted-foreground">Beautiful, conversion-focused websites</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-chart-2/20 bg-chart-2/5">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2">
                          <Calculator className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Accounting & Tax</h3>
                          <p className="text-sm text-muted-foreground">Expert financial services</p>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                      <CheckCircle2 className="h-4 w-4 text-chart-2" />
                      <span>Free consultation available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Two Pillars of Business Success</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expert web design with professional accounting to give your business the
              complete foundation it needs to thrive.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="group hover-elevate">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary mb-6">
                  <Globe className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Web Design & Development</h3>
                <p className="text-muted-foreground mb-6">
                  Stand out online with a professionally designed website. From business sites to
                  portfolios, we create digital experiences that convert visitors into customers.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Business Websites", "Personal Sites", "Portfolio Design", "Landing Pages", "Website Maintenance"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full" data-testid="button-learn-websites">
                  <Link href="/services/websites">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover-elevate">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-chart-2 mb-6">
                  <Calculator className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Accounting & Tax Services</h3>
                <p className="text-muted-foreground mb-6">
                  Keep your finances in order with our comprehensive accounting services. From
                  bookkeeping to tax preparation, we've got you covered.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Bookkeeping", "Tax Preparation", "Payroll Support", "Financial Consulting", "Business Advisory"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-chart-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full" data-testid="button-learn-accounting">
                  <Link href="/services/accounting">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Free Offer</Badge>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Get a Free Website Audit</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Not sure if your current website is performing well? Let us analyze it for free and
              provide actionable recommendations.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold mb-2">Free Website Audit</h3>
              <p className="text-muted-foreground mb-6">
                We'll review your website's design, performance, SEO, and conversion potential—completely
                free, with no obligation.
              </p>
              <Button size="lg" asChild data-testid="button-free-audit">
                <Link href="/contact">Request Free Audit</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b" id="faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about our services.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Book a free consultation to discuss your website and accounting needs. Let's build
            something great together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild data-testid="button-cta-consultation">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-cta-services">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
