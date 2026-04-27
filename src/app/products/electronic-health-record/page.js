import EHRFaq from "@/components/sections/electronic-health-record/EHRFaq";
import EHRSection3 from "@/components/sections/electronic-health-record/EHRSection3";
import EHRSection8 from "@/components/sections/electronic-health-record/EHRSection8";
import EHRWorkflow from "@/components/sections/electronic-health-record/EHRWorkflow";
import Hero from "@/components/sections/electronic-health-record/Hero";
import React from "react";

export const metadata = {
  title: "QEHR | Quantus Health",
  description:
    "QEHR by Quantus Health is a modern Electronic Health Record for ambulatory practices—unified charting, orders and results, and interoperability without unnecessary complexity.",
  keywords: [
    "QEHR",
    "Quantus Health EHR",
    "Electronic Health Record",
    "Ambulatory EHR",
    "Clinical documentation software",
  ],
};

const ElectronicHealthRecord = () => {
  return (
    <React.Fragment>
      <Hero />
      <EHRSection3 />
      <EHRWorkflow />
      <EHRSection8 />
      <EHRFaq />
    </React.Fragment>
  );
};

export default ElectronicHealthRecord;
