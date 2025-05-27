// components/ProjectDetails.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { CornerUpRight } from "lucide-react";
import Modal from "./Modal";

export interface ProjectDetailsProps {
  title: string;
  header: string;
  stats: { [name: string]: string };
  links: { [name: string]: string };
  linkColor: string;
  statColor: string;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  header,
  stats,
  links,
  linkColor,
  statColor,
}) => {
  const themeColorMap: { [key: string]: string } = {
    orange: "#ff4400",
    cyan: "rgb(0,255,214)",
    ruby: "rgb(230,0,35)",
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <Modal
          src={header}
          alt={title}
          width={1200}
          height={600}
          className="w-full lg:w-2/3 relative cursor-zoom-in group rounded-2xl overflow-hidden shadow-card"
        >
          <Image
            src={header}
            alt={title}
            width={1200}
            height={600}
            unoptimized={header.toLowerCase().endsWith(".gif")}
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition rounded-2xl" />
        </Modal>

        {/* Right column: info and links */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-4">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>

          <div className="space-y-4 text-sm mb-6">
            {Object.entries(stats).map(([key, value]) => (
              <p key={key}>
                <span className="font-semibold">{key}:</span>{" "}
                {[
                  "Frontend Software",
                  "Backend Software",
                  "Software",
                  "Art",
                  "Frontend",
                  "Backend",
                  "Hosting",
                  "Authentication"
                ].includes(key) ? (
                  <span style={{ color: themeColorMap[statColor] }}>
                    {value}
                  </span>
                ) : (
                  <span className="opacity-[0.85]">{value}</span>
                )}
              </p>
            ))}
          </div>

          <div className="flex flex-col space-y-4 md:space-y-2">
            {Object.entries(links).map(([name, url]) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-base uppercase underline decoration-black underline-offset-4"
                style={{ color: themeColorMap[linkColor] }}
              >
                <CornerUpRight className="w-5 h-5 transform scale-y-[-1]" />
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
