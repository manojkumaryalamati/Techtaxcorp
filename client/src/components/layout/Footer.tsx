import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { TTCorpSolutionsLogo } from "@/components/brand/TTCorpSolutionsLogo";
import { SiFacebook, SiLinkedin, SiX } from "react-icons/si";

const productLinks = [
  { name: "VahanBooks", href: "/vahanbooks" },
  { name: "MySiteWorks", href: "/mysiteworks" },
  { name: "OnePrime", href: "/#products" },
];

const serviceLinks = [
  { name: "Custom Software", href: "/services" },
  { name: "Mobile Apps", href: "/services" },
  { name: "Websites", href: "/services/websites" },
  { name: "Digital Growth", href: "/services" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/#client-work" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex w-fit rounded-md py-1 ring-offset-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              data-testid="link-logo-footer"
            >
              <TTCorpSolutionsLogo variant="footer" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              TTCorp Solutions builds mobile apps, web platforms, business software, websites,
              automation systems, and digital solutions for companies in India and the United States.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-muted hover-elevate"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-muted hover-elevate"
                aria-label="X (Twitter)"
                data-testid="link-twitter"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-muted hover-elevate"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" aria-hidden />
                <a
                  href="mailto:techtaxcorp@gmail.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground break-all"
                  data-testid="footer-email"
                >
                  techtaxcorp@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" aria-hidden />
                <span className="text-sm text-muted-foreground">Available upon request</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" aria-hidden />
                <span className="text-sm text-muted-foreground">India &amp; United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} TTCorp Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
