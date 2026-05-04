import React from "react";
import PrivacyPolicy from "@/components/sections/privacy-policy/privacy-policy";
import { ROUTES } from "@/constants/routes";
import { getSiteUrl } from "@/constants/site";

const title = "Privacy Policy | Quantus Health";
const description =
  "Read the Quantus Health Privacy Policy to understand how we collect, protect, and use your information.";

export const metadata = {
  title,
  description,
  keywords: [
    "Quantus Health Privacy Policy",
    "Data protection",
    "User privacy",
    "Information security",
    "Privacy practices",
  ],
  alternates: { canonical: `${getSiteUrl()}${ROUTES.LEGAL.PRIVACY}` },
  openGraph: { title, description, url: ROUTES.LEGAL.PRIVACY },
  twitter: { title, description },
};

const Page = () => {
    return (
        <PrivacyPolicy />
    )
}

export default Page