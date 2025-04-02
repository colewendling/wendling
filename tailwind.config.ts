import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        background: "#ffffff",
      },
      fontFamily: {
        abcMono: ["var(--font-ABCFavoritMono)", "sans-serif"],
        optician: ["var(--font-OpticianSans)", "sans-serif"],
        robotoMono: ["var(--font-RobotoMono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
