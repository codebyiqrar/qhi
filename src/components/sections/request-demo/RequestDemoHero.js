import BackgroundAccents from '@/components/ui/BackgroundAccents'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const RequestDemoHero = () => {
    return (
        <BackgroundAccents showBottomAccents className="bg-white font-sans text-[#10172A]">
            <section className="mx-auto grid relative z-10 w-full max-w-7xl container gap-10 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-[1fr_auto] lg:gap-12 lg:px-[70px] lg:pb-0 lg:pt-[165px]">
                <div className="max-w-[603px]">
                    <h1 className="font-syne text-[42px] font-semibold leading-[1.1] text-[#10172A] sm:text-[52px] lg:text-[65px]">
                        Request a <span className="text-[#0D94E4]">Demo</span>
                    </h1>
                    <p className="mt-6 text-[18px] leading-[1.3] text-[#10172A]">
                        See how the Quantus Health platform finds the revenue your practice is missing.
                    </p>
                    <p className="mt-5 text-[16px] leading-[1.45] text-[#464646]">
                        Most medical practices do more work than they get paid for. Request a short
                        demo to see how our three core tools work in a real office setting.
                    </p>
                    {/* <button
                        type="button"
                        className="mt-10 flex h-[54px] items-center gap-5 rounded-full bg-[#0D94E4] pl-7 pr-3 text-[18px] text-[#F3F3F3]"
                    >
                        Request a demo today
                        <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-black">
                            <ArrowRight className="h-4 w-4" />
                        </span>
                    </button> */}
                </div>
                <div className="relative mx-auto w-full max-w-[403px] lg:mx-0 lg:self-end">
                    <Image
                        src="/demo/request-demo-hero.png"
                        alt="Provider reviewing tablet data"
                        width={403}
                        height={470}
                        className="h-auto w-full"
                        sizes="(max-width: 1024px) 80vw, 403px"
                    />
                    <Image
                        src="/demo/request-demo-hero-badge-top.svg"
                        alt=""
                        width={67}
                        height={67}
                        className="pointer-events-none absolute right-[-44px] top-[16px] hidden h-[66px] w-[66px] lg:block"
                    />
                    <Image
                        src="/demo/request-demo-hero-badge-bottom.svg"
                        alt=""
                        width={67}
                        height={67}
                        className="pointer-events-none absolute bottom-16 right-[-100px] hidden h-[66px] w-[66px] lg:block"
                    />
                    <Image
                        src="/demo/request-demo-hero-badge-large.svg"
                        alt=""
                        width={180}
                        height={180}
                        className="pointer-events-none absolute -right-[220px] top-[130px] hidden h-[180px] w-[180px] xl:block"
                    />
                </div>
            </section>
        </BackgroundAccents>
    )
}

export default RequestDemoHero
