import { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: "200px auto 300px",
      },
      gridTemplateRows: {
        dashboard: "1fr",
      },
      colors: {
        "theme-bg-secondary": "#16142d",
        "theme-bg": "#131127",
        "theme-primary": "#f056c8",
        "theme-primary-opaque": "#f056c71a",
        "theme-accent": "#88ced3",
        "theme-accent-opaque": "#88ced309",
        "theme-body": "#cbd5e1",
      },
      fontFamily: {
        theme: ["Ubuntu", "Inter", "sans-serif"],
        design: ["Merriweather", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
};

export default config;
