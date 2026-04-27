import React from 'react'
import Image from 'next/image'

const steps = [
    {
        id: '1',
        title: 'Enroll',
        description:
            'Onboard patients instantly using secure QR code scanning, no paperwork, no delays.',
    },
    {
        id: '2',
        title: 'Monitor',
        description:
            'Continuously track patient vitals in real time through connected, FDA-approved devices.',
    },
    {
        id: '3',
        title: 'Alert',
        description:
            'Get instant alerts when vitals cross set thresholds, allowing faster and proactive care responses.',
    },
    {
        id: '4',
        title: 'Analyze',
        description:
            'Review performance, compliance, and billing analytics, all in one place for data-driven decisions.',
    },
]

const StepItem = ({ item }) => (
    <article className="h-full rounded-2xl border border-primary/20 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.22)] sm:px-6">
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-dm-sans text-[13px] font-semibold leading-none text-primary sm:text-[14px]">
            {item.id}
        </span>
        <h3 className="mt-3 font-syne text-[22px] font-semibold leading-[1.1] tracking-[-0.01em] text-primary sm:text-[24px] sm:leading-[1.06]">
            {item.title}
        </h3>
        <p className="mt-3 max-w-[540px] font-dm-sans text-[14px] leading-normal text-[#3A4A6B] sm:text-[15px]">
            {item.description}
        </p>
    </article>
)

const RPMWorkflow = () => {
    return (
        <section className="relative overflow-hidden bg-white text-black">
            <div className="relative mx-auto max-w-7xl">
                <div className="pointer-events-none hidden xl:block absolute bottom-0 -left-8 h-[240px] w-[108px] sm:-left-14 sm:h-[360px] sm:w-[152px] md:-left-24 md:h-[500px] md:w-[210px] lg:-left-40 lg:h-[700px] lg:w-[290px] xl:-left-44">
                    <Image
                        src="/assets/charge-capture/figma-dump/img-23.png"
                        alt="Clinician reviewing patient details on a phone"
                        fill
                        className="object-contain object-bottom-left"
                        sizes="(max-width: 1024px) 210px, 302px"
                    />
                </div>
                <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    <div className="py-10 sm:py-12 lg:py-14">
                        <div className="mx-auto max-w-[840px] text-center">
                            <h2 className="font-syne text-[30px] font-bold leading-[1.05] tracking-[-0.02em] text-[#0C1428] sm:text-[36px] md:text-[40px] lg:text-[44px] lg:leading-[1.02]">
                                <span>AI-Enabled </span>
                                <span className="text-primary">Remote Care</span>
                                <span className="block">Monitor. Analyze. Act.</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-[700px] font-dm-sans text-[14px] leading-normal text-[#3A4A6B] sm:mt-5 sm:text-[15px]">
                                A simple four-step flow helps your team capture, validate, sync, and submit charges with speed and confidence.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4">
                            {steps.map((item) => (
                                <StepItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RPMWorkflow