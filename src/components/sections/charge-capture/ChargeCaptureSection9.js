import FaqSection from '@/components/ui/faq-section'
import React from 'react'

const faqItems = [
    {
        question: "What is QChargeAI?",
        answer:
            'QChargeAI is an AI-powered charge capture solution for healthcare professionals. It helps you capture, validate, and submit charges in real time.',
    },
    {
        question: 'Is QChargeAI Available Offline?',
        answer:
            "No, QChargeAI requires an internet connection to function. All charge capture and validation happens in real-time through our secure cloud platform.",
    },
    {
        question: 'How secure is my data?',
        answer:
            'QChargeAI uses enterprise-grade encryption and secure cloud storage to ensure your patient data is safe at all times.',
    },
    {
        question: 'Which platforms does QChargeAI support?',
        answer:
            'QChargeAI is available on Web and iOS. Your data is synced seamlessly across all devices.',
    },

    {
        question: 'How can I see QChargeAI in action?',
        answer:
            'Absolutely! You can request a personalized demo through our request a demo page to explore how QChargeAI optimizes your billing workflow and improves your charge capture process.',
    },
]

const ChargeCaptureSection9 = () => {
    return (
        <FaqSection items={faqItems} />
    )
}

export default ChargeCaptureSection9