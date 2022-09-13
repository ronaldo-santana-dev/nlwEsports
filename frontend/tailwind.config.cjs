/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      backgroundImage: {
        galaxy: "url('./Fundo.png')"
      },
    },
  },
  plugins: [],
}
