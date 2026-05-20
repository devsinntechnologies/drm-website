/** @type {import('tailwindcss').Config} */
import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.tsx',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#35A000', // green
        secondary: '#4C4C4C', // dark gray
        background: '#ffffff', // white
        "section-bg": '#f9fafb', // light gray
      },
    },
  },
  plugins: [],
};

export default config;
