import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Smartphone,
  Globe,
  Megaphone,
  Truck,
  HardHat,
  Store,
  Wrench,
  Users,
  Briefcase,
  UtensilsCrossed,
} from "lucide-react";

export const vahanbooksFeatures = [
  "Trip management",
  "Party and supplier khata",
  "Payments and invoices",
  "Documents and reports",
  "WhatsApp reminders",
] as const;

export const mysiteworksFeatures = [
  "Project dashboards",
  "Expense tracking",
  "Progress updates",
  "Documents",
  "Payments and reports",
] as const;

export const oneprimeFeatures = [
  "Provider marketplace",
  "Food and local services",
  "Events and venues",
  "Rides and rentals",
  "Community features",
] as const;

export type ProductItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  features: readonly string[];
  platforms: string[];
  href: string;
  caseStudyHref?: string;
  accent: "orange" | "sky" | "violet";
};

export const productItems: ProductItem[] = [
  {
    id: "vahanbooks",
    name: "VahanBooks",
    category: "Transport & Logistics",
    description:
      "Transport management and digital khata software for truck owners, brokers, fleet operators, and logistics businesses.",
    features: vahanbooksFeatures,
    platforms: ["Android", "iOS", "Web"],
    href: "/vahanbooks",
    caseStudyHref: "/vahanbooks",
    accent: "orange",
  },
  {
    id: "mysiteworks",
    name: "MySiteWorks",
    category: "Construction",
    description:
      "Construction project and expense management software for owners, contractors, partners, and project teams.",
    features: mysiteworksFeatures,
    platforms: ["Android", "iOS", "Web"],
    href: "/mysiteworks",
    caseStudyHref: "/mysiteworks",
    accent: "sky",
  },
  {
    id: "oneprime",
    name: "OnePrime",
    category: "Marketplace",
    description:
      "A mobile-first marketplace connecting customers with local providers, restaurants, rides, events, rentals, jobs, and professional services.",
    features: oneprimeFeatures,
    platforms: ["Android", "iOS"],
    href: "/#products",
    accent: "violet",
  },
];

export type ClientCaseStudy = {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
};

export const clientCaseStudies: ClientCaseStudy[] = [
  {
    id: "dasara-luxury-eats",
    name: "Dasara Luxury Eats",
    category: "Food & Catering Platform",
    description:
      "A responsive food and catering platform with menu management, ordering workflows, promotional features, and an administration experience.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    id: "forty-niner-trucking",
    name: "Forty Niner Trucking LLC",
    category: "Corporate & Careers Website",
    description:
      "A professional trucking company website with service presentation, job applications, Firebase-powered workflows, and responsive design.",
    technologies: ["React", "TypeScript", "Firebase", "Vite"],
  },
];

export const trustStripItems: string[] = [
  "VahanBooks",
  "MySiteWorks",
  "OnePrime",
  "Dasara Luxury Eats",
  "Forty Niner Trucking LLC",
];

export type ServiceGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Custom Software Development",
    description: "Business systems built around how your team actually works.",
    icon: AppWindow,
    items: [
      "Web applications",
      "SaaS platforms",
      "Business software",
      "Admin dashboards",
      "Workflow automation",
    ],
  },
  {
    title: "Mobile App Development",
    description: "Native-quality apps for teams and customers on the move.",
    icon: Smartphone,
    items: [
      "Android applications",
      "iOS applications",
      "Cross-platform apps",
      "App Store deployment",
      "Play Store deployment",
    ],
  },
  {
    title: "Website Design and Development",
    description: "Fast, modern websites that stay easy to grow and update.",
    icon: Globe,
    items: [
      "Business websites",
      "E-commerce websites",
      "Responsive redesign",
      "Landing pages",
      "Hosting and deployment",
    ],
  },
  {
    title: "Digital Growth",
    description: "Marketing support that connects your product to customers.",
    icon: Megaphone,
    items: [
      "Digital marketing",
      "Social media campaigns",
      "SEO foundations",
      "Marketing creatives",
      "Lead-generation setup",
    ],
  },
];

export type IndustryItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const industryItems: IndustryItem[] = [
  {
    title: "Transportation and Logistics",
    description: "Fleet-friendly workflows for trips, khata, PODs, and collections.",
    icon: Truck,
  },
  {
    title: "Construction and Contracting",
    description: "Site-first tools for progress, expenses, documents, and client updates.",
    icon: HardHat,
  },
  {
    title: "Food and Hospitality",
    description: "Menus, ordering, and promotions for restaurants and caterers.",
    icon: UtensilsCrossed,
  },
  {
    title: "Local Service Businesses",
    description: "Scheduling, billing, and customer communication in one stack.",
    icon: Wrench,
  },
  {
    title: "Community Marketplaces",
    description: "Provider and customer experiences for local marketplaces.",
    icon: Users,
  },
  {
    title: "Professional Services",
    description: "Client portals, documents, and reporting for service firms.",
    icon: Briefcase,
  },
  {
    title: "Retail and Small Businesses",
    description: "Simple systems that replace scattered chats and spreadsheets.",
    icon: Store,
  },
];

export const whyHighlights = [
  "Business-first product planning",
  "Mobile-first user experience",
  "Clean and scalable architecture",
  "Transparent development milestones",
  "Cross-platform delivery",
  "Launch and ongoing support",
] as const;

export const processSteps = [
  {
    step: "1",
    title: "Discovery and Planning",
    description:
      "We understand the business, users, workflows, goals, requirements, and technical constraints.",
  },
  {
    step: "2",
    title: "Design and Prototyping",
    description:
      "We create user flows, wireframes, responsive interfaces, and interactive design concepts.",
  },
  {
    step: "3",
    title: "Development and Testing",
    description:
      "We build in structured milestones and test across supported browsers, devices, and platforms.",
  },
  {
    step: "4",
    title: "Launch and Support",
    description:
      "We deploy the product, support store submissions, monitor issues, and provide ongoing improvements.",
  },
] as const;

export const technologyItems: string[] = [
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "Firebase",
  "Node.js",
  "Vite",
  "Tailwind CSS",
  "Google Cloud",
  "GitHub",
  "Apple App Store",
  "Google Play",
];
