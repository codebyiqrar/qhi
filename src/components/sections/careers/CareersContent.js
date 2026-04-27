"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Upload } from "lucide-react";

import {
  careersHero,
  careerValues,
  currentOpenings,
  careersResumeCta,
} from "@/constants/careers";
import { cn } from "@/lib/utils";

const CircleArrowButton = ({ label, href = "#" }) => (
  <Link
    href={href}
    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-base font-medium text-[#F3F3F3] transition hover:bg-[#0b87cf] sm:h-[54px] sm:w-auto sm:gap-3 sm:px-[26px] sm:text-[18px]"
  >
    <span>{label}</span>
    <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white sm:h-[34px] sm:w-[34px]">
      <ArrowRight className="h-3.5 w-3.5 text-black sm:h-4 sm:w-4" />
    </span>
  </Link>
);

const JobCard = ({ item }) => (
  <article className="rounded-2xl bg-white p-4 sm:min-h-[366px] sm:p-[26px]">
    <div className="flex flex-wrap items-center gap-3">
      <span className="rounded-full border border-[#D1D5DB] px-4 py-2.5 text-sm text-[#10172A] sm:px-[30px] sm:py-[14px] sm:text-[18px]">
        {item.type}
      </span>
      <span className="rounded-full border border-[#D1D5DB] px-4 py-2.5 text-sm text-[#10172A] sm:px-[30px] sm:py-[14px] sm:text-[18px]">
        {item.location}
      </span>
    </div>

    <h3 className="mt-7 font-dm-sans text-[22px] font-medium leading-tight text-[#10172A] sm:text-[24px]">
      {item.title}
    </h3>
    <p className="mt-3 max-w-[484px] font-dm-sans text-sm leading-[1.55] text-[#464646] sm:text-base">
      {item.description}
    </p>

    <div className="mt-7 flex flex-wrap items-center gap-3">
      <button className="h-12 w-full rounded-full bg-primary px-6 text-base text-[#F3F3F3] transition hover:bg-[#0b87cf] sm:h-[54px] sm:w-auto sm:px-[36px] sm:text-[18px]">
        Explore Job
      </button>
      <CircleArrowButton label="Apply now" href="/contact" />
    </div>
  </article>
);

const CareersContent = () => {
  const [selectedResume, setSelectedResume] = useState("");

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];
    setSelectedResume(file ? file.name : "");
  };

  return (
    <main className="bg-white ">
      <section className="relative overflow-hidden px-4 pb-14 pt-[180px] sm:px-6 sm:pb-20 sm:pt-[188px]">
        <Image
          src="/career/hero-composite.png"
          alt="Careers background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#02152E]/20" />
        <div className="pointer-events-none absolute -left-[180px] -top-[230px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(13,148,228,0.20)_0%,rgba(13,148,228,0.08)_45%,rgba(13,148,228,0)_75%)]" />
        <div className="pointer-events-none absolute -right-[180px] -top-[230px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(13,148,228,0.20)_0%,rgba(13,148,228,0.08)_45%,rgba(13,148,228,0)_75%)]" />

        <div className="relative z-10 mx-auto max-w-6xl pb-8 text-center">
          <h1 className="font-syne text-[40px] font-bold leading-[1.15] text-white sm:text-[48px]">
            {careersHero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[448px] font-dm-sans text-[18px] text-white">
            {careersHero.subtitle}
          </p>
          <div className="mt-8">
            <CircleArrowButton label={careersHero.ctaLabel} href="#current-openings" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1300px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_464px] lg:items-center lg:py-20">
        <div>
          <h2 className="font-syne text-4xl font-bold leading-tight text-[#17233D] sm:text-[38px]">
            <span className="text-[#0D94E4]">Our </span>
            Values
          </h2>

          <div className="relative mt-9 pl-10">
            <div className="absolute left-2 top-1 h-[84%] w-px bg-[#0D94E4]" />
            <div className="space-y-10">
              {careerValues.map((value) => (
                <div key={value.title} className="relative">
                  <span className="absolute -left-8 top-1.5 h-5 w-5 rounded-full border border-[#0D94E4] bg-[#10172A]">
                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                  </span>
                  <h3 className="font-dm-sans text-[24px] font-medium leading-tight text-[#10172A]">
                    {value.title}
                  </h3>
                  <p className="mt-2 font-dm-sans text-base text-[#464646]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[464px]">
          <Image
            src="/career/values-composite.png"
            alt="Values visual collage"
            width={464}
            height={410}
            sizes="(max-width: 768px) 100vw, 464px"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section
        id="current-openings"
        className="relative overflow-hidden bg-[#10172A] px-4 py-16 sm:px-6 sm:py-20"
      >
        <Image
          src="/career/openings-left-glow.png"
          alt=""
          aria-hidden
          width={1173}
          height={1082}
          sizes="(max-width: 1280px) 100vw, 1173px"
          className="pointer-events-none absolute -left-[38%] bottom-0 max-w-none opacity-70"
        />
        <Image
          src="/career/openings-right-glow.png"
          alt=""
          aria-hidden
          width={1172}
          height={1082}
          sizes="(max-width: 1280px) 100vw, 1172px"
          className="pointer-events-none absolute left-1/2 top-0 max-w-none -translate-x-1/2 opacity-70"
        />

        <div className="relative z-10 mx-auto max-w-[1140px] pb-10">
          <h2 className="text-center font-syne text-4xl font-bold text-white sm:text-[38px]">
            Current <span className="text-[#0D94E4]">Openings</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {currentOpenings.map((job, idx) => (
              <JobCard key={`${job.title}-${idx}`} item={job} />
            ))}
          </div>


        </div>
      </section>
      <section
        id="current-openings"
        className="relative -mt-24 overflow-visible bg-transparent px-4 sm:-mt-14 sm:px-6 pb-16 sm:pb-20"
      >

        <div className="relative z-20 mx-auto max-w-[1140px] rounded-2xl">
          <div className="relative overflow-hidden rounded-[20px] bg-white px-5 py-10 text-center shadow-[0_16px_38px_rgba(9,18,43,0.28)] sm:px-10">
            <Image
              src="/career/resume-card-reference.png"
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="pointer-events-none object-contain object-center opacity-0"
            />
            <h3 className="font-syne text-3xl font-bold text-[#00132C] sm:text-[38px]">
              {careersResumeCta.title}
            </h3>
            <p className="mt-3 font-dm-sans text-lg text-[#10172A]">
              {careersResumeCta.subtitle}
            </p>

            <div className="mx-auto mt-6 flex w-full max-w-[760px] flex-col items-center justify-center gap-4">
              <label
                htmlFor="resume-upload"
                className="flex h-14 min-h-14 w-full cursor-pointer items-center rounded-full border border-[#A2A2A2] bg-white px-5 text-[#A2A2A2] shadow-[0_-5px_14px_rgba(16,23,42,0.24)] sm:flex-1"
              >
                <input
                  id="resume-upload"
                  type="file"
                  className="hidden"
                  onChange={handleResumeChange}
                />
                <Upload className="mr-3 h-5 w-5 shrink-0" />
                <span className={cn("truncate font-dm-sans text-base", selectedResume && "text-black")}>
                  {selectedResume || careersResumeCta.uploadPlaceholder}
                </span>
              </label>
              <button className="h-14 w-full cursor-pointer rounded-full bg-primary px-8 font-dm-sans text-lg font-medium text-white transition hover:bg-[#0b87cf] sm:w-auto sm:min-w-[220px]">
                {careersResumeCta.submitLabel}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersContent;
