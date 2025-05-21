// components/TechIconGrid.tsx

import React from "react";
import ScrollFade from "./ScrollFade";

interface TechIconGridProps {
  icons: { src: string; color?: string; name: string }[];
}

const TechIconGrid: React.FC<TechIconGridProps> = ({ icons }) => {
  return (
    <ScrollFade>
      <div className="grid grid-cols-5 gap-3 max-w-full justify-items-center sm:gap-4">
        {icons.map((icon, idx) => (
          <div
            key={idx}
            className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 flex items-center justify-center p-1 sm:p-2 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/50 group relative"
          >
            <img
              src={icon.src}
              alt={`Tech icon ${idx + 1}`}
              draggable="false"
              className={`select-none w-full h-full object-contain ${icon.color ?? ""}`}
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-xs bg-black bg-opacity-70 text-white rounded">
              {icon.name}
            </span>
          </div>
        ))}
      </div>
    </ScrollFade>
  );
};

export default TechIconGrid;
