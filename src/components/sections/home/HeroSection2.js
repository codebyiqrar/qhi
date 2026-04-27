"use client";
import BackgroundAccents from "@/components/ui/BackgroundAccents";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";

export default function HeroSection2() {
  const router = useRouter();
  return (
    <BackgroundAccents className=" bg-white font-sans ">
      <main className="relative z-10 pt-40 pb-20 px-6 ">
        <div className="relative max-w-7xl mx-auto text-center ">
          {/* Top Pill Label */}
          <div className="inline-block px-6 py-2 rounded-full border border-slate-200 backdrop-blur-sm shadow-sm mb-8 animate-fade-in">
            <span className="text-slate-800 font-semibold tracking-wide text-sm md:text-2xl font-dm-sans">
              Revenue Cycle Automation
            </span>
          </div>

          {/* Headline row with floating mockups left and right */}
          <div className="relative min-h-[280px] md:min-h-[340px] flex flex-col items-center ">
            {/* Left mockup: Patient list — left of headline, slight counter-clockwise */}
            {/* <div className="hidden lg:block absolute left-0 top-8 xl:top-20 w-[42%] max-w-[200px] -rotate-12 z-0">
              <img
                src="/home/heroLeft.png"
                alt="Patient list dashboard"
                className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
              />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#2847C5] rounded-full shadow-xl flex items-center justify-center text-white z-10">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_130_73117)">
                    <path d="M29.1211 22.286H26.4647V18.4781C26.4647 17.9927 26.0712 17.5992 25.5858 17.5992H15.8577V15.8322H25.5859C26.0713 15.8322 26.4648 15.4387 26.4648 14.9533V0.878906C26.4648 0.393516 26.0713 0 25.5859 0H4.41416C3.92877 0 3.53525 0.393516 3.53525 0.878906V14.9532C3.53525 15.4386 3.92877 15.8321 4.41416 15.8321H14.1424V17.5991H4.41416C3.92877 17.5991 3.53525 17.9926 3.53525 18.478V22.286H0.878906C0.393516 22.286 0 22.6795 0 23.1649V29.1211C0 29.6065 0.393516 30 0.878906 30H8.00695C8.49234 30 8.88586 29.6065 8.88586 29.1211V23.1649C8.88586 22.6795 8.49234 22.286 8.00695 22.286H5.29307V19.357H14.1424V22.286H11.436C10.9506 22.286 10.5571 22.6795 10.5571 23.1649V29.1211C10.5571 29.6065 10.9506 30 11.436 30H18.5641C19.0495 30 19.443 29.6065 19.443 29.1211V23.1649C19.443 22.6795 19.0495 22.286 18.5641 22.286H15.8577V19.357H24.707V22.286H21.993C21.5077 22.286 21.1141 22.6795 21.1141 23.1649V29.1211C21.1141 29.6065 21.5077 30 21.993 30H29.1211C29.6065 30 30 29.6065 30 29.1211V23.1649C30 22.6795 29.6065 22.286 29.1211 22.286ZM7.92979 3.51562H22.0703C22.5557 3.51562 22.9492 3.90914 22.9492 4.39453C22.9492 4.87992 22.5557 5.27344 22.0703 5.27344H7.92979C7.44439 5.27344 7.05088 4.87992 7.05088 4.39453C7.05088 3.90914 7.44434 3.51562 7.92979 3.51562ZM7.92979 7.03125H22.0703C22.5557 7.03125 22.9492 7.42477 22.9492 7.91016C22.9492 8.39555 22.5557 8.78906 22.0703 8.78906H7.92979C7.44439 8.78906 7.05088 8.39555 7.05088 7.91016C7.05088 7.42477 7.44434 7.03125 7.92979 7.03125ZM7.05082 11.4258C7.05082 10.9404 7.44434 10.5469 7.92973 10.5469H22.0702C22.5556 10.5469 22.9491 10.9404 22.9491 11.4258C22.9491 11.9112 22.5556 12.3047 22.0702 12.3047H7.92979C7.44434 12.3047 7.05082 11.9112 7.05082 11.4258Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_130_73117">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
            </div> */}
            {/* Left mockup: Patient list — left of headline, slight counter-clockwise */}
            <div className="hidden lg:block absolute left-8  w-[42%] max-w-[200px] -rotate-[20deg] z-0">
              <div className="relative w-[50%]">
                <img
                  // src="/home/heroLeft.png"
                  src="/qcharge-mobile-full.svg"
                  alt="Patient list dashboard"
                  className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#2847C5] rounded-full shadow-xl flex items-center justify-center text-white z-10">
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_130_73117)">
                      <path d="M29.1211 22.286H26.4647V18.4781C26.4647 17.9927 26.0712 17.5992 25.5858 17.5992H15.8577V15.8322H25.5859C26.0713 15.8322 26.4648 15.4387 26.4648 14.9533V0.878906C26.4648 0.393516 26.0713 0 25.5859 0H4.41416C3.92877 0 3.53525 0.393516 3.53525 0.878906V14.9532C3.53525 15.4386 3.92877 15.8321 4.41416 15.8321H14.1424V17.5991H4.41416C3.92877 17.5991 3.53525 17.9926 3.53525 18.478V22.286H0.878906C0.393516 22.286 0 22.6795 0 23.1649V29.1211C0 29.6065 0.393516 30 0.878906 30H8.00695C8.49234 30 8.88586 29.6065 8.88586 29.1211V23.1649C8.88586 22.6795 8.49234 22.286 8.00695 22.286H5.29307V19.357H14.1424V22.286H11.436C10.9506 22.286 10.5571 22.6795 10.5571 23.1649V29.1211C10.5571 29.6065 10.9506 30 11.436 30H18.5641C19.0495 30 19.443 29.6065 19.443 29.1211V23.1649C19.443 22.6795 19.0495 22.286 18.5641 22.286H15.8577V19.357H24.707V22.286H21.993C21.5077 22.286 21.1141 22.6795 21.1141 23.1649V29.1211C21.1141 29.6065 21.5077 30 21.993 30H29.1211C29.6065 30 30 29.6065 30 29.1211V23.1649C30 22.6795 29.6065 22.286 29.1211 22.286ZM7.92979 3.51562H22.0703C22.5557 3.51562 22.9492 3.90914 22.9492 4.39453C22.9492 4.87992 22.5557 5.27344 22.0703 5.27344H7.92979C7.44439 5.27344 7.05088 4.87992 7.05088 4.39453C7.05088 3.90914 7.44434 3.51562 7.92979 3.51562ZM7.92979 7.03125H22.0703C22.5557 7.03125 22.9492 7.42477 22.9492 7.91016C22.9492 8.39555 22.5557 8.78906 22.0703 8.78906H7.92979C7.44439 8.78906 7.05088 8.39555 7.05088 7.91016C7.05088 7.42477 7.44434 7.03125 7.92979 7.03125ZM7.05082 11.4258C7.05082 10.9404 7.44434 10.5469 7.92973 10.5469H22.0702C22.5556 10.5469 22.9491 10.9404 22.9491 11.4258C22.9491 11.9112 22.5556 12.3047 22.0702 12.3047H7.92979C7.44434 12.3047 7.05082 11.9112 7.05082 11.4258Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_73117">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
              </div>
            </div>
            {/* Center: headline + sub-headline */}
            <div className="relative z-10 max-w-4xl mx-auto px-2">
              <h1 className="text-4xl md:text-5xl font-syne font-bold text-[#1e293b] leading-[1.1] mb-6 max-w-3xl mx-auto">
                AI-Driven{" "}
                <span className="text-primary">Revenue Optimization</span>{" "}
                Platform For Modern Care
              </h1>
              <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-dm-sans font-medium">
                High-tech revenue automation that handles the heavy lifting,
                from charge entry to remote patient care
              </p>
            </div>

            {/* Right mockup: Sales performance — right of headline, slight clockwise */}
            <div className="hidden lg:block absolute right-0 top-0 w-[38%] max-w-[230px] rotate-12 z-0">
              <img
                src="/home/heroRight.png"
                alt="Sales performance chart"
                className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
              />
            </div>

            {/* Floating badge: Fast / Reliable Care — below and left of right mockup */}
            <div className="hidden lg:block absolute right-[8%] bottom-20 w-[150px] -bg-conic-0rotate-12 z-10">
              <img
                src="/home/heroRightBadge.png"
                alt="Fast Reliable Care"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 max-w-5xl mx-auto justify-items-center lg:justify-items-start">
            {[
              "Claims Are Paid Quickly",
              "Payments Arrive Faster",
              "Record Visits At The Bedside.",
              "Track Patients Remotely",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <CiCircleCheck className="w-10 h-10 text-[#464646] shrink-0" />
                <span className="text-sm font-medium font-dm-sans text-[#464646]">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => router.push(ROUTES.REQUEST_DEMO)} className="group flex items-center gap-3 bg-primary hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg shadow-blue-200/50 font-dm-sans">
              Get A Free Demo
              <div className="bg-white rounded-full p-1 text-[#007bff] group-hover:translate-x-1 transition-transform">
                <IoIosArrowRoundForward className="w-6 h-6" />
              </div>
            </button>
            <button onClick={() => router.push(ROUTES.CONTACT)} className="group flex items-center gap-3 bg-white border border-slate-200 hover:border-sky-200 text-slate-700 px-6 py-3 rounded-full font-medium font-dm-sans transition-all">
              Contact Us
              <div className="bg-primary rounded-full p-1 text-white group-hover:translate-x-1 transition-transform">
                <IoIosArrowRoundForward className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </main>
    </BackgroundAccents>
  );
}
