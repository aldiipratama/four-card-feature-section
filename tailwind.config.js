/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
      padding: "5rem",
    },
    extend: {
      colors: {
        red: "#ea5353",
        cyan: "#45d3d3",
        orange: "#fcaf4a",
        blue: "#549ef2",
      },
      fontFamily: {
        poppins: "'Poppins'",
      },
    },
  },
  plugins: [require("daisyui")],
};
