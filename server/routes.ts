import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { blogPosts } from "./blogData";
import { z } from "zod";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";

      if (!checkRateLimit(ip)) {
        return res.status(429).json({
          message: "Too many requests. Please try again later.",
        });
      }

      const validatedData = contactFormSchema.parse(req.body);

      if (validatedData.honeypot) {
        return res.status(200).json({ message: "Message received" });
      }

      const submission = await storage.createContactSubmission({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        company: validatedData.company || null,
        service: validatedData.service,
        message: validatedData.message,
        honeypot: null,
      });

      return res.status(201).json({
        message: "Contact form submitted successfully",
        id: submission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors,
        });
      }

      console.error("Contact form error:", error);
      return res.status(500).json({
        message: "An error occurred while processing your request",
      });
    }
  });

  app.get("/api/blog", (_req, res) => {
    res.json(blogPosts);
  });

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /
Sitemap: https://techtaxcorp.com/sitemap.xml

Disallow: /api/
`);
  });

  app.get("/sitemap.xml", (_req, res) => {
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
    ];

    blogPosts.forEach((post) => {
      pages.push({ loc: `/blog/${post.slug}`, priority: "0.6", changefreq: "monthly" });
    });

    const baseUrl = "https://techtaxcorp.com";
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    res.type("application/xml");
    res.send(sitemap);
  });

  return httpServer;
}
