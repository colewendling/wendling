// components/Section.tsx

import React from "react";
import AnimatedBlurBackground from "@/components/AnimatedBackground";

type SectionProps = {
  variant?: "solid" | "transparent" | "animated";
  children: React.ReactNode;
};

export default function Section({ variant = "solid", children }: SectionProps) {
  let bgClass = "";
  if (variant === "solid") bgClass = "bg-solid";
  else if (variant === "transparent") bgClass = "bg-transparent";

  return (
    <section className={`relative ${bgClass}`}>
      {variant === "animated" && <AnimatedBlurBackground />}
      <div className="pl-0 md:pl-[20vw] relative">
        <div className="py-10 px-10">
          {children}
          </div>
      </div>
    </section>
  );
}
