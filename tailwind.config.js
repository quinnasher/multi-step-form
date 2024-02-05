/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ], theme: {

    fontFamily: {
      sans: ["Ubuntu, Arial"]
    },

    color: {
      pMarineBlue: "hsl(213, 96%, 18%)",
      pPurplishBlue: "hsl(243, 100%, 62%)",
      pPastelBlue: "hsl(228, 100%, 84%)",
      pLightBlue: "hsl(206, 94%, 87%)",
      pStrawBerry: "hsl(354, 84%, 57%)",
      nCoolGray: "hsl(231, 11%, 63%)",
      nLightGray: "hsl(229, 24%, 87%)",
      nMagnolia: "hsl(217, 100%, 97%)",
      nAlabaster: "hsl(231, 100%, 99%)",
      nWhite: "hsl(0, 0%, 100%)"
    },
    extend: {
      width: {
        375: "375px",
        1200: "1200px",
        1440: "1440px"
      }


    }
  },
  plugins: []
};

