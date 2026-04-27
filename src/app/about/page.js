import AboutHero from '@/components/sections/about/AboutHero';
import AboutSection2 from '@/components/sections/about/AboutSection2';
import React from 'react'

export const metadata = {
    title: "About Quantus Health",
    description:
        "Quantus Health is committed to delivering innovative healthcare products and digital solutions that improve patient care and streamline clinical operations.",
    keywords: [
        "About Quantus Health",
        "Quantus Health company",
        "Healthcare product company",
        "Digital health solutions",
        "Medical software provider",
        "Healthcare technology company",
        "Quantus Health mission",
    ],
};

const Page = () => {
    return (
        <React.Fragment>
            <AboutHero />
            <AboutSection2 />
        </React.Fragment>
    )
}

export default Page