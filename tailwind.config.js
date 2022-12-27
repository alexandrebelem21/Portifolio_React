/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js, svg}'],
  theme: {
    extend: {
      fontFamily: {
        webserver: ['Webserver'],
        blacks: ['Archivo Black'],
        graduate: ['Graduate'],
        righteous: ['Righteous'],
      },
    },
  },
  plugins: [],
};
