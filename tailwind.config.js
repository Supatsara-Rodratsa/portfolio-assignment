/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: { max: "425px" },
      tablet: { max: "768px" },
      laptop: { max: "1024px", min: "769px" },
      desktop: "1440px",
    },
    fontSize: {
      sm: "0.8rem", //14
      base: "1rem", //16
      xl: "1.25rem", //20
      "2xl": "1.563rem", //24
      "3xl": "1.953rem", //30
      "4xl": "2.441rem", //36
      "5xl": "3.052rem", //48
    },
  },
  plugins: [],
};
