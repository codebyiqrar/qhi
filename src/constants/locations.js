import { ROUTES } from "./routes";

/** Canonical list path — stable for SEO and nav. */
export const LOCATIONS_PATH = ROUTES.LOCATIONS.INDEX;

/**
 * Single source of truth for location pages (slug, copy, SEO).
 * Add new regions here; URLs become `/locations/{slug}` automatically.
 */
export const LOCATION_PAGES = [
  {
    slug: "california",
    label: "California",
    shortDescription:
      "High-volume California practices get cleaner claims and more predictable collections.",
    description:
      "In California, being the state with most medical billing companies, healthcare providers use our tools to make billing easier, monitor patient health from a distance, and keep their revenue processes running smoothly.",
    image: "/location/california.png",
  },
  {
    slug: "texas",
    label: "Texas",
    shortDescription:
      "Support growing Texas clinics with streamlined billing and RPM-driven workflows.",
    description:
      "Running a practice in Texas is demanding enough without the headache of complex billing. We provide the tech for remote patient monitoring and revenue management, helping your team stay organized and giving you more time to focus on quality care.",
    image: "/location/texas.png",
  },
  {
    slug: "florida",
    label: "Florida",
    shortDescription:
      "Reduce admin burden and improve revenue performance for Florida providers.",
    description:
      "Running a practice in Florida is a balancing act. We help tip the scales back toward patient care by streamlining your billing and remote monitoring. We've designed our tools to clean up your revenue cycle and clear the administrative hurdles that get in your way.",
    image: "/location/florida.png",
  },
  {
    slug: "new-york",
    label: "New York",
    shortDescription:
      "Fast-paced New York practices gain simpler billing and stronger cash-flow control.",
    description:
      "We've brought our billing and remote monitoring tools to practices all over New York to simplify the way they work. We take the complexity out of revenue management, giving providers the breathing room they need to prioritize their patients.",
    image: "/location/new-york.png",
  },
  {
    slug: "illinois",
    label: "Illinois",
    shortDescription:
      "Unify patient tracking and billing operations for better Illinois practice efficiency.",
    description:
      "Managing an Illinois practice comes with its own set of hurdles, but your software shouldn't be one of them. Our tools bridge the gap between patient tracking and revenue management, giving you the breathing room to do what you do best: medicine.",
    image: "/location/illinois.png",
  },
  {
    slug: "georgia",
    label: "Georgia",
    shortDescription:
      "Keep Georgia clinics organized with simpler billing and steadier revenue cycles.",
    description:
      "Healthcare in Georgia is busy, and the paperwork can quickly pile up. We help your practice by taking care of the billing and remote patient tracking for you. This keeps your office organized and your revenue on track, so you can spend your day with your patients instead of your computer.",
    image: "/location/georgia.png",
  },
  {
    slug: "ohio",
    label: "Ohio",
    shortDescription:
      "Cut billing friction and improve day-to-day workflow continuity for Ohio teams.",
    description:
      "Getting your billing and remote monitoring right shouldn't take up your whole day. We help Ohio practices stay on top of their revenue and patient tracking without the extra stress. This keeps your office running smoothly so you can focus on your patients, not your screen.",
    image: "/location/ohio.png",
  },
  {
    slug: "new-jersey",
    label: "New Jersey",
    shortDescription:
      "Deliver smoother operations with cleaner billing and practical monitoring support.",
    description:
      "Getting your billing and remote patient tracking right shouldn't take up your whole day. We help New Jersey practices stay on top of their revenue without the extra stress. This keeps your office running smoothly so you can focus on your patients, not your screen.",
    image: "/location/new-jersey.png",
  },
  {
    slug: "virginia",
    label: "Virginia",
    shortDescription:
      "Enable Virginia providers to balance patient care with stronger revenue operations.",
    description:
      "A smooth patient visit shouldn't end with a mountain of billing work. We help Virginia clinics stay on top of their remote monitoring and revenue without the extra stress. This keeps your office organized and your team focused on the people in your care.",
    image: "/location/virginia.png",
  },
];

export function getLocationBySlug(slug) {
  return LOCATION_PAGES.find((p) => p.slug === slug) ?? null;
}

export function getAllLocationSlugs() {
  return LOCATION_PAGES.map((p) => p.slug);
}

export const LOCATIONS = [
  ...LOCATION_PAGES.map((p) => ({
    id: p.slug,
    slug: p.slug,
    label: p.label,
    link: `${LOCATIONS_PATH}/${p.slug}`,
    shortDescription: p.shortDescription,
    description: p.description,
    image: p.image,
  })),
  {
    id: "view-all",
    label: "View All",
    isCta: true,
    link: LOCATIONS_PATH,
  },
];

export default LOCATIONS;
