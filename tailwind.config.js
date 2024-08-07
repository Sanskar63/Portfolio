/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo-black': ['"Archivo Black"', 'sans-serif'],
      },
      fontWeight: {
        'thin': 100,
        'normal': 400,
        'bold': 700,
        'extrabold': 900,
      },
    },
  },
  plugins: [],
}

