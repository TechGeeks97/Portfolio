/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use class-based dark mode instead of media query to prevent iPhone system dark mode from affecting the site
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if using App Router

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
      boxShadow: {
        black: "4px 4px 20px rgba(0,0,0,0.5)",
        white: "4px 4px 20px rgba(255,255,255,0.5)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
