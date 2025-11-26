import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['bg-flow-gray', 'bg-white'],
  theme: {
    extend: {
      colors: {
        'stripe-navy': '#0a2540',
        'stripe-gray': '#727f96',
        'stripe-light-bg': '#f6f9fb',
        'stripe-purple': '#635bff',
        'flow-gray': '#D0D8E0',
        'dark-gray': 'rgb(66, 84, 102)',
        'mid-gray': '#68748a',
        'pale-gray': '#8e9cb3',
        'dark-text': 'rgb(10, 37, 64)',
      },
      fontFamily: {
        sans: [
          'Poppins',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
export default config
