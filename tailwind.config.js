/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1D1D1D",
        white: "#FFFFFF",
        greency: "#28F3C3",
        whitePro: "#F9F9F9",
      },
    },
  },
  plugins: [],
};

