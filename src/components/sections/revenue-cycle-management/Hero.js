import BackgroundAccents from "@/components/ui/BackgroundAccents";
import { rcmHero } from "@/constants/revenue-cycle-management";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const { badge, titleParts, description1, description2, features, ctaText } =
    rcmHero;

  return (
    <BackgroundAccents className=" font-sans">
      <main className="relative h-svh z-10 px-4 pt-16  sm:px-6  sm:pb-16 md:px-8 ">
        <div className="mx-auto w-full max-w-7xl text-center">
          {/* Pill label */}
          <div className="mb-3 mt-6 inline-block rounded-full border border-slate-300 bg-transparent px-4 py-2 sm:mt-8 sm:px-6">
            <span className="text-sm font-semibold tracking-wide text-slate-800 md:text-base">
              {badge}
            </span>
          </div>

          {/* Main title — Smart (blue) + Revenue Cycle Management (dark) + Tools (blue) */}
          <h1 className="mx-auto mb-3 max-w-4xl px-1 text-3xl font-syne font-bold leading-tight text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-primary">{titleParts.blue[0]}</span>{" "}
            <span>{titleParts.dark}</span>{" "}
            <span className="text-primary">{titleParts.blue[1]}</span>
          </h1>

          {/* Description paragraphs */}
          <p className="mx-auto mb-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg lg:max-w-5xl">
            {description1}
          </p>
          {/* <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg lg:max-w-5xl">
            {description2}
          </p> */}

          {/* 2x2 feature grid */}
          <div className="mx-auto my-8 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {features.map((text, i) => (
              <div
                key={i}
                className="flex min-h-12 items-center justify-center rounded-full border border-slate-400 bg-white px-4 py-3 text-center text-sm font-medium text-slate-600 sm:px-5 md:text-base"
              >
                {text}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group inline-flex  items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary/90 sm:px-6 sm:py-3 sm:text-base"
          >
            {ctaText}
            <span className="inline-flex rounded-full bg-white text-primary p-1 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
          </Link>
        </div>
      </main>
    </BackgroundAccents>
  );
};

export default Hero;
