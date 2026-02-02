import { Link, useParams } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/lib/data";

const categoryColors: Record<string, string> = {
  accounting: "bg-chart-2/10 text-chart-2",
  websites: "bg-primary/10 text-primary",
  business: "bg-chart-4/10 text-chart-4",
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  useSEO({
    title: post?.title || "Blog Post",
    description: post?.excerpt || "Read this article from TechTaxCorp.",
  });

  if (!post) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <Layout>
      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
            data-testid="link-back-to-blog"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <Badge className={`mb-4 ${categoryColors[post.category]}`}>
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </Badge>
            <h1 className="font-serif text-3xl font-bold sm:text-4xl mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="font-serif text-3xl font-bold mt-8 mb-4">
                    {paragraph.slice(2)}
                  </h1>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-serif text-2xl font-bold mt-8 mb-4">
                    {paragraph.slice(3)}
                  </h2>
                );
              }
              if (paragraph.startsWith("---")) {
                return <hr key={index} className="my-8" />;
              }
              if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
                return (
                  <p key={index} className="text-muted-foreground italic">
                    {paragraph.slice(1, -1)}
                  </p>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <Card className="mt-12">
            <CardContent className="p-6 text-center">
              <h3 className="font-serif text-xl font-bold mb-2">Need Expert Help?</h3>
              <p className="text-muted-foreground mb-4">
                Get personalized advice for your business with a free consultation.
              </p>
              <Button asChild data-testid="button-schedule-consultation-post">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-accent/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold mb-8 text-center">Related Posts</h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.slug} className="hover-elevate">
                  <CardContent className="p-6">
                    <Badge className={`mb-3 ${categoryColors[relatedPost.category]}`}>
                      {relatedPost.category.charAt(0).toUpperCase() + relatedPost.category.slice(1)}
                    </Badge>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="font-serif font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-3"
                    >
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
