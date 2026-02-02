import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  User,
  Image,
  Target,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const services = [
  {
    icon: Building2,
    title: "Business Websites",
    description:
      "Professional, conversion-focused websites that establish credibility and drive leads for your business.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-responsive layouts",
      "SEO optimization built-in",
      "Contact forms and lead capture",
      "Analytics integration",
      "Fast loading speeds",
    ],
  },
  {
    icon: User,
    title: "Personal Websites",
    description:
      "Showcase your personal brand with a stunning website that represents who you are and what you do.",
    features: [
      "Personal branding design",
      "Portfolio showcase section",
      "Blog integration",
      "Social media links",
      "Resume/CV section",
      "Contact form",
    ],
  },
  {
    icon: Image,
    title: "Portfolio Sites",
    description:
      "Display your work beautifully with a portfolio site that impresses clients and employers.",
    features: [
      "Stunning gallery layouts",
      "Project case studies",
      "Filterable categories",
      "High-resolution image support",
      "Client testimonials section",
      "Easy content updates",
    ],
  },
  {
    icon: Target,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive specific marketing actions.",
    features: [
      "A/B testing ready",
      "Fast loading speeds",
      "Clear call-to-actions",
      "Form integrations",
      "Conversion tracking",
      "Mobile optimized",
    ],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, and performing at its best with our maintenance services.",
    features: [
      "Security updates",
      "Content updates",
      "Performance monitoring",
      "Backup management",
      "Technical support",
      "Uptime monitoring",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and target audience to create a strategic plan.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our designers create custom mockups that reflect your brand and meet your objectives.",
  },
  {
    step: "03",
    title: "Development",
    description: "We build your website with clean code, ensuring fast performance and SEO readiness.",
  },
  {
    step: "04",
    title: "Launch",
    description: "After thorough testing, we launch your site and provide training on how to manage it.",
  },
];

export default function ServicesWebsites() {
  useSEO({
    title: "Web Design & Development Services",
    description: "Professional website design services for businesses and individuals. Custom business websites, personal sites, portfolios, and landing pages that convert visitors into customers.",
  });

  return (
    <Layout>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Web Services</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Web Design & Development
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional website design services for businesses and individuals. We create beautiful,
              fast, and SEO-optimized websites that convert visitors into customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" asChild data-testid="button-get-started-web">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-view-portfolio-web">
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">Our Web Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From business websites to landing pages, we offer comprehensive web design solutions
              tailored to your needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="hover-elevate">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
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
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven, streamlined approach to delivering websites that exceed expectations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 right-0 translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-2">Free Website Audit</h3>
              <p className="text-muted-foreground mb-6">
                Already have a website? Let us analyze it for free. We'll review design, performance,
                SEO, and conversion potential—no strings attached.
              </p>
              <Button size="lg" asChild data-testid="button-request-audit">
                <Link href="/contact">Request Free Audit</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Let's discuss your project. Book a free consultation and get a custom quote for your
            website needs.
          </p>
          <Button size="lg" variant="secondary" asChild data-testid="button-book-consultation-web">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
