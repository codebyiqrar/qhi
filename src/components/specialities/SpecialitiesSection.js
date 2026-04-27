import Image from "next/image";
import Link from "next/link";

import { LOCATION_PAGES } from "@/constants/locations";
import { LOCATIONS_PATH } from "@/constants/locations";
import BackgroundAccents from "@/components/ui/BackgroundAccents";
import { ArrowRight } from "lucide-react";
import TalkToExpert from "@/components/ui/TalkToExpert";
import { aboutPageContent } from "@/constants/about";
import { SPECIALITY_PAGES } from "@/constants/specialities";


const SpecialityCard = ({ item }) => (
  <article className="flex h-full min-w-0 w-full flex-col overflow-hidden rounded-3xl border border-primary bg-[#10172A9E] pt-2 shadow-[0_10px_20px_rgba(13,148,228,0.3)]">
    <div className="flex justify-start px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-blue-500/10 to-blue-500/5 sm:h-20 sm:w-20">
        <Image
          src={item.image}
          alt={`${item.label} healthcare technology services illustration`}
          width={60}
          height={60}
          className="max-h-[60px] w-auto max-w-full object-contain"
        />
      </div>
    </div>

    <div className="flex min-h-0 min-w-0 flex-1 flex-col px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
      <h2 className="min-w-0 wrap-break-word text-[24px] font-medium text-white">
        {item.label}
      </h2>

      <p className="mt-3 min-w-0 wrap-break-word text-[16px] text-white">
        {item.description}
      </p>

      <div className="mt-auto flex min-w-0 justify-start pt-3">
        <Link
          href={`${LOCATIONS_PATH}/${item.slug}`}
          className="relative inline-flex min-h-[44px] min-w-0 max-w-full items-center gap-2 rounded-full py-2 text-primary hover:underline"
        >
          <span className="min-w-0 shrink text-sm">Learn More</span>
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M4.75088 0.233309C4.76519 0.0790586 4.92696 -0.027735 5.09465 0.00637254L8.98495 0.797665C9.15263 0.831773 9.24584 0.972967 9.21132 1.14057L8.41026 5.02887C8.37574 5.19647 8.21396 5.30326 8.0665 5.25581L7.81152 5.22141C7.66406 5.17395 7.57085 5.03275 7.58515 4.8785L8.16522 2.06284L0.582217 7.06878C0.440668 7.16222 0.272983 7.12812 0.179772 6.98692L0.0466152 6.78522C-0.0332792 6.66419 -0.0120668 6.47642 0.129483 6.38298L7.71249 1.37703L4.90869 0.824198C4.76123 0.776742 4.66802 0.635547 4.68232 0.481297L4.75088 0.233309Z"
              fill="#0D94E4"
            />
          </svg>
        </Link>
      </div>
    </div>
  </article>
);
export default function SpecialitiesSection() {

  return (
    <BackgroundAccents className="min-h-screen font-sans">
      <main className="relative z-10 pt-12  sm:pt-16  md:pt-20 pb-48">
        <div className="mx-auto w-full max-w-[1300px] px-4 text-center sm:px-6">
          {/* Pill label */}
          <div className="mb-3 mt-8 inline-block max-w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 sm:px-6">
            <span className="text-slate-800 font-semibold tracking-wide text-sm md:text-base">
              Specialties
            </span>
          </div>
          <section className="relative z-10 overflow-hidden">
            <div className="mx-auto w-full min-w-0 max-w-[1300px]">
              <h1 className="mx-auto max-w-[840px] min-w-0 wrap-break-word px-0 text-center font-syne text-[34px] font-bold leading-[1.2] text-[#10172A] sm:text-[42px] lg:text-[48px]">
                Integrated Tools Across Specialties: <span className="text-primary">Billing, Tracking, and Revenue</span>
              </h1>
              <p className="mx-auto mt-6 max-w-[1168px] min-w-0 wrap-break-word px-0 text-center font-dm-sans text-[16px] leading-[1.6] text-[#5A6884] sm:px-2 md:px-4 lg:px-0">
                At Quantus Health we provide dedicated solutions to healthcare specialties in the form of different automated tools. Different healthcare specialties use our tools in different areas of their billing process and patient care, QChargeAI for accurate billing, QRPM for monitoring patients remotely, and QRCM for managing revenue cycles more efficiently, ensuring smooth operations and better patient care.
              </p>
            </div>
          </section>
        </div>
        <div className="mt-12 bg-[#0B1221] px-4 py-12 text-white sm:mt-16 sm:px-6 sm:py-16 md:mt-20 md:px-10 md:py-20 lg:px-14 ">
          <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {SPECIALITY_PAGES.map((item) => (
              <SpecialityCard key={item.slug} item={item} />
            ))}
          </div>
        </div>

      </main>
    </BackgroundAccents>
  );
}
