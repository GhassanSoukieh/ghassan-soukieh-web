import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2160px',
        'test': '1600px', // Add a test breakpoint
      },
    },
  },
  plugins: [],
};

export default config;
