import React from 'react'
import Image from 'next/image'
import { rcmSection6 } from '@/constants/revenue-cycle-management'

const CenterMark = () => (
    <div className="relative h-[80px] w-[80px] md:h-[96px] md:w-[96px] rounded-full bg-[radial-gradient(circle_at_32%_30%,#3EA5FF_0%,#2E67F2_45%,#1C44C6_100%)] shadow-[0_0_60px_rgba(53,128,255,0.42)] grid place-items-center">
        <Image
            src="/rcm/rcm-section6-center-mark.svg"
            alt="QRCM performance mark"
            width={96}
            height={96}
            className="w-[62px] h-[62px] md:w-[74px] md:h-[74px]"
        />
    </div>
)

const Pill = ({ label }) => (
    <div className="h-[44px] md:h-[50px] rounded-[999px] border border-[#0C8BF4] bg-[rgba(5,14,34,0.64)] px-4 md:px-6 text-center flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(22,126,232,0.18)]">
        <span className="font-dm-sans font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[1.06] tracking-[0.005em] text-[#E9EEF8]">
            {label}
        </span>
    </div>
)

const RCMSection6 = () => {
    const { heading, paragraph1, paragraph2, leftPills, rightPills, footer } = rcmSection6

    return (
        <section className="bg-[#091126] py-10 md:py-12">
            <div className="max-w-[1226px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[2px] px-4 py-7 sm:px-7 md:px-10 md:py-9 lg:px-12 lg:py-10">
                    <div className="pointer-events-none absolute inset-0 opacity-45">
                        <div className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 w-[1020px] h-[470px] rounded-full border border-[#214A7A]" />
                        <div className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 w-[780px] h-[340px] rounded-full border border-[#1C3E69]" />
                        <div className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 w-[560px] h-[220px] rounded-full border border-[#173559]" />
                    </div>

                    <h2 className="relative z-10 text-center font-syne font-bold text-[32px] sm:text-[40px] md:text-[52px] leading-[0.98] text-white max-w-[930px] mx-auto">
                        {heading.before} <span className="text-primary">{heading.highlight}</span>{' '}
                        {heading.after}
                    </h2>

                    <div className="relative z-10 mt-5 md:mt-6 text-center max-w-[1120px] mx-auto space-y-2">
                        <p className="font-dm-sans text-[13px] sm:text-[14px] md:text-[16px] leading-[1.22] tracking-[0.005em] text-[#C5CEDF]">
                            {paragraph1}
                        </p>
                        {/* <p className="font-dm-sans text-[13px] sm:text-[14px] md:text-[16px] leading-[1.22] tracking-[0.005em] text-[#C5CEDF]">
                            {paragraph2}
                        </p> */}
                    </div>

                    <div className="relative z-10 mt-6 md:mt-7 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-3 lg:gap-5 items-center">
                        <div className="space-y-3">
                            {leftPills.map((item) => (
                                <Pill key={item} label={item} />
                            ))}
                        </div>

                        <div className="flex justify-center my-1 lg:my-0">
                            <CenterMark />
                        </div>

                        <div className="space-y-3">
                            {rightPills.map((item) => (
                                <Pill key={item} label={item} />
                            ))}
                        </div>
                    </div>

                    {/* <p className="relative z-10 mt-5 text-center font-dm-sans text-[13px] sm:text-[14px] md:text-[16px] leading-[1.22] tracking-[0.005em] text-[#C5CEDF] max-w-[1140px] mx-auto">
                        {footer}
                    </p> */}
                </div>
            </div>
        </section>
    )
}

export default RCMSection6