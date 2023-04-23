const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.green,
      },
    },
  },
  variants: {
  },
  plugins: [],
}
