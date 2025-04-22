// lib/fonts.ts
import localFont from "next/font/local";

export const abcFavoritMono = localFont({
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

export const opticianSans = localFont({
  src: "../public/fonts/Optician-Sans.otf",
  variable: "--font-OpticianSans",
  display: "swap",
});

export const robotoMono = localFont({
  src: "../public/fonts/RobotoMono-VariableFont_wght.ttf",
  variable: "--font-RobotoMono",
  display: "swap",
});
