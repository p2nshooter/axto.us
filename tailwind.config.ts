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
      },
      keyframes: {
        slideFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        waveBar: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' }
        }
      },
      animation: {
        'slide-fade-in': 'slideFadeIn 0.5s ease-out',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'wave-bar': 'waveBar 0.9s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
