import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import heroBg from "@/assets/images/hero-bg-optimized.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const values = [
  { icon: Target, title: "Excellence", description: "We strive for excellence in product design, engineering, delivery, and the day-to-day support you need after launch." },
  { icon: Heart, title: "Integrity", description: "We operate with complete transparency and honesty. Your trust is our most valuable asset." },
  { icon: Users, title: "Partnership", description: "We don't just serve clients—we partner with them. Your success is our success." },
  { icon: Award, title: "Innovation", description: "We stay ahead of industry trends to provide you with cutting-edge solutions." },
];

const processSteps = [
  { step: "01", title: "Initial Consultation", description: "We start with a free consultation to understand your business, goals, and challenges." },
  { step: "02", title: "Custom Proposal", description: "Based on our conversation, we create a tailored proposal outlining scope, timeline, and pricing." },
  { step: "03", title: "Collaborative Work", description: "We work closely with you throughout the project, keeping you informed and involved." },
  { step: "04", title: "Delivery & Support", description: "We deliver high-quality work and provide ongoing support to ensure your continued success." },
];

const whyChooseUs = [
  "Product thinking: workflows first, screens second",
  "Mobile-first builds for teams in the field",
  "Transparent scope, milestones, and pricing",
  "Pragmatic architecture you can grow into",
  "Hands-on support after launch",
  "Remote-first collaboration across time zones",
];

export default function About() {
  useSEO({
    title: "About TTCorpSolutions | Ledger Software & Application Development Company",
    description: "TTCorpSolutions is a ledger software and application development company building VahanBooks, MySiteWorks, and custom business applications—mobile apps, dashboards, websites, and SaaS products for growing teams.",
    canonicalPath: "/about",
    keywords: ["TTCorpSolutions", "about TTCorpSolutions", "ledger software company", "business software development", "VahanBooks", "MySiteWorks"],
  });

  return (
    <Layout>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Software for businesses that run on real-world logistics
            </h1>
            <p className="text-lg text-muted-foreground">
              TTCorpSolutions designs and ships practical, mobile-first software—our products include VahanBooks for
              transport operations and MySiteWorks for construction teams—alongside custom web apps, dashboards, and
              websites when you need something tailored.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe small and mid-sized teams deserve software that matches how work actually happens—without
                bloated enterprise suites or fragile spreadsheet workflows.
              </p>
              <p className="text-muted-foreground mb-6">
                Based in Texas, USA, we collaborate remotely with owners and operators who need clear screens, fast
                feedback loops, and systems their staff will use every day.
              </p>
              <p className="text-muted-foreground">
                Whether you are validating a first product, replacing manual tracking, or modernizing an internal tool,
                we help you ship something usable early—and improve it with real usage.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">Years of combined experience</p>
                </CardContent>
              </Card>
              <Card className="bg-chart-2/5 border-chart-2/20">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-chart-2 mb-2">2</div>
                  <p className="text-muted-foreground">Flagship products shipped in-house (VahanBooks and MySiteWorks)</p>
                </CardContent>
              </Card>
              <Card className="bg-chart-4/5 border-chart-4/20">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-chart-4 mb-2">24/7</div>
                  <p className="text-muted-foreground">Support availability</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">These core values guide everything we do at TTCorpSolutions.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A simple, transparent process designed to deliver results.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 right-0 translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Why Choose TTCorpSolutions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                When you work with us, you get more than just a service provider—you get a dedicated partner committed to your success.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">Schedule a free consultation to discuss how we can help your business grow.</p>
                <Button size="lg" asChild data-testid="button-schedule-call">
                  <Link href="/contact">Schedule a Call</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">Let's Build Something Great Together</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            From our transport and construction products to a fully custom build—tell us what you want to launch next.
          </p>
          <Button size="lg" variant="secondary" asChild data-testid="button-contact-about">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
