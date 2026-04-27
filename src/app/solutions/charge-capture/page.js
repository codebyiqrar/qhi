import ChargeCaptureSection4 from '@/components/sections/charge-capture/ChargeCaptureSection4'
import ChargeCaptureSection8 from '@/components/sections/charge-capture/ChargeCaptureSection8'
import ChargeCaptureSection6 from '@/components/sections/charge-capture/ChargeCaptureSection6'
import HeroSection from '@/components/sections/charge-capture/HeroSection'
import React from 'react'
import ChargeCaptureSection9 from '@/components/sections/charge-capture/ChargeCaptureSection9'
import ChargeCaptureShowcaseSection from '@/components/sections/charge-capture/ChargeCaptureShowcaseSection'

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
      {/* <HeroSection /> */}
      <ChargeCaptureShowcaseSection />
      <ChargeCaptureSection4 />
      <ChargeCaptureSection6 />
      <ChargeCaptureSection8 />
      <ChargeCaptureSection9 />
    </React.Fragment>
  )
}

export default ChargeCapture
