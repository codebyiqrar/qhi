'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, MoveRight } from 'lucide-react'

const rpmSection2 = {
    headingLines: [
        ['The Limitations Of ', 'Traditional', ' Patient'],
        ['Monitoring Models', '', '']
    ],
    paragraph1:
        'Standard care often leaves providers without data between office visits. This leads to reactive treatment instead of steady, preventive management. Without proactive patient care technology, your team cannot see critical health changes until a patient reaches a crisis point.',
    paragraph2:
        'Staff spending hours on manual phone calls for vitals is inefficient and prone to error. These manual workflows lack the predictive healthcare analytics required to manage chronic conditions effectively. It creates a heavy administrative burden while leaving significant gaps in patient safety.',
    bullets: [
        'Data entry errors compromise clinical decisions.',
        'Manual tracking wastes valuable staff time.',
        'Uncaptured clinical time leads to lost revenue.',
        'Patients struggle with self-reporting accuracy.'
    ],
    imageMain: '/assets/rpm/section-2-main.png'
}

const RPMSectionHeading = ({ headingLines }) => (
    <h2 className="font-syne text-[28px] font-bold leading-[1.08] tracking-[-0.01em] text-white sm:text-[34px] md:text-[40px] lg:text-[44px]">
        {headingLines.map(([before, accent, after], idx) => (
            <span key={`${before}-${accent}-${idx}`} className="block">
                {before}
                {accent ? <span className="text-[#00B8FF]">{accent}</span> : null}
                {after}
            </span>
        ))}
    </h2>
)

const BulletItem = ({ text }) => (
    <li className="flex items-start gap-3 rounded-full border border-[#0059A8] bg-[rgba(6,26,54,0.7)] px-3.5 py-2.5 font-dm-sans text-[14px] leading-normal text-[#F3F7FF] sm:items-center sm:px-4 sm:text-[15px]">
        <MoveRight className="shrink-0 text-primary" />
        <span>{text}</span>
    </li>
)

const RPMSection2 = () => {
    const { headingLines, paragraph1, paragraph2, bullets, imageMain } = rpmSection2

    return (
        <section className="overflow-hidden bg-[linear-gradient(100deg,#0A1734_0%,#071124_55%,#0A1734_100%)] px-4 py-9 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14">
            <div className="mx-auto w-full max-w-[1226px]">
                <div className="grid items-center gap-7 sm:gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-11 xl:gap-12">
                    <div className="mx-auto hidden w-full max-w-[360px] lg:block lg:max-w-[420px] lg:self-end">
                        <div className="relative mx-auto h-[360px] w-full sm:h-[420px] lg:h-[460px] xl:h-[500px]">
                            <Image
                                src={imageMain}
                                alt="Clinician indicating RPM workflow challenges"
                                fill
                                priority={false}
                                sizes="(max-width: 1024px) 0px, (max-width: 1280px) 360px, 420px"
                                className="object-cover object-center scale-[1.22]"
                            />
                        </div>
                    </div>

                    <div className="min-w-0 space-y-3.5 sm:space-y-4.5">
                        <RPMSectionHeading headingLines={headingLines} />

                        <div className="max-w-[760px] space-y-2.5 font-dm-sans text-[14px] leading-[1.28] text-[#AFC2DD] sm:text-[15px] sm:leading-[1.3]">
                            <p>{paragraph1}</p>
                            <p>{paragraph2}</p>
                        </div>

                        <ul className="max-w-[680px] space-y-2 pt-1 sm:space-y-2.5">
                            {bullets.map((item) => (
                                <BulletItem key={item} text={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RPMSection2