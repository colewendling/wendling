// components/ProjectCards.tsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ScrollFade from "./ScrollFade";

interface ProjectCardProps {
  slug: string;
  title: string;
  thumbnail: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  thumbnail,
}) => {
  const isGif = thumbnail.toLowerCase().endsWith('.gif');

  return (
    <Link href={`/${slug}`}>
      <ScrollFade className="relative w-full aspect-video overflow-hidden rounded-lg cursor-pointer">
        <Image
          src={thumbnail}
          alt={title}
          fill
          unoptimized={isGif}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
          {title}
        </div>
      </ScrollFade>
    </Link>
  );
};

const ProjectCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          slug={project.slug}
          title={project.title}
          thumbnail={project.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProjectCards;