import React from "react";
import { ArrowRight } from "lucide-react";

const HomeSection11 = () => {
    return (
        <section className="relative overflow-hidden bg-[#050814] text-white lg:min-h-[620px]">
            {/* Diagonal bands — wide dark stripes top-right to bottom-left */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 120px, rgba(15,23,42,0.4) 120px, rgba(15,23,42,0.4) 200px)" }} />
                <div className="absolute bottom-[8%] right-[8%] hidden h-[min(92vw,560px)] w-[min(92vw,560px)] translate-x-1/4 translate-y-1/4 rounded-full border border-sky-800/35 md:block" />
                <div className="absolute bottom-[10%] right-[10%] hidden h-[min(78vw,480px)] w-[min(78vw,480px)] translate-x-1/4 translate-y-1/4 rounded-full border border-sky-700/30 md:block" />
                <div className="absolute bottom-[12%] right-[12%] hidden h-[min(64vw,400px)] w-[min(64vw,400px)] translate-x-1/4 translate-y-1/4 rounded-full border border-sky-600/25 md:block" />
                <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_70%_55%,rgba(15,118,255,0.18),transparent_60%)] md:block" />
            </div>

            <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-16 md:py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24 xl:py-24">
                {/* Left column: copy */}
                <div className="max-w-xl space-y-5 sm:space-y-6">
                    <h1 className="text-[28px] font-syne font-semibold leading-tight tracking-tight sm:text-4xl md:text-[40px] md:leading-[1.15] lg:text-[46px]">
                        <span className="text-sky-400">Secure</span> Your Practice Income With{" "}
                        <span className="text-sky-400">Revenue Cycle Automation</span>
                    </h1>

                    <p className="max-w-[62ch] text-sm leading-relaxed text-slate-300 sm:text-base">
                        Our integrated healthcare technology connects point-of-care documentation,
                        insurance billing, and remote patient monitoring. This unified system
                        ensures every service is recorded and billed accurately. Request a
                        consultation to get started.
                    </p>

                    <div className="pt-1 sm:pt-2">
                        <button className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(56,189,248,0.40)] transition hover:bg-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:w-auto sm:text-base sm:px-7 sm:py-3.5">
                            Book My Free Demo
                            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-sky-600 transition-transform group-hover:translate-x-0.5">
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:absolute lg:bottom-0 lg:right-0 lg:block lg:w-full lg:max-w-[560px] xl:max-w-[600px]">
                {/* Three concentric orbit rings — centered above laptop */}
                <div className="pointer-events-none absolute bottom-[20%] right-[15%] h-[380px] w-[380px] rounded-full border border-sky-800/25 sm:h-[440px] sm:w-[440px] lg:bottom-[22%] lg:right-[5%] lg:h-[480px] lg:w-[480px]" aria-hidden />
                <div className="pointer-events-none absolute bottom-[22%] right-[18%] h-[300px] w-[300px] rounded-full border border-sky-700/22 sm:h-[360px] sm:w-[360px] lg:bottom-[24%] lg:right-[8%] lg:h-[400px] lg:w-[400px]" aria-hidden />
                <div className="pointer-events-none absolute bottom-[24%] right-[21%] h-[220px] w-[220px] rounded-full border border-sky-600/20 sm:h-[280px] sm:w-[280px] lg:bottom-[26%] lg:right-[11%] lg:h-[320px] lg:w-[320px]" aria-hidden />

                <div className="absolute bottom-0 right-0 z-10 w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]">
                    <div className="relative">
                        {/* Q + orbit icons: center of orbits floats above laptop (more central) */}
                        <div
                            className="pointer-events-none absolute left-[32%] top-[46%] z-30 h-0 w-0 sm:left-[28%] sm:top-[44%] lg:left-1/6 lg:top-4/9"
                            style={{ transform: "translate(-50%, -140px)" }}
                            aria-hidden
                        >
                            {/* Central Q logo */}
                            <div className="absolute left-0 top-0 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2847C5] shadow-[0_18px_40px_rgba(56,189,248,0.65)] ring-2 ring-[#2847C5]/60 sm:h-28 sm:w-28">
                                <svg width="56" height="56" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:h-[64px] sm:w-[64px]" aria-hidden>
                                    <path d="M42.8932 88.6255C37.2494 88.6255 31.6398 87.4968 26.4406 85.2734C21.2414 83.0501 16.5211 79.7664 12.5533 75.6618C4.48087 67.2815 0 56.028 0 44.3299C0 32.6317 4.51508 21.3782 12.5533 12.9979C16.5211 8.89332 21.2414 5.60964 26.4406 3.3863C31.6398 1.16297 37.2494 0 42.8932 0C48.5371 0 54.1467 1.16297 59.3459 3.3863C64.5451 5.60964 69.2654 8.89332 73.2332 12.9979C81.3398 21.344 85.8549 32.5975 85.7865 44.3299C85.7865 49.1186 85.034 53.9073 83.5632 58.4566C83.4605 58.7644 83.3579 59.1407 83.2211 59.5512L70.5994 32.5291C68.4103 26.851 64.6135 21.9597 59.688 18.5392C54.7624 15.0845 48.9134 13.2374 42.8932 13.2032C34.855 13.3058 27.2273 16.6579 21.6177 22.4728C16.008 28.3219 12.8953 36.1548 12.998 44.3299C12.9295 52.4707 16.008 60.3379 21.6177 66.187C27.2273 72.036 34.8893 75.3539 42.9275 75.4566C46.3822 75.4566 49.8027 74.8409 53.0522 73.6095L59.688 85.1366C54.3862 87.4626 48.6739 88.6255 42.9275 88.6255H42.8932Z" fill="white" />
                                    <path d="M88.8983 88.8986L59.2083 35.1281C57.0191 31.3655 53.7012 28.4581 49.7334 26.7821C45.7656 25.106 41.3874 24.7982 37.2144 25.8585L71.5905 88.8986H88.8983Z" fill="white" />
                                    <path d="M6.77234 20.4548L28.0821 58.6961C30.2713 62.4587 33.5892 65.3661 37.557 67.0422C41.5248 68.7183 45.903 69.0261 50.0761 67.9657L17.1023 9.03027C12.8266 11.9377 9.26931 15.8371 6.77234 20.4548Z" fill="white" />
                                </svg>
                            </div>

                            {/* Shield + Lock — top-left orbit */}
                            <div className="absolute left-0 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2847C5] shadow-[0_12px_28px_rgba(14,165,233,0.45)] ring-2 ring-[#2847C5]/60 sm:h-16 sm:w-16" style={{ left: "-100px", top: "-100px" }}>
                                <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.055 4.97118L16.3197 0.0594164C16.082 -0.0198055 15.8444 -0.0198055 15.6067 0.0594164L0.792219 4.97118C0.316888 5.12962 0 5.60495 0 6.08028V22.6377C0 31.5897 14.9729 36.9768 15.6067 37.1353C15.7652 37.2145 15.8444 37.2145 16.0028 37.2145C16.1613 37.2145 16.2405 37.2145 16.3989 37.1353C17.0327 36.8976 32.0057 31.5105 32.0057 22.6377V6.08028C31.9264 5.60495 31.5303 5.12962 31.055 4.97118ZM29.5498 22.6377C29.5498 29.2131 18.221 33.8872 15.9236 34.7586C11.8041 33.1742 2.37666 28.4209 2.37666 22.6377V6.95172L15.9236 2.43607L29.5498 6.95172V22.6377Z" fill="white" />
                                    <path d="M8.95112 11.9432V13.6069H6.41602V27.7084H25.4293V13.6069H22.8942V11.9432C22.8942 8.06133 19.8045 4.97168 15.9226 4.97168C12.0408 4.97168 8.95112 8.06133 8.95112 11.9432ZM16.6356 21.3706V23.4304C16.6356 23.9057 16.2395 24.2226 15.8434 24.2226C15.4473 24.2226 15.0512 23.8265 15.0512 23.4304V21.2914C14.4174 20.9745 13.9421 20.2615 13.9421 19.5485C13.9421 18.4394 14.8135 17.568 15.9226 17.568C17.0318 17.568 17.9032 18.4394 17.9032 19.5485C17.9032 20.3407 17.4279 21.0537 16.6356 21.3706ZM20.5175 11.9432V13.6069H11.3278V11.9432C11.3278 9.40811 13.3875 7.34834 15.9226 7.34834C18.4577 7.34834 20.5175 9.40811 20.5175 11.9432Z" fill="white" />
                                </svg>


                            </div>

                            {/* Calendar + Dollar + bar chart — top-right orbit */}
                            <div className="absolute left-0 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0 rounded-full bg-[#2847C5] shadow-[0_12px_28px_rgba(14,165,233,0.45)] ring-2 ring-[#2847C5]/60 sm:h-16 sm:w-16" style={{ left: "100px", top: "-100px" }}>
                                <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.33633 8.05412H5.5754C5.91738 8.05412 6.19493 7.77657 6.19493 7.43458V4.95645C6.19493 4.61447 5.91738 4.33691 5.5754 4.33691H4.33633C3.99435 4.33691 3.7168 4.61447 3.7168 4.95645V7.43458C3.7168 7.77657 3.99435 8.05412 4.33633 8.05412Z" fill="white" />
                                    <path d="M9.29336 8.05412H10.5324C10.8744 8.05412 11.152 7.77657 11.152 7.43458V4.95645C11.152 4.61447 10.8744 4.33691 10.5324 4.33691H9.29336C8.95138 4.33691 8.67383 4.61447 8.67383 4.95645V7.43458C8.67383 7.77657 8.95138 8.05412 9.29336 8.05412Z" fill="white" />
                                    <path d="M14.2484 8.05412H15.4875C15.8295 8.05412 16.107 7.77657 16.107 7.43458V4.95645C16.107 4.61447 15.8295 4.33691 15.4875 4.33691H14.2484C13.9065 4.33691 13.6289 4.61447 13.6289 4.95645V7.43458C13.6289 7.77657 13.9065 8.05412 14.2484 8.05412Z" fill="white" />
                                    <path d="M19.2055 8.05412H20.4445C20.7865 8.05412 21.0641 7.77657 21.0641 7.43458V4.95645C21.0641 4.61447 20.7865 4.33691 20.4445 4.33691H19.2055C18.8635 4.33691 18.5859 4.61447 18.5859 4.95645V7.43458C18.5859 7.77657 18.8635 8.05412 19.2055 8.05412Z" fill="white" />
                                    <path d="M5.5754 37.1723C6.60188 37.1723 7.434 36.3402 7.434 35.3137C7.434 34.2872 6.60188 33.4551 5.5754 33.4551C4.54892 33.4551 3.7168 34.2872 3.7168 35.3137C3.7168 36.3402 4.54892 37.1723 5.5754 37.1723Z" fill="white" />
                                    <path d="M10.5324 37.1723C11.5589 37.1723 12.391 36.3402 12.391 35.3137C12.391 34.2872 11.5589 33.4551 10.5324 33.4551C9.50595 33.4551 8.67383 34.2872 8.67383 35.3137C8.67383 36.3402 9.50595 37.1723 10.5324 37.1723Z" fill="white" />
                                    <path d="M15.4875 37.1723C16.514 37.1723 17.3461 36.3402 17.3461 35.3137C17.3461 34.2872 16.514 33.4551 15.4875 33.4551C14.461 33.4551 13.6289 34.2872 13.6289 35.3137C13.6289 36.3402 14.461 37.1723 15.4875 37.1723Z" fill="white" />
                                    <path d="M24.7814 7.43496C24.7814 7.0936 24.5032 6.81543 24.1618 6.81543H22.3032V7.43496C22.3032 8.45967 21.4693 9.29357 20.4446 9.29357H19.2056C18.1808 9.29357 17.3469 8.45967 17.3469 7.43496C17.3469 8.45967 16.5131 9.29357 15.4883 9.29357H14.2493C13.2246 9.29357 12.3907 8.45967 12.3907 7.43496C12.3907 8.45967 11.5568 9.29357 10.5321 9.29357H9.29301C8.2683 9.29357 7.43441 8.45967 7.43441 7.43496C7.43441 8.45967 6.60051 9.29357 5.57581 9.29357H4.33674C3.31203 9.29357 2.47814 8.45967 2.47814 7.43496V6.81543H0.619534C0.278171 6.81543 0 7.0936 0 7.43496V11.1522H24.7814V7.43496Z" fill="white" />
                                    <path d="M34.5691 26.2679L30.6661 21.0645H25.0903L21.1872 26.2679C20.3081 27.4407 19.8242 28.8929 19.8242 30.3575C19.8242 34.1149 22.8816 37.1723 26.6391 37.1723H29.1172C32.8747 37.1723 35.9321 34.1149 35.9321 30.3575C35.9321 28.8929 35.4482 27.4407 34.5691 26.2679ZM30.9758 28.4989H29.7368V27.8793C29.7368 26.8546 28.9029 26.0207 27.8782 26.0207H26.0196V26.6403C26.0196 27.665 26.8535 28.4989 27.8782 28.4989C29.5862 28.4989 30.9758 29.8885 30.9758 31.5965V33.4551H28.4977V34.6942H27.2586V33.3926C25.8467 33.1045 24.7805 31.8536 24.7805 30.3575V29.7379H26.0196V30.3575C26.0196 31.3822 26.8535 32.2161 27.8782 32.2161H29.7368V31.5965C29.7368 30.5718 28.9029 29.7379 27.8782 29.7379C26.1701 29.7379 24.7805 28.3483 24.7805 26.6403V24.7817H27.2586V23.5426H28.4977V24.8442C29.9096 25.1323 30.9758 26.3832 30.9758 27.8793V28.4989Z" fill="white" />
                                    <path d="M22.5605 17.3473L25.0387 19.8254H30.721L33.1992 17.3473L32.1379 16.286L29.9702 17.7308L29.2546 14.8691H26.5051L25.7896 17.7308L23.6218 16.286L22.5605 17.3473Z" fill="white" />
                                    <path d="M23.964 20.5032L20.808 17.3473L22.3036 15.8517V14.8691H2.47852V27.2598H5.57619V22.3035C5.57619 21.9616 5.85374 21.684 6.19572 21.684H7.43479C7.77677 21.684 8.05432 21.9616 8.05432 22.3035V27.2598H10.5325V19.8254C10.5325 19.4834 10.81 19.2059 11.152 19.2059H12.3911C12.733 19.2059 13.0106 19.4834 13.0106 19.8254V27.2598H15.4887V17.3473C15.4887 17.0053 15.7663 16.7277 16.1083 16.7277H17.3473C17.6893 16.7277 17.9669 17.0053 17.9669 17.3473V27.2598H19.2109C19.4668 26.6446 19.7963 26.0598 20.1972 25.5251L23.964 20.5032Z" fill="white" />
                                    <path d="M1.23907 27.2604V14.8697C1.23907 14.1864 1.79479 13.6307 2.47814 13.6307H22.3032C22.9407 13.6307 23.4611 14.1158 23.5287 14.7359L24.7814 15.571V12.3916H0V29.119C0 29.461 0.278171 29.7386 0.619534 29.7386H18.6114C18.6443 29.321 18.7112 28.9065 18.8084 28.4995H2.47814C1.79479 28.4995 1.23907 27.9438 1.23907 27.2604Z" fill="white" />
                                    <path d="M23.5422 3.7172C24.5687 3.7172 25.4008 2.88508 25.4008 1.8586C25.4008 0.832124 24.5687 0 23.5422 0C22.5157 0 21.6836 0.832124 21.6836 1.8586C21.6836 2.88508 22.5157 3.7172 23.5422 3.7172Z" fill="white" />
                                    <path d="M28.4992 3.7172C29.5257 3.7172 30.3578 2.88508 30.3578 1.8586C30.3578 0.832124 29.5257 0 28.4992 0C27.4727 0 26.6406 0.832124 26.6406 1.8586C26.6406 2.88508 27.4727 3.7172 28.4992 3.7172Z" fill="white" />
                                    <path d="M33.4543 3.7172C34.4808 3.7172 35.3129 2.88508 35.3129 1.8586C35.3129 0.832124 34.4808 0 33.4543 0C32.4278 0 31.5957 0.832124 31.5957 1.8586C31.5957 2.88508 32.4278 3.7172 33.4543 3.7172Z" fill="white" />
                                </svg>

                            </div>
                        </div>

                        <div className="relative z-0 h-[240px] w-full overflow-hidden rounded border border-sky-500/25 bg-slate-900/60 shadow-[0_24px_70px_rgba(15,23,42,0.95)] sm:h-[280px] lg:h-[320px] xl:h-[360px]">
                            <img
                                src="/home/HomeSection11.png"
                                alt="Analytics dashboard visualizing healthcare revenue performance"
                                className="h-full w-full object-cover object-center"
                                loading="lazy"
                            />
                            {/* Data overlay: glowing spheres, bar chart, line */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute inset-0 bg-linear-to-t from-[#020617]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-[15%] left-[8%] right-[20%] top-[10%]">
                                    {["6.8449", "2.4860", "0.4800", "5.9566"].map((label, i) => (
                                        <div
                                            key={label}
                                            className="absolute rounded-full bg-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                                            style={{
                                                width: 24 + (i % 3) * 12,
                                                height: 24 + (i % 3) * 12,
                                                left: `${15 + i * 22}%`,
                                                top: `${20 + (i % 2) * 35}%`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "8px",
                                                fontWeight: 600,
                                                color: "rgba(255,255,255,0.9)",
                                            }}
                                        >
                                            {label}
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute bottom-[12%] left-[5%] h-12 w-16 flex items-end gap-0.5">
                                    {[40, 65, 45, 80].map((h, i) => (
                                        <div key={i} className="w-3 rounded-t bg-sky-500/70" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                                <div className="absolute bottom-[8%] left-[5%] right-[15%] h-px bg-sky-400/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection11;
