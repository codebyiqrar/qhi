"use client";
import React, { useState } from "react";

import { productsTabs, productsTabsImages, productsTabsTitles } from "@/constants/home";

export default function ProductsOverView() {
  const [activeTab, setActiveTab] = useState("qCharge");
  return (
    <section className="pt-2 pb-4 sm:pt-4 sm:pb-6 md:pt-6 md:pb-8 lg:pt-8 lg:pb-10 bg-background">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Tabs */}
        <div className="border-t-2 border-border mx-auto w-[80%]" />
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 ">
          <div className="inline-flex w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-auto ">
            {productsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative cursor-pointer flex-1 text-semibold lg:flex-none px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 xl:px-10 xl:py-3.5 2xl:px-12 2xl:py-4 text-xs sm:text-sm md:text-base lg:text-lg  font-medium transition-all duration-200  whitespace-nowrap ${activeTab === tab.id
                  ? "text-primary-dark border-t-4 border-primary-dark bg-linear-to-b from-primary-dark/5 to-secondary/5"
                  : "text-foreground"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        {/* Dashboard Image */}

        <div className="relative mx-auto max-w-4xl ">
          <div className="overflow-hidden border-8 border-border/50 rounded-md">
            <img
              src={productsTabsImages[activeTab]}
              alt={productsTabsTitles[activeTab]}
              className={`w-full h-auto max-w-full transition-opacity duration-300 `}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-20 bg-linear-to-t from-white/10 to-transparent rounded-b-lg sm:rounded-b-xl lg:rounded-b-2xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
