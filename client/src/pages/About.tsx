import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import heroBg from "@/assets/images/hero-bg-optimized.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Heart,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from design to accounting to customer service.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty. Your trust is our most valuable asset.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We don't just serve clients—we partner with them. Your success is our success.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We stay ahead of industry trends to provide you with cutting-edge solutions.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We start with a free consultation to understand your business, goals, and challenges.",
  },
  {
    step: "02",
    title: "Custom Proposal",
    description:
      "Based on our conversation, we create a tailored proposal outlining scope, timeline, and pricing.",
  },
  {
    step: "03",
    title: "Collaborative Work",
    description:
      "We work closely with you throughout the project, keeping you informed and involved.",
  },
  {
    step: "04",
    title: "Delivery & Support",
    description:
      "We deliver high-quality work and provide ongoing support to ensure your continued success.",
  },
];

const whyChooseUs = [
  "Combined expertise in web design and accounting",
  "Dedicated team members for every project",
  "Transparent pricing with no hidden fees",
  "Fast turnaround without sacrificing quality",
  "Ongoing support and maintenance",
  "Nationwide service availability",
];

export default function About() {
  useSEO({
    title: "About Us - Your Partner in Business Success",
    description: "Learn about TechTaxCorp's mission, values, and process. We combine web design expertise with accounting knowledge to help small businesses succeed.",
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
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Your Partner in Business Success
            </h1>
            <p className="text-lg text-muted-foreground">
              TechTaxCorp was founded with a simple mission: help small businesses and individuals
              succeed by providing exceptional website design and accounting services under one roof.
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
                We believe every business deserves a professional online presence and well-organized
                finances—without the complexity and high costs typically associated with these
                services.
              </p>
              <p className="text-muted-foreground mb-6">
                Based in Texas, USA, we serve businesses across the United States, combining local
                personal touch with the convenience of remote collaboration. Our team brings together
                years of experience in web development, design, accounting, and tax preparation.
              </p>
              <p className="text-muted-foreground">
                Whether you're a startup looking to establish your online presence or an established
                business seeking to streamline your finances, we're here to help you achieve your
                goals.
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
                  <div className="text-4xl font-bold text-chart-2 mb-2">50+</div>
                  <p className="text-muted-foreground">States served nationwide</p>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at TechTaxCorp.
            </p>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process designed to deliver results.
            </p>
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
              <h2 className="font-serif text-3xl font-bold mb-6">Why Choose TechTaxCorp?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                When you work with us, you get more than just a service provider—you get a dedicated
                partner committed to your success.
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
                <p className="text-muted-foreground mb-6">
                  Schedule a free consultation to discuss how we can help your business grow.
                </p>
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
          <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Whether you need a stunning website, expert accounting, or both—we're here to help.
          </p>
          <Button size="lg" variant="secondary" asChild data-testid="button-contact-about">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
