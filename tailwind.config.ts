import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0B0C0E',
        'surface': '#14161A',
        'accent-teal': '#2BD4CF',
      },
      fontFamily: {
        'display': ['Monument Extended', 'Bebas Neue', 'Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
