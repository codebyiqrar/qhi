import { ROUTES } from "./routes";

/** Canonical path for specialities */
export const SPECIALITIES_PATH = ROUTES.SPECIALITIES.INDEX

/**
 * Single source of truth for speciality pages
 */
export const SPECIALITY_PAGES = [
  {
    slug: "orthopedic-surgery",
    label: "Orthopedics",
    shortDescription:
      "Smarter charge capture, cleaner claims, and stronger orthopedic revenue outcomes.",
    description:
      "In one of the most challenging specialties in terms of billing, our automated tools support orthopedics with precise charge capture, improved patient monitoring, and seamless RCM with CRM tools.",
    image: "/speciality/orthopedic-surgery.png",
  },
  {
    slug: "neurology",
    label: "Neurology",
    shortDescription:
      "Reduce billing complexity and support chronic care with better workflow visibility.",
    description:
      "For neurologists, our tools streamline billing, simplify patient monitoring for chronic conditions, and make revenue cycle management easier to focus on patient care.",
    image: "/speciality/neurology.png",
  },
  {
    slug: "cardiology",
    label: "Cardiology",
    shortDescription:
      "Accurate cardiovascular billing and remote tracking for higher-quality care delivery.",
    description:
      "From cardiology billing to patient monitoring, these solutions support accurate charges, remote monitoring, and efficient workflows for better care and practice efficiency.",
    image: "/speciality/cardiology.png",
  },
  {
    slug: "primary-care",
    label: "Primary Care",
    shortDescription:
      "Streamline everyday care workflows and keep primary care operations financially healthy.",
    description:
      "In primary care, our solutions simplify patient monitoring and streamline revenue management so providers can spend more time delivering quality care.",
    image: "/speciality/primary-care.png",
  },
  {
    slug: "pediatrics",
    label: "Pediatrics",
    shortDescription:
      "Support pediatric teams with efficient billing and easier care coordination tools.",
    description:
      "In pediatrics, our platform supports efficient billing, patient health monitoring, and improved revenue cycle management so clinicians can focus on patients, not admin tasks.",
    image: "/speciality/pediatrics.png",
  },
  {
    slug: "dermatology",
    label: "Dermatology",
    shortDescription:
      "Improve coding accuracy and simplify practice workflows for dermatology clinics.",
    description:
      "In dermatology practices, our solutions improve billing accuracy, assist with remote monitoring, and optimize revenue cycles for high-quality care and efficient operations.",
    image: "/speciality/dermatology.png",
  },
  {
    slug: "urology",
    label: "Urology",
    shortDescription:
      "Boost reimbursement confidence with smoother urology billing and monitoring support.",
    description:
      "For urologists, our tools assist with accurate billing, remote patient monitoring, and efficient revenue cycle management to support smoother operations and better care.",
    image: "/speciality/urology.png",
  },
  {
    slug: "ophthalmology",
    label: "Ophthalmology",
    shortDescription:
      "Improve eye-care operations with optimized billing and reliable patient tracking.",
    description:
      "Ophthalmology is supported by tools that assist with remote monitoring, efficient billing, and optimized revenue cycle management for better patient care and smoother operations.",
    image: "/speciality/ophthalmology.png",
  },
  {
    slug: "internal-medicine",
    label: "Internal Medicine",
    shortDescription:
      "Manage chronic care and revenue workflows with less admin overhead.",
    description:
      "In internal medicine, our solutions streamline billing, track patient health remotely, and improve revenue management so providers can focus on high-quality care.",
    image: "/speciality/internal-medicine.png",
  },
];

export function getSpecialityBySlug(slug) {
  return SPECIALITY_PAGES.find((p) => p.slug === slug) ?? null;
}

export function getAllSpecialitySlugs() {
  return SPECIALITY_PAGES.map((p) => p.slug);
}

/**
 * Canonical list for menus or dropdowns
 */
export const SPECIALITIES = [
  ...SPECIALITY_PAGES.map((p) => ({
    id: p.slug,
    slug: p.slug,
    label: p.label,
    link: `${SPECIALITIES_PATH}/${p.slug}`,
    shortDescription: p.shortDescription,
    description: p.description,
    image: p.image,
  })),
  {
    id: "explore-all",
    label: "Explore All",
    isCta: true,
    link: SPECIALITIES_PATH,
  },
];

export default SPECIALITIES;