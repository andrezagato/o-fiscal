/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.cljs",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        andre: '#3B82F6',
        bianca: '#EC4899',
        fernanda: '#14B8A6',
        bruna: '#F97316',
      }
    },
  },
  plugins: [],
}