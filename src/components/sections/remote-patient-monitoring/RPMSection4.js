import React from 'react'
import Image from 'next/image'
import { ArrowRight, CircleCheck, MoveRight } from 'lucide-react'
import { rpmSection4 } from '@/constants/rpm'
import Link from 'next/link'
import { ROUTES } from '@/constants/routes'

const AccentHeading = ({ headingLines }) => (
    <h2 className="font-syne text-[30px] font-bold leading-[1.08] tracking-[-0.01em] text-white sm:text-[38px] md:text-[44px]">
        {headingLines.map(([before, accent, after], idx) => (
            <span key={`${before}-${accent}-${idx}`} className="block">
                {before}
                {accent ? <span className="text-[#00B8FF]">{accent}</span> : null}
                {after}
            </span>
        ))}
    </h2>
)

const CheckIcon = () => (
    <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-[#00B8FF]/70 bg-[#00B8FF]/15">
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1 4.5L4.25 8L11 1" stroke="#00B8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </span>
)

const FeatureItem = ({ item }) => (
    <li className="flex items-center gap-3   px-4 py-2.5">
        <CircleCheck className='text-primary' />
        <span className="font-dm-sans text-[14px] leading-[1.2] text-[#EAF2FF] sm:text-[15px]">{item}</span>
    </li>
)

const RPMSection4 = () => {
    const { headingLines, paragraphs, features, ctaText, image } = rpmSection4

    return (
        <section className="overflow-hidden bg-[#10172A] text-white ">
            <div className="mx-auto w-full max-w-[1226px]">
                <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,470px)] lg:gap-10 ">
                    <div className='px-4 py-10 sm:px-6 pt-16 '>
                        <AccentHeading headingLines={headingLines} />

                        <div className="mt-3.5 max-w-[690px] space-y-3 font-dm-sans text-[14px] leading-[1.42]  sm:text-[15px]">
                            {paragraphs.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>

                        <ul className="mt-5 grid max-w-[760px] grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                            {features.map((item) => (
                                <FeatureItem key={item} item={item} />
                            ))}
                        </ul>
                        <Link
                            href={ROUTES.REQUEST_DEMO}
                            className="mt-6 group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg text-base"
                        >
                            {ctaText}
                            <span className="inline-flex rounded-full bg-white text-black p-1 group-hover:translate-x-0.5 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </div>

                    <div className="mx-auto w-full max-w-[470px] pt-16">
                        <div className="relative aspect-470/550 w-full  ">
                            <Image
                                src={image}
                                alt="Automated QRPM workflow with healthcare dashboard visualization"
                                fill
                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 470px"
                                className="object-contain object-right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RPMSection4