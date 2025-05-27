/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotateAndScale: "rotateAndScale 0.5s ease-out forwards", // Dönme ve büyüme animasyonu
      },
      keyframes: {
        rotateAndScale: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "rotate(360deg) scale(1.25)" },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
