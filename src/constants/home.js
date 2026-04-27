import { ROUTES } from "./routes";

// Hero Section 
export const heroText = {
  badge: "AI-Powered Healthcare Suite",
  heading1: "Simplify Workflows.",
  heading2: "Amplify Revenue.",
  description: "Say goodbye to missed charges, denied claims, and manual monitoring. Our AI-powered healthcare suite makes healthcare workflows simple, reliable, and revenue-friendly.",
  ctaDemo: "Request a Demo",
  ctaExpert: "Talk to an Expert"
};

// Hero Section 2 (Revenue Cycle hero)
export const hero2Text = {
  badge: "Revenue Cycle Automation",
  headingParts: ["AI-Driven ", "Revenue", " Optimization Platform For ", "Modern Care"],
  description: "High-tech revenue automation that handles the heavy lifting, from charge entry to remote patient care",
  features: [
    "Claims Are Paid Quickly",
    "Payments Arrive Faster",
    "Record Visits At The Bedside.",
    "Track Patients Remotely"
  ],
  ctaPrimary: "Get A Free Demo",
  ctaSecondary: "Contact Us"
};

// ProductsOverview Section
export const problemText = {
  heading: "Built for Better Care and Stronger Financials",
  description: "Our unified platform connects patient care, clinical documentation, and revenue management, helping practices save time, eliminate friction, and improve both outcomes and income."
};

export const productsTabs = [
  { id: "qCharge", name: "QChargeAI" },
  { id: "qRcm", name: "QRCM" },
  // { id: "qEhr", name: "QEHR" },
  { id: "qRpm", name: "QRPM" }
];

export const productsTabsImages = {
  qRpm: "/rpm.png",
  qRcm: "/rcm.png",
  qCharge: "/q-charge-dashboard.svg",
  qEhr: "/cc.png"
};

export const productsTabsTitles = {
  qRpm: "RPM Dashboard",
  qRcm: "RCM Dashboard",
  qCharge: "Charge Capture Dashboard",
  qEhr: "EHR Dashboard"
};

export const PRODUCTS_IMAGES = {
  "q-charge-mobile": "/qcharge-mobile.png"
}

// Problem Section
export const problemsArray = [
  {
    id: 1,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.6667 21.3334H26.6667C25.2522 21.3334 23.8956 21.8953 22.8954 22.8955C21.8952 23.8957 21.3333 25.2522 21.3333 26.6667C21.3333 28.0812 21.8952 29.4377 22.8954 30.4379C23.8956 31.4381 25.2522 32 26.6667 32H37.3333C38.7478 32 40.1044 32.5619 41.1046 33.5621C42.1047 34.5623 42.6667 35.9189 42.6667 37.3334C42.6667 38.7479 42.1047 40.1044 41.1046 41.1046C40.1044 42.1048 38.7478 42.6667 37.3333 42.6667H21.3333M32 48V16M58.6667 32C58.6667 46.7276 46.7276 58.6667 32 58.6667C17.2724 58.6667 5.33333 46.7276 5.33333 32C5.33333 17.2725 17.2724 5.33337 32 5.33337C46.7276 5.33337 58.6667 17.2725 58.6667 32Z" stroke="url(#paint0_linear_5240_436)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_5240_436" x1="5.36763" y1="5.36768" x2="58.6324" y2="58.6324" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D94E4" />
            <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
            <stop offset="0.5" stopColor="#2847C5" />
            <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
            <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Revenue Leakage",
    description: "Missed charges and denied claims cost practices thousands every year."
  },
  {
    id: 2,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.33332 32C5.33206 32.5101 5.4771 33.0098 5.75123 33.4399C6.02537 33.87 6.41711 34.2125 6.87999 34.4267L29.8133 44.8533C30.5045 45.1663 31.2546 45.3282 32.0133 45.3282C32.7721 45.3282 33.5221 45.1663 34.2133 44.8533L57.0933 34.4534C57.5653 34.2412 57.9654 33.8963 58.2448 33.4606C58.5242 33.025 58.6707 32.5175 58.6667 32M5.33332 45.3333C5.33206 45.8434 5.4771 46.3431 5.75123 46.7732C6.02537 47.2033 6.41711 47.5458 6.87999 47.76L29.8133 58.1867C30.5045 58.4997 31.2546 58.6616 32.0133 58.6616C32.7721 58.6616 33.5221 58.4997 34.2133 58.1867L57.0933 47.7867C57.5653 47.5745 57.9654 47.2296 58.2448 46.794C58.5242 46.3583 58.6707 45.8508 58.6667 45.3333M34.2133 5.81335C33.5185 5.49641 32.7637 5.3324 32 5.3324C31.2363 5.3324 30.4815 5.49641 29.7867 5.81335L6.93332 16.2133C6.46012 16.422 6.0578 16.7637 5.77535 17.197C5.49291 17.6302 5.34253 18.1362 5.34253 18.6533C5.34253 19.1705 5.49291 19.6765 5.77535 20.1097C6.0578 20.543 6.46012 20.8847 6.93332 21.0933L29.8133 31.52C30.5082 31.837 31.2629 32.001 32.0267 32.001C32.7904 32.001 33.5452 31.837 34.24 31.52L57.12 21.12C57.5932 20.9114 57.9955 20.5696 58.278 20.1364C58.5604 19.7032 58.7108 19.1972 58.7108 18.68C58.7108 18.1629 58.5604 17.6569 58.278 17.2236C57.9955 16.7904 57.5932 16.4487 57.12 16.24L34.2133 5.81335Z" stroke="url(#paint0_linear_5240_446)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_5240_446" x1="5.36764" y1="5.3667" x2="58.6282" y2="58.6755" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D94E4" />
            <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
            <stop offset="0.5" stopColor="#2847C5" />
            <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
            <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Administrative Burden",
    description: "Staff spend hours on manual billing, reporting, and patient monitoring."
  },
  {
    id: 3,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.6666 56V50.6667C50.6666 47.8377 49.5428 45.1246 47.5425 43.1242C45.5421 41.1238 42.829 40 40 40H24C21.171 40 18.4579 41.1238 16.4575 43.1242C14.4571 45.1246 13.3333 47.8377 13.3333 50.6667V56" stroke="url(#paint0_linear_5240_456)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 29.3333C37.891 29.3333 42.6666 24.5577 42.6666 18.6667C42.6666 12.7756 37.891 8 32 8C26.1089 8 21.3333 12.7756 21.3333 18.6667C21.3333 24.5577 26.1089 29.3333 32 29.3333Z" stroke="url(#paint1_linear_5240_456)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_5240_456" x1="13.3573" y1="40.0103" x2="24.9286" y2="67.01" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D94E4" />
            <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
            <stop offset="0.5" stopColor="#2847C5" />
            <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
            <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_5240_456" x1="21.347" y1="8.01372" x2="42.6529" y2="29.3196" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D94E4" />
            <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
            <stop offset="0.5" stopColor="#2847C5" />
            <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
            <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Patient Drop-Off",
    description: "Without easy monitoring, patients disengage and compliance fails."
  },
  {
    id: 4,
    icon: (
      <svg width="64" height="64" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.04 7.7067C37.3752 8.04224 37.7938 8.28232 38.2527 8.40216C38.7116 8.52201 39.1942 8.51729 39.6506 8.3885C40.1071 8.25971 40.521 8.01151 40.8496 7.66948C41.1782 7.32745 41.4096 6.90397 41.52 6.4427C41.7968 5.29043 42.3757 4.23277 43.1972 3.37864C44.0187 2.52451 45.053 1.90479 46.1936 1.58329C47.3342 1.2618 48.5399 1.25015 49.6865 1.54955C50.8331 1.84895 51.8792 2.44858 52.717 3.28668C53.5548 4.12478 54.1541 5.17106 54.4531 6.31777C54.7522 7.46448 54.7401 8.67017 54.4183 9.81068C54.0964 10.9512 53.4763 11.9853 52.6219 12.8065C51.7675 13.6277 50.7097 14.2063 49.5573 14.4827C49.096 14.5931 48.6725 14.8245 48.3305 15.1531C47.9885 15.4817 47.7403 15.8955 47.6115 16.352C47.4827 16.8085 47.478 17.2911 47.5978 17.75C47.7177 18.2089 47.9578 18.6275 48.2933 18.9627L52.7813 23.448C53.3791 24.0458 53.8533 24.7555 54.1768 25.5365C54.5003 26.3175 54.6669 27.1546 54.6669 28C54.6669 28.8454 54.5003 29.6825 54.1768 30.4636C53.8533 31.2446 53.3791 31.9543 52.7813 32.552L48.2933 37.04C47.9581 37.3756 47.5395 37.6157 47.0806 37.7355C46.6217 37.8553 46.1391 37.8506 45.6826 37.7218C45.2261 37.593 44.8123 37.3448 44.4837 37.0028C44.1551 36.6608 43.9237 36.2373 43.8133 35.776C43.5365 34.6238 42.9575 33.5661 42.1361 32.712C41.3146 31.8578 40.2803 31.2381 39.1397 30.9166C37.999 30.5951 36.7934 30.5835 35.6467 30.8829C34.5001 31.1823 33.4541 31.7819 32.6162 32.62C31.7784 33.4581 31.1791 34.5044 30.8801 35.6511C30.5811 36.7978 30.5931 38.0035 30.915 39.144C31.2369 40.2845 31.8569 41.3186 32.7113 42.1398C33.5657 42.961 34.6236 43.5396 35.776 43.816C36.2372 43.9264 36.6607 44.1578 37.0027 44.4864C37.3448 44.815 37.593 45.2289 37.7218 45.6853C37.8506 46.1418 37.8553 46.6244 37.7354 47.0833C37.6156 47.5422 37.3755 47.9608 37.04 48.296L32.552 52.7814C31.9542 53.3792 31.2445 53.8534 30.4635 54.1769C29.6825 54.5004 28.8454 54.6669 28 54.6669C27.1546 54.6669 26.3175 54.5004 25.5364 54.1769C24.7554 53.8534 24.0457 53.3792 23.448 52.7814L18.96 48.2934C18.6248 47.9578 18.2061 47.7177 17.7472 47.5979C17.2883 47.4781 16.8058 47.4828 16.3493 47.6116C15.8928 47.7403 15.4789 47.9886 15.1504 48.3306C14.8218 48.6726 14.5904 49.0961 14.48 49.5574C14.2031 50.7096 13.6242 51.7673 12.8027 52.6214C11.9812 53.4756 10.9469 54.0953 9.80633 54.4168C8.66571 54.7383 7.46002 54.7499 6.31341 54.4505C5.1668 54.1511 4.12072 53.5515 3.28289 52.7134C2.44507 51.8753 1.84579 50.829 1.54677 49.6823C1.24775 48.5356 1.2598 47.3299 1.58167 46.1894C1.90355 45.0489 2.52361 44.0148 3.37801 43.1936C4.23241 42.3724 5.29026 41.7938 6.44263 41.5174C6.9039 41.407 7.32737 41.1756 7.66941 40.847C8.01144 40.5184 8.25964 40.1045 8.38843 39.648C8.51722 39.1916 8.52194 38.709 8.40209 38.2501C8.28224 37.7912 8.04217 37.3726 7.70663 37.0374L3.21863 32.552C2.62083 31.9543 2.14663 31.2446 1.8231 30.4636C1.49958 29.6825 1.33306 28.8454 1.33306 28C1.33306 27.1546 1.49958 26.3175 1.8231 25.5365C2.14663 24.7555 2.62083 24.0458 3.21863 23.448L7.70663 18.96C8.04183 18.6245 8.46047 18.3844 8.91937 18.2646C9.37827 18.1447 9.86084 18.1494 10.3173 18.2782C10.7738 18.407 11.1876 18.6552 11.5162 18.9973C11.8448 19.3393 12.0762 19.7628 12.1866 20.224C12.4634 21.3763 13.0424 22.434 13.8639 23.2881C14.6853 24.1422 15.7197 24.7619 16.8603 25.0834C18.0009 25.4049 19.2066 25.4166 20.3532 25.1172C21.4998 24.8178 22.5459 24.2182 23.3837 23.3801C24.2215 22.542 24.8208 21.4957 25.1198 20.349C25.4188 19.2023 25.4068 17.9966 25.0849 16.8561C24.763 15.7156 24.143 14.6815 23.2886 13.8603C22.4342 13.0391 21.3763 12.4605 20.224 12.184C19.7627 12.0736 19.3392 11.8422 18.9972 11.5136C18.6552 11.185 18.4069 10.7712 18.2782 10.3147C18.1494 9.85824 18.1447 9.37568 18.2645 8.91678C18.3843 8.45787 18.6244 8.03924 18.96 7.70403L23.448 3.2187C24.0457 2.6209 24.7554 2.1467 25.5364 1.82317C26.3175 1.49965 27.1546 1.33313 28 1.33313C28.8454 1.33313 29.6825 1.49965 30.4635 1.82317C31.2445 2.1467 31.9542 2.6209 32.552 3.2187L37.04 7.7067Z" stroke="url(#paint0_linear_5240_468)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_5240_468" x1="1.36536" y1="1.36743" x2="54.6306" y2="54.6366" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D94E4" />
            <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
            <stop offset="0.5" stopColor="#2847C5" />
            <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
            <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Complex Workflows",
    description: "Disconnected systems make providers juggle multiple logins and tools."
  }
];


// PickProducts Section
export const pickProductsText = {
  heading1: "Pick the Products You Need",
  heading2: "Scale When You’re Ready",
  description: "Start with the solution you need today. Add the others anytime. They work great alone, and even better together."
};

export const productsData = [
  {
    id: 3,
    badge: "AI-Powered",
    title: "Charge Capture",
    description: "Enter charges on the go, capture every code, and stop losing revenue with mobile-first charge capture.",
    image: "/qcharge-mobile.png",
    buttonText: "Explore Charge Capture",
    buttonLink: ROUTES.SOLUTIONS.QCHARGE,
    badgeText: "AI-Powered"
  },
  {
    id: 2,
    badge: "AI-Powered",
    title: "Revenue Cycle Management",
    description: "From claim submission to denial management, our RCM simplifies the billing and keeps your revenue flowing.",
    image: "/qrcm-dashboard.png",
    buttonText: "Explore RCM",
    buttonLink: ROUTES.SOLUTIONS.QRCM,
    badgeText: "AI-Powered"
  },
  {
    id: 1,
    badge: "AI-Powered",
    title: "Remote Patient Monitoring",
    description: "Easily engage patients, track vitals in real time, and automate CCM reporting, all in one simple app.",
    image: "/qrpm-dashboard.png",
    buttonText: "Explore RPM",
    buttonLink: ROUTES.SOLUTIONS.QRPM,
    badgeText: "AI-Powered"
  }


];

/// Features Section

export const featuresText = {
  heading1: "Powerful Features.",
  heading2: "Real Healthcare Impact.",
  description: "Our platform isn’t just a collection of features, it delivers measurable impact. Practices reduce denials, capture every charge, and save hours of admin time each week. The result is stronger revenue, smoother workflows, and more time to focus on patient care."
};

export const features = [
  {
    title: "Increase Revenue",
    desc: "Reduce denials, capture missed charges, and unlock hidden revenue.",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8V50.6667C8 52.0812 8.5619 53.4377 9.5621 54.4379C10.5623 55.4381 11.9188 56 13.3333 56H56M50.6667 24L37.3333 37.3333L26.6667 26.6667L18.6667 34.6667" stroke="url(#paint0_linear_5424_1266)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_5424_1266" x1="8.03087" y1="8.03087" x2="55.9691" y2="55.9691" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0D94E4" />
          <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
          <stop offset="0.5" stopColor="#2847C5" />
          <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  },
  {
    title: "Save Time",
    desc: "Automate CCM, billing, and reporting — free up staff hours every week.",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.0002 15.9999V31.9999H42.6668M58.6668 31.9999C58.6668 46.7275 46.7278 58.6666 32.0002 58.6666C17.2726 58.6666 5.3335 46.7275 5.3335 31.9999C5.3335 17.2723 17.2726 5.33325 32.0002 5.33325C46.7278 5.33325 58.6668 17.2723 58.6668 31.9999Z" stroke="url(#paint0_linear_5424_1273)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_5424_1273" x1="5.36779" y1="5.36755" x2="58.6325" y2="58.6323" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0D94E4" />
          <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
          <stop offset="0.5" stopColor="#2847C5" />
          <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

  },
  {
    title: "Simplify Workflows",
    desc: "One connected platform for patients, providers, and billers — less complexity, more clarity.",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 50.6666C24 55.0849 20.4183 58.6666 16 58.6666C11.5817 58.6666 8 55.0849 8 50.6666C8 46.2483 11.5817 42.6666 16 42.6666C20.4183 42.6666 24 46.2483 24 50.6666ZM24 50.6666H46.6667C49.142 50.6666 51.516 49.6833 53.2663 47.9329C55.0167 46.1826 56 43.8086 56 41.3332C56 38.8579 55.0167 36.4839 53.2663 34.7336C51.516 32.9832 49.142 31.9999 46.6667 31.9999H17.3333C14.858 31.9999 12.484 31.0166 10.7337 29.2662C8.98333 27.5159 8 25.1419 8 22.6666C8 20.1912 8.98333 17.8173 10.7337 16.0669C12.484 14.3166 14.858 13.3333 17.3333 13.3333H40M40 13.3333C40 17.7515 43.5817 21.3333 48 21.3333C52.4183 21.3333 56 17.7515 56 13.3333C56 8.91497 52.4183 5.33325 48 5.33325C43.5817 5.33325 40 8.91497 40 13.3333Z" stroke="url(#paint0_linear_5424_1280)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_5424_1280" x1="8.03087" y1="5.36755" x2="61.0013" y2="53.041" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0D94E4" />
          <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
          <stop offset="0.5" stopColor="#2847C5" />
          <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

  },
  {
    title: "Happier Providers & Patients",
    desc: "Engaged patients and less-burned-out staff lead to better outcomes all around.",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3335 37.3333C21.3335 37.3333 25.3335 42.6666 32.0002 42.6666C38.6668 42.6666 42.6668 37.3333 42.6668 37.3333M24.0002 23.9999H24.0268M40.0002 23.9999H40.0268M58.6668 31.9999C58.6668 46.7275 46.7278 58.6666 32.0002 58.6666C17.2726 58.6666 5.3335 46.7275 5.3335 31.9999C5.3335 17.2723 17.2726 5.33325 32.0002 5.33325C46.7278 5.33325 58.6668 17.2723 58.6668 31.9999Z" stroke="url(#paint0_linear_5424_1287)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_5424_1287" x1="5.36779" y1="5.36755" x2="58.6325" y2="58.6323" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0D94E4" />
          <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
          <stop offset="0.5" stopColor="#2847C5" />
          <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

  }
];

// Cta Section

export const ctaText = {
  heading1: "Let’s Build a Smarter",
  heading2: "Healthcare Future, Together",
  description: " Our experts are ready to show you how Quantus Health empowers your team with automation, insight, and connected caretechnology that simply works.",
  demoButtonText: "Request a Demo",
  expertButtonText: "Talk to an Expert"
};

export const CTA_TOP_LEFT_ICON = <svg
  // className="absolute left-6 top-6 pointer-events-none z-20" width="128" height="128" 
  className="absolute left-2 top-2 sm:left-4 sm:top-4 md:left-6 md:top-6 pointer-events-none z-20 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
  viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.3334 47.9998C18.5044 47.9998 15.7913 49.1236 13.7909 51.124C11.7906 53.1244 10.6667 55.8375 10.6667 58.6665V69.3332C10.6667 72.1621 11.7906 74.8752 13.7909 76.8756C15.7913 78.876 18.5044 79.9998 21.3334 79.9998H42.6667C44.0812 79.9998 45.4378 80.5617 46.438 81.5619C47.4382 82.5621 48.0001 83.9187 48.0001 85.3332V106.666C48.0001 109.495 49.1239 112.209 51.1243 114.209C53.1247 116.209 55.8378 117.333 58.6667 117.333H69.3334C72.1624 117.333 74.8755 116.209 76.8759 114.209C78.8763 112.209 80.0001 109.495 80.0001 106.666V85.3332C80.0001 83.9187 80.562 82.5621 81.5622 81.5619C82.5624 80.5617 83.9189 79.9998 85.3334 79.9998H106.667C109.496 79.9998 112.209 78.876 114.209 76.8756C116.21 74.8752 117.333 72.1621 117.333 69.3332V58.6665C117.333 55.8375 116.21 53.1244 114.209 51.124C112.209 49.1236 109.496 47.9998 106.667 47.9998H85.3334C83.9189 47.9998 82.5624 47.4379 81.5622 46.4377C80.562 45.4375 80.0001 44.081 80.0001 42.6665V21.3332C80.0001 18.5042 78.8763 15.7911 76.8759 13.7907C74.8755 11.7903 72.1624 10.6665 69.3334 10.6665H58.6667C55.8378 10.6665 53.1247 11.7903 51.1243 13.7907C49.1239 15.7911 48.0001 18.5042 48.0001 21.3332V42.6665C48.0001 44.081 47.4382 45.4375 46.438 46.4377C45.4378 47.4379 44.0812 47.9998 42.6667 47.9998H21.3334Z" stroke="url(#paint0_linear_5424_1342)" strokeLinecap="round" strokeLinejoin="round" />
  <defs>
    <linearGradient id="paint0_linear_5424_1342" x1="10.7353" y1="10.7351" x2="117.265" y2="117.265" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0D94E4" />
      <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
      <stop offset="0.5" stopColor="#2847C5" />
      <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
      <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>;

export const CTA_TOP_RIGHT_ICON = <svg
  // className="absolute right-6 top-6 pointer-events-none z-20"
  className="absolute right-2 top-2 sm:right-4 sm:top-4 md:right-6 md:top-6 pointer-events-none z-20 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
  width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M63.9998 37.3333V58.6667M74.6665 112V96C74.6665 93.171 73.5427 90.4579 71.5423 88.4575C69.5419 86.4571 66.8288 85.3333 63.9998 85.3333C61.1708 85.3333 58.4577 86.4571 56.4574 88.4575C54.457 90.4579 53.3332 93.171 53.3332 96V112M74.6665 48H53.3332M95.9998 58.6667H106.666C109.495 58.6667 112.209 59.7905 114.209 61.7909C116.209 63.7913 117.333 66.5044 117.333 69.3333V101.333C117.333 104.162 116.209 106.875 114.209 108.876C112.209 110.876 109.495 112 106.666 112H21.3332C18.5042 112 15.7911 110.876 13.7907 108.876C11.7903 106.875 10.6665 104.162 10.6665 101.333V53.3333C10.6665 50.5044 11.7903 47.7913 13.7907 45.7909C15.7911 43.7905 18.5042 42.6667 21.3332 42.6667H31.9998M95.9998 112V26.6667C95.9998 23.8377 94.876 21.1246 92.8756 19.1242C90.8752 17.1238 88.1621 16 85.3332 16H42.6665C39.8375 16 37.1244 17.1238 35.124 19.1242C33.1236 21.1246 31.9998 23.8377 31.9998 26.6667V112" stroke="url(#paint0_linear_5424_1340)" strokeLinecap="round" strokeLinejoin="round" />
  <defs>
    <linearGradient id="paint0_linear_5424_1340" x1="10.7351" y1="16.0617" x2="106.082" y2="122.003" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0D94E4" />
      <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
      <stop offset="0.5" stopColor="#2847C5" />
      <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
      <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>;

export const CTA_BOTTOM_LEFT_ICON = <svg
  // className="absolute left-6 bottom-6 pointer-events-none z-20"
  // width="128" height="128"
  className="absolute left-2 bottom-2 sm:left-4 sm:bottom-4 md:left-6 md:bottom-6 pointer-events-none z-20 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
  viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M117.333 63.9998H104.107C101.776 63.9948 99.5076 64.7534 97.6487 66.1596C95.7898 67.5658 94.4427 69.5422 93.8134 71.7865L81.28 116.373C81.1993 116.65 81.0308 116.893 80.8 117.066C80.5692 117.24 80.2885 117.333 80 117.333C79.7116 117.333 79.4308 117.24 79.2 117.066C78.9693 116.893 78.8008 116.65 78.72 116.373L49.2801 11.6265C49.1993 11.3496 49.0309 11.1063 48.8001 10.9332C48.5693 10.7601 48.2886 10.6665 48.0001 10.6665C47.7116 10.6665 47.4309 10.7601 47.2001 10.9332C46.9693 11.1063 46.8008 11.3496 46.7201 11.6265L34.1867 56.2131C33.5599 58.4486 32.2208 60.4186 30.3727 61.8239C28.5246 63.2292 26.2684 63.9932 23.9467 63.9998H10.6667" stroke="url(#paint0_linear_5424_1346)" strokeLinecap="round" strokeLinejoin="round" />
  <defs>
    <linearGradient id="paint0_linear_5424_1346" x1="10.7353" y1="10.7351" x2="117.265" y2="117.265" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0D94E4" />
      <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
      <stop offset="0.5" stopColor="#2847C5" />
      <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
      <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>;

export const CTA_BOTTOM_RIGHT_ICON = <svg
  // className="absolute right-6 bottom-6 pointer-events-none z-20"
  // width="128" height="128" 

  className="absolute right-2 bottom-2 sm:right-4 sm:bottom-4 md:right-6 md:bottom-6 pointer-events-none z-20 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"

  viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M106.667 10.6666V31.9999M117.333 21.3332H95.9999M58.7572 15.0079C58.9858 13.7845 59.635 12.6795 60.5924 11.8843C61.5499 11.0891 62.7553 10.6538 63.9999 10.6538C65.2445 10.6538 66.4499 11.0891 67.4074 11.8843C68.3649 12.6795 69.0141 13.7845 69.2426 15.0079L74.8479 44.6506C75.246 46.758 76.2702 48.6965 77.7867 50.2131C79.3033 51.7296 81.2418 52.7538 83.3493 53.1519L112.992 58.7572C114.215 58.9858 115.32 59.635 116.116 60.5924C116.911 61.5499 117.346 62.7553 117.346 63.9999C117.346 65.2445 116.911 66.4499 116.116 67.4074C115.32 68.3649 114.215 69.0141 112.992 69.2426L83.3493 74.8479C81.2418 75.246 79.3033 76.2702 77.7867 77.7867C76.2702 79.3033 75.246 81.2418 74.8479 83.3493L69.2426 112.992C69.0141 114.215 68.3649 115.32 67.4074 116.116C66.4499 116.911 65.2445 117.346 63.9999 117.346C62.7553 117.346 61.5499 116.911 60.5924 116.116C59.635 115.32 58.9858 114.215 58.7572 112.992L53.1519 83.3493C52.7538 81.2418 51.7296 79.3033 50.2131 77.7867C48.6965 76.2702 46.758 75.246 44.6506 74.8479L15.0079 69.2426C13.7845 69.0141 12.6795 68.3649 11.8843 67.4074C11.0891 66.4499 10.6538 65.2445 10.6538 63.9999C10.6538 62.7553 11.0891 61.5499 11.8843 60.5924C12.6795 59.635 13.7845 58.9858 15.0079 58.7572L44.6506 53.1519C46.758 52.7538 48.6965 51.7296 50.2131 50.2131C51.7296 48.6965 52.7538 46.758 53.1519 44.6506L58.7572 15.0079ZM31.9999 106.667C31.9999 112.558 27.2243 117.333 21.3332 117.333C15.4422 117.333 10.6666 112.558 10.6666 106.667C10.6666 100.776 15.4422 95.9999 21.3332 95.9999C27.2243 95.9999 31.9999 100.776 31.9999 106.667Z" stroke="url(#paint0_linear_5424_1344)" strokeLinecap="round" strokeLinejoin="round" />
  <defs>
    <linearGradient id="paint0_linear_5424_1344" x1="10.7224" y1="10.7224" x2="117.277" y2="117.277" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0D94E4" />
      <stop offset="0.25" stopColor="#0D94E4" stopOpacity="0.25" />
      <stop offset="0.5" stopColor="#2847C5" />
      <stop offset="0.75" stopColor="#2847C5" stopOpacity="0.5" />
      <stop offset="1" stopColor="#0D94E4" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>;