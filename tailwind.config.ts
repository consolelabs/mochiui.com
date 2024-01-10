import type { Config } from 'tailwindcss'
import { mochiui } from '@mochi-ui/theme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@mochi-ui/theme/dist/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        tight: '-0.2px',
        tighter: '-0.4px',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
      },
    },
  },
  plugins: [mochiui()],
}
export default config
