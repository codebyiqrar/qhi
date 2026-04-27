import { rpmSection7 } from "@/constants/rpm";
import { cn } from "@/lib/utils";
import React from "react";

const AccentHeading = ({ headingLines }) => (
    <>
        {headingLines.map(([before, accent, after = ''], idx) => (
            <span key={`${before}-${accent}-${idx}`} className="block">
                {before}
                {accent ? <span className="text-[#0A95E4]">{accent}</span> : null}
                {after}
            </span>
        ))}
    </>
)

const RPMSection7 = () => {
    const { headingLines, paragraph, paragraph2, comparisonTitle, metrics } = rpmSection7
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-8 md:pb-10">
            <div className="mx-auto max-w-6xl lg:max-w-7xl">
                <header className="text-center max-w-3xl mx-auto">
                    <h2 className="text-center font-syne font-bold text-[#17233D] leading-[1.05] tracking-[-0.01em] text-[30px] sm:text-[40px] md:text-[46px]">
                        <AccentHeading headingLines={headingLines} />
                    </h2>

                    <p className="mx-auto mt-3 max-w-[920px] text-center font-dm-sans text-[12px] leading-normal text-[#5A6884] sm:text-[13px]">
                        {paragraph}
                    </p>
                    <p className="mx-auto mt-2 max-w-[920px] text-center font-dm-sans text-[12px] leading-normal text-[#5A6884] sm:text-[13px]">
                        {paragraph2}
                    </p>

                    <h3 className="mt-3.5 text-center font-syne text-[28px] font-bold leading-none text-[#17233D] sm:text-[36px] md:text-[42px]">
                        {comparisonTitle}
                    </h3>
                </header>

                <div className="mt-4 lg:mt-10 relative w-full overflow-x-auto">

                    <div className="relative z-10 w-full min-w-0 md:min-w-[860px] rounded-[34px]">
                        {/* Desktop header */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0 text-xs sm:text-sm font-semibold text-[#111827] p-2 sm:p-3">
                            {metrics.map((row, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={cn(
                                            "bg-white  border border-[#9A9A9A] py-4 ",
                                            index === 0 && "md:rounded-tl-xl md:rounded-bl-xl",
                                            index === 1 && "md:rounded-tr-xl md:rounded-br-xl",
                                            index === 2
                                                ? "border-3 border-primary md:ml-2.5 rounded-xl"
                                                : index === 3
                                                    ? "border-3 border-sky-300"
                                                    : ""
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "py-4 px-4 sm:px-6 border-b  font-bold",
                                                index === 0 && "rounded-tl-[34px]",
                                                index === metrics.length - 1 && "rounded-tr-[34px]",
                                                (index === 0 || index === 1) ? "border-[#9A9A9A]" : "border-primary",
                                            )}
                                        >
                                            {row.title}
                                        </div>
                                        {row.values.map((label, labelIndex) => {
                                            const isLast = labelIndex === row.values.length - 1;
                                            return (
                                                <div
                                                    key={labelIndex}
                                                    className={cn(
                                                        "py-4 px-4 sm:px-6 ",
                                                        (index === 0 || index === 1) ? "border-[#9A9A9A]" : "border-primary",
                                                        !isLast && "border-b"
                                                    )}
                                                >
                                                    {label}
                                                </div>
                                            )
                                        })}
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

export default RPMSection7;