// components/ProjectContent.tsx

"use client";

import React, { ReactNode, useRef, useEffect, useState } from "react";
import { ContentBlock } from "@/data/projects";
import Image from "next/image";
import Modal from "./Modal";
import CodeBlock from "@/components/CodeBlock";
import Grid from "./Grid";
import ScrollFade from "./ScrollFade";

const FadeIn: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
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
      className={`${className} scroll-transition-fade ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

interface ProjectContentProps {
  contentBlocks: ContentBlock[];
  textTheme: "light" | "dark";
}

export const ProjectContent: React.FC<ProjectContentProps> = ({
  contentBlocks,
  textTheme,
}) => {
  const renderBlock = (block: ContentBlock, key: string): ReactNode => {
    switch (block.type) {
      case "text":
        return (
          <p
            key={key}
            className={`text-sm body-text ${
              textTheme === "dark" ? "text-[rgba(189,189,189,0.82)]" : ""
            }`}
          >
            {block.content}
          </p>
        );

      case "text-full":
        return (
          <p
            key={key}
            className={`body-text-full text-sm md:text-base ${
              textTheme === "dark" ? "text-[rgba(189,189,189,0.82)]" : ""
            }`}
          >
            {block.content}
          </p>
        );

      case "image-full":
        return (
          <div key={key} className="w-full">
            <h2 className="image-title-text">{block.title}</h2>
            <FadeIn className="w-full">
              <Modal
                src={block.src}
                alt={block.alt || block.title}
                width={1200}
                height={600}
                className="w-full cursor-zoom-in shadow-none rounded-none"
              >
                <ScrollFade>
                  <Image
                    src={block.src}
                    alt={block.alt || block.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover shadow-card rounded-2xl"
                  />
                </ScrollFade>
              </Modal>
            </FadeIn>
          </div>
        );

      case "image":
        return (
          <div key={key}>
            {block.alt && (
              <h2 className="image-title-text mt-8">{block.alt}</h2>
            )}
            <FadeIn>
              <Modal
                src={block.src}
                alt={block.alt || ""}
                width={600}
                height={400}
                className="w-full cursor-zoom-in shadow-none rounded-none"
              >
                <ScrollFade>
                  <Image
                    src={block.src}
                    alt={block.alt || ""}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain shadow-card rounded-2xl"
                  />
                </ScrollFade>
              </Modal>
            </FadeIn>
          </div>
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
          <div
            key={key}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch mb-8"
          >
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

      case "vectary-3d":
        return (
          <FadeIn key={key} className="w-full mb-8">
            <h2 className="image-title-text mt-8">{block.title}</h2>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-2/ border-light">
                <iframe
                  src={block.models[0].src}
                  className="w-full h-[480px]"
                  allow="autoplay; fullscreen"
                />
              </div>
              <div className="hidden lg:block w-full lg:w-1/3 border-light">
                <iframe
                  src={block.models[1].src}
                  className="w-full h-[480px]"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </FadeIn>
        );

      case "three-col":
        return (
          <FadeIn key={key} className="w-full mb-8">
            <h2 className="image-title-text mt-8">{block.title}</h2>
            <Grid images={block.images} />
          </FadeIn>
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
