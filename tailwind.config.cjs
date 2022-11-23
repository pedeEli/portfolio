const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        'vw': '100vw'
      },
      height: {
        'vw': '100vw'
      },
      backgroundImage: {
        'pan-gradient': `linear-gradient(to right, ${colors.indigo[700]}, ${colors.purple[700]}, ${colors.purple[700]}, ${colors.indigo[700]})`
      }
    },
  },
  plugins: [],
}
