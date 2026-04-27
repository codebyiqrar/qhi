import Image from "next/image";
import { aboutPageContent } from "@/constants/about";
import TalkToExpert from "@/components/ui/TalkToExpert";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const VisionMissionBlock = ({ title, text }) => (
    <article>
        <h3 className="font-syne text-[34px] font-bold leading-[1.1] text-white sm:text-[38px]">
            {title}
        </h3>
        <p className="mt-5 font-dm-sans text-[15px] leading-[1.65] text-[#E2E2E2] sm:text-[16px]">
            {text}
        </p>
    </article>
);

const ArrowPillButton = ({ children }) => (
    <Link
        href={ROUTES.CONTACT}
        className="inline-flex min-h-[54px] w-full max-w-full  items-center justify-center gap-3 rounded-full bg-[#0D94E4] px-4 py-3 font-dm-sans text-[16px] font-medium text-[#F3F3F3] transition hover:bg-[#0A84CE] sm:w-auto sm:justify-start sm:gap-4 sm:px-6 md:text-[18px]"
    >
        <span className="min-w-0 text-sm lg:text-base text-center sm:text-left">{children}</span>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#10172A]">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M1 4H13M13 4L9.5 1M13 4L9.5 7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        </span>
    </Link>
);

const AboutSection2 = () => {
    const { visionMission, standards, ctaForm } = aboutPageContent;

    return (
        <section className="relative bg-white">
            <div className="relative overflow-x-clip overflow-y-visible bg-[#10172A] px-4 pb-0 sm:px-6 lg:px-8">
                <div className="relative z-30 mx-auto w-full max-w-7xl -translate-y-1/2">
                    <TalkToExpert
                        heading={ctaForm.heading}
                        placeholders={ctaForm.placeholders}
                        buttonText={ctaForm.buttonText}
                    />
                </div>
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <Image src={visionMission.wave1} alt="" width={841} height={423} className="absolute bottom-[-138px] right-[-28px] h-auto w-[60%] shrink-0" />
                    <Image src={visionMission.wave2} alt="" width={916} height={384} className="absolute bottom-[-112px] right-[-32px] h-auto w-[64%] shrink-0" />
                    <Image src={visionMission.wave3} alt="" width={996} height={363} className="absolute bottom-[-96px] right-[-36px] h-auto w-[68%] shrink-0" />
                </div>
                <div className="mx-auto -mt-8 grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_558px] lg:items-end">
                    <div className="relative z-10 space-y-14 pb-10 sm:pb-12 lg:pb-16">
                        <VisionMissionBlock title={visionMission.visionTitle} text={visionMission.visionText} />
                        <VisionMissionBlock title={visionMission.missionTitle} text={visionMission.missionText} />
                    </div>
                    <div className="relative z-10 m-0 mx-auto w-full max-w-[558px] self-end overflow-hidden p-0 lg:mx-0 lg:justify-self-end">
                        <Image
                            src={visionMission.image}
                            alt={visionMission.imageAlt}
                            width={558}
                            height={633}
                            sizes="(max-width: 1024px) 100vw, 558px"
                            className="block h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="min-w-0 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                <div className="mx-auto w-full min-w-0 max-w-[1300px]">
                    <h2 className="wrap-break-word text-center font-syne text-[34px] font-bold leading-[1.21] text-[#10172A] sm:text-[38px] sm:leading-[1.21]">
                        Our <span className="text-[#0D94E4]">Operating</span> Standards
                    </h2>
                    <p className="mx-auto mt-6 max-w-[1132px] wrap-break-word text-center font-dm-sans text-[15px] leading-snug text-[#464646] sm:mt-6 sm:text-[16px] sm:leading-snug">
                        {standards.subtitle}
                    </p>

                    <div className="mt-8 grid min-w-0 gap-8 lg:mt-[18px] lg:grid-cols-[minmax(0,676px)_minmax(0,578px)] lg:items-start lg:justify-between lg:gap-x-[46px] lg:gap-y-0">
                        <article className="relative w-full min-w-0 max-w-[676px] overflow-hidden rounded-2xl max-lg:mx-auto max-lg:aspect-676/471 lg:h-[471px] lg:max-w-none lg:justify-self-start">
                            <Image
                                src={standards.imagePanelImage}
                                alt="Medical billing monitor"
                                width={716}
                                height={478}
                                sizes="(max-width: 1024px) 100vw, 676px"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#2847C5]/50" aria-hidden />
                            <div className="absolute bottom-3 left-3 right-3 z-10 min-w-0 rounded-2xl bg-[#10172A]/60 px-4 py-4 text-center sm:bottom-[15px] sm:left-[15px] sm:right-[15px] sm:px-8 sm:py-6">
                                <p className="mx-auto max-w-[562px] wrap-break-word font-dm-sans text-[20px] leading-tight text-white sm:text-[24px] sm:leading-[1.33]">
                                    {standards.imagePanelText}
                                </p>
                                <div className="mt-6 flex w-full min-w-0 justify-center px-0.5">
                                    <ArrowPillButton>{standards.imagePanelButton}</ArrowPillButton>
                                </div>
                            </div>
                        </article>

                        <div className="flex w-full min-w-0 max-w-[578px] flex-col gap-[35px] max-lg:mx-auto lg:max-w-[578px] lg:justify-self-end lg:pt-2">
                            {standards.items.map((item) => (
                                <article key={item.title} className="min-w-0">
                                    <h3 className="wrap-break-word font-dm-sans text-[24px] font-bold leading-none text-[#10172A]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 wrap-break-word font-dm-sans text-[16px] leading-snug text-[#464646]">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection2;