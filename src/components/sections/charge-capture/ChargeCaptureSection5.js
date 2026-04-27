import { cn } from "@/lib/utils";
import React from "react";

const metrics = [
    {
        title: "Key Metric",
        values: [
            "Revenue Leakage",
            "Charge Lag Time",
            "Claim Denial Rate",
            "Coding Accuracy",
            "Documentation",
            "Audit Defense",
        ],
    },
    {
        title: "Manual Charge Capture",
        values: [
            "5% To 15% Lost Annually",
            "3 To 7 Days On Average",
            "11% Average Per Submission",
            "High Risk Of Under-Coding",
            "Paper Lists & Late Nights",
            "Inconsistent Paper Trails",
        ],
    },
    {
        title: "Automated QChargeAI",
        values: [
            "Less Than 1% Missed",
            "Real-Time (Under 24 Hours)",
            "50% Reduction In Denials",
            "Smart ICD-10 Suggestions",
            "Instant Bedside Capture",
            "Secure, Timestamped Digital Logs",
        ],
    },
];

const ChargeCaptureSection5 = () => {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-24">
            <div className="mx-auto max-w-6xl lg:max-w-7xl">
                <header className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-syne font-semibold tracking-tight leading-tight">
                        Manual vs. Automated{" "} <span className="text-primary">Charge Capture: </span>
                        Why <span className="text-primary">Automation</span> is Necessary
                    </h2>

                    <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        Sticking with manual billing creates deep financial gaps that modern clinics simply can't ignore. According to the HFMA (Healthcare Financial Management Association), switching to automation can save organizations 10% every year. By digitizing, you log encounters instantly and recover revenue that usually vanishes due to human mistakes
                    </p>

                    <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        QChargeAI helps your team catch missing charges right at the bedside. Industry research from KLAS shows this cuts claim denials by 50%. This shift doesn't just improve cash flow; it removes the weight of retroactive audits and prevents the administrative burnout that drains your staff.
                    </p>
                </header>

                <div className="relative mt-8 sm:mt-10 overflow-hidden rounded-[24px] sm:rounded-[34px] shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                    <div className="relative z-10 min-w-0">
                        {/* Desktop header */}
                        <div className="flex flex-col lg:flex-row p-2 sm:p-3 text-xs sm:text-sm font-semibold text-[#111827]">
                            {metrics.map((row, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "w-full min-w-0 bg-white shadow-2xl border py-4 sm:py-5 md:py-6 rounded-xl overflow-hidden lg:flex-1",
                                        index === 2
                                            ? "border-3 border-primary"
                                            : index === 3
                                                ? "border-3 border-sky-300"
                                                : "bg-slate-50"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "py-3 sm:py-4 px-3 sm:px-4 md:px-6 bg-slate-50 border-b border-slate-200 font-bold",
                                            "rounded-t-xl"
                                        )}
                                    >
                                        {row.title}
                                    </div>
                                    {row.values.map((label, labelIndex) => (
                                        <div
                                            key={labelIndex}
                                            className={`py-3 sm:py-4 px-3 sm:px-4 md:px-6 border-b border-slate-200 ${labelIndex % 2 === 0 ? "bg-gray-100" : "bg-slate-50"
                                                }`}
                                        >
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChargeCaptureSection5;