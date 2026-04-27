import React from 'react'
import { rpmSection5 } from '@/constants/rpm'

const AccentHeading = ({ headingLines }) => (
    <h2 className="text-center font-syne text-[30px] font-bold leading-[1.1] tracking-[-0.01em] text-[#14213D] sm:text-[36px] md:text-[40px] lg:text-[44px]">
        {headingLines.map(([before, accent, after = ''], idx) => (
            <span key={`${before}-${accent}-${idx}`} className="block">
                {before}
                {accent ? <span className="text-[#00B8FF]">{accent}</span> : null}
                {after}
            </span>
        ))}
    </h2>
)

const PhaseBadge = ({ text }) => (
    <span className="inline-flex max-w-full rounded-full border border-[#2847C5] bg-[#F9FBFF] px-2.5 py-0.5 font-dm-sans text-[11px] font-medium leading-none text-[#2847C5]">
        {text}
    </span>
)

const IntegrationCard = ({ item }) => (
    <article className="h-full rounded-[10px] border border-[#E9EEFA] bg-white p-4 shadow-[0_2px_8px_rgba(8,35,74,0.05)] sm:p-5">
        <PhaseBadge text={item.phase} />
        <h3 className="mt-2.5 wrap-break-word font-dm-sans text-[22px] font-bold leading-[1.2] text-[#17233D] sm:text-[24px] lg:text-[30px]">
            {item.title}
        </h3>
        <p className="mt-2 wrap-break-word font-dm-sans text-[16px] leading-[1.45] text-[#4B5874] sm:text-[17px] lg:text-[18px]">
            {item.description}
        </p>
    </article>
)

const RPMSection5 = () => {
    const { headingLines, paragraphs, cards } = rpmSection5

    return (
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8">
            <div className="mx-auto w-full max-w-[1226px] px-0 py-6 sm:py-8 md:py-10">
                <AccentHeading headingLines={headingLines} />

                <div className="mx-auto mt-4 max-w-[910px] space-y-2 px-1 text-center font-dm-sans text-[13px] leading-normal text-[#4B5874] sm:px-0 sm:text-[14px]">
                    {paragraphs.map((line) => (
                        <p key={line}>{line}</p>
                    ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((item) => (
                        <IntegrationCard key={item.phase} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RPMSection5