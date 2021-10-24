module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0d5474',
        secondary: '#FAA21B'
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}