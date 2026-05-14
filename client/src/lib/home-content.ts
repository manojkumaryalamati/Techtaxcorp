import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  BookOpen,
  Globe,
  LayoutDashboard,
  Megaphone,
  Smartphone,
  Workflow,
  Shield,
  Truck,
  HardHat,
  Store,
  Wrench,
  MapPin,
  Rocket,
} from "lucide-react";

export const vahanbooksFeatures = [
  "Trip management",
  "Party and supplier khata",
  "Payments and invoices",
  "POD and documents",
  "Reports and reminders",
] as const;

export const mysiteworksFeatures = [
  "Project dashboard",
  "Expense tracking",
  "Progress updates",
  "Document storage",
  "Payments and reports",
] as const;

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Custom Web Applications",
    description: "Purpose-built web apps and internal tools tailored to how your team actually works.",
    icon: AppWindow,
  },
  {
    title: "Mobile App Development",
    description: "Mobile-first iOS and Android experiences for teams in the field and on the move.",
    icon: Smartphone,
  },
  {
    title: "Business Dashboards",
    description: "Clear operational dashboards so owners and managers see status, cash flow, and workload at a glance.",
    icon: LayoutDashboard,
  },
  {
    title: "Ledger and Khata Software",
    description: "Practical ledger-style workflows for parties, suppliers, trips, and collections—without spreadsheet chaos.",
    icon: BookOpen,
  },
  {
    title: "Website Development",
    description: "Fast, modern marketing sites and product pages that stay easy to update as you grow.",
    icon: Globe,
  },
  {
    title: "Digital Marketing",
    description: "Structured campaigns and content support that connect your software story to the right customers.",
    icon: Megaphone,
  },
  {
    title: "Business Automation",
    description: "Notifications, reminders, approvals, and integrations that reduce manual follow-ups.",
    icon: Workflow,
  },
  {
    title: "Admin Panels and Portals",
    description: "Secure admin, partner, and customer portals with roles, audit-friendly activity, and reporting.",
    icon: Shield,
  },
];

export type IndustryItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const industryItems: IndustryItem[] = [
  {
    title: "Transport and Logistics",
    description: "Fleet-friendly workflows for trips, khata, PODs, and collections.",
    icon: Truck,
  },
  {
    title: "Construction and Contractors",
    description: "Site-first tools for progress, expenses, documents, and client updates.",
    icon: HardHat,
  },
  {
    title: "Small Businesses",
    description: "Simple systems that replace scattered chats, notebooks, and spreadsheets.",
    icon: Store,
  },
  {
    title: "Service Companies",
    description: "Scheduling, billing, and customer communication in one practical stack.",
    icon: Wrench,
  },
  {
    title: "Local Businesses",
    description: "Mobile-first experiences your staff will actually use every day.",
    icon: MapPin,
  },
  {
    title: "Startups",
    description: "Lean product builds with room to scale architecture as traction grows.",
    icon: Rocket,
  },
];

export const whyHighlights = [
  "Mobile-first design",
  "Practical business workflows",
  "Clean dashboards",
  "Simple user experience",
  "Scalable application architecture",
  "Affordable digital solutions",
] as const;

export const processSteps = [
  {
    step: "1",
    title: "Understand Your Business",
    description: "We map how work really happens—people, approvals, documents, and edge cases included.",
  },
  {
    step: "2",
    title: "Design the Workflow",
    description: "We turn messy operations into a clear screen-by-screen flow your team can adopt quickly.",
  },
  {
    step: "3",
    title: "Build the Application",
    description: "We ship in focused milestones with demos, feedback loops, and sensible defaults.",
  },
  {
    step: "4",
    title: "Launch and Improve",
    description: "We help you go live, train your team, and iterate based on real daily usage.",
  },
] as const;
