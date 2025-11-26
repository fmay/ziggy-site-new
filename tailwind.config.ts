import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-flow-gray',
    'bg-white',
  ],
  theme: {
    extend: {
      colors: {
        'stripe-navy': '#0a2540',
        'stripe-gray': '#727f96',
        'stripe-light-bg': '#f6f9fb',
        'stripe-purple': '#635bff',
        'flow-gray': '#D0D8E0'
      },
      fontFamily: {
        sans: [
          'Inter',
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
