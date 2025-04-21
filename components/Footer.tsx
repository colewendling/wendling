// components/Footer.tsx

import React from "react";
import { Mail, Github, Linkedin, FileText, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-primary text-white px-10 py-20">
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-12 py-4 md:gap-6">
        {/* Logo and Site Name */}
        <div className="flex items-center justify-center">
          <img
            src="/logos/logo-white.svg"
            alt="Texas Waterway Logo"
            className="size-20"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-lg font-bold mb-3">Developer</h3>
          <span>cole wendling</span>
          <a href="mailto:cole@wendling.io" className="flex items-center gap-2 text-sm hover:underline">
            <Mail className="size-5" />
            cole@wendling.io
          </a>
          <a href="tel:+19403935061" className="flex items-center gap-2 text-sm hover:underline">
            +1-940-393-5061
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-lg font-bold mb-3">Links</h3>
          <div className="flex flex-row gap-3 lg:gap-6">
            <a
              href="https://github.com/colewendling"
              className="flex items-center justify-center bg-white p-1 rounded-full hover:bg-slate-300 shadow-md shadow-black/50 size-8"
            >
              <Github className="size-5 text-slate-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/colewendling/"
              className="flex items-center justify-center bg-white p-1 rounded-full hover:bg-slate-300 shadow-md shadow-black/50 size-8"
            >
              <Linkedin className="size-5 text-slate-600" />
            </a>
            <a href="https://wendling.io/" className="flex items-center justify-center bg-white p-1 rounded-full hover:bg-slate-300 shadow-md shadow-black/50 size-8">
              <Globe className="size-5 text-slate-600" />
            </a>
            <a href="https://wendling.io/Resume" className="flex items-center justify-center bg-white p-1 rounded-full hover:bg-slate-300 shadow-md shadow-black/50 size-8">
              <FileText className="size-5 text-slate-600" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-lg font-bold mb-3">Connect</h3>
          <a href="mailto:cole@wendling.io" className="flex items-center gap-2 text-sm hover:underline">
            <Mail className="size-5" />
            Contact Me
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-10">
        Texas Waterway &copy; 2024 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
