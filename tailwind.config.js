/** @type {import('tailwindcss').Config} */
/* eslint-env node */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
