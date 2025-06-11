import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#1E464A',
        'brand-beige': '#F3E5C8',
        'brand-brown': '#2A1A14',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config