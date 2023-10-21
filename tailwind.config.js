/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        primary_hover: "#4338ca",
        light: "#ffffff",
        dark: "#1e293b",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
