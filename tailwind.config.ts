import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
  mode: 'jit',
  purge: ['./src/**/*.{js,sjx,ts,tsx}', './public/index.html'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'og-gray-100': '#858585',
        'og-gray-200': '#525252',
        'og-bg': '#141414',
        'og-text': '#E2E1D6',
        'og-blured-black': 'rgba(50, 50, 50, .2)',
      },
      screens: {
        '2xl': '1921px',
      },
      backgroundImage: {
        grain:
          'url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png)',
      },
      transitionProperty: {
        cursor: 'height, width, opacity',
      },
      animation: {
        slowSpin: 'spin 5s linear infinite',
        aurora: 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-buttonUnderline': {
          '&:after': {
            content: '""',
            backgroundColor: '#FFFEF2',
            height: '2px',
            position: 'absolute',
            width: '0%',
            left: '0px',
            bottom: '-5px',
            transitionDuration: '300ms',
            letterSpacing: '1px',
          },
          '&:hover::after': {
            width: '100%',
          },
        },
        '.animation-contactUnderline': {
          '&:after': {
            content: '""',
            backgroundColor: '#FFFEF2',
            height: '5px',
            position: 'absolute',
            width: '0%',
            left: '0px',
            bottom: '-30px',
            transitionDuration: '700ms',
            letterSpacing: '1px',
          },
          '&:hover::after': {
            width: '100%',
          },
        },
      })
    }),
    addVariablesForColors,
  ],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
export default config
