/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#08162D",
        royal: "#0055FF",
        bright: "#00B4FF",
      },
    },
  },
  plugins: [],
};

export default config;
