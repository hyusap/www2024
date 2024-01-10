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
        primary: "#A788AF",
        secondary: "#572381",
        accent: "#F2E94E",
        dark: "#2F0A28",
        light: "#F2FDFF",
        lightPurple: "#DBCBD8",
        lightBlue: "#B9B5CB",
        lightNavy: "#90A2BB",
      },
      fontFamily: {
        display: ["var(--font-cakra)"],
      },
    },
    plugins: [],
  },
};
export default config;
