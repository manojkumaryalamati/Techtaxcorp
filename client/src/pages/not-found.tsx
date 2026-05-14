import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

export default function NotFound() {
  useSEO({
    title: "Page not found | TechTaxCorp",
    description: "The page you requested is not available. Browse TechTaxCorp for ledger software, VahanBooks, MySiteWorks, and custom application development.",
    skipCanonical: true,
    robots: "noindex, follow",
  });

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4">
      <Card className="mx-auto w-full max-w-md">
        <CardContent className="pt-6">
          <div className="mb-4 flex gap-2">
            <AlertCircle className="h-8 w-8 shrink-0 text-red-500" aria-hidden />
            <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            That URL is not part of this site. Use the navigation or return home to find ledger software products and services from TechTaxCorp.
          </p>
          <Button asChild className="mt-6 w-full">
            <Link href="/">Back to home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
