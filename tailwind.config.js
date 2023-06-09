/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          350: "#c4dd2a",
          550: "#b6cc2b",
        },
        emerald: {
          850: "#29413b",
        },
        rose: {
          30: "#faf8f4",
        },
      },
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      transitionTimingFunction: {
        x: "cubic-bezier(0.25, 0.09, 0.52, 1)",
      },
    },
  },
  plugins: [],
};
