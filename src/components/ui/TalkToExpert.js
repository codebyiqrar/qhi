"use client";

import { cn } from "@/lib/utils";
import React, { useMemo, useState } from "react";
import { submitContactForm } from "@/services/contact-us-api";

const errorMessage = "There was an error submitting the form. Please try again.";

const normalizeLabel = (placeholder) => placeholder.replace(/\*/g, "").trim();

const fieldTypeFromLabel = (label) => {
    const lower = label.toLowerCase();
    if (lower.includes("email")) return "email";
    if (lower.includes("phone")) return "tel";
    return "text";
};

const fieldKeyFromLabel = (label, index) => {
    const lower = label.toLowerCase();
    if (lower.includes("name")) return "name";
    if (lower.includes("email")) return "email";
    if (lower.includes("phone")) return "phone";
    return `field_${index + 1}`;
};

const ExpertInput = ({ type, name, value, onChange, placeholder }) => (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="h-[50px] w-full rounded-[100px] border border-[#A2A2A2] px-4 font-dm-sans text-[15px] text-[#10172A] outline-none placeholder:text-[#A2A2A2] sm:h-[52px] sm:px-5 sm:text-[16px] md:h-[57px] md:px-6 md:text-[18px]"
    />
);

const TalkToExpert = ({ heading, placeholders = [], buttonText, onSubmit, className }) => {
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fields = useMemo(
        () =>
            placeholders.map((placeholder, index) => {
                const label = normalizeLabel(placeholder);
                return {
                    placeholder,
                    label,
                    key: fieldKeyFromLabel(label, index),
                    type: fieldTypeFromLabel(label),
                };
            }),
        [placeholders]
    );

    const initialForm = useMemo(
        () => fields.reduce((acc, field) => ({ ...acc, [field.key]: "" }), {}),
        [fields]
    );
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const details = fields.map((field) => `${field.label}: ${form[field.key] || ""}`).join("\n");

        try {
            const data = {
                access_key: apiKey,
                name: form.name || "Website Visitor",
                email: form.email || "no-reply@quantus-health.com",
                phone: form.phone || "",
                subject: heading || "Talk to Expert form submission",
                message: details,
                from_name: "Quantus Health Website",
                replyto: form.email || undefined,
            };

            const response = await submitContactForm(data);

            if (response.success) {
                setSubmitted(true);
                setForm(initialForm);
                if (typeof onSubmit === "function") onSubmit(form);
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
        <div
            className={cn(
                "rounded-[20px] bg-white px-4 py-7 shadow-[0_8px_30px_rgba(16,23,42,0.16)] sm:px-6 md:px-10 md:py-9 lg:px-12",
                className
            )}
        >
            <h2 className="text-center font-syne text-[28px] font-bold leading-[1.1] text-[#00132C] sm:text-[32px] md:text-[38px]">
                {heading}
            </h2>

            {error && <div className="mt-4 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">{error}</div>}

            {submitted ? (
                <div className="mt-6 rounded-lg bg-green-50 px-4 py-5 text-center text-sm text-green-700">
                    Thank you! Our team will contact you shortly.
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:gap-4 md:grid-cols-2 md:gap-4 xl:grid-cols-4 xl:gap-3"
                >
                    {fields.map((field) => (
                        <ExpertInput
                            key={`${field.key}-${field.placeholder}`}
                            type={field.type}
                            name={field.key}
                            value={form[field.key] ?? ""}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                        />
                    ))}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-[50px] w-full rounded-[100px] bg-[#0D94E4] px-8 font-dm-sans text-[15px] font-medium text-white transition hover:bg-[#0A84CE] disabled:cursor-not-allowed disabled:opacity-70 sm:h-[52px] sm:text-[16px] md:col-span-2 md:h-[57px] md:text-[18px] xl:col-span-1"
                    >
                        {isSubmitting ? "Submitting..." : buttonText}
                    </button>
                </form>
            )}
        </div>
    );
};

export default TalkToExpert;