// components/Resume.tsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CornerUpRight } from "lucide-react";
import Modal from "./Modal";
import ScrollFade from "./ScrollFade";

export default function Resume() {
  return (
    <div className="">
      <div className="flex flex-col items-center px-10 md:px-20 py-20">
        <div className="flex flex-col space-y-2 mb-10 w-full max-w-[800px]">
          <h1 className="image-title-text text-xl">Cole’s Resume</h1>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-base uppercase underline decoration-black underline-offset-4"
            style={{ color: "#f40" }}
          >
            <CornerUpRight className="w-5 h-5 transform scale-y-[-1]" />
            <span>Download Interactive PDF</span>
          </Link>
        </div>
        <div className="w-full max-w-[800px] mt-10 md:mt-0">
          <Modal
            src="/resume/colewendling.png"
            alt="Cole Wendling Resume"
            width={800}
            height={1100}
            className="w-full cursor-zoom-in shadow-none rounded-none"
          >
            <ScrollFade>
              <Image
                src="/resume/colewendling.png"
                alt="Cole Wendling Resume"
                width={800}
                height={1100}
                className="w-full h-auto object-contain shadow-card rounded-2xl"
              />
            </ScrollFade>
          </Modal>
        </div>
      </div>
    </div>
  );
}
