/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 4px 10px 0px #0000001A",
        nav: "0px 4px 24px 0px #18292F1A",
      },
      dropShadow: {
        "custom-dropshadow-1": "0 4px 24px #18292F1A",
        "custom-dropshadow-2": "0px 4px 4px #00000040",
        "custom-dropshadow-3":
          "0px 3.8947367668151855px 9.736842155456543px #00000026",
      },
      backgroundImage: {
        // "home-sec-1": "url(./src/assets/images/customer/home-sec-1.png)",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1201px",
        "2xl": "1401px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        blue: "#0A1828",
        green: "#178582",
        "green-2": "#1785821A",
        light: "#F8F8F8",
        gold: "#BFA181",
        inactive: "#48525B",
        // gray: "#6E6B7B",
        "gray-2": "#E9EAF0B2",
        "gray-3": "#A1A5B7",
        purple: "#7367F0",
        "purple-2": "#7367F01F",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
