/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-gold": "#AE8625",
        "light-gold": "#F7EF8A",
      },
      backgroundImage: (theme) => ({
        home: "url(/public/bghome.jpeg)",
      }),
    },
  },
  plugins: [],
}
