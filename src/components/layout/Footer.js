"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  companyLinks,
  productsLinks,
  resourcesLinks,
  socialLinks,
} from "@/constants/footer";
import {
  companyAddress,
  companyContactEmail,
  companyName,
  companyPhoneNumber,
} from "@/constants/header";

const FOOTER_TAGLINE =
  "Empowering healthcare providers with intelligent patient monitoring, billing, and charge capture solutions.";

const FOOTER_TEXT = "#10172A";
const fontDmSans = "var(--font-dm-sans)";
const fontManrope = "var(--font-manrope)";

const footerColumns = [
  { title: "Company", links: companyLinks },
  { title: "Solutions", links: productsLinks },
  { title: "Resources", links: resourcesLinks },
];

const FooterCorner = ({ align = "left" }) => {
  const isRight = align === "right";

  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 hidden h-[260px] overflow-hidden sm:block md:h-[329px]"
      aria-hidden
    >
      <div
        className={`absolute bottom-[-120px] top-[90px] h-[340px] w-[340px] rounded-full md:bottom-[-100px] md:top-[100px] md:h-[500px] md:w-[500px] ${isRight ? "right-[-120px] md:right-[-100px]" : "left-[-120px] md:left-[-100px]"
          }`}
        style={{
          background:
            "radial-gradient(circle, rgba(13,148,228,0.8) 0%, rgba(13,148,228,0.4) 40%, rgba(13,148,228,0) 70%)",
          filter: "blur(60px)",
        }}
      />
      <svg
        width="318"
        height="329"
        viewBox="0 0 318 329"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`absolute bottom-0 h-[260px] w-[251px] md:h-[329px] md:w-[318px] ${isRight ? "right-0 scale-x-[-1]" : "left-0"
          }`}
      >
        <path
          d="M317.775 333L200.377 120.385C191.721 105.507 178.601 94.0111 162.912 87.3838C147.223 80.7565 129.911 79.5392 113.41 83.732L249.338 333H317.775Z"
          fill="#F5FBFF"
        />
        <path
          d="M-43.0016 0.000780806L74.3966 212.616C83.0527 227.494 96.1721 238.99 111.861 245.617C127.55 252.244 144.863 253.462 161.363 249.269L25.4356 0.000774823L-43.0016 0.000780806Z"
          fill="#F5FBFF"
        />
      </svg>
    </div>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h3
      className="mb-4 text-[20px] font-semibold leading-[1.14] sm:mb-5 sm:text-[21px]"
      style={{ color: FOOTER_TEXT }}
    >
      {title}
    </h3>
    <ul className="flex flex-col gap-2.5 sm:gap-[11px]">
      {links.map((item) => (
        <li key={item.title}>
          <Link
            href={item.link}
            className="text-[15px] leading-normal transition hover:underline sm:text-[16px]"
            style={{ color: FOOTER_TEXT }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIconLink = ({ social }) => (
  <a
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-9 w-9 items-center justify-center rounded-lg transition hover:opacity-90 sm:h-10 sm:w-10"
    style={{ background: FOOTER_TEXT, color: "#fff" }}
    aria-label={social.name}
  >
    {social.icon}
  </a>
);

export default function Footer() {
  const year = new Date().getFullYear();
  const socialThree = socialLinks.slice(0, 3);

  return (
    <footer
      className="relative overflow-hidden text-[#10172A]"
      style={{
        background: "linear-gradient(180deg, #F3FBFF 0%, #FFFFFF 100%)",
        fontFamily: fontDmSans,
      }}
    >
      <FooterCorner align="left" />
      <FooterCorner align="right" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-11 md:px-8 md:py-12 lg:px-[70px] lg:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-9 lg:grid-cols-[minmax(260px,314px)_1fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand column — Figma x:70, y:85, w:314 */}
          <div className="md:col-span-2 lg:col-span-1 lg:max-w-[314px]">
            <Link
              href="/"
              className="mb-3 flex items-center gap-2.5 sm:mb-4"
              aria-label={`${companyName} home`}
            >
              <Image
                src="/logo.svg"
                alt=""
                width={36}
                height={36}
                className="shrink-0"
              />
              <span
                className="text-[19px] font-bold sm:text-xl"
                style={{ color: FOOTER_TEXT }}
              >
                {companyName}
              </span>
            </Link>
            <p
              className="mb-5 max-w-[340px] text-[14px] leading-[1.7] sm:mb-6 lg:max-w-[314px]"
              style={{ color: FOOTER_TEXT }}
            >
              {FOOTER_TAGLINE}
            </p>
            <div className="flex gap-3">
              {socialThree.map((social) => (
                <SocialIconLink key={social.name} social={social} />
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}

          {/* Contact Info — Address, Phone, Email */}
          <div className="md:max-w-[280px]">
            <h3
              className="mb-4 text-[20px] font-semibold leading-[1.14] sm:mb-5 sm:text-[21px]"
              style={{ color: FOOTER_TEXT }}
            >
              Contact Info
            </h3>
            <ul
              className="flex flex-col gap-2.5 text-[15px] leading-normal sm:gap-[11px] sm:text-[16px]"
              style={{ color: FOOTER_TEXT }}
            >
              <li>{companyAddress}</li>
              <li>
                <a
                  href={`tel:${companyPhoneNumber.replace(/\D/g, "")}`}
                  className="transition hover:underline"
                >
                  {companyPhoneNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyContactEmail}`}
                  className="transition hover:underline"
                >
                  {companyContactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider — Figma: 1px #10172A at y:360, x:109 to 1359 */}
        <div className="mt-10 h-px w-full sm:mt-11 lg:mt-12" style={{ background: FOOTER_TEXT }} aria-hidden />

        {/* Copyright — Figma: Manrope 16px, centered, "© 2026 Quantus Health. All rights reserved." */}
        <p
          className="pt-5 text-center text-[13px] leading-normal sm:pt-6 sm:text-[15px] lg:text-[16px]"
          style={{ color: FOOTER_TEXT, fontFamily: fontManrope }}
        >
          © {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
