import { getAllLocationSlugs } from "@/constants/locations";
import { ROUTES } from "@/constants/routes";
import { getSiteUrl } from "@/constants/site";

/** Required for `output: "export"` — sitemap is generated at build time. */
export const dynamic = "force-static";

/** Extend this as you add more indexable routes. */
export default function sitemap() {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: ROUTES.ABOUT, priority: 0.8 },
    { path: ROUTES.CONTACT, priority: 0.8 },
    { path: ROUTES.CAREERS, priority: 0.75 },
    { path: ROUTES.LOCATIONS.INDEX, priority: 0.85 },
  ];

  const locationRoutes = getAllLocationSlugs().map((slug) => ({
    path: `${ROUTES.LOCATIONS.INDEX}/${slug}`,
    priority: 0.75,
  }));

  return [...staticRoutes, ...locationRoutes].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
