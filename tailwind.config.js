export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1400px',
        '4xl': '1720px',
      },
      colors: {
        "primary": "#535845",
        "secondary": "#7d562d",
        "outline": "#77786f",
        "outline-variant": "#c7c7bd",
        "on-primary": "#ffffff",
        "on-surface": "#1b1c1a",
        "on-surface-variant": "#464740",
        "surface-container-low": "#f5f3ef",
        "surface-container": "#efeeea",
        "surface-container-high": "#eae8e4",
        "surface-container-highest": "#e4e2de",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#ffca98",
      },
      fontFamily: {
        "headline": ["Newsreader", "serif"],
        "label": ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}