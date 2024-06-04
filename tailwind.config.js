const plugin = require('tailwindcss/plugin')
const { newUtilities } = require('./src/utils/custom-typography')

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      dark: {
        200:'#080808',
        400: '#111111'
      },
      active: '#929292',
      gray: "#999",
      yellow: '#cd8f5c'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Catamaran', 'sans-serif'],
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      xl: '1.25rem',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '36px',
      "5xl": "48px",
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      addUtilities(newUtilities({ theme }))
    })
  ],
};
