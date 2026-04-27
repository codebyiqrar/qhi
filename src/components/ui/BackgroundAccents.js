import React from "react";
export default function BackgroundAccents({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`.trim()}>
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[70%] h-[22%] sm:w-[62%] sm:h-[26%] md:w-[58%] md:h-[28%] lg:w-[55%] lg:h-[30%] rounded-br-full opacity-85"
          style={{
            background:
              "radial-gradient(ellipse at top left, #0D94E4 0%, #bae6fd 30%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[70%] h-[22%] sm:w-[62%] sm:h-[26%] md:w-[58%] md:h-[28%] lg:w-[55%] lg:h-[30%] rounded-bl-full opacity-85"
          style={{
            background:
              "radial-gradient(ellipse at top right, #0D94E4 0%, #bae6fd 30%, transparent 70%)",
          }}
        />
      </div>

      {/* Left accent — same size, positioned left */}
      <div className="absolute top-0 left-0 pointer-events-none w-[45vw] max-w-[280px] min-w-[150px]">
        <svg
          className="w-full h-auto"
          width="280"
          height="220"
          viewBox="0 0 318 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M317.914 281L200.515 68.3848C191.859 53.5072 178.74 42.0109 163.051 35.3836C147.362 28.7562 130.049 27.5389 113.549 31.7317L249.476 281H317.914Z"
            fill="#F6FCFF"
          />
          <path
            d="M-42.8629 -52L74.5353 160.615C83.1914 175.493 96.3108 186.989 112 193.616C127.689 200.244 145.001 201.461 161.502 197.268L25.5743 -52L-42.8629 -52Z"
            fill="#F6FCFF"
          />
        </svg>
      </div>

      {/* Right accent — same size, positioned right */}
      <div className="absolute top-0 right-0 pointer-events-none w-[45vw] max-w-[280px] min-w-[150px]">
        <svg
          className="w-full h-auto"
          width="280"
          height="220"
          viewBox="0 0 318 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMin meet"
          aria-hidden
        >
          <path
            d="M0.000411987 281L117.399 68.3846C126.055 53.5069 139.174 42.0106 154.863 35.3833C170.552 28.756 187.865 27.5387 204.365 31.7315L68.4376 281H0.000411987Z"
            fill="#F6FCFF"
          />
          <path
            d="M360.777 -52.0002L243.379 160.615C234.723 175.493 221.603 186.989 205.914 193.616C190.225 200.244 172.913 201.461 156.412 197.268L292.34 -52.0002L360.777 -52.0002Z"
            fill="#F6FCFF"
          />
        </svg>
      </div>

      {children}
    </div>
  );
}
