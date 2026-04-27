"use client";

import React from "react";
import FaqSection from "@/components/ui/faq-section";

const DEFAULT_FAQ_ITEMS = [
    {
        question: "What is the primary benefit of using the Quantus Health revenue platform?",
        answer:
            "Quantus Health Gives Your Practice A Single Hub To Automate Billing And Track Patient Visits, Finally Making Your Financial Operations Predictable And Profitable.",
    },
    {
        question: "How does automated charge capture prevent revenue loss for busy practices?",
        answer:
            "Automated charge capture ensures every service is documented and billed in real time, reducing missed charges and revenue leakage for high-volume practices.",
    },
    {
        question: "Will I need to replace my current EHR to use this system?",
        answer:
            "No. Quantus Health integrates with your existing EHR so you can keep your current workflow while adding billing automation and revenue visibility.",
    },
    {
        question: "How does the QRCM software help reduce insurance claim denials?",
        answer:
            "QRCM software validates claims before submission, flags missing or incorrect data, and helps you correct issues so more claims are paid on first submission.",
    },
    {
        question: "Is remote patient monitoring a secure option for my sensitive data?",
        answer:
            "Yes. Our remote patient monitoring is built with healthcare-grade security and compliance so your patients' data stays protected.",
    },
    {
        question: "How quickly can my medical practice start seeing financial results?",
        answer:
            "Many practices see improved revenue visibility and fewer missed charges within the first few weeks after going live with our platform.",
    },
];

const HomeSection12 = ({
    title = "Frequently Asked Questions",
    items = DEFAULT_FAQ_ITEMS,
    defaultOpenIndex = 0,
    idPrefix = "faq",
}) => {
    return (
        <FaqSection
            title={title}
            items={items}
            defaultOpenIndex={defaultOpenIndex}
            idPrefix={idPrefix}
        />
    );
};

export default HomeSection12;
