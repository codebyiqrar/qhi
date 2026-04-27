

'use client'

import React from 'react'
import Image from 'next/image'
import { rcmSection2 } from '@/constants/revenue-cycle-management'

const RCMSection2 = () => {
  const { heading, paragraph1, paragraph2, bullets, imageMain, imageInset } = rcmSection2

  return (
    <section className="bg-[#0B1221] text-white py-12 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

          {/* Left: Overlapping images with Custom Clipping */}
          <div className="w-full lg:w-3/5 relative h-full max-w-[640px] lg:max-w-none mx-auto">
            <div className="relative w-full aspect-5/4 min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]">
              {/* Main Image (The one with the 'L' cut-out for the inset) */}
              <div className="relative w-[94%] sm:w-[95%] h-full rounded-3xl sm:rounded-4xl overflow-hidden">
                <Image
                  src={imageMain}
                  alt="Paperwork challenges"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Inset Image (Positioned in the bottom right gap) */}
              <div className="absolute right-0 -bottom-3 sm:-bottom-4 lg:-bottom-5 w-[48%] sm:w-[50%] h-[56%] sm:h-[60%] rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden border-6 sm:border-8 lg:border-12 border-[#0B1221]">
                <Image
                  src={imageInset}
                  alt="Software solution"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="w-full lg:w-3/5 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-bold leading-[1.15] tracking-tight">
              Common <span className="text-[#38BDF8]">Revenue Cycle</span> Challenges Without Smart RCM Support
            </h2>

            <div className="space-y-3 text-gray-300 text-sm sm:text-base md:text-md leading-relaxed font-light">
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </div>

            <ul className="space-y-2 sm:space-y-3">
              {bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4 text-gray-200 text-sm sm:text-base md:text-md">
                  <span className="text-white text-base sm:text-lg leading-none mt-1">•</span>
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

export default RCMSection2