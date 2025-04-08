import React from "react";

interface GradientBackgroundProps {
  colors: [string, string, string];
  children: React.ReactNode;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  colors,
  children,
}) => {
  const gradientStyle = {
    background: `linear-gradient(180deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
  };

  return (
    <div className="w-full min-h-screen flex flex-col" style={gradientStyle}>
      {children}
    </div>
  );
};
