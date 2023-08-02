/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(200px, 1fr))",
      },
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
        theme: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
    require("@tailwindcss/container-queries"), // require("@tailwindcss/typography"),
  ],
};
