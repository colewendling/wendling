// components/AnimatedBackground.tsx

"use client";

import React, { useEffect, useRef } from "react";


const AnimatedBackground: React.FC = () => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let curX = 0,
      curY = 0,
      tgX = 0,
      tgY = 0;
    const el = interactiveRef.current!;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      el.style.transform = `translate(${Math.round(curX)}px, ${Math.round(
        curY
      )}px)`;
      requestAnimationFrame(move);
    }

    const handleMouseMove = (e: MouseEvent) => {
      tgX = e.clientX;
      tgY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    move();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-bg fixed inset-0 z-[-10] overflow-hidden pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="20"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="gradients-container">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
        <div className="g5" />
        <div ref={interactiveRef} className="interactive" />
      </div>
    </div>
  );
};

export default AnimatedBackground;
