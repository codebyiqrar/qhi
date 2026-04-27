import Image from "next/image";
import React from "react";

export const GradientBadge = ({ text, iconWrapperClass = "mr-2 h-4 w-4", className = "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-6 bg-accent/60 bg-linear-to-r from-[#2847C5] via-[#0D94E4] to-[#2847C5] bg-clip-text text-transparent" }) => {
  return (
    <div className={className}>
      <div className={iconWrapperClass}>
        <Image src="/star.svg" alt="Rocket Icon" width={16} height={16} />
      </div>
      {text}
    </div>
  );
};
