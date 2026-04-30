'use client'
import { ROUTES } from '@/constants/routes'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ContactSection3 = () => {
    const router = useRouter()
    return (
        <section className="mx-auto pb-20 pt-14 sm:px-6 lg:pb-0 lg:px-[70px]">
            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,752px)_1fr]">
                <div className="max-w-[752px] py-10 lg:pr-6">
                    <h3 className="font-syne text-[34px] font-semibold leading-[1.2] sm:text-[38px]">
                        What can we help you <span className="text-[#0D94E4]">solve?</span>
                    </h3>
                    <p className="mt-5 text-[16px] text-[#464646]">
                        It is helpful if you tell us which part of the suite you are curious about so we
                        don't waste your time.
                    </p>
                    <p className="mt-4 text-[16px] leading-[1.45] text-[#464646]">
                        If you are struggling with revenue cycle management (QRCM), we can talk about how to
                        stop insurance companies from denying your claims. If you are more interested in
                        remote patient monitoring (QRPM), we can explain how our cellular devices work for
                        patients who aren't great with technology. And for the doctors out there tired of
                        paper logs, we can show you how QChargeAI makes hospital rounding a lot faster.
                    </p>
                    <button
                        onClick={() => router.push(ROUTES.REQUEST_DEMO)}
                        type="button"
                        className="mt-8 flex h-[54px] items-center gap-5 rounded-full bg-[#0D94E4] pl-7 pr-3 text-[18px] text-[#F3F3F3]"
                    >
                        Requesting a quick demo
                        <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-black">
                            <ArrowRight className="h-4 w-4" />
                        </span>
                    </button>
                </div>

                <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end lg:max-w-[560px]">
                    <Image
                        src="/contact/contact-image.png"
                        alt="Healthcare professional"
                        width={560}
                        height={430}
                        className="h-auto w-full object-contain object-bottom"
                        sizes="(max-width: 1024px) 80vw, 560px"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactSection3