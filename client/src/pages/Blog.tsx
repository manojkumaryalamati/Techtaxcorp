import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import heroBg from "@/assets/images/hero-bg-optimized.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/lib/data";

const categoryColors: Record<string, string> = {
  accounting: "bg-chart-2/10 text-chart-2",
  websites: "bg-primary/10 text-primary",
  business: "bg-chart-4/10 text-chart-4",
};

export default function Blog() {
  useSEO({
    title: "Blog - Insights & Resources",
    description: "Expert tips on small business accounting, website design, tax strategies, and more. Practical advice to help your business grow and succeed.",
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
            <Badge variant="secondary" className="mb-4">Blog</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert tips on small business accounting, website design, tax strategies, and more to
              help your business thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="group hover-elevate">
                <CardContent className="p-6">
                  <Badge className={`mb-4 ${categoryColors[post.category]}`}>
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </Badge>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors cursor-pointer" data-testid={`link-blog-${post.slug}`}>
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    data-testid={`link-read-more-${post.slug}`}
                  >
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Want Expert Help?</h3>
              <p className="text-muted-foreground mb-6">
                Our blog is just the beginning. Get personalized advice for your business with a free
                consultation.
              </p>
              <Button size="lg" asChild data-testid="button-schedule-consultation-blog">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
