import { cn } from "@/lib/utils";
import React from "react";

const metrics = [
    {
        title: "Key Metric",
        label1: "Documentation",
        label2: "Revenue",
        label3: "Claim Status",
        label4: "Billing Speed",
    },
    {
        title: "Manual Workflow (Old Way)",
        label1: "Stressful nights of data entry",
        label2: "10%–15% lost to missed visits",
        label3: "Frequent errors and denials",
        label4: "3 to 7-day administrative lag",
    },
    {
        title: "QChargeAI (New Way)",
        label1: "Instant capture at the bedside",
        label2: "Every dollar captured and billed",
        label3: "50% reduction in denied claims",
        label4: "Real-time sync to billing office",
    }
];

const ChargeCaptureSection7 = () => {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl lg:max-w-7xl">
                <header className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl font-syne sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                        Your Practice{" "}
                        <span className="text-[#0D94E5]">Before and After </span>{" "}
                        <span className="text-[#111827]">QChargeAI</span>
                    </h2>

                    <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        Manual workflows cause burnout and revenue loss. QChargeAI replaces this friction with automation, saving physicians hours of time while ensuring every dollar earned is captured accurately and collected fast.
                    </p>

                </header>

                <div className="mt-8 sm:mt-10 relative w-full rounded-2xl sm:rounded-[34px]">

                    <div className="relative z-10">
                        {/* Desktop header */}
                        <div className="flex flex-col lg:flex-row w-full text-xs sm:text-sm font-semibold text-[#111827] p-2 sm:p-3 gap-2 sm:gap-3 lg:gap-0">
                            {metrics.map((row, index) => {
                                const labels = [row.label1, row.label2, row.label3, row.label4];
                                return (
                                    <div
                                        key={index}
                                        className={cn(
                                            "bg-white border border-gray-400 py-2 sm:py-3 md:py-4 w-full min-w-0 lg:flex-1",
                                            index === 0 && "rounded-t-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-none",
                                            index === metrics.length - 1 && "rounded-b-xl lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-bl-none",
                                            index === 2
                                                ? "border-2 sm:border-[3px] border-primary rounded-xl lg:ml-2.5"
                                                : "bg-slate-50"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "py-3 sm:py-4 px-3 sm:px-4 md:px-6 bg-slate-50 border-b border-slate-200 font-bold leading-snug",
                                                index === 0 && "rounded-t-[34px] lg:rounded-tl-[34px] lg:rounded-tr-none",
                                                index === metrics.length - 1 && "lg:rounded-tr-[34px]"
                                            )}
                                        >
                                            {row.title}
                                        </div>
                                        {labels.map(
                                            (label, labelIndex) => (
                                                <div
                                                    key={labelIndex}
                                                    className={cn(`py-3 sm:py-4 px-3 sm:px-4 md:px-6 border-slate-200 leading-relaxed ${labelIndex % 2 === 0 ? "bg-gray-100" : "bg-slate-50"
                                                        }`,)}
                                                >
                                                    {label}
                                                </div>
                                            )
                                        )}
                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChargeCaptureSection7;