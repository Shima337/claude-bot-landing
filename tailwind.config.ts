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
        primary: "#6366f1",
        accent: "#f59e0b",
      },
fontFamily: {
      sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
      display: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
    },
    },
  },
  plugins: [],
};

export default config;
