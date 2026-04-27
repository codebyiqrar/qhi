import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/ui/gradient-heading";

export default function NotFound() {
    return (
        <main className="relative isolate overflow-hidden">
            {/* Decorative background gradient */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute left-1/2 -top-40 -translate-x-1/2 size-96 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -right-20 -bottom-20 size-80 rounded-full bg-accent/30 blur-2xl" />
            </div>

            <section className="mx-auto grid max-w-7xl place-items-center px-6 py-20 sm:py-28">
                <div className="flex max-w-3xl flex-col items-center text-center">
                    <span className="mb-4 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground ring-1 ring-inset ring-ring/10">
                        404 — Page not found
                    </span>

                    <GradientHeading>
                        We couldn't find that page
                    </GradientHeading>

                    <p className="mt-5 text-balance text-base leading-7 text-muted-foreground sm:text-lg">
                        The page you're looking for may have been moved, deleted, or never existed. Try going back home or reach out if you need a hand.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Button asChild size="lg">
                            <Link href="/">Go to Homepage</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                    </div>

                    <div className="mt-12 w-full rounded-xl border bg-card p-6 text-left shadow-sm sm:p-8">
                        <h3 className="text-sm font-semibold text-muted-foreground">Quick links</h3>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <Link href="/solutions/charge-capture" className="group rounded-lg border p-4 transition-colors hover:bg-accent/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Charge Capture</p>
                                        <p className="text-sm text-muted-foreground">Streamline clinical documentation</p>
                                    </div>
                                    <span className="text-primary group-hover:translate-x-0.5 transition-transform">→</span>
                                </div>
                            </Link>
                            <Link href="/solutions/revenue-cycle-management" className="group rounded-lg border p-4 transition-colors hover:bg-accent/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Revenue Cycle Management</p>
                                        <p className="text-sm text-muted-foreground">Optimize reimbursement and claims</p>
                                    </div>
                                    <span className="text-primary group-hover:translate-x-0.5 transition-transform">→</span>
                                </div>
                            </Link>
                            <Link href="/solutions/remote-patient-monitoring" className="group rounded-lg border p-4 transition-colors hover:bg-accent/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Remote Patient Monitoring</p>
                                        <p className="text-sm text-muted-foreground">Engage patients beyond visits</p>
                                    </div>
                                    <span className="text-primary group-hover:translate-x-0.5 transition-transform">→</span>
                                </div>
                            </Link>
                            <Link href="/solutions/electronic-health-record" className="group rounded-lg border p-4 transition-colors hover:bg-accent/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Electronic Health Record</p>
                                        <p className="text-sm text-muted-foreground">Modern, integrated EHR experience</p>
                                    </div>
                                    <span className="text-primary group-hover:translate-x-0.5 transition-transform">→</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
