"use client";

import React, { useMemo, useState } from "react";
import { Plus, Minus } from "lucide-react";

const FaqSection = ({
    title = "Frequently Asked Questions",
    items = [],
    defaultOpenIndex = 0,
    idPrefix = "faq",
    sectionClassName = "bg-white py-16 md:py-20",
    containerClassName = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    titleClassName = "mb-10 text-center text-4xl font-syne font-bold tracking-tight text-gray-900",
    listClassName = "divide-y divide-gray-200",
}) => {
    const hasItems = Array.isArray(items) && items.length > 0;

    const initialOpenIndex = useMemo(() => {
        if (!hasItems) return null;
        if (defaultOpenIndex < 0 || defaultOpenIndex >= items.length) return null;
        return defaultOpenIndex;
    }, [defaultOpenIndex, hasItems, items.length]);

    const [openIndex, setOpenIndex] = useState(initialOpenIndex);

    return (
        <section className={sectionClassName}>
            <div className={containerClassName}>
                <h2 className={titleClassName}>{title}</h2>

                <div className={listClassName}>
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.question ?? index} className="py-5 first:pt-0">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-start justify-between gap-4 text-left"
                                    aria-expanded={isOpen}
                                    aria-controls={`${idPrefix}-answer-${index}`}
                                    id={`${idPrefix}-question-${index}`}
                                >
                                    <span className="text-base font-semibold text-gray-900 sm:text-lg">
                                        {item.question}
                                    </span>
                                    <span
                                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-[#3B82F6]"
                                        aria-hidden
                                    >
                                        {isOpen ? (
                                            <Minus className="h-5 w-5" strokeWidth={2.5} />
                                        ) : (
                                            <Plus className="h-5 w-5" strokeWidth={2.5} />
                                        )}
                                    </span>
                                </button>
                                <div
                                    id={`${idPrefix}-answer-${index}`}
                                    role="region"
                                    aria-labelledby={`${idPrefix}-question-${index}`}
                                    className={isOpen ? "block" : "hidden"}
                                >
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
