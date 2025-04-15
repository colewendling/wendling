// components/ProjectContent.tsx

import React from "react";
import { ContentBlock } from "@/data/projects";
import Image from "next/image";

interface ProjectContentProps {
  contentBlocks: ContentBlock[];
}

export const ProjectContent: React.FC<ProjectContentProps> = ({
  contentBlocks,
}) => {
  return (
    <div className="container mx-auto px-4 py-8 grid gap-8">
      {contentBlocks.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <p key={index} className="text-lg md:text-xl text-white">
                {block.content}
              </p>
            );
          case "image":
            return (
              <Image
                key={index}
                src={block.src}
                alt={block.alt || "Project Image"}
                width={1200}
                height={800}
                className="rounded-lg shadow-md"
              />
            );
          case "video":
            return (
              <video
                key={index}
                src={block.src}
                controls
                className="w-full rounded-lg shadow-md"
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
