// components/ProjectContent.tsx

import React, { ReactNode } from "react";
import { ContentBlock } from "@/data/projects";
import Image from "next/image";

interface ProjectContentProps {
  contentBlocks: ContentBlock[];
}

export const ProjectContent: React.FC<ProjectContentProps> = ({
  contentBlocks,
}) => {
  const renderBlock = (block: ContentBlock, key: string): ReactNode => {
    switch (block.type) {
      case "text":
        return (
          <p
            key={key}
            className="mb-8 text-[1rem]  text-[rgba(189,189,189,0.82)]"
          >
            {block.content}
          </p>
        );

      case "text-full":
        return (
          <p
            key={key}
            className="mb-8 text-[1.3rem] font-light leading-[1.3] text-[rgba(189,189,189,0.82)]"
          >
            {block.content}
          </p>
        );

      case "image-full":
        return (
          <div key={key} className="w-full mb-8">
            <h2 className="text-xl font-semibold mb-2">{block.title}</h2>
            <Image
              src={block.src}
              alt={block.alt || block.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover shadow-card rounded-2xl"
            />
          </div>
        );

      case "image":
        return (
          <div key={key} className="mb-8">
            <Image
              src={block.src}
              alt={block.alt || ''}
              width={600}
              height={400}
              className="w-full h-auto object-contain shadow-card rounded-2xl"
            />
          </div>
        );

      case "code":
        return (
          <pre key={key} className="bg-gray-900 bg-opacity-50 p-4 rounded mb-8 overflow-x-auto text-sm font-mono">
            <code className={`text-${block.valueColor || 'white'}`}>{block.code}</code>
          </pre>
        );

      case "two-col":
        return (
          <div key={key} className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="w-full lg:w-1/2 space-y-4">
              {block.left.map((b, i) => renderBlock(b, `${key}-left-${i}`))}
            </div>
            {block.right && block.right.length > 0 && (
              <div className="w-full lg:w-1/2 space-y-4">
                {block.right.map((b, i) => renderBlock(b, `${key}-right-${i}`))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return <>{contentBlocks.map((block, i) => renderBlock(block, `${i}`))}</>;
};
