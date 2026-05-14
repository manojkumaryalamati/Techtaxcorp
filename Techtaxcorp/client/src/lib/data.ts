import type { Service, PortfolioProject, Testimonial, FAQ, BlogPost } from "@shared/schema";

export const websiteServices: Service[] = [
  {
    id: "business-website",
    title: "Business Websites",
    description: "Professional, conversion-focused websites that establish credibility and drive leads for your business.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-responsive layouts",
      "SEO optimization",
      "Contact forms and CTAs",
      "Analytics integration",
    ],
    icon: "building",
    href: "/services/websites",
  },
  {
    id: "personal-website",
    title: "Personal Websites",
    description: "Showcase your personal brand with a stunning website that represents who you are.",
    features: [
      "Personal branding design",
      "Portfolio showcase",
      "Blog integration",
      "Social media links",
      "Resume/CV section",
    ],
    icon: "user",
    href: "/services/websites",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Sites",
    description: "Display your work beautifully with a portfolio site that impresses clients and employers.",
    features: [
      "Gallery layouts",
      "Project case studies",
      "Filterable categories",
      "High-resolution images",
      "Client testimonials",
    ],
    icon: "image",
    href: "/services/websites",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive specific actions.",
    features: [
      "A/B testing ready",
      "Fast loading speeds",
      "Clear call-to-actions",
      "Form integrations",
      "Analytics tracking",
    ],
    icon: "target",
    href: "/services/websites",
  },
];

export const accountingServices: Service[] = [
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    description: "Accurate, timely bookkeeping services to keep your finances organized and compliant.",
    features: [
      "Monthly reconciliation",
      "Expense categorization",
      "Financial statements",
      "Cloud-based access",
      "Accounts payable/receivable",
    ],
    icon: "book",
    href: "/services/accounting",
  },
  {
    id: "tax-preparation",
    title: "Tax Preparation",
    description: "Expert tax filing for individuals and businesses to maximize deductions and ensure compliance.",
    features: [
      "Personal tax returns",
      "Business tax returns",
      "Quarterly estimates",
      "Tax planning strategies",
      "IRS representation",
    ],
    icon: "file-text",
    href: "/services/accounting",
  },
  {
    id: "business-accounting",
    title: "Business Accounting",
    description: "Comprehensive accounting solutions for small to medium-sized businesses.",
    features: [
      "Financial reporting",
      "Cash flow management",
      "Budgeting & forecasting",
      "Payroll processing",
      "Compliance support",
    ],
    icon: "briefcase",
    href: "/services/accounting",
  },
  {
    id: "advisory",
    title: "Financial Advisory",
    description: "Strategic financial guidance to help your business grow and thrive.",
    features: [
      "Business planning",
      "Financial analysis",
      "Growth strategies",
      "Cost optimization",
      "Investment guidance",
    ],
    icon: "trending-up",
    href: "/services/accounting",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Riverside Law Firm",
    category: "Business Website",
    description: "Modern, professional website for a local law practice with appointment booking.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    tags: ["Legal", "Professional Services", "Responsive"],
  },
  {
    id: "2",
    title: "Fresh Bites Cafe",
    category: "Restaurant Website",
    description: "Appetizing website with online menu and reservation system for a local cafe.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["Restaurant", "Local Business", "Menu Display"],
  },
  {
    id: "3",
    title: "Peak Fitness Studio",
    category: "Fitness Website",
    description: "Dynamic website with class schedules and membership signup for a fitness studio.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    tags: ["Fitness", "Memberships", "Booking System"],
  },
  {
    id: "4",
    title: "Greenfield Landscaping",
    category: "Service Business",
    description: "Portfolio-focused website showcasing completed projects with quote request forms.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=400&fit=crop",
    tags: ["Landscaping", "Portfolio", "Lead Generation"],
  },
  {
    id: "5",
    title: "Dr. Sarah Chen",
    category: "Personal Website",
    description: "Professional personal website for a medical consultant and speaker.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    tags: ["Healthcare", "Personal Brand", "Speaking"],
  },
  {
    id: "6",
    title: "Artisan Bakery Co",
    category: "E-commerce",
    description: "Beautiful online store for a local bakery with order management system.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    tags: ["Bakery", "E-commerce", "Local Business"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Rodriguez",
    role: "Owner",
    company: "Rodriguez Construction",
    content: "TechTaxCorp transformed our online presence. The new website generates 3x more leads than before, and their accounting team keeps our finances in perfect order.",
  },
  {
    id: "2",
    name: "Jennifer Walsh",
    role: "Founder",
    company: "Walsh Consulting Group",
    content: "Their attention to detail in both web design and accounting is exceptional. Having one partner handle both has simplified my business operations tremendously.",
  },
  {
    id: "3",
    name: "David Kim",
    role: "CPA",
    company: "Kim & Associates",
    content: "As a fellow accountant, I was impressed by their expertise. They built us a stunning website and now handle our bookkeeping. Highly recommend their services.",
  },
  {
    id: "4",
    name: "Amanda Foster",
    role: "Owner",
    company: "Foster Design Studio",
    content: "The team at TechTaxCorp understood our creative vision perfectly. Our portfolio website is beautiful, and their tax preparation saved us thousands.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What services does TechTaxCorp offer?",
    answer: "We offer two main service lines: website design and development (business websites, personal sites, portfolios, landing pages) and comprehensive accounting services (bookkeeping, tax preparation, payroll support, and financial consulting).",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Typical website projects take 2-6 weeks depending on complexity. A simple 5-page website can be completed in 2-3 weeks, while larger projects with custom features may take 4-6 weeks or more.",
  },
  {
    question: "Do you offer ongoing website maintenance?",
    answer: "Yes! We offer monthly maintenance packages that include security updates, content updates, performance monitoring, and technical support to keep your website running smoothly.",
  },
  {
    question: "What accounting software do you work with?",
    answer: "We work with popular platforms including QuickBooks, Xero, FreshBooks, and Wave. We can also recommend the best solution for your specific business needs.",
  },
  {
    question: "Can you handle both personal and business taxes?",
    answer: "Absolutely. We prepare tax returns for individuals, sole proprietors, partnerships, LLCs, and corporations. Our tax professionals stay current with the latest tax laws to maximize your deductions.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a free initial consultation to understand your needs and provide a customized quote. Book a call through our contact page to get started.",
  },
  {
    question: "What areas do you serve?",
    answer: "While we're based in Texas, USA, we serve clients nationwide. Our web services are fully remote, and our accounting services can be handled digitally for clients anywhere in the US.",
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us through our website or email techtaxcorp@gmail.com. We'll schedule a free consultation to discuss your project and provide a detailed proposal.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "small-business-tax-deductions-2024",
    title: "10 Tax Deductions Every Small Business Should Know in 2024",
    excerpt: "Maximize your tax savings with these commonly overlooked deductions for small business owners.",
    content: `
# 10 Tax Deductions Every Small Business Should Know in 2024

As a small business owner, maximizing your tax deductions is crucial for keeping more of your hard-earned money. Here are 10 deductions you shouldn't miss.

## 1. Home Office Deduction

If you use a dedicated space in your home regularly and exclusively for business, you may be able to deduct a portion of your housing expenses.

## 2. Vehicle Expenses

Track your business mileage throughout the year. You can deduct either actual expenses or use the standard mileage rate.

## 3. Professional Services

Fees paid to accountants, lawyers, and consultants for business purposes are fully deductible.

## 4. Business Insurance

Premiums for liability insurance, malpractice insurance, and business property insurance are deductible.

## 5. Office Supplies and Equipment

Everything from pens and paper to computers and furniture can be deducted.

## 6. Marketing and Advertising

Website costs, business cards, online ads, and promotional materials are all deductible expenses.

## 7. Education and Training

Courses, workshops, and certifications that improve your business skills can be deducted.

## 8. Bank Fees and Interest

Business credit card fees, bank charges, and interest on business loans are deductible.

## 9. Retirement Contributions

Contributing to a SEP-IRA, SIMPLE IRA, or solo 401(k) can significantly reduce your taxable income.

## 10. Health Insurance Premiums

Self-employed individuals can often deduct health insurance premiums for themselves and their families.

---

*Need help maximizing your business deductions? Contact TechTaxCorp for a free consultation.*
    `,
    author: "TechTaxCorp Team",
    date: "2024-01-15",
    category: "accounting",
    readTime: "5 min read",
  },
  {
    slug: "why-your-business-needs-professional-website",
    title: "Why Your Small Business Needs a Professional Website in 2024",
    excerpt: "In today's digital world, a professional website is no longer optional—it's essential for business growth.",
    content: `
# Why Your Small Business Needs a Professional Website in 2024

In an era where consumers research online before making purchasing decisions, having a professional website is more important than ever.

## First Impressions Matter

Your website is often the first interaction potential customers have with your business. A professionally designed website builds credibility and trust.

## 24/7 Availability

Unlike a physical store, your website works around the clock, providing information and generating leads even while you sleep.

## Cost-Effective Marketing

Compared to traditional advertising, a website offers incredible ROI. Once built, it continues to work for you with minimal ongoing costs.

## Competitive Advantage

Many small businesses still don't have a professional online presence. A great website sets you apart from competitors.

## Customer Convenience

Customers expect to find information online. A website makes it easy for them to learn about your services, see your work, and contact you.

---

*Ready to elevate your online presence? TechTaxCorp creates stunning, conversion-focused websites for small businesses.*
    `,
    author: "TechTaxCorp Team",
    date: "2024-01-10",
    category: "websites",
    readTime: "4 min read",
  },
  {
    slug: "bookkeeping-basics-for-startups",
    title: "Bookkeeping Basics Every Startup Founder Should Know",
    excerpt: "Learn the fundamental bookkeeping practices that will set your startup up for financial success.",
    content: `
# Bookkeeping Basics Every Startup Founder Should Know

Good bookkeeping habits from day one can save you headaches down the road. Here's what every startup founder needs to know.

## Separate Business and Personal Finances

This is rule number one. Open a dedicated business bank account and use it exclusively for business transactions.

## Track Every Expense

Keep receipts and records of all business expenses. Use accounting software to categorize expenses properly.

## Understand Cash Flow

Know the difference between profit and cash flow. Many profitable businesses fail due to poor cash flow management.

## Set Aside Money for Taxes

As a general rule, set aside 25-30% of your income for taxes. This prevents nasty surprises at tax time.

## Reconcile Regularly

Match your bank statements with your accounting records monthly to catch errors and fraud early.

## Know Your Key Numbers

Understand your revenue, expenses, profit margins, and accounts receivable aging.

---

*Need help setting up your bookkeeping system? Contact TechTaxCorp for expert guidance.*
    `,
    author: "TechTaxCorp Team",
    date: "2024-01-05",
    category: "accounting",
    readTime: "6 min read",
  },
  {
    slug: "website-seo-basics",
    title: "SEO Basics: How to Help Your Website Rank on Google",
    excerpt: "Simple SEO strategies that small business owners can implement to improve their search rankings.",
    content: `
# SEO Basics: How to Help Your Website Rank on Google

Search Engine Optimization doesn't have to be complicated. Here are practical steps to improve your website's visibility.

## Keyword Research

Identify the terms your potential customers are searching for. Use tools like Google Keyword Planner to find relevant keywords.

## On-Page SEO

Optimize your page titles, meta descriptions, and headings. Include your target keywords naturally in your content.

## Quality Content

Create valuable, informative content that answers your audience's questions. Google rewards helpful content.

## Mobile Optimization

Ensure your website looks and works great on mobile devices. Most searches now happen on phones.

## Page Speed

Slow websites frustrate users and hurt rankings. Optimize images and use modern hosting to improve speed.

## Local SEO

For local businesses, claim your Google Business Profile and ensure your name, address, and phone number are consistent everywhere.

---

*TechTaxCorp builds SEO-optimized websites that help your business get found online.*
    `,
    author: "TechTaxCorp Team",
    date: "2024-01-01",
    category: "websites",
    readTime: "5 min read",
  },
];
