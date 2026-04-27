import React from 'react'
import { qchargeSection4 } from '@/constants/q-charge'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

const SectionHeading = ({ heading }) => (
    <h2 className="mx-auto w-full max-w-[920px] px-4 text-center font-syne text-[30px] font-bold leading-[1.08] tracking-[-0.01em] text-white sm:px-0 sm:text-[38px] md:text-[46px]">
        {heading.before}{' '}
        <span className="text-[#0A95E4]">{heading.highlight1}</span>{' '}
        {heading.middle}
        <br />
        <span className="text-[#0A95E4]">{heading.highlight2}</span>{' '}
        {heading.after}
    </h2>
)

const Pill = ({ item }) => (
    <div className="rounded-2xl border-2 border-[#2C83F8] bg-white px-4 py-4 text-center shadow-[0_2px_8px_rgba(10,149,228,0.14)] sm:px-5 sm:py-5">
        <h3 className="font-dm-sans text-[14px] font-semibold leading-tight text-[#17233D] sm:text-[15px]">
            {item.title}
        </h3>
        <p className="mt-1.5 font-dm-sans text-[12px] font-medium leading-[1.45] text-[#3D4E73] sm:text-[13px]">
            {item.description}
        </p>
    </div>
)

const ChargeCaptureSection4 = () => {
    const { heading, pills, footer, cta } = qchargeSection4

    return (
        <section className="relative overflow-x-hidden">


            <div className="relative mx-auto w-full">
                <div className='bg-[#10172A] px-4 py-12 sm:px-6 sm:py-14 md:py-16'>
                    <SectionHeading heading={heading} />

                    <div className="mx-auto mt-5 w-full max-w-[980px] text-center font-dm-sans text-[13px] leading-[1.55] text-white sm:text-[14px]">
                        <p>AI-driven charge capture helps you document faster and submit cleaner claims with less manual work.</p>
                    </div>
                </div>
                {/* White band (taller stripe); inner card overlaps navy above & below via negative margin */}
                <div className="relative z-0 min-h-[120px] bg-white px-4 py-10 sm:min-h-[140px] sm:px-6 sm:py-12 md:min-h-[160px] md:py-16">
                    <div className="relative z-10 mx-auto w-full max-w-[930px] -my-14 rounded-2xl bg-white px-4 py-8 shadow-[0_14px_40px_rgba(0,0,0,0.18)]  sm:px-6 sm:py-10 md:-my-20 md:px-8 md:py-14 lg:-my-24 lg:px-10 lg:py-16">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                            {pills.map((item) => (
                                <Pill key={item.title} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='bg-[#10172A] px-4 py-12 sm:px-6 sm:py-14 md:py-16'>
                    {/* <p className="mx-auto w-full max-w-[860px] text-center font-dm-sans text-[15px] font-semibold leading-[1.45] text-white sm:text-[19px]">
                        {footer}
                    </p> */}

                    <div className="mt-6 flex justify-center px-1">
                        <Link
                            href={ROUTES.REQUEST_DEMO}
                            className="group inline-flex w-full max-w-fit items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary/90 sm:px-6 sm:text-base"
                        >
                            {cta}
                            <span className="inline-flex rounded-full bg-white text-black p-1 group-hover:translate-x-0.5 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ChargeCaptureSection4