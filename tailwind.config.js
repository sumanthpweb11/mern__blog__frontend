/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#98D8AA",
        dark: {
          hard: "#2A2F4F",
          light: "#B7B7B7",
          soft: "#917FB3",
        },
      },
      fontFamily: {
        openSans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
