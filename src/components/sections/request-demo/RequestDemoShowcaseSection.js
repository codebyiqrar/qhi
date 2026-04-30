import Image from 'next/image'
import React from 'react'

const showcaseCards = [
    {
        title: 'QChargeAI',
        description:
            'See how the system captures charges quickly and accurately, even when you are on the go.',
        icon: '/demo/request-demo-icon-qcharge.svg',
    },
    {
        title: 'QRCM (Revenue Cycle Management)',
        description:
            'Watch how to automate your claims and manage denials without the usual manual effort.',
        icon: '/demo/request-demo-icon-qrcm.svg',
    },
    {
        title: 'QRPM (Remote Patient Monitoring)',
        description:
            'See how to track patient vitals and engagement remotely to keep care connected.',
        icon: '/demo/request-demo-icon-qrpm.svg',
    },
    {
        title: 'QEHR (Electronic Health Record)',
        description:
            'Explore how to manage patient records in one place to improve documentation and continuity of care.',
        icon: '/demo/request-demo-icon-qehr.svg',
    },
]

const RequestDemoShowcaseSection = () => {
    return (
        <section className="bg-[#10172A] px-4 py-16 sm:px-6 lg:px-[70px] lg:py-[87px]">
            <div className="mx-auto w-full max-w-[1293px]">
                <h2 className="text-center font-syne text-[34px] font-semibold leading-[1.2] text-white sm:text-[38px]">
                    What we will <span className="text-[#0D94E4]">show you</span>
                </h2>
                <div className="mt-12 grid gap-6 lg:grid-cols-4">
                    {showcaseCards.map((card) => (
                        <article key={card.title} className="rounded-2xl bg-[#383A6A57] p-8">
                            <div className="mb-6 flex h-[67px] w-[67px] items-center justify-center rounded-2xl bg-[#F6FCFE]">
                                <Image src={card.icon} alt="" width={46} height={42} className="h-auto w-auto" />
                            </div>
                            <h3 className="text-[24px] leading-[1.2] text-white">{card.title}</h3>
                            <p className="mt-4 text-[16px] leading-[1.4] text-[#E2E2E2]">{card.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RequestDemoShowcaseSection
