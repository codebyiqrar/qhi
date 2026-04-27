'use client'

import React from 'react'
import { qchargeSection3 } from '@/constants/q-charge'

const ChargeCaptureSection3 = () => {
    const { heading, paragraph1, paragraph2, features } = qchargeSection3

    return (
        <section className="bg-white text-gray-900 font-sans py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                {/* Main title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold leading-tight text-center mb-5 sm:mb-6 md:mb-7">
                    {heading.before}{' '}
                    <span className="text-primary">{heading.highlight}</span>{' '}
                    {heading.after}
                </h2>

                {/* Intro paragraphs */}
                <div className="w-full max-w-7xl mx-auto space-y-3 sm:space-y-4 text-center text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 px-1 sm:px-0">
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                </div>

                {/* Feature boxes grid - 3x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full max-w-7xl mx-auto">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl border border-gray-300 px-4 sm:px-5 md:px-6 py-4 sm:py-5 text-left hover:border-primary/90 transition-colors h-full"
                        >
                            <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3 leading-snug">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed wrap-break-word">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ChargeCaptureSection3
