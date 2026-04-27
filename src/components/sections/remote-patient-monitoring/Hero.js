import BackgroundAccents from "@/components/ui/BackgroundAccents";
import { ROUTES } from "@/constants/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
    const badge = "QRPM (Remote Patient Monitoring)";
    const description1 =
        "Our QRPM platform combines QR code enrollment, real-time alerts, seamless EHR integration, automated billing, and advanced reporting all in one HIPAA compliant system powered by FDA-approved devices.";
    const description2 =
        "Quantus Health provides QRPM (Quantus Remote Patient Monitoring) to solve this by automating data collection through professional-grade cellular hardware. Our product ensures every patient reading is logged accurately, allowing your team to focus on providing high-quality care.";
    const features = [
        "98% Faster Clinical Response Rate",
        "99.9% HIPAA-Compliant Data Security",
        "100K+ Patients Monitored via QRPM",
        "24x7 Continuous Remote Monitoring",
    ];
    const ctaText = "Request A Product Demo";

    return (
        <BackgroundAccents className="font-sans">
            <main className="relative z-10 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8">
                <div className="w-full mx-auto text-center max-w-7xl">
                    {/* Pill label */}
                    <div className="inline-block max-w-full px-4 sm:px-6 py-2 rounded-full border border-slate-300 bg-transparent mt-6 sm:mt-8 mb-3">
                        <span className="text-slate-800 font-semibold tracking-wide text-sm md:text-base">
                            {badge}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-slate-800 leading-tight mb-3 max-w-4xl mx-auto">
                        <span>The Smart </span>
                        <span className="text-primary">Remote Patient Monitoring</span>{" "}
                        <span>System For Practices &amp; Clinics</span>
                    </h1>

                    {/* Description paragraphs */}
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-5xl mx-auto px-1 sm:px-0">
                        {description1}
                    </p>
                    {/* <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-5xl mx-auto px-1 sm:px-0">
                        {description2}
                    </p> */}

                    {/* 2x2 feature grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mx-auto mb-8 sm:mb-10 max-w-6xl w-full">
                        {features.map((text, i) => (
                            <div
                                key={i}
                                className="rounded-full border border-slate-400 bg-white px-4 sm:px-5 py-3 text-center text-slate-600 font-medium text-sm md:text-base leading-snug whitespace-normal"
                            >
                                {text}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                        href={ROUTES.REQUEST_DEMO}
                        className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-5 sm:px-6 py-3 rounded-full transition-all shadow-lg text-sm sm:text-base max-w-full"
                    >
                        {ctaText}
                        <span className="inline-flex rounded-full bg-white text-black p-1 group-hover:translate-x-0.5 transition-transform">
                            <ArrowRight className="w-5 h-5" />
                        </span>
                    </Link>
                </div>
            </main>
        </BackgroundAccents>
    );
};

export default Hero;
