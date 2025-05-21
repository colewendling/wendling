// components/Modal.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  children: React.ReactNode;
}

export default function Modal({
  src,
  alt,
  width = 1600,
  height = 800,
  children,
  className,
  ...divProps
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isGif = src.toLowerCase().endsWith(".gif");

  return (
    <>
      {/* Clicking this wrapper opens the modal */}
      <div className={className} onClick={() => setIsOpen(true)} {...divProps}>
        {children}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              unoptimized={isGif}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <X
              size={24}
              className="fixed top-3 right-3 text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
