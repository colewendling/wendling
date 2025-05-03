// components/ProjectCards.tsx

"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isGif = thumbnail.toLowerCase().endsWith('.gif');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link href={`/${slug}`}>
      <div
        ref={ref}
        className={`relative w-full aspect-video overflow-hidden rounded-lg cursor-pointer scroll-transition-fade transform ${
          isVisible
            ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
            : "opacity-0 translate-y-8"
        }`}
      >
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
      </div>
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