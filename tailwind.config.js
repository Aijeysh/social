/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'smm': { 'max': '500px' },
      'lmm': { 'max': '1000px' },
      'gmm': { 'max': '600px'}
    },
    extend: {},
  },
  plugins: [],
}
