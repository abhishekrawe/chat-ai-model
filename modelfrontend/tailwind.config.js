/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      figtree: ["Figtree"],
      nunito: ["Nunito"],
      montserrat: ["Montserrat"],
      lato: ["Lato"],
    },
    colors: {
      white: {
        10: "rgb(250, 250, 251)",
        20: "rgba(255, 255, 255, 1)",
        30: "rgb(245, 245, 245)",
        40: "rgba(235, 235, 235, 1)",
        50: "rgba(242, 242, 242, 1)",
      },
      blue: {
        10: "rgba(96, 91, 255, 1)",
        20: "rgba(91, 147, 255, 1)",
        30: "rgb(3, 2, 41)",
      },
      black: {
        10: "rgba(35, 31, 32, 1)",
      },
      gray: {
        text: "rgba(154, 154, 169, 1)",
        lighttext: "rgba(153, 156, 160, 1)",
        dashed: "rgba(235, 235, 235, 1)",
        lightbulma: "var(--Light-Bulma, #231F20)",
        drop: "rgba(213, 216, 221, 1)",
        signin: "rgba(248, 250, 255, 1)",
        signintext: "rgba(rgba(133, 133, 133, 1)",
      },
      red: {
        remove: "rgba(211, 48, 48, 1)",
      },
      navbar: {
        secondary: "rgba(30, 38, 64, 1)",
        100: "rgba(255, 255, 255, 0.1)",
        200: "rgba(53, 60, 83, 1)",
      },
    },
    extend: {
      screens: {
        tablet: "960px",
        desktop: "1248px",
      },
      width: {
        "1/4": "22%",
      },
      backgroundColor: {
        "light-gohan": "var(--Light-Gohan, #FFF)",
      },
    },
  },
  plugins: [],
};
