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
        darkBlue3: "#0C294C",
      },
      width: {
        iconeHomeBlock: "60px",
      },
      height: {
        homeKeyBlock: "650px",
        iconeHomeBlock: "60px",
      },
      backgroundImage: {
        "home-key": "url('../images/homeKey.jpg')",
        "any-question": "url('../images/sammBGblue.png')",
        "blog-home": "url('../images/Mask_group.png')",
      },
      screens: {
        bllg: { max: "1023px" },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
