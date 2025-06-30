// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Here we define our custom color palette
      colors: {
        'text': '#2a2a2a',        // Main text color
        'background': '#fdfcf9', // Main background color
        'primary': '#008080',    // For buttons and key elements (Dark Teal)
        'secondary': '#e6f2f2',  // Lighter shade for secondary elements
        'accent': '#d4a373',      // For special highlights (Warm Ochre)
        'subtle': '#f0f0f0',      // For borders and light backgrounds
      },
    },
  },
  plugins: [],
};
export default config;