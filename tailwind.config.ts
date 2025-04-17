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
        orange: "#ff4400",
        cyan: "rgb(0,255,214)",
        ruby: "rgb(230,0,35)",
        grey: "rgb(188,188,188)",
      },
      fontFamily: {
        abcMono: ["var(--font-ABCFavoritMono)", "sans-serif"],
        optician: ["var(--font-OpticianSans)", "sans-serif"],
        robotoMono: ["var(--font-RobotoMono)", "monospace"],
      },
      boxShadow: {
        thumbnails: "20px 20px 50px rgba(0, 0, 0, 0.83), -20px -20px 60px rgba(110, 110, 110, 0)",
      },
      backgroundColor: {
        "thumbnails-bgcolor": "rgba(0, 0, 0, 0.87)",
      },
    },
  },
  plugins: [],
};

export default config;
