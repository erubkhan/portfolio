/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          ink: {
            50: "#f7f7f8",
            100: "#eeeef0",
            200: "#dcdde2",
            300: "#b9bbc7",
            400: "#8a8ea3",
            500: "#5b5f7f",
            600: "#3b3e5b",
            700: "#2e3049",
            800: "#23243a",
            900: "#1b1c2e"
          }
        },
        boxShadow: {
          soft: "0 10px 30px rgba(0,0,0,0.1)",
        }
      },
    },
  plugins: [],
} 

