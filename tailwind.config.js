/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if using App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // if using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        OutFit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
    },
  },
  plugins: [],
};
