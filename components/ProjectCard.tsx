"use client";
// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { CornerUpRight, X, Search } from "lucide-react";
import { useState } from "react";

export interface ProjectCardProps {
  title: string;
  header: string;
  stats: { [name: string]: string };
  links: { [name: string]: string };
  linkColor: string;
  statColor: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  header,
  stats,
  links,
  linkColor,
  statColor,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isGif = header.toLowerCase().endsWith('.gif');
  console.log(statColor)
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left column: image stays top-aligned and maintains aspect ratio */}
        <div
          className="w-full lg:w-2/3 relative cursor-zoom-in group rounded-2xl overflow-hidden shadow-card"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={header}
            alt={title}
            width={1200}
            height={600}
            unoptimized={isGif}
            className="w-full h-auto object-contain"
          />
          {/* hover overlay with search icon */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition rounded-2xl">
            {/* <Search className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition" /> */}
          </div>
        </div>

        {/* Right column: info and links */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>

          <div className="space-y-4 text-sm mb-6">
            {Object.entries(stats).map(([key, value]) => (
              <p key={key}>
                <span className="font-semibold">{key}:</span>{' '}
                <span
                  className={
                    key === "Frontend Software" || key === "Backend Software"
                      ? `text-${statColor}`
                      : 'opacity-[0.85]'
                  }
                >
                  {value}
                </span>
              </p>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            {Object.entries(links).map(([name, url]) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 text-base uppercase underline decoration-black underline-offset-4 text-${linkColor}`}
              >
                <CornerUpRight className="w-5 h-5 transform rotate-180" />
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <Image
              src={header}
              alt={title}
              width={1600}
              height={800}
              unoptimized={isGif}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <X
              className="absolute top-2 right-2 w-8 h-8 text-white cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};
