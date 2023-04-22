const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.neutral,
        secondary: colors.neutral,
      },
    },
  },
  variants: {
  },
  plugins: [],
}
