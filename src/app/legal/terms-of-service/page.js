import React from 'react'
import TermsOfService from '@/components/sections/terms-of-service/terms-of-service'

export const metadata = {
    title: "Terms of Service | Quantus Health",
    description:
        "Review the Quantus Health Terms of Service to learn about the rules and conditions for using our healthcare products and services.",
    keywords: [
        "Quantus Health Terms of Service",
        "Terms and conditions",
        "User agreement",
        "Service policies",
        "Healthcare product terms",
    ],
};

const Page = () => {
    return (
        <TermsOfService />
    )
}

export default Page