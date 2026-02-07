import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef7ee",
          100: "#fdedd6",
          200: "#f9d7ad",
          300: "#f4b978",
          400: "#ee9242",
          500: "#ea751f",
          600: "#db5b15",
          700: "#b54413",
          800: "#903617",
          900: "#742f16",
          950: "#3f1509",
        },
        accent: {
          gold: "#D4A853",
          earth: "#8B6914",
          warm: "#C17F3A",
        },
        dark: {
          900: "#0a0a0b",
          800: "#121214",
          700: "#1a1a1d",
          600: "#252528",
          500: "#3a3a3f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "mesh-gradient": "radial-gradient(at 40% 20%, hsla(28,100%,74%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(43,70%,50%,0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(30,100%,60%,0.08) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
