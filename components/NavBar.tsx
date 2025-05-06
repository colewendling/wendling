// components/Navbar.tsx

"use client";

import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex flex-col sticky top-0 backdrop-blur-sm bg-black/5 py-8 px-4 justify-start h-full z-50 items-end overflow-y-auto text-white space-y-6">
        {/* Header */}
        <div className="text-right">
          <Link
            href="/"
            className="text-2xl font-optician font-semibold no-underline hover:text-gray-400 leading-tight break-words"
          >
            COLE WENDLING
          </Link>
          <p className="text-base lg:text-md tracking-tight opacity-70 break-words">
            FULLSTACK SOFTWARE ENGINEER
          </p>

          {/* Skills */}
          <p className="mt-10 border-t border-b border-white/20 py-2 text-xs lg:text-xs font-medium tracking-tighter text-right">
            {[
              "Next.js",
              "Vercel",
              "React",
              "Tailwind",
              "JavaScript",
              "Git",
              "PostgreSQL",
              "Ruby",
              "TypeScript",
              "HTML",
              "CSS",
            ].join(" | ")}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-end mb-4 pt-[30px]">
          <Link
            href="https://github.com/colewendling"
            target="_blank"
            className="mb-4"
          >
            <div className="bg-white rounded-full p-1">
              <Github className="text-black" size={16} />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/colewendling/"
            target="_blank"
            className="mb-4"
          >
            <div className="bg-white rounded-full p-1">
              <Linkedin className="text-black" size={16} />
            </div>
          </Link>
          <Link
            href="/resume"
            className="hover:text-gray-400 mb-4 no-underline text-sm tracking-widest"
          >
            RESUME
          </Link>
        </div>

        {/* Project Page Links */}
        <div className="flex flex-col items-end space-y-3 text-sm tracking-widest pt-[250px] max-[1130px]:pt-[200px]">
          <Link href="/zenterest" className={`hover:text-gray-400 no-underline${pathname === "/zenterest" ? " text-gray-400" : ""}`}>
            ZENTEREST
          </Link>
          <Link
            href="/babelbuilder"
            className={`hover:text-gray-400 no-underline${pathname === "/babelbuilder" ? " text-gray-400" : ""}`}
          >
            BABELBUILDER
          </Link>
          <Link href="/onda" className={`hover:text-gray-400 no-underline${pathname === "/onda" ? " text-gray-400" : ""}`}>
            ONDA
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex fixed top-0 left-0 p-3 z-50">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="text-white" size={24} />
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <X className="text-white" size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6 text-white tracking-widest">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-2xl no-underline${pathname === "/" ? " text-gray-400" : " hover:text-gray-400"}`}
            >
              HOME
            </Link>
            <Link
              href="/zenterest"
              onClick={() => setIsOpen(false)}
              className={`text-2xl no-underline${pathname === "/zenterest" ? " text-gray-400" : " hover:text-gray-400"}`}
            >
              ZENTEREST
            </Link>
            <Link
              href="/babelbuilder"
              onClick={() => setIsOpen(false)}
              className={`text-2xl no-underline${pathname === "/babelbuilder" ? " text-gray-400" : " hover:text-gray-400"}`}
            >
              BABELBUILDER
            </Link>
            <Link
              href="/onda"
              onClick={() => setIsOpen(false)}
              className={`text-2xl no-underline${pathname === "/onda" ? " text-gray-400" : " hover:text-gray-400"}`}
            >
              ONDA
            </Link>
            <Link
              href="/resume"
              onClick={() => setIsOpen(false)}
              className={`text-2xl no-underline${pathname === "/resume" ? " text-gray-400" : " hover:text-gray-400"}`}
            >
              RESUME
            </Link>
            <div className="flex flex-col items-center space-y-4 mt-8">
              <Link
                href="https://github.com/colewendling"
                target="_blank"
                className="flex items-center space-x-2 no-underline hover:text-gray-400"
              >
                <div className="bg-white rounded-full p-1">
                  <Github className="text-black" size={18} />
                </div>
                <span>GITHUB</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/colewendling/"
                target="_blank"
                className="flex items-center space-x-2 no-underline hover:text-gray-400"
              >
                <div className="bg-white rounded-lg p-1">
                  <Linkedin className="text-black" size={18} />
                </div>
                <span>LINKEDIN</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
