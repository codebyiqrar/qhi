/**
 * Canonical site origin for metadata, sitemap, robots, and Open Graph.
 * Production: https://www.quantushealthinc.com — set `NEXT_PUBLIC_SITE_URL` in CI/hosting
 * (see `.env.example`). Without it, `VERCEL_URL` is used on Vercel and may omit `www`.
 */
export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.NEXT_PUBLIC_VERCEL_URL) return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  return "http://localhost:3000";
}
