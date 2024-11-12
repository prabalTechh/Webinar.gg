/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue_700: '#01295C',
        blue_300:'#19406B',
        gray_300:'#7F93AC',
        green:'#50C7D7'
      }
    },
  },
  plugins: [],
}