import React from 'react'
import Hero from '@/components/sections/remote-patient-monitoring/Hero'
import RPMSection2 from '@/components/sections/remote-patient-monitoring/RPMSection2';
import RPMSection3 from '@/components/sections/remote-patient-monitoring/RPMSection3';
import RPMSection4 from '@/components/sections/remote-patient-monitoring/RPMSection4';
import RPMSection5 from '@/components/sections/remote-patient-monitoring/RPMSection5';
import RPMSection6 from '@/components/sections/remote-patient-monitoring/RPMSection6';
import RPMSection7 from '@/components/sections/remote-patient-monitoring/RPMSection7';
import RPMSection8 from '@/components/sections/remote-patient-monitoring/RPMSection8';
import RPMSection9 from '@/components/sections/remote-patient-monitoring/RPMSection9';
import RPMSection10 from '@/components/sections/remote-patient-monitoring/RPMSection10';
import RPMWorkflow from '@/components/sections/remote-patient-monitoring/RPMWorkflow';

export const metadata = {
  title: "QRPM | Quantus Health",
  description:
    "QRPM by Quantus Health is a Remote Patient Monitoring solution that enables continuous patient care, real-time health tracking, and improved clinical outcomes.",
  keywords: [
    "QRPM",
    "Quantus Health QRPM",
    "Remote Patient Monitoring",
    "Patient health tracking",
    "Digital healthcare solution",
  ],
};

const Page = () => {
  return (
    <React.Fragment>
      <Hero />
      {/* <RPMSection2 /> */}
      <RPMSection3 />
      <RPMWorkflow />
      {/* <RPMSection4 /> */}
      {/* <RPMSection5 /> */}
      {/* <RPMSection6 /> */}
      {/* <RPMSection7 /> */}
      {/* <RPMSection8 /> */}
      <RPMSection9 />
      <RPMSection10 />
    </React.Fragment>
  )
}

export default Page
