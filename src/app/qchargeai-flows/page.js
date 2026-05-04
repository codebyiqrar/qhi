import Image from "next/image";
import React from "react";

import { getSiteUrl } from "@/constants/site";

const path = "/qchargeai-flows";
const title = "QChargeAI Flows | Quantus Health";
const description =
  "QChargeAI care team invite and passwordless login flows via SMS — designed for secure, transactional provider authentication. Optimized for Twilio communications.";

export const metadata = {
  title,
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: {
    title,
    description,
    url: path,
  },
  twitter: { title, description },
};

export default function InvitePage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero */}
            <div className="border-b border-border bg-linear-to-b from-accent/30 to-background mt-10">
                <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
                    <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                        QChargeAI · Charge Capture
                    </span>
                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Product Flows
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                        Streamlined care team invites and passwordless login via SMS. Fully transactional, opt-in only, and designed to maintain provider trust while ensuring compliance with Twilio.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
                {/* Flow 1: Care Team Invite */}
                <section className="scroll-mt-8">
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            1
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Care Team Invitation Flow
                        </h2>
                    </div>
                    <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
                        Invitations are sent via SMS to onboard healthcare providers to the QChargeAI platform. Invite-only, secure, and strictly transactional—no marketing messages are sent.
                    </p>
                    <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-md ring-1 ring-black/5">
                        <div className="flex min-h-[280px] justify-center bg-linear-to-b from-muted/50 to-muted/20 p-2">
                            <Image
                                src="/send-invite.png"
                                alt="QChargeAI care team invitation screen"
                                width={1200}
                                height={1200}
                                className="max-h-[75vh] w-full max-w-full rounded-xl object-contain"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Flow 2: Login with OTP */}
                <section className="mt-16 scroll-mt-8 sm:mt-20">
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            2
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            OTP Login Flow
                        </h2>
                    </div>
                    <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
                        Providers log in with a one-time password sent via SMS. Enter their phone number, receive a secure code, and access the platform instantly—simple, safe, and fully transactional authentication.
                    </p>
                    <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-md ring-1 ring-black/5">
                        <div className="flex min-h-[280px] justify-center bg-linear-to-b from-muted/50 to-muted/20 p-2">
                            <Image
                                src="/otp-login.png"
                                alt="QChargeAI OTP login screen — phone number and verification code"
                                width={1200}
                                height={1200}
                                className="max-h-[75vh] w-full max-w-full rounded-xl object-contain"
                            />
                        </div>
                    </div>
                </section>

                {/* Use case summary for Twilio reviewers */}
                <section
                    className="mt-16 rounded-2xl border border-primary/20 bg-accent/20 p-6 sm:mt-20 sm:p-8"
                    aria-label="Use case summary for Twilio account review"
                >
                    <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                        Use Case Summary (For Twilio Review)
                    </h2>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
                        <li>
                            <strong className="text-foreground">Product:</strong> QChargeAI — AI-powered healthcare charge capture platform
                        </li>
                        <li>
                            <strong className="text-foreground">SMS Usage:</strong> Care team invitations and OTP login only (strictly transactional, invite-only)
                        </li>
                        <li>
                            <strong className="text-foreground">Recipients:</strong> Healthcare providers invited by existing users or signing in
                        </li>
                        <li>
                            <strong className="text-foreground">Company:</strong> Quantus Health Inc. — innovative healthcare technology (see main site for details)
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}