'use client'

import React, { useId } from 'react'
import Image from 'next/image'
import { rcmSection5 } from '@/constants/revenue-cycle-management'

const GradientCheckIcon = ({ gradientId }) => (
    <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
    >
        <defs>
            <linearGradient
                id={gradientId}
                x1="0"
                y1="17"
                x2="34"
                y2="17"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#1C68D2" />
                <stop offset="0.5" stopColor="#0D94E4" />
                <stop offset="1" stopColor="#2847C5" />
            </linearGradient>
        </defs>
        <circle
            cx="17"
            cy="17"
            r="16"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="1"
        />
        <path
            d="M10 17L14.5 21.5L24 12"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const RCMSection5 = () => {
    const baseId = useId().replace(/:/g, '')
    const { heading, paragraph1, paragraph2, features, image } = rcmSection5

    return (
        <section className="bg-white text-[#10172A] py-12 sm:py-16 md:py-20">
            <div className="max-w-[1226px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10 xl:gap-14">
                    <div className="w-full lg:max-w-[789px] lg:flex-1 min-w-0">
                        <h2 className="font-syne font-bold text-[28px] sm:text-[32px] md:text-[38px] leading-[1.2] text-[#202938] max-w-[575px]">
                            {heading}
                        </h2>
                        <p className="mt-6 font-dm-sans text-base leading-[1.4] tracking-[0.005em] text-[#464646]">
                            {paragraph1}
                        </p>
                        <p className="mt-[18px] font-dm-sans text-base leading-[1.4] tracking-[0.005em] text-[#464646]">
                            {paragraph2}
                        </p>
                    </div>

                    <div className="w-full lg:w-[375px] lg:max-w-[375px] shrink-0 mx-auto lg:mx-0">
                        <div className="relative w-full aspect-[375.31/287] rounded-sm overflow-hidden">
                            <Image
                                src={image}
                                alt="EHR integration and secure healthcare data workflow"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 375px"
                            />
                        </div>
                    </div>
                </div>

                <ul className="mt-7 sm:mt-8 md:mt-[28px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-7 list-none p-0 m-0">
                    {features.map((label, idx) => {
                        const gid = `rcm5-${baseId}-${idx}`
                        return (
                            <li key={label} className="flex items-start gap-4 min-w-0">
                                <GradientCheckIcon gradientId={gid} />
                                <span className="font-dm-sans text-[16px] sm:text-[17px] xl:text-[18px] leading-[1.302] tracking-[0.02em] text-[#10172A] pt-0.5">
                                    {label}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default RCMSection5
