import React from "react";
import RequestDemoHero from "@/components/sections/request-demo/RequestDemoHero";
import RequestDemoShowcaseSection from "@/components/sections/request-demo/RequestDemoShowcaseSection";
import RequestDemoHowItWorksSection from "@/components/sections/request-demo/RequestDemoHowItWorksSection";
import RequestDemoWhyDemoSection from "@/components/sections/request-demo/RequestDemoWhyDemoSection";
import RequestDemoReachFormSection from "@/components/sections/request-demo/RequestDemoReachFormSection";
import { ROUTES } from "@/constants/routes";
import { getSiteUrl } from "@/constants/site";

const title = "Request a Demo | Quantus Health";
const description =
  "Schedule a personalized demo of Quantus Health solutions—see QChargeAI, QRPM, QRCM, and QEHR in action for your organization.";

export const metadata = {
  title,
  description,
  alternates: { canonical: `${getSiteUrl()}${ROUTES.REQUEST_DEMO}` },
  openGraph: {
    title,
    description,
    url: ROUTES.REQUEST_DEMO,
  },
  twitter: { title, description },
};

const RequestDemo = () => {
    return (
        <React.Fragment>
            <RequestDemoHero />
            <RequestDemoShowcaseSection />
            <RequestDemoHowItWorksSection />
            <RequestDemoWhyDemoSection />
            <RequestDemoReachFormSection />
        </React.Fragment>
    )
}

export default RequestDemo