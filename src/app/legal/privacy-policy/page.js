import React from 'react'
import PrivacyPolicy from '@/components/sections/privacy-policy/privacy-policy'
export const metadata = {
    title: "Privacy Policy | Quantus Health",
    description:
        "Read the Quantus Health Privacy Policy to understand how we collect, protect, and use your information.",
    keywords: [
        "Quantus Health Privacy Policy",
        "Data protection",
        "User privacy",
        "Information security",
        "Privacy practices",
    ],
};

const Page = () => {
    return (
        <PrivacyPolicy />
    )
}

export default Page