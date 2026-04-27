'use client'

import React from 'react'
import Image from 'next/image'
import { rcmSection4 } from '@/constants/revenue-cycle-management'
import { MoveRight } from 'lucide-react'

const RCMSection4 = () => {
    const { heading, paragraph1, paragraph2, features, image } = rcmSection4

    return (
        <section className="relative bg-[#10172A] text-white py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden min-h-[560px] md:min-h-[677px] flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 sm:gap-12 lg:gap-16">
                    {/* Left: Circular image with gradient glow (like reference) */}
                    <div className="hidden xl:flex w-full max-w-[485px] lg:w-[485px] shrink-0 relative order-2 lg:order-1 mx-auto lg:mx-0  justify-center lg:justify-start">
                        <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[478px] aspect-4/5 z-10">
                        </div>
                        <div className='absolute inset-0 rounded-full opacity-90 overflow-hidden'
                            style={{
                                background: `
                              radial-gradient(
                                circle at bottom center,
                                rgba(40, 71, 197, 1) 0%,
                                rgba(13, 148, 228, 0.5) 30%,
                                rgba(16, 23, 42, 0.6) 60%,
                                rgba(16, 23, 42, 1) 100%
                              )
                            `
                            }}
                        >
                            <div className='absolute inset-0'>

                                <Image
                                    src={image}
                                    alt="QRCM platform - intelligent billing cycle"
                                    fill
                                    className="object-contain object-center"
                                    sizes="(max-width: 1024px) 100vw, 478px"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Copy + feature list */}
                    <div className="w-full lg:max-w-[795px] flex-1 order-1 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
                        <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-[38px] leading-[1.2] tracking-tight text-white">
                            The<span className="text-primary"> Intelligent Engine</span> for Your Billing Cycle
                        </h2>

                        <p className="text-[#E2E2E2] text-sm sm:text-base leading-normal sm:leading-[1.4] tracking-[0.005em] max-w-[795px] mx-auto lg:mx-0">
                            {paragraph1}
                        </p>
                        <p className="text-[#E2E2E2] text-sm sm:text-base leading-normal sm:leading-[1.4] tracking-[0.005em] max-w-[795px] mx-auto lg:mx-0">
                            {paragraph2}
                        </p>

                        <ul className="space-y-3 sm:space-y-4 pl-0 list-none">
                            {features.map((item, idx) => (
                                <li key={idx} className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                                    {/* <span
                                        className="shrink-0 w-5 h-0.5 mt-[0.6em] rounded-full bg-[#0D94E4]"
                                        aria-hidden
                                    /> */}
                                    <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1 sm:mt-0" />
                                    <span className="text-[#E2E2E2] font-medium text-base sm:text-lg leading-[1.6] sm:leading-[1.87] tracking-[0.005em]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RCMSection4
