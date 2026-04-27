import FaqSection from '@/components/ui/faq-section'
import React from 'react'

const faqItems = [
    {
        question: 'What is QRCM?',
        answer:
            'QRCM (Quantus Revenue Cycle Management) is an AI-powered RCM solution that automates billing, claim validation, and payment reconciliation to improve financial performance for healthcare organizations.',
    },
    {
        question: 'How does QRCM help reduce claim denials?',
        answer:
            'QRCM uses AI-driven claim scrubbing and validation to detect missing or inaccurate data before submission, ensuring a higher first-pass acceptance rate and fewer payer rejections.',
    },
    {
        question: 'Can QRCM integrate with existing EHR and PMS systems?',
        answer:
            'Yes, QRCM integrates seamlessly with leading EHR and Practice Management systems to ensure smooth data exchange and workflow continuity.',
    },
    {
        question: 'Is QRCM secure and HIPAA compliant?',
        answer:
            'Absolutely. QRCM is fully HIPAA compliant and uses end-to-end encryption, ensuring that all patient and financial data remain protected at every stage.',
    },
    {
        question: 'How can I see QRCM in action?',
        answer:
            'You can request a personalized demo through our request a demo page to explore how QRCM optimizes your billing workflow and improves your revenue cycle.',
    },
]

const RCMSection9 = () => {
    return (
        <FaqSection
            title="Frequently Asked Questions"
            items={faqItems}
            idPrefix="rcm-faq"
        />
    )
}

export default RCMSection9