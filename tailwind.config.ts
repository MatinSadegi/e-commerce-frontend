import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#f97316",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0, 1, 1, 0)",
      },
      keyframes: {
        one: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        two: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(24px,0)" },
        },
        three: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },

  plugins: [require("tailwindcss"), require("autoprefixer")],
};
export default config;
