import React from 'react'
import { rpmSection3 } from '@/constants/rpm'

const RPMSection3 = () => {
    const { headingLines, paragraphs, features2 } = rpmSection3

    return (
        <section className="bg-[#10172A] px-4 py-10 text-white sm:px-6 md:py-12 lg:px-8">
            <div className="mx-auto w-full max-w-[1204px]  px-4 py-6 sm:px-6 md:px-8 md:py-8">
                <h2 className="text-center font-syne text-[30px] font-bold leading-[1.05] tracking-[-0.01em] text-white sm:text-[38px] md:text-[44px]">
                    {headingLines.map(({ before, accent, after }, index) => (
                        <span key={`${before}-${accent}-${index}`}>
                            {before}
                            {accent ? <span className="text-[#0A95E4]">{accent}</span> : null}
                            {after}
                        </span>
                    ))}
                </h2>

                <div className="mx-auto mt-4 max-w-[1120px] space-y-3 text-center font-dm-sans text-[14px] leading-[1.42] text-[#C7D2EA] sm:text-[16px]">
                    {paragraphs.map((line) => (
                        <p key={line}>{line}</p>
                    ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {features2.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-2xl border border-[#1E3A73] bg-[#0C1428] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.22)] sm:p-6"
                        >
                            <h3 className="font-syne text-[21px] font-semibold leading-[1.15] text-white sm:text-[23px]">
                                {item.title}
                            </h3>
                            <p className="mt-3 font-dm-sans text-[14px] leading-[1.45] text-[#C7D2EA] sm:text-[15px]">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RPMSection3