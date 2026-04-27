import * as React from "react";

const EmailIcon = (props) => (
    <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M29.3334 9.33331L17.3454 16.9693C16.9386 17.2056 16.4765 17.3301 16.0061 17.3301C15.5356 17.3301 15.0736 17.2056 14.6667 16.9693L2.66675 9.33331M5.33341 5.33331H26.6668C28.1395 5.33331 29.3334 6.52722 29.3334 7.99998V24C29.3334 25.4727 28.1395 26.6666 26.6668 26.6666H5.33341C3.86066 26.6666 2.66675 25.4727 2.66675 24V7.99998C2.66675 6.52722 3.86066 5.33331 5.33341 5.33331Z"
            stroke="url(#paint0_linear_3376_761)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <defs>
            <linearGradient
                id="paint0_linear_3376_761"
                x1={5.33629}
                y1={22.3984}
                x2={5.33629}
                y2={26.6641}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#2847C5" />
                <stop offset={1} stopColor="#0D94E4" />
            </linearGradient>
        </defs>
    </svg>
);
export default EmailIcon;
