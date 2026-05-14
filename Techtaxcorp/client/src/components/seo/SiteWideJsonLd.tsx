import {
  absoluteUrl,
  COMPANY_NAME,
  DEFAULT_OG_IMAGE_PATH,
  ORGANIZATION_DESCRIPTION,
  SITE_ORIGIN,
} from "@/lib/seo-constants";
import { JsonLd } from "./JsonLd";

const orgId = `${SITE_ORIGIN}/#organization`;
const websiteId = `${SITE_ORIGIN}/#website`;

export function SiteWideJsonLd() {
  return (
    <JsonLd
      data={[
        {
          "@type": "Organization",
          "@id": orgId,
          name: COMPANY_NAME,
          url: SITE_ORIGIN,
          logo: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
          description: ORGANIZATION_DESCRIPTION,
          email: "techtaxcorp@gmail.com",
          brand: [
            { "@type": "Brand", name: "VahanBooks" },
            { "@type": "Brand", name: "MySiteWorks" },
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "techtaxcorp@gmail.com",
            url: `${SITE_ORIGIN}/contact`,
          },
        },
        {
          "@type": "WebSite",
          "@id": websiteId,
          name: `${COMPANY_NAME} — Ledger software & business applications`,
          url: SITE_ORIGIN,
          inLanguage: "en",
          publisher: { "@id": orgId },
        },
      ]}
    />
  );
}
