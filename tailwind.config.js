/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        'my-red' : "#fb1909" 
      },
      gridTemplateRows:{
        'layout' : "auto 1fr auto"
      },
       backgroundColor:{
        "my-red":"#fb1909" 
      },
      boxShadow:{
        "3xl" : "0px 0px 7px 15px #ff00004d"
      },
      screens:{
        mobile:"480px"
      }
    },
  },
  plugins: [],
}
