import { cn } from "@/lib/utils";
import React from "react";

const metrics = [
  {
    title: "Performance Metric",
    label1: "Clean Claim Rate",
    label2: "70% – 75%",
    label3: "98% – 99%",
    label4: "Reduces Costly Rework.",
    label5: "70% – 75%",
  },
  {
    title: "Manual Billing Standards",
    label1: "Days In AR",
    label2: "45 – 60 Days",
    label3: "< 30 Days",
    label4: "Improves Cash Flow.",
    label5: "70% – 75%",
  },
  {
    title: "Quantus Health Automation",
    label1: "Charge Accuracy",
    label2: "85% – 90%",
    label3: "99.9%",
    label4: "Prevents Lost Revenue.",
    label5: "70% – 75%",
  },
  {
    title: "Business Impact",
    label1: "Denial Rework Cost",
    label2: "$25 – $30",
    label3: "Near Zero",
    label4: "Slashes Staff Overhead.",
    label5: "70% – 75%",
  },
];

const getMetricRows = (row) => [
  row.label1,
  row.label2,
  row.label3,
  row.label4,
  row.label5,
];

const HomeSection8 = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl lg:max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-[30px] font-semibold font-syne leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Performance Benchmarks:{" "}
            <span className="text-[#0D94E5]">Manual Vs.</span>{" "}
            <span className="text-[#111827]">Automated Revenue Cycles</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Manual billing creates fragmented data and frequent entry errors.
            Shifting to revenue cycle automation closes the gap between service
            delivery and payment. This proactive approach ensures every patient
            encounter is tracked and billed with precision.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Integrated healthcare technology eliminates the guesswork of
            traditional workflows. By utilizing automated charge capture,
            clinics reduce administrative overhead and accelerate
            reimbursements. This transition secures practice income and
            optimizes long-term financial stability.
          </p>

          <h3 className="mt-9 font-syne text-lg font-semibold text-[#111827] sm:mt-10 sm:text-xl lg:text-2xl">
            Comparative Efficiency Analysis
          </h3>
        </header>

        <div className="mt-8 md:mt-10">
          {/* Mobile + small tablet: stacked comparison cards */}
          <div className="grid grid-cols-1 gap-0 md:hidden">
            {metrics.map((row, index) => (
              <article
                key={row.title}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-slate-50",
                  index === 2
                    ? "border-[3px] border-primary"
                    : index === 3
                      ? "border-[3px] border-sky-300"
                      : "border-slate-200"
                )}
              >
                <h4 className="border-b border-slate-200 px-4 py-3 text-base font-bold text-[#111827]">
                  {row.title}
                </h4>
                <div className="text-sm font-semibold text-[#111827]">
                  {getMetricRows(row).map((label, labelIndex) => (
                    <p
                      key={`${row.title}-${labelIndex}`}
                      className={cn(
                        "px-4 py-3",
                        labelIndex % 2 === 0 ? "bg-gray-100" : "bg-slate-50"
                      )}
                    >
                      {label}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Desktop + tablet: 4-column comparison table */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-0 rounded-[34px] p-0">
              {metrics.map((row, index) => (
                <article
                  key={row.title}
                  className={cn(
                    "overflow-hidden rounded-xl border py-6",
                    index === 2
                      ? "border-[3px] border-primary"
                      : index === 3
                        ? "border-[3px] border-sky-300"
                        : "border-slate-200 bg-slate-50"
                  )}
                >
                  <h4
                    className={cn(
                      "border-b border-slate-200 bg-slate-50 px-4 py-4 text-sm font-bold text-[#111827] lg:px-6 lg:text-base",
                      index === 0 && "rounded-tl-[12px]",
                      index === metrics.length - 1 && "rounded-tr-[12px]"
                    )}
                  >
                    {row.title}
                  </h4>
                  {getMetricRows(row).map((label, labelIndex) => (
                    <p
                      key={`${row.title}-desktop-${labelIndex}`}
                      className={cn(
                        "border-b border-slate-200 px-4 py-4 text-xs font-semibold text-[#111827] lg:px-6 lg:text-sm",
                        labelIndex % 2 === 0 ? "bg-gray-100" : "bg-slate-50"
                      )}
                    >
                      {label}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection8;