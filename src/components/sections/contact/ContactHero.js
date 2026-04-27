import BackgroundAccents from '@/components/ui/BackgroundAccents'
import React from 'react'

const ContactHero = () => {
    return (
        <BackgroundAccents className="relative overflow-x-clip bg-white px-4 pt-16 sm:px-6 lg:px-8 pb-24 ">
            <section className="relative z-10 mx-auto mt-8 w-full max-w-7xl container sm:mt-12 md:mt-16 lg:mt-32">
                <div className="mb-5 w-fit mx-auto rounded-full border border-[#DEDEDE] px-[14px] py-[7px]">
                    <span className="text-[14px] sm:text-[18px] leading-tight text-[#10172A] ">
                        Getting in touch with Quantus Health
                    </span>
                </div>
                <h1 className="mx-auto max-w-[986px] text-center font-syne text-[40px] font-semibold leading-[1.1] sm:text-[48px]">
                    Contact <span className="text-[#0D94E4]">Our Team</span>
                </h1>
                <p className="mx-auto mt-5 max-w-[1168px] text-center text-[16px] leading-[1.4] text-[#464646]">
                    Modern medicine is already complicated enough. We do not think getting a hold of
                    your software partner should be. If you are looking into QChargeAI, QRPM, or QRCM,
                    you likely have very specific questions about how these tools will actually work on a
                    busy Tuesday morning in your clinic. We want to give you those answers. No bots. No
                    long wait times. Just a direct conversation with someone here who knows the technology
                    inside and out.
                </p>
            </section>
        </BackgroundAccents>
    )
}

export default ContactHero