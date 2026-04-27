"use client";

import { companyContactEmail, companyPhoneNumber } from "@/constants/header";
import { submitContactForm } from "@/services/contact-us-api";
import { ArrowRight, CheckIcon } from "lucide-react";
import React, { useState } from "react";

const errorMessage = "There was an error submitting the form. Please try again.";

const RequestDemoReachFormSection = () => {
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;
    const initialStates = {
        name: "",
        practice: "",
        specialty: "",
        email: "",
        phone: "",
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
                subject: "Request Demo form submission",
                message: `Phone: ${form.phone}\nPractice: ${form.practice}\nSpecialty: ${form.specialty}`,
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
        <section className="bg-[#10172A] px-4 py-16 sm:px-6 lg:px-[70px] lg:py-[94px]">
            <div className="mx-auto grid w-full max-w-[1238px] gap-10 rounded-2xl bg-[#383A6A57] p-6 lg:grid-cols-[1fr_521px] lg:p-12">
                <div className="self-center">
                    <h2 className="font-syne text-[34px] font-semibold leading-[1.2] text-white sm:text-[38px]">
                        Ready to see the <span className="text-[#0D94E4]">difference?</span>
                    </h2>
                    <p className="mt-4 max-w-[610px] text-[16px] leading-[1.4] text-[#E2E2E2]">
                        Fill out the form below. A member of our team will reach out to find a time that
                        works for you.
                    </p>
                    <div className="mt-8 h-px w-[86px] bg-white" />
                    <div className="mt-8 space-y-5">
                        <div>
                            <p className="text-[18px] text-white">Address</p>
                            <p className="mt-1 text-[16px] leading-[1.35] text-[#E2E2E2]">
                                Street 123, NewYork abcd
                                <br />
                                City xyz, Type your Complete Address Here
                            </p>
                        </div>
                        <div>
                            <p className="text-[18px] text-white">Phone</p>
                            <p className="mt-1 text-[16px] text-[#E2E2E2]">{companyPhoneNumber}</p>
                        </div>
                        <div>
                            <p className="text-[18px] text-white">Email</p>
                            <p className="mt-1 text-[16px] text-[#E2E2E2]">{companyContactEmail}</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 rounded-2xl border border-[#0D94E4] bg-[#10172A] p-6 lg:p-[52px]">
                    {error && (
                        <div className="rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    {submitted ? (
                        <div className="flex flex-col items-center space-y-4 py-10 text-center text-white">
                            <CheckIcon className="h-12 w-12 text-green-400" />
                            <h3 className="text-2xl font-semibold">Demo request received!</h3>
                            <p className="max-w-md text-[#E2E2E2]">
                                Thanks for reaching out. Our team will contact you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <input
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    className="h-[52px] rounded-lg border border-[#898989] bg-[#272838] px-4 text-white outline-none"
                                    placeholder="Name"
                                />
                                <input
                                    name="practice"
                                    required
                                    value={form.practice}
                                    onChange={handleChange}
                                    className="h-[52px] rounded-lg border border-[#898989] bg-[#272838] px-4 text-white outline-none"
                                    placeholder="Practice"
                                />
                            </div>
                            <input
                                name="specialty"
                                required
                                value={form.specialty}
                                onChange={handleChange}
                                className="h-[52px] w-full rounded-lg border border-[#898989] bg-[#272838] px-4 text-white outline-none"
                                placeholder="Specialty"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="h-[52px] w-full rounded-lg border border-[#898989] bg-[#272838] px-4 text-white outline-none"
                                placeholder="Email"
                            />
                            <input
                                name="phone"
                                required
                                value={form.phone}
                                onChange={handleChange}
                                className="h-[52px] w-full rounded-lg border border-[#898989] bg-[#272838] px-4 text-white outline-none"
                                placeholder="Phone"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 flex h-[54px] w-full items-center justify-center gap-5 rounded-full bg-[#0D94E4] px-3 text-[18px] text-[#F3F3F3] disabled:cursor-not-allowed disabled:opacity-70 lg:w-[283px]"
                            >
                                {isSubmitting ? "Submitting..." : "Schedule My Demo"}
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

export default RequestDemoReachFormSection;
