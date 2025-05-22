// components/TechIconGrid.tsx

import React from "react";
import { useInView } from "@/lib/utlis";

interface TechIconGridProps {
  icons: { src: string; color?: string; name: string }[];
}

const TechIconGrid: React.FC<TechIconGridProps> = ({ icons }) => {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        grid grid-cols-5 gap-3 max-w-full justify-items-center sm:gap-4 my-10
        transform transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className={`
            w-10 sm:w-12 md:w-12 lg:w-14
            h-10 sm:h-12 md:h-12 lg:h-14
            flex items-center justify-center
            p-1 sm:p-2 bg-black bg-opacity-5 backdrop-blur-lg rounded-2xl
            transition-shadow duration-300 ease-out delay-700 md:hover:scale-110 cursor-default
            ${isVisible ? "shadow-card" : "shadow-none"}
            group relative
          `}
        >
          <img
            src={icon.src}
            alt={`Tech icon ${idx + 1}`}
            draggable="false"
            className={`select-none w-full h-full object-contain ${
              icon.color ?? ""
            }`}
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-xs bg-black bg-opacity-70 text-white rounded">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechIconGrid;
