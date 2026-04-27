import React from "react";

const features = [
    "Automation that catches every missed charge.",
    "Smart filters that stop claim denials.",
    "Real-time updates on your financial health.",
    "Devices that monitor patients from home.",
    "Systems that talk to each other perfectly.",
    "Simple tools that require minimal training.",
];

const HomeSection10 = () => {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-6xl lg:max-w-7xl text-center">
                <header className="mx-auto w-full max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-syne font-semibold tracking-tight leading-tight text-slate-900">
                        Quantus Health Fills The Gap By Introducing{" "}
                        <span className="text-[#0D94E5]">Automated Technologies</span>
                    </h2>

                    <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        We built our platform to act as the missing link between your
                        patient visits and your final payments. Instead of relying on
                        manual entry, Quantus Health uses smart automation to sync your
                        clinical work with your financial goals, ensuring no billable moment
                        is ever forgotten.
                    </p>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        Our technology works quietly in the background to catch errors
                        before they happen. By using AI-driven revenue cycle management, we
                        take the guesswork out of billing and monitoring, making your entire
                        practice run smoother and more predictably every single day.
                    </p>

                    <h3 className="mt-8 sm:mt-10 text-lg sm:text-xl lg:text-2xl font-syne font-semibold text-slate-900 ">
                        The Power Of Our Platform
                    </h3>
                </header>

                <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-3 sm:gap-5 lg:gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="relative w-full min-h-[72px] sm:min-h-[84px] rounded-full bg-transparent border-3 border-primary px-4 py-3 sm:px-6 sm:py-4 lg:px-7 lg:py-5 flex items-center justify-center text-center text-sm sm:text-base font-medium leading-snug text-slate-800"
                        >
                            <span className="text-black wrap-break-word">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeSection10;