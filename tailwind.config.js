/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width:{
      xl:'482px'
    },


    boxShadow:{
      sq:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.10) 0px 2px 6px 2px'
    },
    extend: {},
  },
  plugins: [],
}

