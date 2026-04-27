
"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { GradientBadge } from "@/components/ui/gradientBadge";
import { heroText } from "@/constants/home";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";


export default function HeroSection() {
  const router = useRouter()

  const handleNavigate = () => {
    router.push(ROUTES.CONTACT);
  }

  return (
    <section className="relative overflow-hidden py-20 bg-background">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
        <GradientBadge text={heroText?.badge} />

        <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="bg-linear-to-r from-[#1F2937] via-[rgba(31,41,55,0.85)] to-[#1F2937] bg-clip-text text-transparent">
            {heroText?.heading1}
          </span>
          <br />
          <span className="bg-linear-to-r from-[#2847C5] via-[#0D94E4] to-[#2847C5] bg-clip-text text-transparent">
            {heroText?.heading2}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-md text-foreground">
          {heroText?.description}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button onClick={handleNavigate} size="lg" className="shadow-lg rounded-2xl border-2 w-full md:w-auto px-6">
            {heroText?.ctaDemo}
          </Button>
          <Button onClick={handleNavigate} variant="outline" size="lg" className="rounded-2xl border-2 w-full md:w-auto bg-border">
            {heroText?.ctaExpert}
          </Button>
        </div>
      </div>
    </section>
  );
}
