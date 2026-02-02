import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiLinkedin, SiX } from "react-icons/si";

const footerLinks = {
  services: [
    { name: "Web Design", href: "/services/websites" },
    { name: "Accounting", href: "/services/accounting" },
    { name: "Tax Preparation", href: "/services/accounting" },
    { name: "Bookkeeping", href: "/services/accounting" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <span className="font-serif text-xl font-bold text-primary-foreground">T</span>
              </div>
              <span className="font-serif text-xl font-bold">TechTaxCorp</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your trusted partner for professional website design and comprehensive accounting services.
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

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
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

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
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

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <a
                  href="mailto:techtaxcorp@gmail.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="footer-email"
                >
                  techtaxcorp@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">Available upon request</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">Texas, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} TechTaxCorp. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
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
