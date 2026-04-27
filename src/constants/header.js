import { ROUTES } from "./routes";

export const companyLinkedInUrl = 'https://www.linkedin.com/company/quantus-health/'
export const companyContactEmail = 'contactus@quantushealthinc.com'
export const companyPhoneNumber = '(945) 260-6897'
export const companyAddress = 'Dallas, TX'
export const companyName = 'Quantus Health'

export const navItems = [
  {
    label: "Solutions",
    link: "#",
    submenu: [
      { label: "QRCM (Revenue Cycle Management)", link: ROUTES.SOLUTIONS.QRCM },
      { label: "QChargeAI (Charge Capture)", link: ROUTES.SOLUTIONS.QCHARGE },
      { label: "QRPM (Remote Patient Monitoring)", link: ROUTES.SOLUTIONS.QRPM },
    ],
  },
  {
    label: "Company",
    link: "#",
    submenu: [
      {
        label: "About Us",
        link: ROUTES.ABOUT
      },
      {
        label: "Careers",
        link: ROUTES.CAREERS
      },
      // {
      //   label: "News",
      //   link: '#'
      // },
      {
        label: "Contact Us",
        link: ROUTES.CONTACT
      },
    ],
  },
  {
    label: "Resources",
    link: "#",
    submenu: [
      { label: "Blogs", link: "#" },
      { label: "Case Studies", link: "#" },
      // { label: "Webinars & Events", link: "#" },
      // { label: "Success Stories", link: "#" },
      // { label: "E-Books", link: "#" },
      // { label: "White Papers", link: "#" },
    ],
  },
  {
    label: "Specialities",
    link: "#",
    submenu: [
      { label: "Specialities", link: "#" },
    ],
  },
  {
    label: "Locations",
    link: "#",
    submenu: [
      { label: "Locations", link: "#" },
    ],
  },
];

// import { ROUTES } from "./routes";

// export const companyLinkedInUrl = 'https://www.linkedin.com/company/quantus-health/'
// export const companyContactEmail = 'contactus@quantushealthinc.com'
// export const companyPhoneNumber = '(945) 260-6897'
// export const companyAddress = 'Dallas, TX'
// export const companyName = 'Quantus Health'

// export const navItems = [
//   {
//     label: "Products", link: "#", icon: "/star.svg", submenu:
//       [
//         { label: "QRCM (Revenue Cycle Management)", link: ROUTES.PRODUCTS.QRCM },
//         { label: "QChargeAI (Charge Capture)", link: ROUTES.PRODUCTS.QCHARGE },
//         { label: "QRPM (Remote Patient Monitoring)", link: ROUTES.PRODUCTS.QRPM },
//         // { label: "QEHR (Electronic Health Record)", link: ROUTES.PRODUCTS.QEHR },
//       ]
//   },
//   // { label: "Who We Help", link: "#", submenu: [{ label: "Who We Help", link: "#" }] },
//   // { label: "Resources", link: "#", submenu: [{ label: "Resources", link: "#" }] },
//   { label: "Contact", link: ROUTES.CONTACT },
//   { label: "About", link: ROUTES.ABOUT }
// ];