import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  FileText,
  Briefcase,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description:
      "Accurate, timely bookkeeping services to keep your finances organized and compliant.",
    features: [
      "Monthly bank reconciliation",
      "Expense categorization",
      "Accounts payable/receivable",
      "Financial statement preparation",
      "Cloud-based access",
      "Real-time financial visibility",
    ],
  },
  {
    icon: FileText,
    title: "Tax Preparation",
    description:
      "Expert tax filing for individuals and businesses to maximize deductions and ensure compliance.",
    features: [
      "Personal tax returns",
      "Business tax returns",
      "Quarterly tax estimates",
      "Tax planning strategies",
      "IRS representation",
      "Amendment services",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Accounting",
    description:
      "Comprehensive accounting solutions for small to medium-sized businesses.",
    features: [
      "Financial reporting",
      "Cash flow management",
      "Budgeting & forecasting",
      "Compliance support",
      "Month-end close",
      "Year-end preparation",
    ],
  },
  {
    icon: Users,
    title: "Payroll Services",
    description:
      "Accurate, timely payroll processing so your employees get paid correctly, every time.",
    features: [
      "Payroll processing",
      "Direct deposit setup",
      "Tax withholding",
      "W-2 & 1099 preparation",
      "New hire reporting",
      "Payroll compliance",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description:
      "Strategic financial guidance to help your business grow and make smarter decisions.",
    features: [
      "Business planning",
      "Financial analysis",
      "Growth strategies",
      "Cost optimization",
      "Investment guidance",
      "Exit planning",
    ],
  },
];

const whyChooseUs = [
  {
    title: "Expertise You Can Trust",
    description:
      "Our team of certified accountants brings decades of combined experience across various industries.",
  },
  {
    title: "Technology-Driven",
    description:
      "We use the latest accounting software to provide real-time visibility into your finances.",
  },
  {
    title: "Personalized Service",
    description:
      "You'll have a dedicated accountant who understands your business and is always accessible.",
  },
  {
    title: "Proactive Approach",
    description:
      "We don't just record transactions—we identify opportunities to save money and grow your business.",
  },
];

export default function ServicesAccounting() {
  useSEO({
    title: "Accounting & Tax Services",
    description: "Expert bookkeeping, tax preparation, business accounting, and financial consulting for small businesses and individuals. Maximize deductions and stay compliant.",
  });

  return (
    <Layout>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-chart-2/5 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Accounting Services</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Accounting & Tax Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert bookkeeping, tax preparation, and financial consulting for small businesses and
              individuals. Focus on your business while we handle the numbers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" asChild data-testid="button-get-started-acc">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">Our Accounting Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial services to keep your business running smoothly and compliant.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="hover-elevate">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 mb-4">
                    <service.icon className="h-6 w-6 text-chart-2" />
                  </div>
                  <CardTitle className="font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-chart-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">Why Choose TechTaxCorp?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just number crunchers. We're your financial partners, committed to helping
                your business succeed.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Card className="border-chart-2/20">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 shrink-0">
                    <Clock className="h-6 w-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Save 10+ Hours Per Week</h3>
                    <p className="text-sm text-muted-foreground">
                      Stop wrestling with spreadsheets. We handle your books so you can focus on growth.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-chart-2/20">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 shrink-0">
                    <TrendingUp className="h-6 w-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Maximize Tax Savings</h3>
                    <p className="text-sm text-muted-foreground">
                      Our tax experts find every deduction you're entitled to, keeping more money in your pocket.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-chart-2/20">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Stay Compliant</h3>
                    <p className="text-sm text-muted-foreground">
                      Avoid costly penalties with our compliance-focused approach to accounting.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <FileText className="h-12 w-12 text-chart-2 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-2">Free Financial Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free 30-minute consultation to discuss your accounting needs. We'll review
                your current setup and recommend the best path forward.
              </p>
              <Button size="lg" asChild data-testid="button-free-consultation">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-chart-2 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">
            Ready to Simplify Your Finances?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Join hundreds of small businesses who trust TechTaxCorp with their accounting needs.
          </p>
          <Button size="lg" variant="secondary" asChild data-testid="button-get-quote-acc">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
