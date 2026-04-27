import React from "react";
import CareersContent from "@/components/sections/careers/CareersContent";

export const metadata = {
  title: "Careers at Quantus Health",
  description:
    "Explore careers at Quantus Health and help build AI-powered healthcare solutions that improve clinical workflows and patient outcomes.",
  keywords: [
    "Quantus Health careers",
    "healthcare jobs",
    "health tech careers",
    "AI healthcare jobs",
    "careers at Quantus Health",
  ],
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <React.Fragment>
      <CareersContent />
    </React.Fragment>
  );
}
