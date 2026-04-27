import Image from 'next/image'
import React from 'react'

const whyDemoPoints = [
    {
        title: 'Real workflow',
        text: 'See if these tools actually fit the way your clinic operates every day.',
    },
    {
        title: 'Get answers',
        text: 'Talk to our North Texas team about your specific billing or patient monitoring pain points.',
    },
    {
        title: 'No pressure',
        text: 'We just want to show how much lost time and revenue we can help your team find.',
    },
]

const RequestDemoWhyDemoSection = () => {
    return (
        <section className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[532px_1fr] lg:gap-[58px] lg:px-[70px]">
            <div className="rounded-2xl bg-[#F6FCFE] p-6 shadow-[6px_2px_0px_0px_#2847C5]">
                <Image
                    src="/qcharge-mobile.png"
                    alt="Healthcare dashboard screenshot"
                    width={387}
                    height={242}
                    className="mx-auto h-auto w-full max-w-[387px]"
                    sizes="(max-width: 1024px) 75vw, 387px"
                />
            </div>
            <div>
                <h2 className="font-syne text-[34px] font-semibold leading-[1.2] text-[#10172A] sm:text-[38px]">
                    Why see a demo?
                </h2>
                <div className="mt-8 space-y-8">
                    {whyDemoPoints.map((point) => (
                        <div key={point.title}>
                            <h3 className="text-[24px] text-[#10172A]">{point.title}</h3>
                            <div className="mt-3 h-px w-[62px] bg-[#0D94E4]" />
                            <p className="mt-3 text-[16px] leading-[1.4] text-[#464646]">{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RequestDemoWhyDemoSection
