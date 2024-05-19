/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    extend: {},
    screens:{
      "mobile": "420px",
      "tablet":"765px",
      "desktop": "1026px"
    },
    fontFamily:{
      'lalezar': ['"lalezar"'],
      'iran': ['"iransans"']
    },
  },
  plugins: [],
}
