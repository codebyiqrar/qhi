"use client"
import React from "react";

import { features, featuresText } from "@/constants/home";

const Features = () => {
  return (
    <section className="w-full bg-primary">
      <div className="w-full max-w-7xl mx-auto px-3">
        <div className="flex flex-col md:flex-row items-stretch">

          <div className="md:w-1/2 w-full p-12 md:py-24 md:px-16 text-background flex items-start">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                {featuresText?.heading1}
                <br />
                {featuresText?.heading2}
              </h2>
              <p className="text-sm md:text-base text-background">
                {featuresText?.description}
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full p-10 md:py-20 md:px-12 flex items-start">
            <div className="w-full space-y-6">

              {features.map((f) => (
                <article
                  key={f.title}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between bg-background rounded-2xl shadow-md p-4 md:p-5 gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                      <p className="text-sm text-foreground/80">{f.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center sm:justify-end">
                    {f.icon}
                  </div>
                </article>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
