import { execSync } from "child_process";
import fs from "fs";
import path from "path";

console.log("Building TechTaxCorp for Firebase Hosting...\n");

console.log("Step 1: Building frontend with Vite...");
execSync("cd client && npx vite build", { stdio: "inherit" });


const distDir = path.resolve("dist/firebase");
fs.mkdirSync(distDir, { recursive: true });

console.log("\nStep 2: Generating robots.txt...");
const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://techtaxcorp.com/sitemap.xml

Disallow: /api/
`;
fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt);

console.log("Step 3: Generating sitemap.xml...");
const pages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  { loc: "/services/websites", priority: "0.8", changefreq: "weekly" },
  { loc: "/services/accounting", priority: "0.8", changefreq: "weekly" },
  { loc: "/portfolio", priority: "0.7", changefreq: "weekly" },
  { loc: "/about", priority: "0.7", changefreq: "monthly" },
  { loc: "/blog", priority: "0.8", changefreq: "daily" },
  { loc: "/contact", priority: "0.9", changefreq: "monthly" },
  { loc: "/privacy", priority: "0.3", changefreq: "yearly" },
  { loc: "/terms", priority: "0.3", changefreq: "yearly" },
  { loc: "/blog/small-business-tax-deductions-2024", priority: "0.6", changefreq: "monthly" },
  { loc: "/blog/why-business-needs-professional-website", priority: "0.6", changefreq: "monthly" },
  { loc: "/blog/bookkeeping-basics-for-startups", priority: "0.6", changefreq: "monthly" },
  { loc: "/blog/seo-basics-small-business", priority: "0.6", changefreq: "monthly" },
  { loc: "/blog/quarterly-tax-planning-tips", priority: "0.6", changefreq: "monthly" },
];

const baseUrl = "https://techtaxcorp.com";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);

console.log("\nBuild complete! Files ready in dist/firebase/");
console.log("\nTo deploy, run:");
console.log("  npx firebase deploy --only hosting");
