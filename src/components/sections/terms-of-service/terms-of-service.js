import BackgroundAccents from "@/components/ui/BackgroundAccents";

export default function TermsOfServicePage() {
    return (
        <BackgroundAccents className="min-h-dvh font-sans bg-linear-to-b from-[#F2FAFE]/70 to-[#EBF8FE]/80 backdrop-blur-sm">
            <main className="relative z-10 w-full pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-8">
                {/* Container — comfortable reading width on large screens */}
                <div className="max-w-6xl mx-auto w-full py-10 sm:py-14 md:py-20 lg:py-24">

                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#10172a] mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight px-1 sm:px-0">
                        Terms of Service
                    </h1>

                    <p className="text-sm sm:text-base text-[#464646] text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed px-1 sm:px-0">
                        Please read these Terms of Service carefully before using Quantus Health&apos;s
                        products and website.
                    </p>

                    <Section title="1. Acceptance of Terms">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            By accessing or using the services provided by Quantus Health Inc.
                            (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), you agree to comply with
                            and be bound by these Terms of Service. If you do not agree, you may not use
                            our solutions, applications, or website.
                        </p>
                    </Section>

                    <Section title="2. Services Provided">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            Quantus Health provides healthcare technology solutions designed to improve
                            operational efficiency, patient outcomes, and financial performance. Our
                            products may include analytics platforms, billing automation, and AI-driven
                            clinical tools. We may update, modify, or discontinue features as part of
                            continuous improvement.
                        </p>
                    </Section>

                    <Section title="3. User Responsibilities">
                        <List
                            items={[
                                {
                                    title: "Accurate information.",
                                    desc: "Provide accurate information when creating an account or using our services.",
                                },
                                {
                                    title: "Lawful use.",
                                    desc: "Use our solutions only for lawful purposes and in compliance with all applicable regulations.",
                                },
                                {
                                    title: "Confidentiality.",
                                    desc: "Maintain confidentiality of account credentials and sensitive data.",
                                },
                            ]}
                        />
                    </Section>

                    <Section title="4. Intellectual Property">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            All materials, software, interfaces, and intellectual property provided by
                            Quantus Health—including trademarks, logos, and proprietary technologies—remain
                            the exclusive property of Quantus Health Inc. Unauthorized reproduction,
                            modification, or distribution is prohibited.
                        </p>
                    </Section>

                    <Section title="5. Data Privacy">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            Your use of our services is also governed by our Privacy Policy. By using
                            our platform, you consent to the collection and use of data as outlined
                            there.
                        </p>
                    </Section>

                    <Section title="6. Limitation of Liability">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            Quantus Health shall not be held liable for any indirect, incidental, or
                            consequential damages arising from the use or inability to use our services.
                            We do not guarantee uninterrupted availability or error-free performance.
                        </p>
                    </Section>

                    <Section title="7. Termination">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            We reserve the right to suspend or terminate user access if these Terms are
                            violated or if continued access poses a risk to system integrity, data
                            security, or compliance obligations.
                        </p>
                    </Section>

                    <Section title="8. Governing Law">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            These Terms are governed by and construed under the laws of the State of
                            Texas, United States, without regard to conflict of law principles. Any
                            disputes shall be resolved in the courts located in Dallas County, Texas.
                        </p>
                    </Section>

                    <Section title="9. SMS Terms">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            By registering for or using Quantus Health services, you agree to receive
                            transactional SMS messages related to account access, including one-time
                            passcodes and invitation links.
                        </p>
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            You can opt out at any time by replying STOP. Reply HELP for assistance.
                            Message and data rates may apply.
                        </p>
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
                    <span className="font-semibold text-[#10172a]">
                        {item.title}
                    </span>{" "}
                    {item.desc}
                </li>
            ))}
        </ul>
    );
}