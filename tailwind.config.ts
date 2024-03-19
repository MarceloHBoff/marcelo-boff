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
        orange: {
          50: "#F6874733",
          100: "#F68747",
          500: "#FF7324",
          900: "#F15800",
        },
      },
      rotate: {
        "360": "360deg",
      },
    },
  },
  plugins: [],
};
export default config;
