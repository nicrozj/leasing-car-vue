import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{vue,ts}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        nekst: "Nekst"
      },
      colors: {
        primary: {
          100: "#FFA83D",
          200: "#FF9514",
        },
        accent: "#111111",
        smoke: {
          100: "#F3F3F4",
          200: "#EAEAEB",
          300: "#575757",
        },
        error: "#D53234"
      }
    },
  },
  plugins: [],
} satisfies Config;
