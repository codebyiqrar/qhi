

'use client'

import React from 'react'
import Image from 'next/image'
import { qchargeSection2 } from '@/constants/q-charge'

const ChargeCaptureSection2 = () => {
  const { paragraph1, paragraph2, paragraph3, bullets, imageMain } = qchargeSection2

  return (
    <section className="bg-[#0B1221] text-white py-12 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-12">
          <div className="w-full lg:w-[39%]">
            <div className="relative w-full aspect-4/3 min-h-[220px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[380px] rounded-2xl overflow-hidden shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-br from-transparent via-transparent to-[#0b12211a]" />
              <div className="relative w-full h-full">
                <Image
                  src={imageMain}
                  alt="Paperwork challenges"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-4 sm:mt-5 text-[#c7d4ef] text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed font-light max-w-full sm:max-w-[95%]">
              {paragraph3}
            </p>
          </div>

          <div className="w-full lg:w-[61%] space-y-4 sm:space-y-5">
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-syne lg:text-[46px] font-semibold leading-[1.15] tracking-tight">
              Why <span className="text-[#00AEEF]">Manual Charge Capture</span> Leads To Significant{' '}
              <span className="text-[#00AEEF]">Practice Losses</span>
            </h2>

            <div className="space-y-3 text-[#d2dbee] text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed font-light">
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </div>

            <ul className="space-y-2 sm:space-y-1.5 pt-1">
              {bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-[#e7eefc] text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed">
                  <span className="text-[#00AEEF] text-xl sm:text-2xl leading-none mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChargeCaptureSection2