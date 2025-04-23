// components/ProfileCard.tsx
"use client";

import React from "react"
import TechIconGrid from "./TechIconGrid";

const ProfileCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch text-white">
      <div className="w-full md:w-1/3 flex items-center justify-center px-4 md:px-8">
        <div className="w-full">
          <img
            src="/images/general/profile.png"
            alt="Profile"
            className="object-cover shadow-card rounded-2xl max-h-full"
          />
        </div>
      </div>

      {/* Text and icon grid */}
      <div className="flex flex-col justify-between w-full md:w-2/3 px-4 md:px-8">
        <p>
          I am a Fullstack Software engineer skilled in React, Redux, Javascript
          & Ruby combined with a full knowledge of backend structural logic with
          PostgreSQL and Ruby on Rails.
        </p>

        <TechIconGrid
          icons={[
            { src: "/icons/css.svg", color: "text-red-500" },
            { src: "/icons/git.svg", color: "text-yellow-400" },
            { src: "/icons/html5.svg", color: "text-blue-500" },
            { src: "/icons/javascript.svg" }, // no color fallback
            { src: "/icons/nextdotjs.svg", color: "text-green-400" },
            { src: "/icons/postgresql.svg", color: "text-indigo-500" },
            { src: "/icons/react.svg", color: "text-pink-500" },
            { src: "/icons/ruby.svg", color: "text-gray-300" },
            { src: "/icons/tailwindcss.svg", color: "text-amber-400" },
            { src: "/icons/vercel.svg", color: "text-white" },
          ]}
        />

        <p>
          Solving complex problems in clever and elegant ways is my passion. I
          combine the communication and design sensibilities of my architectural
          background with strong coding skills to create new and exciting
          projects.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
