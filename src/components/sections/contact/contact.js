'use client'
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { companyContactEmail, companyPhoneNumber } from "@/constants/header";
import PhoneIcon from "../../../../public/PhoneIcon";
import EmailIcon from "../../../../public/EmailIcon";
import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { submitContactForm } from "@/services/contact-us-api";

const errorMessage = "There was an error submitting the form. Please try again.";

export default function ContactSection() {
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;
    const initialStates = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const [form, setForm] = useState(initialStates);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const data = {
                access_key: apiKey,
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
                from_name: "Quantus Health Website",
                replyto: form.email,
            };

            const response = await submitContactForm(data);

            if (response.success) {
                setSubmitted(true);
                setForm(initialStates);
            } else {
                setError(errorMessage);
            }
        } catch (err) {
            setError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left side */}
                <div className="flex flex-col justify-center text-center lg:text-left">
                    <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mx-auto lg:mx-0">
                        <span className="bg-linear-to-r from-[#1F2937] via-[rgba(31,41,55,0.85)] to-[#1F2937] bg-clip-text text-transparent">
                            Connect with
                        </span>
                        <br />
                        <span className="bg-linear-to-r from-[#2847C5] via-[#0D94E4] to-[#2847C5] bg-clip-text text-transparent">
                            Quantus Health
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-md text-foreground leading-relaxed mx-auto lg:mx-0">
                        Whether you’re exploring QChargeAI, QRPM, QRCM or something else,
                        we’d love to hear from you and help transform your healthcare operations.
                    </p>

                    <div className="mt-6 space-y-4 mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                            <PhoneIcon />
                            <span className="text-foreground font-semibold">{companyPhoneNumber}</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                            <EmailIcon />
                            <span className="text-foreground font-semibold">{companyContactEmail}</span>
                        </div>
                    </div>
                </div>

                {/* Right side form */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-lg mx-auto lg:mx-0">

                    {!submitted && (
                        <h3 className="text-xl font-semibold text-foreground mb-6 text-center lg:text-left">
                            Send Us a Message
                        </h3>
                    )}

                    {error && (
                        <div className="mb-6 px-4 py-2 text-sm text-red-700 bg-red-100 rounded-lg">
                            {error}
                        </div>
                    )}

                    {submitted ? (
                        <div className="flex flex-col items-center text-center space-y-4 py-10">
                            <CheckIcon className="w-12 h-12 text-green-500" />
                            <h3 className="text-2xl font-semibold">Thank you for reaching out!</h3>
                            <p className="text-muted-foreground max-w-md">
                                Our team will respond within 24 hours. We appreciate your interest in Quantus Health.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <Input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                                required
                                value={form.name}
                                onChange={handleChange}
                            />

                            <Input
                                type="email"
                                name="email"
                                placeholder="Email *"
                                required
                                value={form.email}
                                onChange={handleChange}
                            />

                            <Input
                                type="text"
                                name="subject"
                                placeholder="Subject *"
                                required
                                value={form.subject}
                                onChange={handleChange}
                            />

                            <textarea
                                name="message"
                                required
                                rows="4"
                                placeholder="Message *"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>

                            <Button
                                size="lg"
                                className="shadow-lg rounded-2xl border-2 w-full h-12"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>

                        </form>
                    )}
                </div>

            </div>
        </section>
    );
}
