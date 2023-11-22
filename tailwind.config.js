module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#FC595A",
      secondary: "#F97071",
      black: "#363636",
      white: "#FFFFFF",
      gray: "#C4C4C4",
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
    extend: {
      fontFamily: {
        example: ["BakbakOne"],
      },
    },
  },
  plugins: [],
};
