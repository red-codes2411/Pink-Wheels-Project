import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#FFD1DC',
        'hot-pink': '#FF69B4',
        'soft-white': '#FFFDFD',
      },
    },
  },
  plugins: [],
};
export default config;