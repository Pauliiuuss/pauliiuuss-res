import type { Config } from 'tailwindcss'

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
        'og-gray-100': '#DADADA',
        'og-gray-200': '#CCCCCC',
        'og-gray-300': '#A3A3A3',
        'og-gray-400': '#858585',
        'og-gray-500': '#525252',
        'og-gray-600': '#3D3D3D',
        'og-gray-700': '#292929',
        'og-black': '#141414',
        'og-red-100': '#CA6868',
        'og-red-200': '#BF4A4A',
        'og-red-300': '#A43939',
        'og-red-400': '#883030',
        'og-red-500': '#6A2525',
        'og-green-100': '#6CDAA5',
        'og-green-200': '#4BD291',
        'og-green-300': '#31C47D',
        'og-green-400': '#1D754A',
        'og-green-500': '#18623E',
        'og-background': '#FFFEF2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        grain:
          'url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png)',
        curves: "url('/curves.svg')",
      },
      transitionProperty: {
        cursor: 'height, width, opacity',
      },
    },
  },
  plugins: [],
}
export default config
