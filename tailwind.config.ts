import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f1ff',
          100: '#ebe5ff',
          200: '#d9cdff',
          300: '#bea5ff',
          400: '#9d70ff',
          500: '#7f3dfb',
          600: '#6d1eee',
          700: '#5d16cf',
          800: '#4d15a8',
          900: '#3f1385',
          950: '#26095c'
        }
      },
      fontFamily: {
        sans: ['ui-rounded', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;
