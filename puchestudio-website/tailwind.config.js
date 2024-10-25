/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1487DA",
          "secondary": "#FDFCFE",
          "accent": "000000",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
