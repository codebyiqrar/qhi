import React from "react";
import ContactReachFormSection from "@/components/sections/contact/ContactReachFormSection";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactSection4 from "@/components/sections/contact/ContactSection4";
import ContactSection3 from "@/components/sections/contact/ContactSection3";

export const metadata = {
    title: "Contact Quantus Health",
    description:
        "Get in touch with Quantus Health for inquiries about our healthcare products, solutions, or support.",
    keywords: [
        "Contact Quantus Health",
        "Quantus Health support",
        "Healthcare product inquiries",
        "Customer support",
        "Get in touch Quantus Health",
    ],
};

const Page = () => {
    return (
        <React.Fragment>
            <ContactHero />
            <ContactReachFormSection />
            <ContactSection3 />
            <ContactSection4 />
        </React.Fragment>
    );
};

export default Page;