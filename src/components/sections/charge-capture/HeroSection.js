import BackgroundAccents from "@/components/ui/BackgroundAccents";
import { qchargeHero } from "@/constants/q-charge";
import { ROUTES } from "@/constants/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroSection = () => {

    const { badge, titleParts, description1, description2, features, ctaText } =
        qchargeHero;

    return (
        <BackgroundAccents className="font-sans">
            <main className="relative z-10 min-h-svh pt-18 pb-3 px-4 sm:px-6 flex items-center">
                <div className="w-full max-w-7xl mx-auto text-center">
                    {/* Pill label */}
                    <div className="inline-block max-w-full px-4 sm:px-6 py-2 rounded-full border border-slate-300 bg-transparent mt-4 sm:mt-6 md:mt-8 mb-3">
                        <span className="block text-slate-800 font-semibold tracking-wide text-xs sm:text-sm md:text-base leading-snug">
                            {badge}
                        </span>
                    </div>

                    <h1 className="text-3xl font-syne sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-3 max-w-4xl mx-auto px-1 sm:px-0">
                        <span>{titleParts.dark}</span>{" "}
                        <span className="text-primary">{titleParts.blue[0]}</span>{" "}
                        {/* <span>Via AI Healthcare Billing Software</span> */}
                    </h1>

                    {/* Description paragraphs */}
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-2 max-w-5xl mx-auto px-1 sm:px-0">
                        {description1}
                    </p>
                    {/* <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-5xl mx-auto px-1 sm:px-0">
                        {description2}
                    </p> */}

                    {/* 2x2 feature grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mx-auto mb-8 md:mb-10 max-w-6xl">
                        {features.map((text, i) => (
                            <div
                                key={i}
                                className="w-full rounded-full border border-slate-400 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-center text-slate-600 font-medium text-sm md:text-base leading-snug"
                            >
                                {text}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                        href={ROUTES.REQUEST_DEMO}
                        className="group inline-flex w-full mt-5 sm:w-auto justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-5 sm:px-6 py-3 rounded-full transition-all shadow-lg text-sm sm:text-base"
                    >
                        Book a Demo
                        <span className="inline-flex rounded-full text-black bg-white  p-1 group-hover:translate-x-0.5 transition-transform">
                            <ArrowRight className="w-5 h-5" />
                        </span>
                    </Link>
                </div>
            </main>
        </BackgroundAccents>
    );
};

export default HeroSection;
