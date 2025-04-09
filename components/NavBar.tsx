"use client";

import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex flex-col fixed top-0 left-0 backdrop-blur-md bg-black bg-opacity-20 border-r border-gray-700 py-8 px-4 justify-between h-screen w-[20%] z-50 items-end">
        <div className="text-right">
          <Link href="/" className="text-2xl font-optician font-semibold no-underline hover:text-gray-400 leading-tight">COLE WENDLING</Link>
          <p className="mt-2 text-sm tracking-widest">FULLSTACK SOFTWARE ENGINEER</p>

          <div className="mt-10 border-t border-b border-white py-4 text-xs tracking-tight">
            <p className="text-xs">Ruby | JavaScript | React</p>
            <p className="text-xs">Redux | SQL | MongoDB</p>
            <p className="text-xs">Mongoose | Express | Node.js</p>
            <p className="text-xs">Rails | HTML | CSS</p>
          </div>
        </div>
        <div className="flex flex-col items-end mb-6">
          <Link
            href="https://github.com/colewendling"
            target="_blank"
            className="mb-4"
          >
            <div className="bg-white rounded-full p-1">
              <Github className="text-black" size={18} />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/colewendling/"
            target="_blank"
            className="mb-4"
          >
            <div className="bg-white rounded-lg p-1">
              <Linkedin className="text-black" size={18} />
            </div>
          </Link>
          <Link
            href="/resume"
            className="hover:text-gray-400 mb-4 no-underline text-sm tracking-widest"
          >
            RESUME
          </Link>
        </div>
        <div className="flex flex-col items-end space-y-3 text-sm tracking-widest">
          <Link href="/zenterest" className="hover:text-gray-400 no-underline">
            ZENTEREST
          </Link>
          <Link
            href="/babelbuilder"
            className="hover:text-gray-400 no-underline"
          >
            BABELBUILDER
          </Link>
          <Link href="/onda" className="hover:text-gray-400 no-underline">
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
            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl no-underline hover:text-gray-400">
              HOME
            </Link>
            <Link href="/zenterest" onClick={() => setIsOpen(false)} className="text-2xl no-underline hover:text-gray-400">
              ZENTEREST
            </Link>
            <Link href="/babelbuilder" onClick={() => setIsOpen(false)} className="text-2xl no-underline hover:text-gray-400">
              BABELBUILDER
            </Link>
            <Link href="/onda" onClick={() => setIsOpen(false)} className="text-2xl no-underline hover:text-gray-400">
              ONDA
            </Link>
            <Link href="/resume" onClick={() => setIsOpen(false)} className="text-2xl no-underline hover:text-gray-400">
              RESUME
            </Link>
            <div className="flex flex-col items-center space-y-4 mt-8">
              <Link href="https://github.com/colewendling" target="_blank" className="flex items-center space-x-2 no-underline hover:text-gray-400">
                <div className="bg-white rounded-full p-1">
                  <Github className="text-black" size={18} />
                </div>
                <span>GITHUB</span>
              </Link>
              <Link href="https://www.linkedin.com/in/colewendling/" target="_blank" className="flex items-center space-x-2 no-underline hover:text-gray-400">
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
