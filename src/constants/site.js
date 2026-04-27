/**
 * Canonical site origin for metadata, sitemap, and Open Graph.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://www.quantushealthinc.com).
 */
export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
