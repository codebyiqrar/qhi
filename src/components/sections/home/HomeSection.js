// import React from "react";

// const trustPoints = [
//     "Strict HIPAA Compliance For All Patient Records.",
//     "Encryption Keeps All Sensitive Data Fully Scrambled.",
//     "Regular Audits Find And Fix Potential Vulnerabilities.",
//     "Control Which Staff See Specific Office Data.",
//     "Cloud Backups Prevent Any Permanent Data Loss.",
//     "Reliable Monitoring Keeps Your Practice Fully Protected.",
// ];

// export default function HomeSection5() {
//     return (
//         <section className="bg-[#0B1220] text-white pt-14 sm:pt-16 pb-0.5 px-4 sm:px-6 lg:px-8 overflow-hidden">
//             <div className="mx-auto max-w-7xl">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
//                     <div className="flex flex-col min-w-0">
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-semibold tracking-tight leading-tight wrap-break-word">
//                             Quantus Health -
//                             <br />
//                             Enterprise-Grade <span className="text-sky-400">Security</span>
//                             <br />
//                             And <span className="text-sky-400">HIPAA</span> Compliance
//                         </h2>

//                         <div
//                             className="mt-8 sm:mt-10 -ml-2 sm:-ml-6 lg:-ml-24 xl:-ml-32 w-[calc(100%+0.5rem)] sm:w-[calc(100%+1.5rem)] lg:w-[calc(100%+2rem)]"
//                         >
//                             <img
//                                 src="/home/homeSection5.png"
//                                 alt="Security and HIPAA compliance visual"
//                                 className="w-full h-auto max-w-none object-contain"
//                                 loading="lazy"
//                             />
//                         </div>
//                     </div>

//                     <div className="pt-1 min-w-0">
//                         <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
//                             Protecting patient information is a core part of our platform. We use secure
//                             medical data management protocols to ensure every piece of information remains
//                             encrypted and compliant. Our infrastructure provides a reliable environment
//                             where your practice operates without privacy risks.
//                         </p>

//                         <div className="mt-8 sm:mt-10 max-w-xl">
//                             <div className="flex items-start sm:items-center gap-3">
//                                 <span className="h-7 w-[3px] bg-sky-500 rounded-full" aria-hidden="true" />
//                                 <h3 className="text-lg sm:text-xl font-syne font-semibold">Protection You Can Trust</h3>
//                             </div>

//                             <ul className="mt-6 space-y-4 text-sm sm:text-[15px] text-white/80 leading-relaxed">
//                                 {trustPoints.map((text) => (
//                                     <li key={text} className="flex items-start gap-3">
//                                         <span className="text-sky-400 leading-[1.2] mt-0.5" aria-hidden="true">
//                                             •
//                                         </span>
//                                         <span>{text}</span>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <p className="mt-8 sm:mt-10 text-sm text-white/60 leading-relaxed max-w-[460px]">
//                                 Our software follows strict HIPAA compliance to prevent leaks. Encrypted
//                                 servers and authentication keep your records private. Focus on patients
//                                 knowing your practice meets every federal security requirement and safety
//                                 standard.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


import React from "react";

const trustPoints = [
    "PHI is encrypted using industry-standard methods and stored on-device (no cloud backup)",
    "All data in transit is secured with TLS 1.2+ and HTTPS encryption",
    "Secure access via biometric login, strong passwords, and automatic session timeout",
    "Use of BAA-compliant cloud providers and APIs (e.g., Microsoft Azure, Paubox, etc.)",
    "Secure encrypted email channels for safe document transmission",
    "Full audit logging with strict role-based access control",
    "Regular internal risk assessments, privacy policies, and breach response procedures",
];

export default function HomeSection5() {
    return (
        <section className="bg-[#10172A] text-white pt-14 sm:pt-16 pb-0.5 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
                    <div className="flex flex-col min-w-0">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-semibold tracking-tight leading-tight wrap-break-word">
                            Built for <span className="text-sky-400">HIPAA-Ready</span>
                            <br />
                            Clinical <span className="text-sky-400">Security</span>
                            <br />
                            at Every Layer
                        </h2>

                        <div
                            className="mt-8 sm:mt-10 -ml-2 sm:-ml-6 lg:-ml-24 xl:-ml-32 w-[calc(100%+0.5rem)] sm:w-[calc(100%+1.5rem)] lg:w-[calc(100%+2rem)]"
                        >
                            <img
                                src="/home/homeSection5.png"
                                alt="Security and HIPAA compliance visual"
                                className="w-full h-auto max-w-none object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="pt-1 min-w-0">
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
                            Every safeguard in Quantus Health is designed to protect PHI in real-world
                            clinical workflows. From on-device encryption and TLS-secured data transfer
                            to biometric access, BAA-aligned cloud services, and full audit visibility,
                            your data stays protected from capture to delivery.
                        </p>

                        <div className="mt-8 sm:mt-10 max-w-xl">
                            <div className="flex items-start sm:items-center gap-3">
                                <span className="h-7 w-[3px] bg-sky-500 rounded-full" aria-hidden="true" />
                                <h3 className="text-lg sm:text-xl font-syne font-semibold">Protection You Can Trust</h3>
                            </div>

                            <ul className="mt-6 space-y-4 text-sm sm:text-[15px] text-white/80 leading-relaxed">
                                {trustPoints.map((text) => (
                                    <li key={text} className="flex items-start gap-3">
                                        <span className="text-sky-400 leading-[1.2] mt-0.5" aria-hidden="true">
                                            •
                                        </span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-8 sm:mt-10 text-sm text-white/60 leading-relaxed max-w-[460px]">
                                With role-based controls, internal risk assessments, breach-response
                                protocols, and encrypted communication channels, your organization gets a
                                practical compliance foundation that supports HIPAA obligations without
                                slowing down patient care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}