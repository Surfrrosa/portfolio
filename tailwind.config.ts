import type { Config } from 'tailwindcss'

const blinkKeyframes = {
  '0%, 100%': { opacity: '1' },
  '50%': { opacity: '0' },
}

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
        'display': ['Archivo', 'League Spartan', 'Bebas Neue', 'Monument Extended', 'Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'Satoshi', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: blinkKeyframes,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
