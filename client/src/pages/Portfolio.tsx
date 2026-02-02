import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import heroBg from "@/assets/images/hero-bg.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { portfolioProjects } from "@/lib/data";

export default function Portfolio() {
  useSEO({
    title: "Portfolio - Our Work",
    description: "View our portfolio of website design projects. See examples of business websites, restaurant sites, fitness studios, and more that we've created for our clients.",
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
            <Badge variant="secondary" className="mb-4">Our Work</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground">
              Take a look at some of the websites we've created for our clients. Each project is
              custom-designed to meet the unique needs of the business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover-elevate">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                  <h3 className="font-serif text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 text-xs bg-accent rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Like What You See?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Every project in our portfolio was created with care, attention to detail, and a focus on
            results. Let's create something amazing together for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild data-testid="button-start-project">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-view-services-portfolio">
              <Link href="/services/websites">View Web Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">
            Ready to Join Our Portfolio?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Your business could be our next success story. Book a free consultation to discuss your
            website project.
          </p>
          <Button size="lg" variant="secondary" asChild data-testid="button-book-consultation-portfolio">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
