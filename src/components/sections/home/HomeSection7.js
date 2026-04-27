import React from "react";

const benefits = [
    "Strict HIPAA Compliance For All Patient Records.",
    "Encryption Keeps All Sensitive Data Fully Scrambled.",
    "Regular Audits Find And Fix Potential Vulnerabilities.",
    "Control Which Staff See Specific Office Data.",
    "Cloud Backups Prevent Any Permanent Data Loss.",
    "Reliable Monitoring Keeps Your Practice Fully Protected.",
];

export default function HomeSection7() {
    return (
        <section className="bg-[#0f1419] text-white px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start lg:items-stretch">
                <div className="min-w-0 max-w-xl space-y-5 sm:space-y-6 py-10 sm:py-12 md:py-14 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-syne font-semibold tracking-tight leading-tight wrap-break-word">
                        Connecting Your EHR For{" "}
                        <span className="text-[#0D94E5]">Real-Time</span> Billing
                        Accuracy
                    </h2>

                    <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                        Our integrated healthcare technology bridges the divide
                        between daily clinical rounds and your back-office
                        financial tasks. We establish a reliable data connection
                        that captures every medical service without requiring
                        your team to change how they work.
                    </p>

                    <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                        This sophisticated revenue cycle management approach
                        removes the friction caused by manual data entry and
                        disjointed software. By aligning your clinical records
                        with your billing engine, we help you achieve higher
                        accuracy and predictable cash flow.
                    </p>

                    <h3 className="text-lg sm:text-xl font-syne lg:text-2xl font-semibold mt-6 sm:mt-8 wrap-break-word">
                        The Practical Benefits
                    </h3>

                    <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-[#94a3b8] list-disc list-inside">
                        {benefits.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed pt-2">
                        Our system acts as a bridge for your data. We ensure your
                        clinical work and billing stay perfectly aligned every
                        single day.
                    </p>
                </div>

                <div className="relative min-w-0 -mx-4 sm:-mx-6 lg:mx-0 lg:-mr-8 xl:-mr-16 2xl:-mr-24 order-first lg:order-0 hidden lg:block">
                    <div className="w-full max-w-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-l-2xl lg:rounded-r-none aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-full">
                        <img
                            src="/home/homeSection7.png"
                            alt="Digital tunnel representing real-time EHR and billing connectivity"
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
