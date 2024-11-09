/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        mainbg: "#EDE8DC",
      },
      colors: {
        main: "#E7CCCC",
        mainlight: "#EDE8DC",
        maindark: "#C1CFA1",
        maindarker: "#A5B68D",
      },
      fontFamily: {
        noto: ['Noto Serif', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
    },
  },
  plugins: [],
  }
};
