/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#141414", card: "#1f1f1f", brand: "#c8102e", mute: "#9a9a9a" },
      fontFamily: {
        logo: ['"Bebas Neue"', "Impact", '"Arial Narrow"', "sans-serif"],
        sans: ['"Segoe UI"', "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: { splash: { "0%": { opacity: "0", transform: "scale(.9)" }, "35%": { opacity: "1", transform: "scale(1)" }, "100%": { opacity: "1", transform: "scale(1.08)" } } },
      animation: { splash: "splash 2.2s ease forwards" },
    },
  },
  plugins: [],
};
