module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          light: 'hsl(6, 100%, 80%)',
          dark: 'hsl(335, 100%, 65%)',
        },
        blue: {
          pale: 'hsl(243, 100%, 93%)',
          grayish: 'hsl(229, 7%, 55%)',
          dark: 'hsl(228, 56%, 26%)',
          'very-dark': 'hsl(229, 57%, 11%)',
        },
      },
      fontFamily: {
        raleway: 'Raleway, sans-serif',
      },
      backgroundImage: {
        'desktop': "url('./images/bg-desktop.png')",
        'mobile': "url('./images/bg-mobile.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
