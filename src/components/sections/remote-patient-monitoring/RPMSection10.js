import FaqSection from '@/components/ui/faq-section'
import React from 'react'

const faqItems = [
    {
        question: "What is QRPM?",
        answer:
            "QRPM (Quantus Remote Patient Monitoring) is our end-to-end RPM platform that connects patients to care teams, captures device data, and integrates with your EHR so clinicians can deliver proactive care.",
    },
    {
        question: "How does patient enrollment work?",
        answer:
            "Enrollment is simple: add patients via CSV or EHR sync, assign monitoring protocols, and devices are shipped or patients install the companion app. Clinicians see enrollment status in the dashboard.",
    },
    {
        question: "Which platforms does QRPM support?",
        answer:
            "QRPM supports iOS, Android, and a web-based clinician dashboard. It also integrates with major EHRs using HL7/FHIR standards for seamless data exchange.",
    },
    {
        question: "Can I get a demo of QRPM?",
        answer:
            "Yes  request a demo through our request a demo page to explore how QRPM can transform your remote care program.",
    },
]
const RPMSection10 = () => {
    return (
        <FaqSection items={faqItems} />
    )
}

export default RPMSection10