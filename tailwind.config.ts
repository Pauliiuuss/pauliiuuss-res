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
      belekas: {
        buttonUnderlineAnimation:
          'after:content-[""] after:h-[10px] after:absolute after:w-[0%] after:left-0 after:-bottom-[5px] after:duration-300 after:tracking-[1px] hover:after:w-[100%]',
      },
      colors: {
        'og-gray-100': '#DADADA',
        'og-gray-200': '#CCCCCC',
        'og-gray-300': '#A3A3A3',
        'og-gray-400': '#858585',
        'og-gray-500': '#525252',
        'og-gray-999': '#0A0A0A',
        'og-green-100': '#165048',
        'og-green-200': '#12403A',
        'og-green-300': '#0D302B',
        'og-green-400': '#09201D',
        'og-green-500': '#04100E',
        'og-bg': '#141414',
        'og-text': '#E2E1D6',
        'og-border-faded': 'rgba(226, 225, 214, .3)',
        'og-text-hover': '#D5D3C3',
        'og-blured-black': 'rgba(50, 50, 50, .2)',
        'og-blured-dark': 'rgba(100, 100, 100, .1)',
        'og-blured-darkk': 'rgba(120, 120, 120, .7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        grain:
          'url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png)',
        grad: "url('/grad.svg')",
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
