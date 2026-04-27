import React from 'react'
import Hero from '@/components/sections/revenue-cycle-management/Hero'
import RCMSection2 from '@/components/sections/revenue-cycle-management/RCMSection2'
import RCMSection3 from '@/components/sections/revenue-cycle-management/RCMSection3'
import RCMSection4 from '@/components/sections/revenue-cycle-management/RCMSection4'
import RCMSection5 from '@/components/sections/revenue-cycle-management/RCMSection5'
import RCMSection6 from '@/components/sections/revenue-cycle-management/RCMSection6'
import RCMSection7 from '@/components/sections/revenue-cycle-management/RCMSection7'
import RCMSection8 from '@/components/sections/revenue-cycle-management/RCMSection8'
import RCMSection9 from '@/components/sections/revenue-cycle-management/RCMSection9'

export const metadata = {
  title: "QRCM | Quantus Health",
  description:
    "QRCM by Quantus Health is a comprehensive Revenue Cycle Management solution designed to optimize healthcare billing, reduce denials, and streamline revenue operations.",
  keywords: [
    "QRCM",
    "Quantus Health QRCM",
    "Revenue Cycle Management",
    "Healthcare billing solution",
    "Medical revenue optimization",
  ],
};

const Page = () => {
  return (
    <React.Fragment>
      <Hero />
      {/* <RCMSection2 /> */}
      <RCMSection6 />
      <RCMSection3 />
      {/* <RCMSection4 /> */}
      {/* <RCMSection5 /> */}

      {/* <RCMSection7 /> */}
      <RCMSection8 />
      <RCMSection9 />
    </React.Fragment>
  )
}

export default Page
