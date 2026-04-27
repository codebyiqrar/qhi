import BackgroundAccents from "@/components/ui/BackgroundAccents";

export default function PrivacyPolicyPage() {
    return (
        <BackgroundAccents className="min-h-dvh font-sans bg-linear-to-b from-[#F2FAFE]/70 to-[#EBF8FE]/80 backdrop-blur-sm">
            <main className="relative z-10 w-full pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-8">
                {/* Container — comfortable reading width on large screens */}
                <div className="max-w-6xl mx-auto w-full py-10 sm:py-14 md:py-20 lg:py-24">

                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#10172a] mb-10 sm:mb-12 md:mb-16 leading-tight tracking-tight px-1 sm:px-0">
                        Privacy Policy
                    </h1>

                    {/* Effective Date */}
                    <Section title="Effective Date: [Insert Date]">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            This document describes how Quantus Health handles data. We provide technology
                            for medical billing and patient monitoring, which means we often manage
                            sensitive information. Our priority is to keep that data safe while following
                            all legal requirements. By using our site or our tools, you agree to the way
                            we collect and use information as stated here.
                        </p>
                    </Section>

                    {/* Data We Collect */}
                    <Section title="The Data We Collect">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            We gather specific information to ensure our billing and monitoring tools
                            function correctly. This includes details provided during account setup and
                            data generated while using our software to manage patient care.
                        </p>

                        <List
                            items={[
                                {
                                    title: "Account Information.",
                                    desc: "We need your name, practice address, and email to manage your subscription.",
                                },
                                {
                                    title: "Patient and Clinical Records.",
                                    desc: "Our platform processes insurance data and health vitals to help you submit accurate claims.",
                                },
                                {
                                    title: "Technical Logs.",
                                    desc: "We record basic details like your IP address to keep the system secure and fix bugs.",
                                },
                            ]}
                        />
                    </Section>

                    {/* How We Use */}
                    <Section title="How We Use Your Information">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            Quantus Health uses data only to provide our services and maintain the
                            security of our platform. We do not use collected information for marketing
                            or sell it to outside parties. Every use of data is tied back to an
                            operational need for your medical practice.
                        </p>

                        <List
                            items={[
                                {
                                    title: "Service Delivery.",
                                    desc: "We use your account details to manage your software access and subscription. Technical logs allow us to monitor the platform&apos;s stability and fix bugs before they impact your office.",
                                },
                                {
                                    title: "Claims Processing.",
                                    desc: "Patient information is processed to generate accurate insurance submissions. This ensures that your documentation and billing align to reduce claim denials.",
                                },
                                {
                                    title: "Practice Support.",
                                    desc: "Your contact information allows our team to respond to technical requests or send required system updates and security alerts.",
                                },
                                {
                                    title: "Legal Compliance.",
                                    desc: "We maintain audit trails of system activity to meet HIPAA standards and other healthcare regulations.",
                                },
                            ]}
                        />
                    </Section>

                    {/* Data Protection */}
                    <Section title="Data Protection and Storage">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            Quantus Health uses industry-standard encryption and security protocols to
                            protect your practice&apos;s information. Our systems are designed to prevent
                            unauthorized access and maintain the integrity of all sensitive records.
                        </p>

                        <List
                            items={[
                                {
                                    title: "Data Encryption.",
                                    desc: "Your information is encrypted while it is in transit and while it is stored on our servers.",
                                },
                                {
                                    title: "Limited Access.",
                                    desc: "Only the specific employees who need to support your account have access to your data.",
                                },
                                {
                                    title: "Secure US Hosting.",
                                    desc: "We store all practice information on HIPAA-compliant servers located within the United States.",
                                },
                                {
                                    title: "Proactive Monitoring.",
                                    desc: "Our security team monitors the platform for vulnerabilities or unusual activity.",
                                },
                            ]}
                        />
                    </Section>

                    {/* Account Rights */}
                    <Section title="Account and Data Rights">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            Quantus Health lets you manage your practice data through your secure
                            dashboard. You can fix errors or update contact details at any time. If you
                            close your account, you may request that we delete your stored information,
                            though we must keep some records for healthcare audits. We only send
                            essential technical alerts, but any non-mandatory messages include an
                            unsubscribe link. For a full copy of the specific data held for your office,
                            contact our support team directly.
                        </p>
                    </Section>

                    {/* Changes */}
                    <Section title="Changes to This Policy">
                        <p className="text-sm sm:text-base text-[#464646] leading-relaxed">
                            Quantus Health may update this privacy document at any time to reflect
                            software changes or new legal standards. If a major update occurs, we will
                            post the new version here and change the &quot;Effective Date&quot; at the top
                            of the page. We suggest you check back periodically to see how we are
                            protecting your data.
                        </p>
                    </Section>

                    {/* Contact */}
                    <Section title="Contact Us">
                        <p className="text-sm sm:text-base text-[#464646] mb-4 leading-relaxed">
                            For any questions regarding your privacy or our data practices, please reach
                            out to our team directly. You can find us at:
                        </p>

                        <address className="not-italic space-y-2 sm:space-y-3">
                            <p className="text-sm sm:text-base font-semibold text-[#10172a]">
                                Quantus Health
                            </p>
                            <p className="text-sm sm:text-base font-medium text-[#10172a]">
                                <span className="text-[#464646] font-normal">Phone: </span>
                                <a
                                    href="tel:+19452606897"
                                    className="text-[#10172a] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D94E4]"
                                >
                                    (945) 260-6897
                                </a>
                            </p>
                            <p className="text-sm sm:text-base font-medium text-[#10172a] wrap-anywhere">
                                <span className="text-[#464646] font-normal">Email: </span>
                                <a
                                    href="mailto:contactus@quantushealthinc.com"
                                    className="text-[#10172a] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D94E4]"
                                >
                                    contactus@quantushealthinc.com
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
                    <span className="font-semibold text-[#10172a]">
                        {item.title}
                    </span>{" "}
                    {item.desc}
                </li>
            ))}
        </ul>
    );
}