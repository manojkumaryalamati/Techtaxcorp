# TechTaxCorp - Website Design & Accounting Services

## Overview

TechTaxCorp is a professional website for a company that offers two main service lines:
1. **Website Design & Development** - Business websites, personal sites, portfolios, landing pages, and maintenance
2. **Accounting & Tax Services** - Bookkeeping, tax preparation, business accounting, payroll, and financial advisory

The site is built for lead generation with a focus on SEO, accessibility, and conversion optimization.

## Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Backend**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Forms**: React Hook Form + Zod validation

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   └── Layout.tsx      # Main layout wrapper
│   │   └── ui/                 # shadcn components
│   ├── pages/
│   │   ├── Home.tsx            # Landing page
│   │   ├── Services.tsx        # Services hub
│   │   ├── ServicesWebsites.tsx # Web design services
│   │   ├── ServicesAccounting.tsx # Accounting services
│   │   ├── Pricing.tsx         # Pricing packages
│   │   ├── Portfolio.tsx       # Work showcase
│   │   ├── About.tsx           # Company info
│   │   ├── Blog.tsx            # Blog listing
│   │   ├── BlogPost.tsx        # Individual blog post
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Privacy.tsx         # Privacy policy
│   │   └── Terms.tsx           # Terms of service
│   ├── lib/
│   │   ├── data.ts             # Static content data
│   │   ├── queryClient.ts      # API client setup
│   │   └── utils.ts            # Utility functions
│   └── App.tsx                 # Route definitions
server/
├── db.ts                       # Database connection
├── routes.ts                   # API endpoints
├── storage.ts                  # Data access layer
└── index.ts                    # Server entry point
shared/
└── schema.ts                   # Database schemas & types
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, service pillars, testimonials, FAQ, CTAs |
| `/services` | Services hub showing both service lines |
| `/services/websites` | Detailed web design services |
| `/services/accounting` | Detailed accounting services |
| `/pricing` | Pricing packages for both service lines |
| `/portfolio` | Sample project showcase |
| `/about` | Company mission, values, process |
| `/blog` | Blog listing page |
| `/blog/:slug` | Individual blog posts |
| `/contact` | Contact form with validation |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form (with rate limiting) |
| `/api/blog` | GET | Get all blog posts |
| `/robots.txt` | GET | Robots.txt for SEO |
| `/sitemap.xml` | GET | XML sitemap for SEO |

## Database Schema

### contact_submissions
- `id` - UUID primary key
- `name` - Contact name
- `email` - Contact email
- `phone` - Optional phone number
- `company` - Optional company name
- `service` - Selected service interest
- `message` - Contact message
- `honeypot` - Spam protection field
- `created_at` - Timestamp

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `VITE_CALENDLY_URL` | Optional Calendly booking link |

## SEO Features

- Unique meta titles and descriptions per page
- OpenGraph and Twitter card meta tags
- robots.txt and sitemap.xml auto-generated
- JSON-LD Organization schema in index.html
- Semantic HTML with proper heading hierarchy
- Internal linking strategy between pages

## Customization Points

Replace the following placeholders with actual values:
- `[City, State]` - Business location
- `[Phone Number]` - Contact phone
- `techtaxcorp@gmail.com` - Already set as business email

## Blog Content Strategy Topics

1. Small business tax deductions guide
2. Why your business needs a professional website
3. Bookkeeping basics for startups
4. SEO basics for small business websites
5. Quarterly tax planning tips
6. Website conversion optimization
7. Choosing accounting software
8. Mobile website best practices
9. Year-end financial checklist
10. Building trust with website design

## Development Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run db:push # Push schema changes to database
```
