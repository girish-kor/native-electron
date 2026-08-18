/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './native/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
