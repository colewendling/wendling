// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import type { ReactNode } from "react";
import { abcFavoritMono, opticianSans, robotoMono } from "@/lib/fonts";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/NavBar";

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
      <body className="flex flex-col min-h-screen">
        <div className="relative flex-1 min-h-screen">
          <main className="absolute inset-0 overflow-auto">{children}</main>
          <div className="absolute inset-x-0 top-0 w-[20%] h-[100%]">
            <Navbar />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
