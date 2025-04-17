// components/ProfileCard.tsx
"use client";

import Image from "next/image";
import React from "react";

const ProfileCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      
      {/* Profile image */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/general/profile.png"
          alt="Profile"
          width={400}
          height={400}
          className="rounded-lg scroll-transition-fade w-full h-auto md:h-full object-cover max-w-sm"
        />
      </div>

      {/* Text and icon grid */}
      <div className="flex flex-col justify-between h-full">
        <p className="mb-4">
          I am a Fullstack Software engineer skilled in React, Redux, Javascript
          & Ruby combined with a full knowledge of backend structural logic with
          PostgreSQL and Ruby on Rails.
        </p>

        <div className="grid grid-cols-5 grid-rows-2 gap-2 mb-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div key={idx} className="aspect-square bg-gray-600 rounded-lg" />
          ))}
        </div>

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
