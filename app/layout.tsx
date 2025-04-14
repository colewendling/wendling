// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Navbar } from "@/components/NavBar";
import HomeBackground from "@/components/HomeBackground";

const abcFavoritMono = localFont({
  src: [
    {
      path: "../public/fonts/ABCFavoritMono-Book.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ABCFavoritMono",
  display: "swap",
});

const opticianSans = localFont({
  src: "../public/fonts/Optician-Sans.otf",
  variable: "--font-OpticianSans",
  display: "swap",
});

const robotoMono = localFont({
  src: "../public/fonts/RobotoMono-VariableFont_wght.ttf",
  variable: "--font-RobotoMono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cole Wendling - Fullstack Software Engineer",
  description: "Portfolio site for Cole Wendling.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${abcFavoritMono.variable} ${opticianSans.variable} ${robotoMono.variable}`}
    >
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        <HomeBackground />
        <Navbar />
        <main className="min-h-screen px-6 md:pl-[20%] md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
