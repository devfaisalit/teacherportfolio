/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      skew: {
        '17': '17deg',
        '25': '25deg',
      },
      fontFamily: {
        'Poppins': ['Poppins','sans-serif'],
        'Foldit':['Foldit','sans-serif']
      },
      letterSpacing: {
        '6%': '.1rem',
      }
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
}

