/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#4338ca",
        light: "#ffffff",
        dark: "#1e293b",
        font: "#334155",
        icon: "#475569",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
