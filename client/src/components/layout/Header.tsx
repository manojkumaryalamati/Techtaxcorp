import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "All Services", href: "/services", description: "View all our services" },
      { name: "Web Design & Development", href: "/services/websites", description: "Custom websites for your business" },
      { name: "Accounting & Tax", href: "/services/accounting", description: "Expert financial services" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
            <span className="font-serif text-xl font-bold text-primary-foreground">T</span>
          </div>
          <span className="font-serif text-xl font-bold text-foreground">TechTaxCorp</span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger
                        className={location.startsWith("/services") ? "text-primary" : ""}
                        data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-1 p-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover-elevate"
                                  data-testid={`nav-${child.name.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                  <div className="text-sm font-medium leading-none">{child.name}</div>
                                  <p className="mt-1 text-sm leading-snug text-muted-foreground">
                                    {child.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                          location === item.href ? "text-primary" : "text-foreground"
                        }`}
                        data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>


        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm">
            <div className="flex flex-col gap-4 py-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                  <span className="font-serif text-xl font-bold text-primary-foreground">T</span>
                </div>
                <span className="font-serif text-xl font-bold">TechTaxCorp</span>
              </Link>
              <nav className="flex flex-col gap-1 py-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-1">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between rounded-md px-3 py-2 text-base font-medium hover-elevate ${
                            location === item.href ? "bg-accent text-primary" : ""
                          }`}
                          data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {item.name}
                          <ChevronDown className="h-4 w-4" />
                        </Link>
                        <div className="ml-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block rounded-md px-3 py-2 text-sm hover-elevate ${
                                location === child.href ? "bg-accent text-primary" : "text-muted-foreground"
                              }`}
                              data-testid={`mobile-nav-${child.name.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block rounded-md px-3 py-2 text-base font-medium hover-elevate ${
                          location === item.href ? "bg-accent text-primary" : ""
                        }`}
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
