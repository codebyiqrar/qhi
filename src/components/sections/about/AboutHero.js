import Image from "next/image";
import { aboutPageContent } from "@/constants/about";
import BackgroundAccents from "@/components/ui/BackgroundAccents";


const AboutHero = () => {
    const { hero } = aboutPageContent;

    return (
        <BackgroundAccents className="relative overflow-x-clip bg-white px-4 pt-16 sm:px-6 lg:px-8 pb-56 ">
            <section className="relative z-10 mx-auto mt-8 w-full max-w-7xl container sm:mt-12 md:mt-16 lg:mt-24">
                <div className="grid items-start gap-8 pt-2 sm:gap-10 lg:grid-cols-2 lg:gap-10">
                    <div className="relative mx-auto w-full max-w-full pb-8 sm:pb-10 md:pb-12 lg:mx-0 lg:pb-0">
                        <div className="relative overflow-hidden rounded-2xl bg-[#2847C5]">
                            <Image
                                src={hero.image}
                                alt={hero.imageAlt}
                                width={663}
                                height={442}
                                sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), (max-width: 1280px) 46vw, 534px"
                                className="h-[240px] w-full object-cover sm:h-[320px] md:h-[380px] lg:h-[420px]"
                            />
                        </div>

                        <div className="absolute -left-1.5 -top-1.5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2847C5] shadow-[0_8px_24px_rgba(16,23,42,0.16)] sm:-left-4 sm:-top-4 sm:h-20 sm:w-20 md:-left-5 md:-top-5 md:h-24 md:w-24">
                            <Image src={hero.iconMark} alt="Quantus mark" width={89} height={89} className="h-[36px] w-[36px] sm:h-[58px] sm:w-[58px] md:h-[72px] md:w-[72px]" />
                        </div>

                        <Image
                            src={hero.dottedCurve}
                            alt=""
                            width={78}
                            height={159}
                            className="pointer-events-none absolute -left-2 top-5 hidden h-auto w-[42px] sm:-left-9 sm:top-9 sm:block sm:w-[62px] md:-left-10 md:top-10 md:w-[78px]"
                        />

                        <div className="absolute -bottom-2 -left-1.5 rounded-2xl bg-white px-3 py-2 shadow-[0_8px_24px_rgba(16,23,42,0.12)] sm:-left-4 sm:px-5 sm:py-3 md:-bottom-5 md:-left-5 md:px-8 md:py-4">
                            <p className="font-syne text-[28px] font-bold leading-[0.95] text-[#10172A] sm:text-[46px] md:text-[56px] lg:text-[62px]">
                                {hero.title[0]}
                                <br />
                                {hero.title[1]}
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-full pt-2 sm:pt-4 lg:pt-0">
                        <h1 className="font-syne text-[28px] font-bold leading-[1.05] text-[#10172A] sm:text-[34px] md:text-[38px]">
                            Why <span className="text-[#0D94E4]">Quantus</span> Health Was Founded
                        </h1>
                        <p className="mt-4 font-dm-sans text-[14px] leading-relaxed text-[#464646] sm:text-[15px] md:mt-5 md:text-[16px]">{hero.paragraphOne}</p>
                        <p className="mt-4 font-dm-sans text-[14px] leading-relaxed text-[#464646] sm:text-[15px] md:mt-5 md:text-[16px]">{hero.paragraphTwo}</p>

                    </div>
                </div>

            </section>
        </BackgroundAccents>
    );
};

export default AboutHero;