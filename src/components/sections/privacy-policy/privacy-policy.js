import BackgroundAccents from "@/components/ui/BackgroundAccents";

const privacySupportEmail = "support@quantushealth.com";

export default function PrivacyPolicyPage() {
    return (
        <BackgroundAccents className="min-h-dvh font-sans bg-linear-to-b from-[#F2FAFE]/70 to-[#EBF8FE]/80 backdrop-blur-sm">
            <main className="relative z-10 w-full pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto w-full py-10 sm:py-14 md:py-20 lg:py-24">

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#10172a] mb-10 sm:mb-12 md:mb-16 leading-tight tracking-tight px-1 sm:px-0">
                        Privacy Policy
                    </h1>

                    <div className="mb-8 sm:mb-10 md:mb-12">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            Your privacy matters to us. This Privacy Policy explains how Quantus Health
                            LLC (&quot;Quantus Health,&quot; &quot;we,&quot; &quot;our,&quot; or
                            &quot;us&quot;) collects, uses, and safeguards your information when you use
                            our applications and services.
                        </p>
                    </div>

                    <Section title="Overview">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            At Quantus Health, we design and build healthcare products that go beyond
                            solving current problems — they prepare you for what&apos;s next. With AI at
                            the core and clinical and billing expertise guiding the design, our adaptable
                            solutions help healthcare organizations improve decision-making, streamline
                            operations, and enhance care delivery.
                        </p>
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            We partner with healthcare organizations to ensure our products evolve as
                            needs grow, creating sustainable value and fostering long-term success.
                        </p>
                    </Section>

                    <Section title="Information We Collect">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            We collect only the information necessary to provide and improve our
                            services:
                        </p>
                        <List
                            items={[
                                {
                                    title: "Personal Information:",
                                    desc: "Name, email address, and phone number",
                                },
                                {
                                    title: "Healthcare Organization Information:",
                                    desc: "Details related to partnered providers or organizations",
                                },
                                {
                                    title: "Usage Data:",
                                    desc: "App interaction data used to improve performance and user experience",
                                },
                            ]}
                        />
                    </Section>

                    <Section title="Health Data (Important Disclosure)">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            The Quantus Health application does not independently collect or generate
                            health data directly from users.
                        </p>
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            All health-related information available within the app — including vital
                            signs, medical records, and clinical data — is:
                        </p>
                        <SimpleList
                            items={[
                                "Provided and managed by authorized healthcare organizations and providers",
                                "Accessed by the app solely to display information to the patient",
                                "Used to facilitate communication and care coordination between patients and providers",
                            ]}
                        />
                        <p className="text-sm sm:text-base text-[#464646] mt-4 mb-3 leading-relaxed">
                            This may include:
                        </p>
                        <SimpleList
                            items={[
                                "Vital signs (e.g., blood pressure, heart rate, glucose levels)",
                                "Medical history and records",
                                "Encounter and visit details",
                                "Care notes and follow-up information",
                            ]}
                        />
                        <aside
                            className="mt-5 rounded-lg border border-[#0D94E4]/30 bg-[#0D94E4]/5 px-4 py-4 sm:px-5 sm:py-5"
                            aria-label="Important health data protections"
                        >
                            <p className="text-sm sm:text-base font-semibold text-[#10172a] mb-3">
                                Important:
                            </p>
                            <SimpleList
                                items={[
                                    "Patients can only access their own health data",
                                    "Quantus Health does not sell, share, or use this data for advertising purposes",
                                    "Data access is strictly controlled through secure systems and authentication",
                                ]}
                            />
                        </aside>
                    </Section>

                    <Section title="How We Use Your Information">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            We use your information to:
                        </p>
                        <SimpleList
                            items={[
                                "Provide and maintain our healthcare technology solutions",
                                "Enable users to securely view and interact with healthcare data",
                                "Facilitate communication between patients and healthcare providers",
                                "Improve system functionality and user experience",
                                "Communicate updates, product improvements, and compliance notices",
                            ]}
                        />
                        <p className="text-sm sm:text-base text-[#464646] mt-4 leading-relaxed">
                            We do not independently collect health data. The app functions as a secure
                            interface that allows users to view and interact with data provided by their
                            healthcare providers.
                        </p>
                    </Section>

                    <Section title="Data Protection">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            Quantus Health employs enterprise-grade security measures, including:
                        </p>
                        <SimpleList
                            items={[
                                "Encryption of data in transit and at rest",
                                "Secure cloud infrastructure",
                                "Access control and authentication systems",
                                "Regular compliance and security reviews",
                            ]}
                        />
                        <p className="text-sm sm:text-base text-[#464646] mt-4 leading-relaxed">
                            These measures help protect your data from unauthorized access, misuse, or
                            disclosure.
                        </p>
                    </Section>

                    <Section title="SMS Communications">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            By providing your mobile phone number, you consent to receive transactional
                            SMS messages from Quantus Health LLC. These messages may include:
                        </p>
                        <SimpleList
                            items={[
                                "One-time passcodes (OTP) for authentication",
                                "Security alerts",
                                "Application invitation links",
                            ]}
                        />
                        <p className="text-sm sm:text-base text-[#464646] mt-4 leading-relaxed">
                            Message frequency varies based on user activity. Message and data rates may
                            apply.
                        </p>
                        <p className="text-sm sm:text-base text-[#464646] mt-3 leading-relaxed">
                            You may opt out at any time by replying STOP. For assistance, reply HELP.
                        </p>
                    </Section>

                    <Section title="Third-Party Services">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            We may use trusted third-party services (such as cloud infrastructure
                            providers) to support the operation of our platform. These providers process
                            data only on our behalf and under strict security obligations.
                        </p>
                    </Section>

                    <Section title="Contact Us">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact:
                        </p>
                        <address className="not-italic space-y-2 sm:space-y-3">
                            <p className="text-sm sm:text-base font-semibold text-[#10172a]">
                                Quantus Health LLC
                            </p>
                            <p className="text-sm sm:text-base font-medium text-[#10172a] wrap-anywhere">
                                <a
                                    href={`mailto:${privacySupportEmail}`}
                                    className="text-[#10172a] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D94E4]"
                                >
                                    {privacySupportEmail}
                                </a>
                            </p>
                        </address>
                    </Section>
                </div>
            </main>
        </BackgroundAccents>
    );
}

function Section({ title, children }) {
    return (
        <section className="mb-8 sm:mb-10 md:mb-12 scroll-mt-24">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#202938] mb-3 sm:mb-4 tracking-wide leading-snug wrap-break-word">
                {title}
            </h2>
            {children}
        </section>
    );
}

function List({ items }) {
    return (
        <ul className="space-y-2.5 sm:space-y-3 list-disc pl-4 sm:pl-5 md:pl-6 marker:text-[#0D94E4]">
            {items.map((item, i) => (
                <li key={i} className="text-sm sm:text-base text-[#464646] leading-relaxed pl-0.5">
                    <span className="font-semibold text-[#10172a]">{item.title}</span> {item.desc}
                </li>
            ))}
        </ul>
    );
}

function SimpleList({ items }) {
    return (
        <ul className="space-y-2.5 sm:space-y-3 list-disc pl-4 sm:pl-5 md:pl-6 marker:text-[#0D94E4]">
            {items.map((text, i) => (
                <li key={i} className="text-sm sm:text-base text-[#464646] leading-relaxed pl-0.5">
                    {text}
                </li>
            ))}
        </ul>
    );
}
