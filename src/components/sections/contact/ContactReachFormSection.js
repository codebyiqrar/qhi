"use client";

import React, { useState } from "react";
import { ArrowRight, CheckIcon, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { companyContactEmail, companyPhoneNumber, companyAddress } from "@/constants/header";
import { submitContactForm } from "@/services/contact-us-api";

const errorMessage = "There was an error submitting the form. Please try again.";

const ContactReachFormSection = () => {
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;
    const initialStates = {
        name: "",
        email: "",
        phone: "",
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
                phone: form.phone,
                subject: "Contact form submission",
                message: `Phone: ${form.phone}\n\nMessage: ${form.message}`,
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
        <section className="relative bg-[#10172A] py-12 lg:py-20 overflow-hidden">
            <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#0D94E4]/20 blur-2xl" />
            <div className="mx-auto grid max-w-[1440px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_575px] lg:gap-12 lg:px-[70px]">
                <div className="rounded-2xl border border-[#0D94E4] bg-[#383A6A57] p-8 sm:p-10">
                    <h2 className="font-syne text-[34px] font-semibold leading-[1.15] text-white sm:text-[38px]">
                        Ways to <span className="text-[#0D94E4]">reach us</span> right now
                    </h2>
                    <p className="mt-5 text-[16px] text-white">
                        You can reach us however you prefer. We monitor our lines all day.
                    </p>

                    <div className="mt-8 space-y-7 text-white">
                        <div className="flex gap-4">
                            <Phone className="mt-1 h-7 w-7 shrink-0" />
                            <div>
                                <p className="text-[16px] text-[#E2E2E2]">Call us at</p>
                                <p className="text-[24px] font-medium">{companyPhoneNumber}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Mail className="mt-1 h-7 w-7 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[16px] text-[#E2E2E2]">Send your questions to</p>
                                <p className="truncate text-[24px] font-medium">{companyContactEmail}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <MapPin className="mt-1 h-7 w-7 shrink-0" />
                            <div>
                                <p className="text-[16px] text-[#E2E2E2]">You can find us at</p>
                                <p className="text-[24px] font-medium">{companyAddress}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Clock3 className="mt-1 h-7 w-7 shrink-0" />
                            <div>
                                <p className="text-[16px] text-[#E2E2E2]">We are in the office from</p>
                                <p className="text-[24px] font-medium">
                                    Monday through Friday, 9:00 AM to 5:00 PM.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-[#0D94E4] bg-[#383A6A57] p-8 sm:p-10">
                    <h2 className="font-syne text-[34px] font-semibold leading-[1.15] text-white sm:text-[38px]">
                        Send Us a Message
                    </h2>
                    {error && (
                        <div className="mt-5 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    {submitted ? (
                        <div className="mt-6 flex flex-col items-center space-y-4 py-10 text-center text-white">
                            <CheckIcon className="h-12 w-12 text-green-400" />
                            <h3 className="text-2xl font-semibold">Thank you for reaching out!</h3>
                            <p className="max-w-md text-[#E2E2E2]">
                                Our team will respond within 24 hours. We appreciate your interest in
                                Quantus Health.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                            <input
                                type="text"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name*"
                                className="h-[65px] w-full rounded-full border border-[#454E6D] bg-[#5A5B7930] px-8 text-[#E2E2E2] placeholder:text-[#E2E2E2] outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address*"
                                className="h-[65px] w-full rounded-full border border-[#454E6D] bg-[#5A5B7930] px-8 text-[#E2E2E2] placeholder:text-[#E2E2E2] outline-none"
                            />
                            <input
                                type="text"
                                name="phone"
                                required
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone Number*"
                                className="h-[65px] w-full rounded-full border border-[#454E6D] bg-[#5A5B7930] px-8 text-[#E2E2E2] placeholder:text-[#E2E2E2] outline-none"
                            />
                            <textarea
                                rows={4}
                                name="message"
                                required
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write Your Message...."
                                className="min-h-[144px] w-full resize-none rounded-[45px] border border-[#454E6D] bg-[#5A5B7930] px-8 py-5 text-[#E2E2E2] placeholder:text-[#E2E2E2] outline-none"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="ml-auto flex h-[54px] items-center gap-5 rounded-full bg-[#0D94E4] pl-7 pr-3 text-[18px] text-[#F3F3F3] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-black">
                                    <ArrowRight className="h-4 w-4" />
                                </span>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactReachFormSection;
