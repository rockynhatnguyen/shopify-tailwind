module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/**/*.liquid",
    "./**/*.{liquid,json}"
  ],
  theme: {
    extend: {
      colors: {
        'blush': '#F4EDE5',
      },
    },
    fontFamily: {
      'platform': ["'Platform'"],
      'display': ["'GT Super Display'"],
      'super': ["'GT Super Text'"],
      'sugar': ["'Sugar and Spice'"],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '5rem',
      '10xl': '9rem',
      'super': '10rem',
    },
    letterSpacing: {
      widest: '.25em',
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [],
}
