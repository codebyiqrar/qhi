import React from 'react'
import { CircleDollarSign, UserRound, Clock3, Sparkles } from 'lucide-react'

const stats = [
    {
        value: '99.8%',
        label: 'AI-Assisted Charge Accuracy',
        icon: Sparkles,
        variant: 'light',
    },
    {
        value: '35%',
        label: 'Average Revenue Increase',
        icon: CircleDollarSign,
        variant: 'primary',
    },
    {
        value: '50K+',
        label: 'QChargeAI Users',
        icon: UserRound,
        variant: 'dark',
    },
    {
        value: '< 20 sec',
        label: 'Average Charge Entry Time',
        icon: Clock3,
        variant: 'light',
    },
]

const cardVariants = {
    light: 'border border-[#D9E4F6] bg-[#F8FAFF] text-[#17233D]',
    primary: 'border border-[#1D72E1] bg-[linear-gradient(135deg,#1BA8F5_0%,#2B5EDC_100%)] text-white',
    dark: 'border border-[#12274B] bg-[#081739] text-white',
}

const ChargeCaptureStatsStrip = () => {
    return (
        <section className="bg-white py-8 sm:py-14">
            <div className="mx-auto w-full max-w-[1226px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {stats.map((item) => {
                        const Icon = item.icon
                        return (
                            <article
                                key={item.label}
                                className={`rounded-2xl px-5 py-5 shadow-[0_8px_22px_rgba(6,24,56,0.08)] ${cardVariants[item.variant]}`}
                            >
                                <Icon className="h-6 w-6 opacity-90" />
                                <h3 className="mt-3 font-dm-sans text-[36px] font-bold leading-none tracking-[-0.02em]">
                                    {item.value}
                                </h3>
                                <p
                                    className={`mt-2 font-dm-sans text-[14px] leading-[1.45] ${item.variant === 'light' ? 'text-[#4D5E84]' : 'text-white/90'
                                        }`}
                                >
                                    {item.label}
                                </p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ChargeCaptureStatsStrip
