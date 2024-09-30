import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#F2F4F7',
        'gray-600': '#475467'
      },
      maxWidth: {
        'container': '77.5rem'
      }
    },
  },
  plugins: [],
};
export default config;
