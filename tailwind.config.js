/** @type {import('tailwindcss').Config} */
export default {
  // This line is the most important for your toggle!
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}