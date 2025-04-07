// app/layout.tsx
import "../styles/globals.css";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import NavBar from "../components/NavBar";

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

export const metadata = {
  title: "Wendling",
  description: "…",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${abcFavoritMono.variable} ${opticianSans.variable} ${robotoMono.variable}`}
    >
      <body>
        <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
          {/* Sidebar/nav */}
          <div className="md:col-span-1">
            <NavBar />
          </div>
          {/* Main content */}
          <main className="md:col-span-4 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
