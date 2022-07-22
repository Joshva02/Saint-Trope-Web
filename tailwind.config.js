/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    extend: {
      colors: {
        "dark-gold": "#AE8625",
        "light-gold": "#F7EF8A",
      },
      backgroundImage: (theme) => ({
        home: "url(/public/bghome.jpeg)",
        wood: "url(/public/woodbg.jpeg)",
      }),
    },
  },
  plugins: [],
}
