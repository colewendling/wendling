// components/ProjectContent.tsx

"use client";

import React, { ReactNode, useRef, useEffect, useState } from "react";
import { ContentBlock } from "@/data/projects";
import Image from "next/image";
import Modal from "./Modal";
import CodeBlock from '@/components/CodeBlock';

const FadeIn: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div
      ref={ref}
      className={`${className} scroll-transition-fade transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

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
          <p key={key} className="text-sm body-text">
            {block.content}
          </p>
        );

      case "text-full":
        return (
          <p key={key} className="body-text-full text-sm md:text-base">
            {block.content}
          </p>
        );

      case "image-full":
        return (
          <FadeIn key={key} className="w-full">
            <h2 className="image-title-text">{block.title}</h2>
            <Modal
              src={block.src}
              alt={block.alt || block.title}
              width={1200}
              height={600}
              className="w-full cursor-zoom-in shadow-none rounded-none"
            >
              <Image
                src={block.src}
                alt={block.alt || block.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover shadow-card rounded-2xl"
              />
            </Modal>
          </FadeIn>
        );

      case "image":
        return (
          <FadeIn key={key}>
            {block.alt && (
              <h2 className="image-title-text mt-8">
                {block.alt}
              </h2>
            )}
            <Modal
              src={block.src}
              alt={block.alt || ''}
              width={600}
              height={400}
              className="w-full cursor-zoom-in shadow-none rounded-none"
            >
              <Image
                src={block.src}
                alt={block.alt || ''}
                width={600}
                height={400}
                className="w-full h-auto object-contain shadow-card rounded-2xl"
              />
            </Modal>
          </FadeIn>
        );

      case "code":
        return (
          <CodeBlock
            key={key}
            title={block.title}
            code={block.code}
            keyColor={block.keyColor}
            valueColor={block.valueColor}
            punctuationColor={block.punctuationColor}
          />
        );

      case "two-col":
        return (
          <div key={key} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch mb-8">
            <div className="flex flex-col justify-between h-full">
              {block.left.map((b, i) => renderBlock(b, `${key}-left-${i}`))}
            </div>
            {block.right && block.right.length > 0 && (
              <div>
                {block.right.map((b, i) => renderBlock(b, `${key}-right-${i}`))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-16 md:space-y-10 mt-16 mb-16">
      {contentBlocks.map((block, i) => renderBlock(block, `${i}`))}
    </div>
  );
};
