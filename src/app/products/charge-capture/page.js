
import ChargeCaptureSection2 from '@/components/sections/charge-capture/ChargeCaptureSection2'
import ChargeCaptureSection3 from '@/components/sections/charge-capture/ChargeCaptureSection3'
import ChargeCaptureSection4 from '@/components/sections/charge-capture/ChargeCaptureSection4'
import ChargeCaptureSection5 from '@/components/sections/charge-capture/ChargeCaptureSection5'
import ChargeCaptureSection8 from '@/components/sections/charge-capture/ChargeCaptureSection8'
import ChargeCaptureSection6 from '@/components/sections/charge-capture/ChargeCaptureSection6'
import HeroSection from '@/components/sections/charge-capture/HeroSection'
import React from 'react'
import ChargeCaptureSection7 from '@/components/sections/charge-capture/ChargeCaptureSection7'
import ChargeCaptureSection9 from '@/components/sections/charge-capture/ChargeCaptureSection9'

export const metadata = {
  title: "QChargeAI | Quantus Health",
  description:
    "QChargeAI by Quantus Health is an intelligent Charge Capture solution that simplifies clinical documentation and ensures accurate billing for healthcare providers.",
  keywords: [
    "QChargeAI",
    "Quantus Health QCharge",
    "Charge Capture solution",
    "Medical billing software",
    "Healthcare documentation",
  ],
};


const ChargeCapture = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ChargeCaptureSection2 />
      <ChargeCaptureSection3 />
      <ChargeCaptureSection4 />
      <ChargeCaptureSection5 />
      <ChargeCaptureSection6 />
      <ChargeCaptureSection7 />
      <ChargeCaptureSection8 />
      <ChargeCaptureSection9 />
    </React.Fragment>
  )
}

export default ChargeCapture