/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#C1D4E2",
        lightBlue2: "#003D71A1",
        darkBlue: "#06559D",
        darkBlue2: "#003D71",
      }
    }
  },
  plugins: [require("flowbite/plugin")],
};
