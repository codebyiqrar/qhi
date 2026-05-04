import CtaSection from "@/components/sections/home/CtaSection";
import Features from "@/components/sections/home/Features";
import HeroSection2 from "@/components/sections/home/HeroSection2";
import HeroSection4 from "@/components/sections/home/HeroSection4";
import HomeSection5 from "@/components/sections/home/HomeSection";
import HomeSection2 from "@/components/sections/home/HomeSection2";
import HomeSection3 from "@/components/sections/home/HomeSection3";
import HomeSection6 from "@/components/sections/home/HomeSection6";
import HomeSection7 from "@/components/sections/home/HomeSection7";
import HomeSection8 from "@/components/sections/home/HomeSection8";
import HomeSection10 from "@/components/sections/home/HomeSection10";
import HomeSection9 from "@/components/sections/home/HomeSection9";
import HomeSection11 from "@/components/sections/home/HomeSection11";
import PickProducts from "@/components/sections/home/PickProducts";
import ProblemsSection from "@/components/sections/home/Problems";
import OverView from "@/components/sections/home/ProductsOverView";
import SecuritySection from "@/components/sections/home/SecuritySection";
import { ctaText } from "@/constants/home";
import HeroSection from "@/components/sections/home/HeroSection";
import HomeSection12 from "@/components/sections/home/HomeSection12";
import HomeCarousal from "@/components/sections/home/HomeCarousal";
import { getSiteUrl } from "@/constants/site";

const homeTitle = "Quantus Health | Healthcare Products & Digital Solutions";
const homeDescription =
  "Quantus Health delivers innovative healthcare products and digital solutions designed to enhance patient care, improve efficiency, and support modern healthcare operations.";

export const metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "Quantus Health",
    "Healthcare products",
    "Digital health solutions",
    "Medical software",
    "Healthcare technology",
    "Patient care tools",
    "Clinical productivity",
  ],
  alternates: {
    canonical: getSiteUrl(),
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: getSiteUrl(),
  },
  twitter: {
    title: homeTitle,
    description: homeDescription,
  },
};


export default function Home() {
  return (
    <>
      <HomeCarousal />
      <HeroSection4 />
      <HomeSection3 />
      <HomeSection5 />
    </>
  );
}
