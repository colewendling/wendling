// components/Section.tsx
import React from "react";
import AnimatedBlurBackground from "@/components/AnimatedBackground";

type SectionProps = {
  /** 'solid' will give it a background color; 'transparent' will leave it see-through; 'animated' will show an animated background */
  variant?: "solid" | "transparent" | "animated";
  children: React.ReactNode;
};

export default function Section({ variant = "solid", children }: SectionProps) {
  // adjust these Tailwind classes to suit your theme
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
