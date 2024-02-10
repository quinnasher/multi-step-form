/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "Arial"]
      },

      backgroundImage: {
        desktopBgImg: "url(./src/assets/images/bg-sidebar-desktop.svg)",
        mobileBgImg: "url(./src/assets/images/bg-sidebar-mobile.svg)"
      },
      colors: {
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
      width: {
        375: "375px",
        1280: "1280px",
        1440: "1440px"
      },

      fontSize: {
        "1rem": "1rem"
      },
      height: {
        140: "36rem"
        // "80vh": "80vh"
      },

      minHeight: {
        "80vh": "80vh",
        140: "35rem"
      }
    }
  },
  plugins: []
};

