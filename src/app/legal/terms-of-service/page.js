import React from "react";
import TermsOfService from "@/components/sections/terms-of-service/terms-of-service";
import { ROUTES } from "@/constants/routes";
import { getSiteUrl } from "@/constants/site";

const title = "Terms of Service | Quantus Health";
const description =
  "Review the Quantus Health Terms of Service to learn about the rules and conditions for using our healthcare products and services.";

export const metadata = {
  title,
  description,
  keywords: [
    "Quantus Health Terms of Service",
    "Terms and conditions",
    "User agreement",
    "Service policies",
    "Healthcare product terms",
  ],
  alternates: { canonical: `${getSiteUrl()}${ROUTES.LEGAL.TERMS}` },
  openGraph: { title, description, url: ROUTES.LEGAL.TERMS },
  twitter: { title, description },
};

const Page = () => {
    return (
        <TermsOfService />
    )
}

export default Page