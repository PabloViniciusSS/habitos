/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A' 
      },
      gridTemplateRows: {
        7: 'repeat(7, mimmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
