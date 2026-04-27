import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

const rpmSection9 = {
    headingLines: [
        ['Experience The QRPM', '', ''],
        ['', 'Difference', ' Now'],
    ],
    description:
        'Give your team the tools they need to succeed and grow. Many clinics already use QRPM (Quantus Remote Patient Monitoring) to simplify their daily tasks and provide better medical oversight. A quick fifteen-minute demo shows exactly how this system improves your practice.',
    ctaText: 'Book Your Free Product Demo',
    visual: '/assets/rpm/section-9-image-3.png',
}

const AccentHeading = ({ headingLines }) => (
    <h2 className="font-syne text-[30px] font-bold leading-[1.08] tracking-[-0.01em] text-white sm:text-[38px] md:text-[46px] lg:text-[52px]">
        {headingLines.map(([before, accent, after = ''], idx) => (
            <span key={`${before}-${accent}-${idx}`} className="block">
                {before}
                {accent ? <span className="text-[#0A95E4]">{accent}</span> : null}
                {after}
            </span>
        ))}
    </h2>
)

const CtaButton = ({ label, href = ROUTES.CONTACT }) => (
    <Link
        href={href}
        className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg transition-all hover:bg-primary/90 sm:px-6 sm:py-3 sm:text-base"
    >
        {label}
        <span className="inline-flex rounded-full bg-white p-1 text-black transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-5 h-5" />
        </span>
    </Link>
)

const RPMSection9 = () => {
    const { headingLines, description, ctaText, visual } = rpmSection9

    return (
        <section className="text-white bg-[#10172A] overflow-hidden">
            <div className="relative mx-auto w-full container px-4 sm:px-6 md:px-8 lg:px-0">
                <div className="grid items-center gap-6 sm:gap-8 md:gap-9 lg:min-h-[500px] lg:pr-[400px] xl:min-h-[520px] xl:pr-[470px]">
                    <div className="relative z-10 pt-10 pb-1 sm:pt-12 md:pt-14 md:pb-3 md:pl-6 lg:pl-16 xl:pl-20">
                        <AccentHeading headingLines={headingLines} />
                        <p className="mt-4 max-w-[360px] font-dm-sans text-[14px] leading-relaxed text-[#C2CDDF] sm:max-w-[470px] sm:text-[15px] md:max-w-[560px] md:text-[16px] lg:max-w-[520px] lg:text-[17px]">
                            Empower your team with real-time monitoring, instant alerts, and seamless EHR integration, all through one secure, intelligent platform.
                        </p>
                        <div className="mt-6 sm:mt-7 md:mt-8">
                            <CtaButton label="Request a Demo" href={ROUTES.REQUEST_DEMO} />
                        </div>
                    </div>

                    <div className="relative hidden lg:block w-full max-w-[580px] justify-self-center pb-6 sm:pb-8 md:pb-10 lg:absolute lg:bottom-0 lg:right-0 lg:w-[50%] lg:max-w-[620px] lg:justify-self-end lg:pb-0">
                        <div className="relative mx-auto aspect-620/460 w-full max-w-[300px] sm:max-w-[390px] md:max-w-[500px] lg:max-w-[620px]">
                            <div className="pointer-events-none absolute left-[-10px] top-[-10px] h-[140px] w-[140px] rounded-full border border-white/15 sm:left-[-20px] sm:top-[-18px] sm:h-[190px] sm:w-[190px] md:left-[-28px] md:top-[-24px] md:h-[250px] md:w-[250px] lg:left-[-48px] lg:top-[-42px] lg:h-[420px] lg:w-[420px]" />
                            <div className="pointer-events-none absolute left-[8px] top-[6px] h-[95px] w-[95px] rounded-full border border-white/20 sm:left-[12px] sm:top-[9px] sm:h-[130px] sm:w-[130px] md:left-[16px] md:top-[11px] md:h-[180px] md:w-[180px] lg:left-[30px] lg:top-[22px] lg:h-[320px] lg:w-[320px]" />
                            <Image
                                src={visual}
                                alt="Automated QRPM workflow with healthcare dashboard visualization"
                                fill
                                sizes="(max-width: 640px) 78vw, (max-width: 768px) 62vw, (max-width: 1024px) 50vw, (max-width: 1280px) 46vw, 620px"
                                className="object-contain object-[right_bottom]"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default RPMSection9