"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Description } from "@/components/ui/description";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { pickProductsText, productsData } from "@/constants/home";

export default function PickProducts() {
  const router = useRouter();
  return (
    <section className="py-12 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16">
          <GradientHeading>
            {pickProductsText?.heading1}
          </GradientHeading>
          <GradientHeading>
            {pickProductsText?.heading2}
          </GradientHeading>
          <Description>
            {pickProductsText?.description}
          </Description>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="group relative bg-background overflow-hidden"
            >
              <div
                className="relative aspect-16/11 overflow-hidden rounded-3xl border-b border-gray-200 "
                style={{
                  background: "linear-gradient(95.91deg, rgba(40, 71, 197, 0.1) 0.23%, rgba(40, 71, 197, 0) 75.23%, rgba(40, 71, 197, 0.1) 100.23%)"
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-top shadow-sm"
                />
              </div>
              <div  >
                <div className="inline-flex items-center rounded-full text-sm font-medium my-2 bg-accent/60 bg-linear-to-r from-[#2847C5] via-[#0D94E4] to-[#2847C5] bg-clip-text text-transparent">
                  <div className="mr-2 h-4 w-4">
                    <Image src="/star.svg" alt="Rocket Icon" width={16} height={16} />
                  </div>
                  {product.badgeText}
                </div>
                <h3 className="text-xl font-bold mb-2 lg:text-2xl leading-tight bg-linear-to-r from-[#1F2937] via-[rgba(31,41,55,0.85)] to-[#1F2937] bg-clip-text text-transparent">
                  {product.title}
                </h3>
                <p className="text-md text-foreground mb-3 leading-relaxed  lg:text-base">
                  {product.description}
                </p>
                <div className="flex">
                  <button
                    onClick={() => router.push(product.buttonLink)}
                    className="py-2 px-3 rounded-lg inline-flex items-center gap-2 text-foreground font-semibold  group/btn text-sm lg:text-base cursor-pointer"
                    style={{
                      background: "linear-gradient(95.91deg, rgba(40, 71, 197, 0.15) 0.23%, rgba(40, 71, 197, 0) 75.23%, rgba(40, 71, 197, 0.15) 100.23%)"
                    }}
                  >
                    <span>{product.buttonText}</span>
                    <svg
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M4.1665 10H15.8332" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}