import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#08090A",
          900: "#101312",
          800: "#1A211D",
          700: "#242E29",
          600: "#33443B",
        },
        mist: {
          50: "#F5FCFA",
          100: "#E9F4F0",
          200: "#D3E9E3",
        },
        gold: {
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
        },
        ink: {
          900: "#12181F",
          700: "#1C2530",
          500: "#4B5563",
          300: "#9AA5B1",
        },
      },
      fontFamily: {
        display: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
