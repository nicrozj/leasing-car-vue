import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{vue,ts}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-30deg, var(--tw-gradient-from) 50%, transparent 50%), linear-gradient(90deg, var(--tw-gradient-to) 50%, var(--tw-gradient-via) 50%)',
      },
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
