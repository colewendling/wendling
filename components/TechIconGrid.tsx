// components/TechIconGrid.tsx
import React from "react";

interface TechIconGridProps {
  icons: { src: string; color?: string }[];
}

const TechIconGrid: React.FC<TechIconGridProps> = ({ icons }) => {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-2">
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className="w-[50px] h-[50px] flex items-center justify-center"
        >
          <img
            src={icon.src}
            alt={`Tech icon ${idx + 1}`}
            className={`w-full h-full object-contain ${icon.color ?? ""}`}
          />
        </div>
      ))}
    </div>
  );
};

export default TechIconGrid;
