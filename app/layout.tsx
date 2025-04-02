// app/layout.tsx
import "./globals.css";
import localFont from "next/font/local";
import type { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
}
