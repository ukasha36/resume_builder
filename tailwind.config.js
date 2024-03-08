/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "-5px 5px 10px 0px #31313138",
        "custom-inset": "inset -5px 5px 10px 0px #31313138",
      },
      borderWidth: {
        sm: "0.5px",
      },
      screens: {
        "screen-620": "620px",
      },
      colors: {
        primary: "#ff2391",
      },
    },
  },
  plugins: [],
};
