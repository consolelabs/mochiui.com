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
      maxWidth: {
        '8xl': '1440px',
      },
      letterSpacing: {
        tight: '-0.2px',
        tighter: '-0.4px',
      },
    },
  },
  plugins: [mochiui()],
}
export default config
