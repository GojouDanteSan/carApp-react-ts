/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#FFFFFF", // Colour : white
        "gray-100": "#DFCCCC",
        "black": "#000000", // Colour : Black
        "primary-100": "#B4B4B4", // Colour : Light grey
        "primary-300": "#FFA6A3",
        "primary-500": "#E80000", // Colour : Dark red
        "Light-red": "#F73920", // Colour : Dark red
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        stripes: "url('./assets for cars/Stripes.png')",
        treads: "url('./assets for cars/Treads.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
