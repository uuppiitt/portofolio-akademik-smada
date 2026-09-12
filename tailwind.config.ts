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
          950: "#081A30",
          900: "#0B2545",
          800: "#123564",
          700: "#1B4B8A",
          600: "#2A63AA",
        },
        mist: {
          50: "#F7FAFD",
          100: "#EAF1FB",
          200: "#D6E4F5",
        },
        gold: {
          400: "#F2B705",
          500: "#E0A800",
          600: "#B98600",
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
