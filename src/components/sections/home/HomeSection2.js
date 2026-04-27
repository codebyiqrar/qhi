import React from "react";
import {
  MousePointer2,
  BarChart3,
  Clock,
  AlertCircle,
  FileText,
  LayoutDashboard,
} from "lucide-react";

export default function HomeSection2() {
  return (
    <div className=" bg-[#10172A] text-slate-300 font-sans p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight font-syne min-w-0">
            The <span className="text-primary">Hidden Cost</span> Of Manual
            Billing And Disconnected Systems
          </h1>
          <div className="space-y-5 sm:space-y-6 text-sm sm:text-base font-dm-sans text-[#E2E2E2] leading-relaxed max-w-none lg:max-w-xl min-w-0">
            <p>
              Most medical practices lose significant revenue because their
              current tools don't communicate. This disconnect creates revenue
              cycle management gaps where medical coding errors and claim
              denials become a daily occurrence, draining your staff's energy
              and your practice's bank account.
            </p>
            <p>
              Quantus Health fixes these leaks by replacing manual work with
              automated charge capture and intelligent billing. We help you stop
              the revenue that leaks in the manual process, by ensuring that
              every patient visit is documented accurately and every claim is
              submitted with the correct details.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-8 md:space-y-10 min-w-0">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-10 bg-sky-500 rounded-full" />
                <h2 className="text-2xl sm:text-3xl font-bold font-syne text-white tracking-tight">
                  The Challenges Of Traditional Billing
                </h2>
              </div>

              <ul className="space-y-4 sm:space-y-5 md:space-y-6">
                {[
                  {
                    text: "Claims Get Rejected For Simple Typos.",
                    icon: AlertCircle,
                  },
                  {
                    text: "Billable Bedside Services Are Often Forgotten.",
                    icon: FileText,
                  },
                  {
                    text: "Staff Spend Hours On Manual Data Entry.",
                    icon: Clock,
                  },
                  {
                    text: "Payments Stay Stuck In Accounts Receivable.",
                    icon: MousePointer2,
                  },
                  {
                    text: "Patient Monitoring Feels Scattered And Disorganized.",
                    icon: LayoutDashboard,
                  },
                  {
                    text: "Poor Visibility Into Your Actual Profits.",
                    icon: BarChart3,
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 sm:gap-4 group cursor-default"
                  >
                    <span className="text-sky-400 mt-1.5 shrink-0">•</span>
                    <span className="text-sm sm:text-base font-dm-sans text-white font-medium group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#E2E2E2] text-sm sm:text-base font-dm-sans font-medium leading-relaxed pt-2 sm:pt-4">
              Running a practice shouldn't feel like an endless cycle of fixing
              errors. We provide the smart tools you need to streamline your
              office, protect your income, and focus on patient health.
            </p>
          </div>

          <div className="lg:col-span-7 relative flex justify-center items-center py-8 md:py-10 lg:py-0 w-full min-w-0">
            <img
              src={"/home/homeSection2.png"}
              alt="Home Section 2"
              className="w-full h-auto object-contain lg:object-cover max-w-[640px] lg:max-w-none"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
