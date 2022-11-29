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
        dashboard: "200px auto 300px",
      },
      gridTemplateRows: {
        dashboard: "1fr",
      },
      colors: {
        "theme-bg": "#131127",
        "theme-primary": "#f056c8",
        "theme-primary-opaque": "#f056c71a",
        "theme-accent": "#88ced3",
        "theme-accent-opaque": "#88ced309",
        "theme-body": "#cbd5e1",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
