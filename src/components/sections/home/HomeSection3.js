import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

const cards = [
  {
    title: "QChargeAI",
    description:
      "Enter charges on the go, capture every code, and stop losing revenue with mobile-first charge capture.",
    href: ROUTES.SOLUTIONS.QCHARGE,
    imageSrc: "/qcharge-mobile.png",
    imageAlt: "QChargeAI mobile preview",
  },
  {
    title: "QRCM",
    description:
      "From claim submission to denial management, our RCM simplifies the billing and keeps your revenue flowing.",
    href: ROUTES.SOLUTIONS.QRCM,
    imageSrc: "/new-pms.png",
    imageAlt: "QRCM dashboard preview",
  },
  {
    title: "QRPM",
    description:
      "Easily engage patients, track vitals in real time, and automate CCM reporting, all in one simple app.",
    href: ROUTES.SOLUTIONS.QRPM,
    imageSrc: "/rpm.png",
    imageAlt: "QRPM dashboard preview",
  },
  {
    title: "QEHR",
    description:
      "Keep patient records organized in one secure place to improve documentation and continuity of care.",
    href: ROUTES.SOLUTIONS.QEHR,
    imageSrc: "/ehr.png",
    imageAlt: "QEHR dashboard preview",
  },
];

export default function HomeSection3() {
  return (
    <section className="bg-white text-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="">
        <header className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold font-syne tracking-tight leading-tight max-w-4xl mx-auto">
            Smart <span className="text-primary">Tools</span> For Every Step Of
            The
            <br className="hidden sm:block" /> Patient{" "}
            <span className="text-primary">Journey</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#464646] font-dm-sans leading-relaxed max-w-6xl mx-auto">
            Start with the solution you need today. Add the others anytime.
            They work great alone, and even better together. Built to scale
            with your practice as you grow. Each product is built to reduce
            administrative burden, improve patient outcomes, and support more
            predictable revenue.
          </p>
          {/* <p className="mt-6 text-base md:text-lg text-[#464646] font-dm-sans leading-relaxed max-w-7xl mx-auto">
            Most clinics lose time on manual data entry and old paperwork. Our
            medical billing automation handles the heavy lifting by tracking
            every visit in real-time. It keeps your records accurate from the
            moment a patient checks in until the final bill is cleared.
          </p>
          <p className="mt-5 text-base md:text-lg text-[#464646] font-dm-sans leading-relaxed max-w-7xl mx-auto">
            The care continues even after the patient heads home. Through remote
            patient monitoring, you can check vitals and recovery progress
            without extra office visits. It is a simple way to stay connected
            while helping your practice build a more reliable monthly income.
          </p> */}
        </header>

        <div className="text-center mb-8 md:mb-10">
          <h3 className="text-xl md:text-3xl font-bold text-black font-syne">
            Our Core Technologies
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  max-w-7xl mx-auto">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-linear-to-b from-white/5 to-white/0"
            >
              <div className="flex flex-1 flex-col p-5">
                <h4 className="text-lg md:text-2xl font-semibold text-black font-dm-sans">
                  {card.title}
                </h4>
                <p className="mt-4 text-sm md:text-base text-[#464646] leading-relaxed font-dm-sans">
                  {card.description}
                </p>

                <Link
                  href={card.href}
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg py-2 text-primary font-semibold text-sm transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 font-dm-sans"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="">
                <div className="aspect-16/10 w-full overflow-hidden bg-sky-50 border border-white/10 p-3 sm:p-4 ">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="h-full w-full object-contain "
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
