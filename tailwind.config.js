module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#151F35',
          200: '#141F37',
        },
        'pale': {
          100: '#939393'
        },
        'read': {
          100: '#D1D1D1'
        }
      },
      fontFamily: {
        "nunito": ["Nunito", "sans-serif"],
        "display": ["Inconsolata", "monospace"]
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/static/blob.svg')",
      })
    },
  },
  plugins: [],
}
