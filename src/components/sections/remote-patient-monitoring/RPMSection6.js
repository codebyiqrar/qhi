import React from 'react'
import Image from 'next/image'
import { rpmSection6 } from '@/constants/rpm'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const AccentHeading = ({ headingLines }) => (
    <h2 className="font-syne font-bold text-white leading-[1.08] tracking-[-0.01em] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px]">
        {headingLines.map(([before, accent, after = ''], idx) => (
            <span key={`${before}-${accent}-${idx}`} className="block">
                {before}
                {accent ? <span className="text-[#0A95E4]">{accent}</span> : null}
                {after}
            </span>
        ))}
    </h2>
)

const BenefitItem = ({ text }) => (
    <li className="flex items-start gap-2.5">
        <span className="mt-0.5 inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-[#008CE3]/80 bg-[#008CE3]/15">
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 4.5L4.25 8L11 1" stroke="#00A6FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
        <span className="font-dm-sans text-[13px] sm:text-[14px] font-medium leading-[1.35] text-[#DCEBFF]">{text}</span>
    </li>
)

const RPMSection6 = () => {
    const { headingLines, paragraphs, benefits, ctaText, image } = rpmSection6

    return (
        <section className="bg-[#081630] px-4 py-9 text-white sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14">
            <div className="mx-auto w-full max-w-[1226px]">
                <div className="relative overflow-hidden rounded-[2px] px-3.5 py-5 sm:px-6 sm:py-7 md:px-8 md:py-8 lg:px-10 lg:py-9">

                    <div className="relative grid items-center gap-5 sm:gap-6 lg:grid-cols-[minmax(0,455px)_minmax(0,1fr)] lg:gap-8">
                        <div className="mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-[460px]">
                            <div className="overflow-hidden rounded-[14px] border-[3px] border-[#0D94E4]/70 bg-[#0B1A36]">
                                <Image
                                    src={image}
                                    alt="Doctor using remote patient monitoring dashboard"
                                    width={997}
                                    height={620}
                                    sizes="(max-width: 1024px) 100vw, 460px"
                                    className="h-auto w-full object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>

                        <div>
                            <AccentHeading headingLines={headingLines} />

                            <div className="mt-3 space-y-2 font-dm-sans text-[13px] leading-[1.45] text-[#C7D8F4] sm:mt-3.5 sm:space-y-2.5 sm:text-[14px] md:text-[15px]">
                                {paragraphs.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>


                        </div>
                    </div>
                    <div className="mt-5 flex flex-col items-stretch sm:mt-6 sm:items-center sm:justify-center">
                        <ul className="grid w-full grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3 md:grid-cols-3">
                            {benefits.map((item) => (
                                <BenefitItem key={item} text={item} />
                            ))}
                        </ul>

                        {/* <Link
                            href="/contact"
                            className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0A95E4] px-5 py-2.5 font-dm-sans text-[14px] font-bold text-white transition-all hover:bg-[#0b89d2] sm:mt-6 sm:w-auto sm:text-[15px]"
                        >
                            {ctaText}
                            <span className="inline-flex rounded-full bg-white p-1 text-black transition-transform group-hover:translate-x-0.5">
                                <ArrowRight className="h-4 w-4" />
                            </span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RPMSection6