/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
    },
    extend: {
      colors: {
        whiteColor: "var(--whiteColor)",
        black_363738: "var(--black_363738)",
        whitesmoke_F5F5F5: "var(--whitesmoke_F5F5F5)",
        redOrange_FEFAF1: "var(--redOrange_FEFAF1)",
        Snow_text1: "var(--Snow_text1)",
        blackfull: "var(--blackfull)",
        red_DB4444: "var(--red_DB4444)",
        green_00FF66: "var(--green_00FF66)",
        SoftRed_E07575: "var(--SoftRed_E07575)",
        SoftBlue_A0BCE0: "var(--SoftBlue_A0BCE0)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans - serif"],
      poppins: ["Poppins", "sans - serif"],
    },
  },
  plugins: [],
};
