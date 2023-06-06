/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
        tsukimi: ['tsukimi rounded', 'sans-serif'],
        sunShine: ['Sunshiney', 'sans-serif']

      }
    },
  },
  plugins: [],
}

