module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      light: {
        textMain: '#ffffff',
        textSecondary: '#EBEBEB',
        backgroundMain: '#252525',
        backgroundSecondary: '#343434'
      },
      dark: {
        textMain: '#ffffff',
        textSecondary: '#EBEBEB',
        backgroundMain: '#252525',
        backgroundSecondary: '#343434'
      },
      accentMain: '#9F00EA',
      accentSecondary: '#FA1DFF',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
