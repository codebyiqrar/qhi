import React from 'react'
import Image from 'next/image'
import { rcmSection8 } from '@/constants/revenue-cycle-management'
import { ROUTES } from '@/constants/routes'
import Link from 'next/link'

const AccentHeading = ({ headingLines }) => (
    <h2 className="text-center font-syne font-bold leading-[1.08] tracking-[-0.01em] text-[30px] sm:text-[44px] md:text-[56px]">
        {headingLines.map(([before, accent, after = ''], idx) => (
            <span key={`${before}-${accent}-${idx}`} className="block text-white">
                {before}
                {accent ? <span className="text-[#0A95E4]">{accent}</span> : null}
                {after}
            </span>
        ))}
    </h2>
)

const CTAButton = ({ text, href = ROUTES.CONTACT }) => (
    <Link
        href={href}
        type="button"
        className="group relative mt-6 inline-flex h-12 items-center rounded-full bg-[#0A95E4] pl-6 pr-16 font-dm-sans text-sm lg:text-lg font-medium text-white shadow-[0_10px_30px_rgba(10,149,228,0.35)] transition-all duration-300 hover:-translate-y-px hover:bg-[#0991de] sm:mt-8 sm:h-[60px] sm:pl-10 sm:pr-24 sm:text-[20px]"
    >
        {text}
        <span className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A95E4] sm:right-2.5 sm:h-11 sm:w-11">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.5 9H13.5M13.5 9L9.75 5.25M13.5 9L9.75 12.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
        <span className="pointer-events-none absolute right-[-18px] top-1/2 h-[56px] w-[56px] -translate-y-1/2 rounded-full border border-white/20 sm:right-[-34px] sm:h-[90px] sm:w-[90px]" />
        <span className="pointer-events-none absolute right-[-34px] top-1/2 h-[86px] w-[86px] -translate-y-1/2 rounded-full border border-white/10 sm:right-[-58px] sm:h-[128px] sm:w-[128px]" />
    </Link>
)

const RCMSection8 = () => {
    const { headingLines, paragraph, ctaText } = rcmSection8

    return (
        <section className="bg-[#10172A] px-3 pb-8 pt-2 sm:px-6 md:pb-12 lg:px-8">
            <div className="mx-auto w-full max-w-[1226px] overflow-hidden px-3 py-8 sm:px-8 sm:py-12 md:px-12 md:py-14">
                <div className="relative rounded-[2px]">
                    <div className="relative z-10 mx-auto max-w-[1040px] text-center">
                        <AccentHeading headingLines={headingLines} />
                        <p className="mx-auto mt-4 max-w-[980px] px-1 font-dm-sans text-[16px] leading-[1.45] text-[#D8E1F3] sm:px-0 sm:text-[20px]">
                            {paragraph}
                        </p>
                        <CTAButton text={ctaText} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RCMSection8