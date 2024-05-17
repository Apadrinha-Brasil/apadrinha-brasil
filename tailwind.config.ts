import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'abGreen': '#00923d',
        'abPink': '#ffaec9',
        'abWhite': '#ffffff',
        'abGrayText': '#79747e',
        'abGreenText': '#345040',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.2rem',
      },
    },
  },
  plugins: [],
}
export default config
