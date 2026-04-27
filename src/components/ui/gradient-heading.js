"use client";
export const GradientHeading = ({ children }) => {
  return (
    <h2
      className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight 
                bg-linear-to-r from-[#1F2937] via-[rgba(31,41,55,0.85)] to-[#1F2937] bg-clip-text text-transparent"
    >
      {children}
    </h2>
  );
};
