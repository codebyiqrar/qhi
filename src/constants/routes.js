const SOLUTION_ROUTES = {
  QRPM: "/solutions/remote-patient-monitoring",
  QRCM: "/solutions/revenue-cycle-management",
  QCHARGE: "/solutions/charge-capture",
  QEHR: "/solutions/electronic-health-record",
};

export const ROUTES = {
  HOME: "/",

  /** Preferred naming going forward. */
  SOLUTIONS: SOLUTION_ROUTES,
  /** Backward-compatible alias for existing code. */
  PRODUCTS: SOLUTION_ROUTES,
  REQUEST_DEMO: '/request-demo',
  CONTACT: '/contact',
  ABOUT: '/about',
  CAREERS: '/careers',
  INVITE: '/invite',

  /** Locations hub and per-state pages (SEO-friendly slugs). */
  LOCATIONS: {
    INDEX: "/locations",
  },
  SPECIALITIES: {
    INDEX: "/specialities",

  },
  // RESOURCES: {
  //   BLOG: "/resources/blog",
  //   CASE_STUDIES: "/resources/case-studies",
  //   GUIDES: "/resources/guides"
  // },

  // COMPANY: {
  //   ABOUT: "/company/about",
  //   CAREERS: "/company/careers",
  //   CONTACT: "/company/contact"
  // },

  LEGAL: {
    // HIPAA: "/legal/hipaa-compliance",
    PRIVACY: "/legal/privacy-policy",
    TERMS: "/legal/terms-of-service",
    // SECURITY: "/legal/security"
  },


};
