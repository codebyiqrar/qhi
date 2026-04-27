"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, } from "lucide-react";

/**
 * Enhanced Home Carousel
 * Matches the reference image style:
 * - Minimalist typography
 * - Bottom-centered pagination dots
 * - Right-side floating action menu
 * - Soft gradient transition from white to image
 */

const products = [
    {
        id: 1,
        name: "QRCM",
        tagline: "Revenue Cycle Management",
        description: "End-to-end revenue cycle management powered by intelligent automation to maximize your clinical reimbursements.",
        // New reliable medical-financial image
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2011",
        href: "/solutions/revenue-cycle-management",
    },
    {
        id: 2,
        name: "QChargeAI",
        tagline: "AI-Driven Charge Capture",
        description: "Eliminate lost revenue with smart bedside charge capture. Cleaner billing starts at the point of care.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
        href: "/solutions/charge-capture",
    },
    {
        id: 3,
        name: "QRPM",
        tagline: "Remote Patient Monitoring",
        description: "Extend care beyond the clinic walls with real-time patient tracking and actionable health insights.",
        image: "https://images.unsplash.com/photo-1584931423298-c576fda54bd2?auto=format&fit=crop&q=80&w=2070",
        href: "/solutions/remote-patient-monitoring",
    },
    {
        id: 4,
        name: "QEHR",
        tagline: "Electronic Health Records",
        description: "A modern, intuitive electronic health record system designed to reduce provider burnout and improve patient outcomes.",
        image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=2070",
        href: "/solutions/electronic-health-record",
    },
];


const SLIDE_DURATION = 8000;

export default function HomeCarousal() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % products.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(handleNext, SLIDE_DURATION);
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <section
            className="relative flex min-h-svh w-full flex-col bg-white "
            aria-label="Product highlights"
        >
            {/* pt-18 (~4.5rem) clears fixed Header (pt-4 + h-14). flex-1 fills viewport below that padding. */}
            <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-x-clip">
                {/* Slide Content: stretch on md so image h-full resolves; min-w-0 avoids flex overflow gap */}
                <div className="relative flex min-h-0 w-full min-w-0 flex-1 flex-col md:flex-row md:items-stretch">
                    {/* Left Text Content */}
                    <div className="relative z-20 order-2 flex w-full min-w-0 flex-col justify-center px-8 py-10 md:order-1 md:w-2/5 md:px-12 lg:px-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-6 font-syne font-semibold tracking-tight leading-tight wrap-break-word">
                                    {products[activeIndex].name}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
                                    {products[activeIndex].description}
                                </p>
                                <a
                                    href={products[activeIndex].href}
                                    className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/20  px-5 py-2.5 text-sm font-semibold  shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 bg-primary text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                >
                                    Learn more
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Image: order-1 on small screens so photo sits above copy */}
                    <div className="relative order-1 min-h-[min(42vh,320px)] w-full min-w-0 md:order-2 md:min-h-0 md:h-auto md:w-3/5 md:flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="relative h-full min-h-[min(42vh,320px)] w-full md:absolute md:inset-0 md:min-h-0"
                            >
                                {/* The Soft Gradient Fade (White to Image) */}
                                <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-white via-white/20 to-transparent" />

                                <img
                                    src={products[activeIndex].image}
                                    alt={products[activeIndex].name}
                                    className="h-full w-full min-h-[min(42vh,320px)] object-cover object-center md:min-h-0"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Centered Pagination (from reference) */}
                <div className="pointer-events-auto absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                    {products.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                                ? "w-8 bg-primary"
                                : "w-2.5 bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}