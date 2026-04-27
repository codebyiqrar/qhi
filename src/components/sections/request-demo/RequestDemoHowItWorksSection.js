import React from 'react'

const demoSteps = [
    ['01', 'Fill out the form', 'Give us a few details about your practice and specialty.'],
    ['02', 'Pick a time', 'We will find 15 minutes that fits your busy schedule.'],
    ['03', 'See the tools', 'We skip the long sales pitch and show how the software works.'],
]

const RequestDemoHowItWorksSection = () => {
    return (
        <section className="bg-[#F6FCFE] px-4 py-16 sm:px-6 lg:px-[70px] lg:py-[75px]">
            <div className="mx-auto w-full max-w-[1293px]">
                <h2 className="text-center font-syne text-[34px] font-semibold leading-[1.2] text-[#10172A] sm:text-[38px]">
                    How it works
                </h2>
                <div className="relative mt-12 grid gap-8 lg:grid-cols-3 lg:gap-[124px]">
                    <div className="absolute left-[140px] right-[140px] top-[34px] hidden h-px bg-[#2847C5] lg:block" />
                    {demoSteps.map(([step, title, desc]) => (
                        <div key={step} className="relative z-10 text-center">
                            <div className="mx-auto flex h-[67px] w-[67px] items-center justify-center rounded-2xl border border-[#2847C5] bg-white text-[24px] text-[#10172A]">
                                {step}
                            </div>
                            <h3 className="mt-6 text-[24px] text-[#10172A]">{title}</h3>
                            <p className="mx-auto mt-4 max-w-[298px] text-[16px] leading-[1.4] text-[#464646]">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RequestDemoHowItWorksSection
