import React from "react";

export const Description = ({ children }) => {
  return (
    <p className="mx-auto mt-6 max-w-2xl text-md text-foreground">{children}</p>
  );
};
