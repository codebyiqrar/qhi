import { getSiteUrl } from "@/constants/site";

/** Required for `output: "export"` — robots.txt is generated at build time. */
export const dynamic = "force-static";

export default function robots() {
  const base = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
