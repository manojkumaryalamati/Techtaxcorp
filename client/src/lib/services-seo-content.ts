/** SEO-focused service sections for /services — H2 headings and supporting copy. */

export type ServiceSeoSection = {
  id: string;
  heading: string;
  intro: string;
  benefits: string[];
};

export const softwareServiceSections: ServiceSeoSection[] = [
  {
    id: "custom-web-applications",
    heading: "Custom web application development",
    intro:
      "TTCorp Solutions builds secure, role-based web applications tailored to approvals, documents, reporting, and day-to-day operations—so your team replaces spreadsheets with one dependable system.",
    benefits: [
      "Workflows mapped to how your business actually runs",
      "Admin, partner, and customer portals with clear permissions",
      "Integrations, notifications, and audit-friendly activity where needed",
    ],
  },
  {
    id: "mobile-app-development",
    heading: "Mobile app development",
    intro:
      "We design and develop mobile-first iOS and Android experiences for crews in the field—offline-friendly patterns, simple navigation, and fast screens your staff will use every day.",
    benefits: [
      "Construction, transport, and service workflows supported",
      "Performance-focused builds for real devices and networks",
      "Room to grow from MVP to production-scale architecture",
    ],
  },
  {
    id: "ledger-software-development",
    heading: "Ledger software development",
    intro:
      "Practical ledger and khata-style software for parties, trips, collections, and branches—without forcing generic accounting products to fit operations they were never built for.",
    benefits: [
      "Clear balances, reminders, and statements owners can trust",
      "Designed for Indian SMB realities: khata, PODs, brokers, fleets",
      "Optional bridges to exports, PDFs, and messaging handoffs",
    ],
  },
  {
    id: "business-software-development",
    heading: "Business software development",
    intro:
      "From internal tools to customer-facing apps, we ship focused business software with sensible defaults—so you adopt quickly without enterprise bloat.",
    benefits: [
      "Milestone-based delivery with visible progress each cycle",
      "Documentation and training that match real user roles",
      "Ongoing iteration based on production usage",
    ],
  },
  {
    id: "website-design-development",
    heading: "Website design and development",
    intro:
      "Fast, modern marketing sites and product pages that stay easy to update—performance, structure, and messaging aligned with how buyers evaluate software and services.",
    benefits: [
      "SEO-aware structure, metadata patterns, and content hierarchy",
      "Responsive layouts tested across breakpoints",
      "Clear calls-to-action into demos, contact, and product funnels",
    ],
  },
  {
    id: "digital-marketing-support",
    heading: "Digital marketing support",
    intro:
      "Structured campaigns and content support that connect your product story to the right customers—aligned with pages, forms, and analytics you can act on.",
    benefits: [
      "Messaging that matches your software positioning",
      "Landing pages and experiments without breaking your brand",
      "Practical reporting—not vanity metrics",
    ],
  },
  {
    id: "saas-product-development",
    heading: "SaaS product development",
    intro:
      "We help design and build SaaS-style products end to end—onboarding, billing hooks where needed, admin tooling, and a roadmap you can defend to stakeholders.",
    benefits: [
      "Product discovery through launch and iteration",
      "Architecture that can scale as usage grows",
      "Security-minded defaults for business data",
    ],
  },
];
