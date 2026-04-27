import BackgroundAccents from "@/components/ui/BackgroundAccents";
import { ROUTES } from "@/constants/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const badge = "QEHR (Electronic Health Record)";
  const description1 =
    "QEHR is a modern electronic health record built for speed at the bedside—unified charting, orders and results, and interoperability so your team documents less and cares more.";
  const features = [
    "Fast, Role-Aware Clinical Workspaces",
    "HIPAA-Aligned Security & Access Controls",
    "Standards-Based Data Exchange",
    "Designed For Ambulatory & Multi-Site Groups",
  ];
  const ctaText = "Request A Product Demo";

  return (
    <BackgroundAccents className="font-sans">
      <main className="relative z-10 px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20 md:px-8 md:pb-32 md:pt-24">
        <div className="mx-auto w-full max-w-7xl text-center">
          <div className="mb-3 mt-6 inline-block max-w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 sm:mt-8 sm:px-6">
            <span className="text-sm font-semibold tracking-wide text-slate-800 md:text-base">
              {badge}
            </span>
          </div>

          <h1 className="mx-auto mb-3 max-w-4xl font-syne text-3xl font-bold leading-tight text-slate-800 sm:text-4xl md:text-5xl">
            <span>The </span>
            <span className="text-primary">Electronic Health Record</span>
            <span> Built For How You Actually Practice</span>
          </h1>

          <p className="mx-auto mb-6 max-w-5xl px-1 text-sm leading-relaxed text-slate-600 sm:px-0 sm:text-base md:text-lg">
            {description1}
          </p>

          <div className="mx-auto mb-8 grid w-full max-w-6xl grid-cols-1 gap-3 sm:mb-10 sm:grid-cols-2 sm:gap-4">
            {features.map((text, i) => (
              <div
                key={i}
                className="rounded-full border border-slate-400 bg-white px-4 py-3 text-center text-sm font-medium leading-snug text-slate-600 whitespace-normal sm:px-5 md:text-base"
              >
                {text}
              </div>
            ))}
          </div>

          <Link
            href={ROUTES.REQUEST_DEMO}
            className="group inline-flex max-w-full w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary/90 sm:w-auto sm:px-6 sm:text-base"
          >
            {ctaText}
            <span className="inline-flex rounded-full bg-white p-1 text-black transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </main>
    </BackgroundAccents>
  );
};

export default Hero;
