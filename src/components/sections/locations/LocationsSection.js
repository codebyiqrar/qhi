import Image from "next/image";
import Link from "next/link";

import { LOCATION_PAGES } from "@/constants/locations";
import { LOCATIONS_PATH } from "@/constants/locations";
import BackgroundAccents from "@/components/ui/BackgroundAccents";
import { ArrowRight } from "lucide-react";
import TalkToExpert from "@/components/ui/TalkToExpert";
import { aboutPageContent } from "@/constants/about";


const LocationCard = ({ item }) => (
  <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#D7DDE5] bg-white pt-6 shadow-3xl">
    <div className="relative h-[160px] w-full min-h-0 sm:h-[180px] md:h-[200px]">
      <Image
        src={item.image}
        alt={`${item.label} healthcare technology services illustration`}
        fill
        className="object-contain scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
    </div>

    <div className="flex min-w-0 flex-1 flex-col px-4 pb-6 pt-5 sm:px-6">
      <h2 className="min-w-0 text-[24px] font-medium text-[#10172A]">
        {item.label}
      </h2>

      <p className="mt-3 min-w-0 wrap-break-word text-[16px] text-[#5A6884]">
        {item.description}
      </p>

      <div className="mt-auto flex w-full min-w-0 justify-end pt-5">
        <Link
          href={`${LOCATIONS_PATH}/${item.slug}`}
          className="relative inline-flex h-10 w-full max-w-[176px] min-w-0 shrink-0 items-center justify-center rounded-full bg-[#0D94E4] text-white sm:w-[176px]"
        >
          <span className="text-center">Learn More</span>

          <span className="absolute right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <ArrowRight className="h-3.5 w-3.5 text-black" />
          </span>
        </Link>
      </div>
    </div>
  </article>
);

export default function LocationsSection() {
  const { ctaForm } = aboutPageContent;
  return (
    <BackgroundAccents className="min-h-screen font-sans">
      <main className="relative z-10 pt-16 pb-20 sm:pt-20 sm:pb-28 md:pb-32">
        <div className="mx-auto w-full max-w-full text-center px-4 sm:px-6">
          {/* Pill label */}
          <div className="mb-3 mt-8 inline-block max-w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 sm:px-6">
            <span className="text-slate-800 font-semibold tracking-wide text-sm md:text-base">
              Nationwide
            </span>
          </div>
          <section className="relative z-10 overflow-hidden ">
            <div className="mx-auto w-full min-w-0 max-w-[1300px]">
                              <h1 className="mx-auto max-w-[840px] min-w-0 wrap-break-word text-center font-syne text-[34px] font-bold leading-[1.2] text-[#10172A] sm:text-[42px] lg:text-[48px]">
 Integrated Tools for : <span className="text-primary">Healthcare</span> Providers Across <span className="text-primary">The USA</span>
  </h1>
              <p className="mx-auto mt-6 min-w-0 max-w-[1168px] wrap-break-word px-0 text-center font-dm-sans text-[16px] leading-[1.6] text-[#5A6884] sm:px-2 md:px-4 lg:px-0">
                At Quantus Health, we offer healthcare solutions across the United States,
                providing automated tools that simplify billing, monitor patient health
                remotely, and enhance revenue cycle management. Our tools, QChargeAI for
                accurate billing, QRPM for remote patient monitoring, and QRCM for optimizing
                revenue cycles, are designed to improve operational efficiency and enhance
                patient care, no matter where your practice is located.
              </p>


            </div>
          </section>
        </div>
        <div className="mt-16 bg-[#0B1221] px-4 py-12 text-white sm:mt-20 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
          <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 -mt-16 -mb-16 sm:-mt-24 sm:-mb-24 md:-mt-28 md:-mb-28 lg:-mt-32 lg:-mb-32">
            {LOCATION_PAGES.map((item) => (
              <LocationCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
        <div className="mx-auto w-full min-w-0 max-w-[1300px] px-4 py-10 sm:px-6 sm:py-12">
          <TalkToExpert heading={ctaForm.heading} placeholders={ctaForm.placeholders} buttonText={ctaForm.buttonText} />
        </div>
      </main>
    </BackgroundAccents>
  );
}
