// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'text': '#2a2a2a',
      'background': '#fdfcf9',
      'primary': '#008080',
      'secondary': '#e6f2f2',
      'accent': '#d4a373',
      'subtle': '#f0f0f0',
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
    },
  },
  plugins: [],
};
export default config;