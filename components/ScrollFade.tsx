import React, { ReactNode } from "react";
import { useInView } from "@/lib/utlis";

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
}

const ScrollFade: React.FC<ScrollFadeProps> = ({
  children,
  className = "",
}) => {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} scroll-transition-fade transform ${
        isVisible
          ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
          : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollFade;
