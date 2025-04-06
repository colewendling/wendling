"use client";
import { useState } from "react";
import { Menu as MenuIcon, X as CloseIcon, Github, Linkedin } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Mobile top bar with hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-800 text-white">
        <span className="font-optician text-xl">MySite</span>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Sidebar nav (hidden on mobile unless open) */}
      <aside
        className={
          `fixed inset-0 md:inset-y-0 md:left-0 z-20 w-full md:w-4/5 md:max-w-xs bg-black/10 backdrop-blur-md text-white h-full transform ` +
          `transition-transform duration-200 ease-in-out ` +
          `${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:col-span-1`
        }
      >
        <nav className="flex flex-col justify-between items-end h-full p-6 font-optician">
          <div className="space-y-2 text-right w-full">
            <h1 className="text-2xl uppercase">COLE WENDLING</h1>
            <h2 className="text-sm uppercase">FULLSTACK SOFTWARE ENGINEER</h2>
            <hr className="border-t border-white w-full" />
            <div className="text-xs leading-snug space-y-1">
              <p>Ruby | JavaScript | React</p>
              <p>Redux | SQL | MongoDB</p>
              <p>Mongoose | Express | Node.js</p>
              <p>Rails | HTML | CSS</p>
            </div>
            <hr className="border-t border-white w-full" />
          </div>
          <div className="space-y-4">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-800 p-2 rounded flex items-center">
              <Github className="mr-2"/> GitHub
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-800 p-2 rounded flex items-center">
              <Linkedin className="mr-2"/> LinkedIn
            </a>
            <a href="/resume" className="block hover:bg-gray-800 p-2 rounded">
              Resume
            </a>
          </div>
          <div className="space-y-4">
            <a href="/zenterest" className="block hover:bg-gray-800 p-2 rounded">ZENTEREST</a>
            <a href="/pantrypal" className="block hover:bg-gray-800 p-2 rounded">PANTRYPAL</a>
            <a href="/onda" className="block hover:bg-gray-800 p-2 rounded">ONDA</a>
            <a href="/babelbuilder" className="block hover:bg-gray-800 p-2 rounded">BABELBUILDER</a>
          </div>
        </nav>
      </aside>
    </>
  );
}
