/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#737BAE",
        primaryBackground: "#14172B",
        primaryLight: "#ECF0FF",
      },
      backgroundImage: {
        card: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)",
        cardIcon:
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)",
      },
    },
  },
  plugins: [],
};
