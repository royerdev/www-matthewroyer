import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Myriad Pro', 'Calibri', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f5f8fa',
          100: '#eaeff4',
          200: '#d0dde7',
          300: '#a6c1d3',
          400: '#769fba',
          500: '#5483a3',
          600: '#416a88',
          700: '#36556e',
          800: '#2f495d',
          900: '#2b3f4f',
          950: '#243341',
          DEFAULT: '#243341',
        },
        accent: '#c8b293',
      },
    },
    letterSpacing: {
      'tighter': '-0.05em',
      'tight': '0em',
      'normal': '0.1em',
      'wide': '0.15em',
      'wider': '0.5em',
      'widest': '0.75em',
    },
  },
  darkMode: 'class',
}
