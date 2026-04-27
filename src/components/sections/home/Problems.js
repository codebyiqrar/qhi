"use client"
import { Description } from "@/components/ui/description";
import { GradientHeading } from "@/components/ui/gradient-heading";
import ProblemCard from "@/components/ui/problem-card";
import { problemsArray, problemText } from "@/constants/home";
import React from "react";

export default function ProblemsSection() {
  return (
    <section className="pt-2 pb-4 sm:pt-4 sm:pb-6 md:pt-6 md:pb-8 lg:pt-8 lg:pb-10 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <GradientHeading>
            {problemText.heading}
          </GradientHeading>
          <Description>
            {problemText.description}
          </Description>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 max-w-none">
          {problemsArray.map((problem) => (
            <React.Fragment key={problem.id}>
              <ProblemCard icon={problem.icon} title={problem.title} description={problem.description} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
