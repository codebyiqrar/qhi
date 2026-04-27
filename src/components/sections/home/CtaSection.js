"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { GradientBadge } from "@/components/ui/gradientBadge";
import {
  CTA_BOTTOM_LEFT_ICON,
  CTA_BOTTOM_RIGHT_ICON,
  CTA_TOP_LEFT_ICON,
  CTA_TOP_RIGHT_ICON,
  ctaText,
} from "@/constants/home";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

const CtaSection = ({ heading1, heading2, description }) => {
  const router = useRouter()

  const handleNavigate = () => {
    router.push(ROUTES.CONTACT);
  }

  return (
    <section className="relative w-full bg-background px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-12 sm:py-16 md:py-24 lg:py-28">
      {/* Background Container */}
      <div
        className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl shadow-lg
        before:absolute before:inset-x-0 before:top-0 before:h-[20%] before:bg-[linear-gradient(180deg,rgba(13,148,228,1),rgba(249,250,251,0))]
        after:absolute after:inset-x-0 after:bottom-0 after:h-[20%] after:bg-[linear-gradient(180deg,rgba(249,250,251,0),rgba(13,148,228,1))]"
      >
        {/* Decorative Icons */}
        <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-28">{CTA_TOP_LEFT_ICON}</div>
        <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-28">{CTA_TOP_RIGHT_ICON}</div>

        {/* Content */}
        <div className="relative z-10 bg-white/60 dark:bg-card/60 backdrop-blur-md text-center px-4 sm:px-8 md:px-16 py-10 sm:py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <GradientBadge text="AI-Powered Healthcare Suite" />

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
              {heading1}
              <br className="hidden sm:block" />
              {heading2}
            </h2>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-2xl border-2 shadow-lg px-6 sm:px-8"
                onClick={handleNavigate}
              >
                {ctaText?.demoButtonText}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-2xl border-2 bg-border px-6 sm:px-8"
                onClick={handleNavigate}
              >
                {ctaText?.expertButtonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="absolute bottom-0 left-0 w-16 sm:w-20 md:w-28">{CTA_BOTTOM_LEFT_ICON}</div>
        <div className="absolute bottom-0 right-0 w-16 sm:w-20 md:w-28">{CTA_BOTTOM_RIGHT_ICON}</div>
      </div>
    </section>
  );
};

export default CtaSection;

