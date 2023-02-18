/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'smm': { 'max': '500px' },
      'lmm': { 'max': '1000px' },
      'gmm': { 'max': '600px' },
      'lsm': '1000px',
      'ssm':'500px',
      'mmm': {'max': '700px'}
    },
    extend: {},
  },
  plugins: [],
}
