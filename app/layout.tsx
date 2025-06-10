// app/layout.tsx

import type { Metadata } from "next";
import "../styles/globals.css";
import type { ReactNode } from "react";
import { abcFavoritMono, opticianSans, robotoMono } from "@/lib/fonts";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/NavBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Cole Wendling",
  description:
    "Cole Wendling | Full Stack Software Engineer. Work samples & personal projects.",
  authors: [{ name: "Cole Wendling" }],
  openGraph: {
    title: "Cole Wendling",
    description:
      "Cole Wendling | Full Stack Software Engineer. Work samples & personal projects.",
    url: "https://wendling.io",
    images: [
      {
        url: "/meta/social-share.jpg",
        width: 1200,
        height: 600,
        alt: "Cole Wendling | Full Stack Software Engineer",
      },
    ],
    siteName: "Cole Wendling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cole Wendling",
    description:
      "Cole Wendling | Full Stack Software Engineer. Work samples & personal projects.",
    images: ["/meta/social-share.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${abcFavoritMono.variable} ${opticianSans.variable} ${robotoMono.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <div className="relative flex flex-1 min-h-0">
          <main className="flex flex-1 flex-col overflow-auto">{children}</main>
          <div className="absolute inset-x-0 top-0 w-[20%] h-[100%]">
            <Navbar />
          </div>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
