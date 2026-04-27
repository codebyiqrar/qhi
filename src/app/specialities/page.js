import SpecialitiesSection from '@/components/specialities/SpecialitiesSection'
import TalkToExpert from '@/components/ui/TalkToExpert'
import { aboutPageContent } from '@/constants/about';
import React from 'react'

const Page = () => {
  const { ctaForm } = aboutPageContent;
  return (
    <React.Fragment>
      <SpecialitiesSection />
      <div className="relative -translate-y-1/2 z-20 mx-auto -mt-24 w-full max-w-[1300px] px-4 sm:-mt-28 sm:px-6 md:-mt-32">
        <TalkToExpert className="w-full min-w-0" heading={ctaForm.heading} placeholders={ctaForm.placeholders} buttonText={ctaForm.buttonText} />
      </div>
    </React.Fragment>

  )
}

export default Page