// components/HomeIntro.tsx

"use client";

import React from "react";
import TechIconGrid from "./TechIconGrid";

const HomeIntro: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center text-white space-y-10 lg:space-y-0 lg:space-x-4">
      {/* Profile Image */}
      <div className="w-full lg:w-1/2 px-4 lg:px-8 text-center max-w-[250px] md:max-w-[350px] lg:max-w-[500px]">
        <div className="w-full flex justify-center">
          <img
            src="/images/general/profile.png"
            alt="Profile"
            className="object-cover shadow-card rounded-2xl max-h-[450px]"
          />
        </div>
      </div>

      {/* Text and icon grid */}
      <div className="flex flex-col justify-between w-full lg:w-1/2 px-4 lg:px-8 space-y-4 max-w-[400px] md:max-w-[350px] lg:max-w-[500px] mx-auto">
        <p className=" text-xs lg:text-sm opacity-80">
          Fullstack Software Engineer crafting modern web apps with Next.js,
          React, TypeScript, and Tailwind CSS; powered by Node.js, Express, and
          GPT APIs for AI driven features; Git-tracked and deployed via Vercel.
        </p>

        <div className="my-6 [&_img]:p-2">
          <TechIconGrid
            icons={[
              {
                src: "/icons/nextdotjs.svg",
                name: "Next.js"
              },
              {
                src: "/icons/react.svg",
                name: "React"
              },
              {
                src: "/icons/javascript.svg",
                name: "JavaScript"
              },
              {
                src: "/icons/typescript.svg",
                name: "TypeScript"
              },
              {
                src: "/icons/tailwindcss.svg",
                name: "Tailwind CSS"
              },
              {
                src: "/icons/nodedotjs.svg",
                name: "Node.js"
              },
              {
                src: "/icons/express.svg",
                name: "Express.js"
              },
              {
                src: "/icons/postgresql.svg",
                name: "PostgreSQL"
              },
              {
                src: "/icons/git.svg",
                name: "Git"
              },
              {
                src: "/icons/vercel.svg",
                name: "Vercel"
              }
            ]}
          />
        </div>

        <p className="text-xs lg:text-sm opacity-80">
          With a foundation in architecture and a focus on fullstack development
          I approach every challenge with a blend of creative thinking and
          technical precision - creating refined applications built to scale and
          adapt.
        </p>
      </div>
    </div>
  );
};

export default HomeIntro;
