import { getAllLocationSlugs } from "@/constants/locations";
import { getAllSpecialitySlugs } from "@/constants/specialities";
import { ROUTES } from "@/constants/routes";
import { getSiteUrl } from "@/constants/site";

/** Required for `output: "export"` — sitemap is generated at build time. */
export const dynamic = "force-static";

/** Product URLs mirror `/solutions/*` but live under `/products/*` (separate indexable pages). */
const PRODUCT_PATHS = [
  "/products/remote-patient-monitoring",
  "/products/revenue-cycle-management",
  "/products/charge-capture",
  "/products/electronic-health-record",
];

/** Extend this as you add more indexable routes. */
export default function sitemap() {
  const base = getSiteUrl();
  const lastModified = new Date();

  const solutionPaths = Object.values(ROUTES.SOLUTIONS);

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: ROUTES.ABOUT, priority: 0.8 },
    { path: ROUTES.CONTACT, priority: 0.8 },
    { path: ROUTES.CAREERS, priority: 0.75 },
    { path: ROUTES.REQUEST_DEMO, priority: 0.85 },
    { path: ROUTES.LOCATIONS.INDEX, priority: 0.85 },
    { path: ROUTES.SPECIALITIES.INDEX, priority: 0.85 },
    { path: ROUTES.LEGAL.PRIVACY, priority: 0.4 },
    { path: ROUTES.LEGAL.TERMS, priority: 0.4 },
    { path: "/qchargeai-flows", priority: 0.5 },
    ...solutionPaths.map((path) => ({ path, priority: 0.82 })),
    ...PRODUCT_PATHS.map((path) => ({ path, priority: 0.82 })),
  ];

  const locationRoutes = getAllLocationSlugs().map((slug) => ({
    path: `${ROUTES.LOCATIONS.INDEX}/${slug}`,
    priority: 0.75,
  }));

  const specialityRoutes = getAllSpecialitySlugs().map((slug) => ({
    path: `${ROUTES.SPECIALITIES.INDEX}/${slug}`,
    priority: 0.75,
  }));

  return [...staticRoutes, ...locationRoutes, ...specialityRoutes].map(
    ({ path, priority }) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority,
    }),
  );
}
