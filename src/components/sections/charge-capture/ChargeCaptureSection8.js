import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

const ChargeCaptureSection8 = () => {
    return (
        <section className="bg-[#091734] px-4 pb-12 pt-2 text-white sm:px-6 md:pb-14 lg:px-8 lg:pb-16">
            <div className="mx-auto w-full max-w-[1226px] overflow-hidden rounded-[2px] bg-[#091734]">
                <div className="relative grid min-h-[320px] grid-cols-1 items-center gap-8 px-4 py-8 sm:px-8 sm:py-10 md:min-h-[390px] md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,560px)] lg:gap-6 lg:px-12 lg:py-12 xl:gap-0">
                    <div className="relative z-20 w-full max-w-[560px]">
                        <h2 className="font-syne text-[30px] font-bold leading-[1.07] tracking-[-0.02em] text-white sm:text-[40px] md:text-[52px] lg:text-[56px]">
                            <span className="block">
                                Join The <span className="text-[#0594EA]">Future</span> Of
                            </span>
                            <span className="block">Automated Charge Capture</span>
                        </h2>

                        <p className="mt-4 w-full max-w-[540px] font-dm-sans text-[15px] leading-[1.45] text-[#CED7E9] sm:text-[16px]">
                            Experience the ease of automated billing. Switch to QChargeAI to eliminate documentation
                            gaps and ensure your practice captures every dollar earned through a seamless, mobile-first
                            clinical rounding experience.
                        </p>

                        {/* CTA */}
                        <Link
                            href={ROUTES.REQUEST_DEMO}
                            className="group mt-5 inline-flex w-full max-w-fit items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 sm:w-auto sm:px-6"
                        >
                            Request a Demo
                            <span className="inline-flex rounded-full bg-white text-primary p-1 group-hover:translate-x-0.5 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </div>

                    <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/15 lg:block" />
                    <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />

                    <div className="relative z-10 mx-auto w-full max-w-[520px] self-end lg:mx-0 lg:max-w-none">
                        <Image
                            src="/assets/charge-capture/section6-laptop.png"
                            alt="QChargeAI product interface on laptop"
                            width={384}
                            height={384}
                            priority={false}
                            className="mx-auto h-auto w-full max-w-[420px] object-contain sm:max-w-[460px] lg:max-w-[510px]"
                            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 74vw, 510px"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChargeCaptureSection8