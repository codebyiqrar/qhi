import FaqSection from "@/components/ui/faq-section";
import React from "react";
import { ehrFaqItems } from "@/constants/electronic-health-record";

const EHRFaq = () => {
  return <FaqSection items={ehrFaqItems} />;
};

export default EHRFaq;
