import { useEffect } from "react";
import { absoluteUrl, COMPANY_NAME, DEFAULT_OG_IMAGE_PATH } from "@/lib/seo-constants";

export type UseSEOOptions = {
  /** Full `<title>` text (include branding if you want it in the tab). */
  title: string;
  description: string;
  /** Path starting with `/` — becomes canonical and `og:url`. Omit with `skipCanonical` for soft 404 pages. */
  canonicalPath?: string;
  /** When true, removes `rel=canonical` and does not set `og:url` (use with `noindex` error pages). */
  skipCanonical?: boolean;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  /** Path under site origin, e.g. `/techtaxcorp-brand.png` */
  ogImagePath?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary_large_image" | "summary";
  /** e.g. `index, follow` or `noindex, follow` */
  robots?: string;
  author?: string;
};

function upsertMeta(selectors: string[], create: () => HTMLMetaElement, setContent: (el: HTMLMetaElement) => void) {
  let el: HTMLMetaElement | null = null;
  for (const sel of selectors) {
    el = document.querySelector(sel);
    if (el) break;
  }
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  setContent(el);
}

function upsertLinkCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function useSEO(options: UseSEOOptions) {
  const {
    title,
    description,
    canonicalPath,
    skipCanonical = false,
    keywords,
    ogTitle,
    ogDescription,
    ogImagePath = DEFAULT_OG_IMAGE_PATH,
    ogType = "website",
    twitterCard = "summary_large_image",
    robots = "index, follow",
    author = COMPANY_NAME,
  } = options;

  useEffect(() => {
    document.title = title;

    const canonical =
      !skipCanonical && canonicalPath ? absoluteUrl(canonicalPath) : null;
    if (canonical) {
      upsertLinkCanonical(canonical);
    } else {
      document.querySelector('link[rel="canonical"]')?.remove();
    }

    upsertMeta(['meta[name="description"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    }, (m) => m.setAttribute("content", description));

    const kwExisting = document.querySelector('meta[name="keywords"]');
    if (keywords?.length) {
      upsertMeta(['meta[name="keywords"]'], () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "keywords");
        return m;
      }, (m) => m.setAttribute("content", keywords.join(", ")));
    } else if (kwExisting) {
      kwExisting.remove();
    }

    upsertMeta(['meta[name="author"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "author");
      return m;
    }, (m) => m.setAttribute("content", author));

    upsertMeta(['meta[name="robots"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "robots");
      return m;
    }, (m) => m.setAttribute("content", robots));

    const ogImage = absoluteUrl(ogImagePath);
    const ot = ogTitle ?? title;
    const od = ogDescription ?? description;

    upsertMeta(['meta[property="og:type"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:type");
      return m;
    }, (m) => m.setAttribute("content", ogType));

    upsertMeta(['meta[property="og:title"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    }, (m) => m.setAttribute("content", ot));

    upsertMeta(['meta[property="og:description"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    }, (m) => m.setAttribute("content", od));

    if (canonical) {
      upsertMeta(['meta[property="og:url"]'], () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:url");
        return m;
      }, (m) => m.setAttribute("content", canonical));
    } else {
      document.querySelector('meta[property="og:url"]')?.remove();
    }

    upsertMeta(['meta[property="og:site_name"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:site_name");
      return m;
    }, (m) => m.setAttribute("content", COMPANY_NAME));

    upsertMeta(['meta[property="og:image"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:image");
      return m;
    }, (m) => m.setAttribute("content", ogImage));

    upsertMeta(['meta[property="og:image:alt"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:image:alt");
      return m;
    }, (m) => m.setAttribute("content", `${COMPANY_NAME} — ledger software and business applications`));

    upsertMeta(['meta[property="og:locale"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:locale");
      return m;
    }, (m) => m.setAttribute("content", "en_US"));

    upsertMeta(['meta[name="twitter:card"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:card");
      return m;
    }, (m) => m.setAttribute("content", twitterCard));

    upsertMeta(['meta[name="twitter:title"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:title");
      return m;
    }, (m) => m.setAttribute("content", ot));

    upsertMeta(['meta[name="twitter:description"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:description");
      return m;
    }, (m) => m.setAttribute("content", od));

    upsertMeta(['meta[name="twitter:image"]'], () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:image");
      return m;
    }, (m) => m.setAttribute("content", ogImage));
  }, [
    title,
    description,
    canonicalPath,
    skipCanonical,
    keywords,
    ogTitle,
    ogDescription,
    ogImagePath,
    ogType,
    twitterCard,
    robots,
    author,
  ]);
}
