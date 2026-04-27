'use client';
import React from 'react';
import Image from 'next/image';
import BackgroundAccents from '@/components/ui/BackgroundAccents';

const USER_REFERENCE_IMAGE =
    '/assets/charge-capture/reference-showcase.png';

const platformPills = ['Web Dashboard', 'iOS App', 'Android App'];
const quickHighlights = [
    'Real-time encounter sync',
    'Charge capture in under 20 sec',
    'HIPAA-safe cloud workflows',
];

export default function ChargeCaptureShowcaseSection() {
    return (
        <BackgroundAccents className="font-sans">
            <section className="relative z-10 py-16 md:py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-300 bg-white/85 backdrop-blur-sm shadow-sm mb-6">
                                <span className="text-slate-800 font-semibold tracking-wide text-xs sm:text-sm uppercase">
                                    Charge Capture
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-slate-800 leading-[1.08] tracking-tight mb-5">
                                Charge Capture
                                <span className="block text-primary">Across Every Device, In Real Time</span>
                            </h2>

                            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                                One modern charge-capture experience across desktop and mobile. Your clinical activity, coding updates, and billing actions stay synced in real time.
                            </p>

                            <div className="flex flex-wrap gap-2.5 mb-6">
                                {platformPills.map((label) => (
                                    <span
                                        key={label}
                                        className="px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 text-xs sm:text-sm font-medium"
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-2.5">
                                {quickHighlights.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2.5 text-slate-700 text-sm sm:text-base"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative rounded-[28px] border border-slate-200/80 bg-linear-to-b from-white to-sky-50/65 p-5  shadow-[0_30px_70px_rgba(15,23,42,0.14)] overflow-hidden">
                                <div className="absolute -top-10 right-0 w-56 h-56 bg-sky-200/40 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-14 left-5 w-56 h-56 bg-blue-200/35 blur-3xl pointer-events-none" />

                                <div className="relative rounded-2xl overflow-hidden border border-white/70 bg-white/70 backdrop-blur-sm shadow-[0_16px_45px_rgba(15,23,42,0.16)] min-h-[300px] sm:min-h-[380px] md:min-h-[440px]">
                                    <Image
                                        src={'/q-charge-dashboard.svg'}
                                        alt="QCharge cross platform showcase"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/25 via-transparent to-transparent" />
                                </div>

                                <div className="absolute left-3 sm:left-5 bottom-3 sm:bottom-5 w-[18%] min-w-[72px] sm:min-w-[86px] max-w-[120px] z-20">
                                    <Image
                                        src="/qcharge-mobile-full.svg"
                                        alt="iOS app"
                                        width={260}
                                        height={540}
                                        className="w-full h-auto drop-shadow-[0_14px_28px_rgba(15,23,42,0.35)]"
                                    />
                                </div>

                                <div className="absolute right-3 sm:right-5 bottom-3 sm:bottom-5 w-[18%] min-w-[72px] sm:min-w-[86px] max-w-[120px] z-20">
                                    <Image
                                        src="/cc-android.png"
                                        alt="Android app"
                                        width={260}
                                        height={540}
                                        className="w-full h-auto  drop-shadow-[0_14px_28px_rgba(15,23,42,0.35)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BackgroundAccents>
    );
}