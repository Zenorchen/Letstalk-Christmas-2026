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
        xmas: {
          cream:       '#FAF6ED',
          card:        '#FFFDF9',
          red:         '#CC3333',
          'red-light': '#F9EBEB',
          gold:        '#E8C56A',
          'gold-muted':'#D4B483',
          blue:        '#C5E4EA',
          green:       '#5B8A58',
          'green-light':'#EAF5EA',
          brown:       '#3D2B1F',
          'brown-mid': '#7A5C4A',
          'brown-light':'#A89080',
        },
      },
    },
  },
  plugins: [],
}
export default config
