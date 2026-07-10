/** Production site origin — no trailing slash. */
export const SITE_ORIGIN = "https://ttcorpsolutions.com";

/** Default Open Graph / Twitter preview (under `client/public`). */
export const DEFAULT_OG_IMAGE_PATH = "/ttcorpsolutions-brand.png";

export const COMPANY_NAME = "TTCorpSolutions";

export const ORGANIZATION_DESCRIPTION =
  "Ledger software and business application development company. TTCorpSolutions designs and develops VahanBooks, MySiteWorks, custom web and mobile applications, websites, and SaaS products.";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p}`;
}
