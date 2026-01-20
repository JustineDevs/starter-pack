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
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'rgb(23 23 23)',
            '[class~="lead"]': {
              color: 'rgb(64 64 64)',
            },
            a: {
              color: 'rgb(124 58 237)',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: 'rgb(139 92 246)',
                textDecoration: 'underline',
              },
            },
            strong: {
              color: 'rgb(23 23 23)',
              fontWeight: '600',
            },
            'h1, h2, h3, h4': {
              color: 'rgb(23 23 23)',
              fontWeight: '700',
            },
            code: {
              color: 'rgb(23 23 23)',
              fontWeight: '500',
            },
            pre: {
              backgroundColor: 'rgb(250 250 250)',
            },
            blockquote: {
              borderLeftColor: 'rgb(124 58 237)',
              color: 'rgb(64 64 64)',
            },
          },
        },
        invert: {
          css: {
            color: 'rgb(250 250 250)',
            '[class~="lead"]': {
              color: 'rgb(212 212 212)',
            },
            a: {
              color: 'rgb(196 181 253)',
              '&:hover': {
                color: 'rgb(167 139 250)',
              },
            },
            strong: {
              color: 'rgb(250 250 250)',
            },
            'h1, h2, h3, h4': {
              color: 'rgb(250 250 250)',
            },
            code: {
              color: 'rgb(250 250 250)',
            },
            pre: {
              backgroundColor: 'rgb(23 23 23)',
            },
            blockquote: {
              borderLeftColor: 'rgb(196 181 253)',
              color: 'rgb(212 212 212)',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'stagger': 'stagger 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config

