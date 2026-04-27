import BackgroundAccents from "@/components/ui/BackgroundAccents";

export default function TermsOfServicePage() {
    return (
        <BackgroundAccents className="min-h-dvh font-sans bg-linear-to-b from-[#F2FAFE]/70 to-[#EBF8FE]/80 backdrop-blur-sm">
            <main className="relative z-10 w-full pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-8">
                {/* Container — comfortable reading width on large screens */}
                <div className="max-w-6xl mx-auto w-full py-10 sm:py-14 md:py-20 lg:py-24">

                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#10172a] mb-10 sm:mb-12 md:mb-16 leading-tight tracking-tight px-1 sm:px-0">
                        Terms And Condition
                    </h1>

                    <Section title="Authorization And Account Use">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            Quantus Health grants your practice a limited, non-transferable right to use
                            our platform for medical billing automation and patient monitoring workflows.
                            By creating an account, you agree to provide accurate details and maintain
                            the security of your login credentials.
                        </p>
                        <List
                            items={[
                                {
                                    title: "Security First.",
                                    desc: "Keep your password private and notify us immediately if there is suspicious activity.",
                                },
                                {
                                    title: "Authorized Use Only.",
                                    desc: "Your account must be used by approved team members under your organization.",
                                },
                                {
                                    title: "Your Responsibility.",
                                    desc: "You are accountable for all actions taken through your account.",
                                },
                                {
                                    title: "Alert Us.",
                                    desc: "If login details are exposed, we can temporarily restrict access to protect your data.",
                                },
                            ]}
                        />
                    </Section>

                    <Section title="Scope Of Services And Clinical Responsibility">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            Quantus Health provides software tools for charge capture, claims support,
                            remote patient data intake, and operational workflow visibility. Our platform
                            is intended to support your practice&apos;s efficiency and documentation quality.
                        </p>
                        <List
                            items={[
                                {
                                    title: "Charge Capture.",
                                    desc: "Capture billing-ready events at the point of care and reduce missed reimbursement opportunities.",
                                },
                                {
                                    title: "QRCM.",
                                    desc: "Assist your team in submitting clean claims and identifying denial trends.",
                                },
                                {
                                    title: "QRPM.",
                                    desc: "Help practices monitor eligible patient activity and track engagement targets.",
                                },
                                {
                                    title: "No Medical Advice.",
                                    desc: "Our services are administrative and technical only, not a substitute for clinical judgment.",
                                },
                            ]}
                        />
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed mt-4">
                            Quantus Health is a technology provider and does not assume liability for
                            patient diagnosis, treatment plans, or clinical outcomes.
                        </p>
                    </Section>

                    <Section title="HIPAA Compliance And Data Security">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            Quantus Health operates as a business associate and applies administrative,
                            technical, and physical safeguards to protect protected health information.
                            We maintain strict controls to align with HIPAA and related healthcare
                            privacy requirements.
                        </p>
                        <List
                            items={[
                                {
                                    title: "Audit Logs.",
                                    desc: "System activity is recorded to support traceability and compliance reviews.",
                                },
                                {
                                    title: "Access Controls.",
                                    desc: "Role-based permissions limit data visibility to authorized users.",
                                },
                                {
                                    title: "BAA Available.",
                                    desc: "A Business Associate Agreement can be provided for covered entities and partners.",
                                },
                                {
                                    title: "Secure Infrastructure.",
                                    desc: "Data is protected through encryption, controlled environments, and ongoing monitoring.",
                                },
                            ]}
                        />
                    </Section>

                    <Section title="Payments And Billing Terms">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            By subscribing to Quantus Health services, you agree to pay all applicable
                            fees listed in your signed service order or statement of work. Fees may
                            include monthly platform subscriptions, usage-based components, and one-time
                            onboarding charges.
                        </p>
                        <List
                            items={[
                                {
                                    title: "Subscription Fees.",
                                    desc: "Billed according to the agreed billing cycle and payable by the due date.",
                                },
                                {
                                    title: "Usage-Based Charges.",
                                    desc: "Calculated from actual claim volume, monitored encounters, or connected facilities, as applicable.",
                                },
                                {
                                    title: "No Refunds.",
                                    desc: "Paid amounts are non-refundable except where required by law or expressly stated in writing.",
                                },
                                {
                                    title: "Price Adjustments.",
                                    desc: "We may revise pricing with advance written notice to your account administrator.",
                                },
                            ]}
                        />
                    </Section>

                    <Section title="Ending The Agreement">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            Either party may terminate the relationship under the terms in your service
                            agreement. You may cancel by written notice, and Quantus Health may suspend
                            or terminate service for non-payment, fraud, security risk, or material
                            breach of these terms.
                        </p>
                        <List
                            items={[
                                {
                                    title: "Your Right To Cancel.",
                                    desc: "Submit notice before the next billing cycle to avoid additional recurring charges.",
                                },
                                {
                                    title: "Our Right To Suspend.",
                                    desc: "Service may be restricted when required to protect system integrity or legal compliance.",
                                },
                                {
                                    title: "Data Access.",
                                    desc: "When the agreement ends, data export options remain available for the period defined in your contract.",
                                },
                            ]}
                        />
                    </Section>

                    <Section title="Amendments To The Agreement">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            Quantus Health may update these terms periodically to reflect legal, security,
                            or product changes. Updated terms become effective on the posted date. Your
                            continued use of the platform after an update indicates acceptance of the
                            revised agreement.
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