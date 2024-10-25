/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        mainbg: "#FFCF9D",
      },
      colors: {
        main: "#FFB38E",
        mainlight: "#FFCF9D",
        maindark: "#FFB26F",
        maindarker: "#DE8F5F",
      },
    },
  },
  plugins: [],
};
