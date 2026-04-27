import React from 'react'
import RequestDemoHero from '@/components/sections/request-demo/RequestDemoHero'
import RequestDemoShowcaseSection from '@/components/sections/request-demo/RequestDemoShowcaseSection'
import RequestDemoHowItWorksSection from '@/components/sections/request-demo/RequestDemoHowItWorksSection'
import RequestDemoWhyDemoSection from '@/components/sections/request-demo/RequestDemoWhyDemoSection'
import RequestDemoReachFormSection from '@/components/sections/request-demo/RequestDemoReachFormSection'

const RequestDemo = () => {
    return (
        <React.Fragment>
            <RequestDemoHero />
            <RequestDemoShowcaseSection />
            <RequestDemoHowItWorksSection />
            <RequestDemoWhyDemoSection />
            <RequestDemoReachFormSection />
        </React.Fragment>
    )
}

export default RequestDemo