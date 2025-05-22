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
          I am a Fullstack Software engineer skilled in React, Redux, Javascript
          & Ruby combined with a full knowledge of backend structural logic with
          PostgreSQL and Ruby on Rails.
        </p>

        <div className="my-6 [&_img]:p-2">
          <TechIconGrid
            icons={[
              {
                src: "/icons/nextdotjs.svg",
                name: "Next.js",
                color: "text-green-400",
              },
              { src: "/icons/vercel.svg", name: "Vercel", color: "text-white" },
              {
                src: "/icons/react.svg",
                name: "React",
                color: "text-pink-500",
              },
              { src: "/icons/javascript.svg", name: "JavaScript" },
              { src: "/icons/ruby.svg", name: "Ruby", color: "text-gray-300" },
              {
                src: "/icons/postgresql.svg",
                name: "PostgreSQL",
                color: "text-indigo-500",
              },
              {
                src: "/icons/tailwindcss.svg",
                name: "Tailwind CSS",
                color: "text-amber-400",
              },
              { src: "/icons/git.svg", name: "Git", color: "text-yellow-400" },
              {
                src: "/icons/html5.svg",
                name: "HTML5",
                color: "text-blue-500",
              },
              { src: "/icons/css.svg", name: "CSS", color: "text-red-500" },
            ]}
          />
        </div>

        <p className="text-xs lg:text-sm opacity-80">
          Solving complex problems in clever and elegant ways is my passion. I
          combine the communication and design sensibilities of my architectural
          background with strong coding skills to create new and exciting
          projects.
        </p>
      </div>
    </div>
  );
};

export default HomeIntro;
