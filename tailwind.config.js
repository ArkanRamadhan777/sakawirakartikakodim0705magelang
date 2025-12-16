/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anta: ['Anta', 'sans-serif'],
        gabarito: ['Gabarito', 'sans-serif'],
      },
      animation: {
        'slow-zoom': 'zoom 20s infinite alternate',
        'fade-up': 'fadeUp 0.7s ease-out',
        'fade-in': 'fadeIn 0.7s ease-out',
        'slide-left': 'slideLeft 0.7s ease-out',
        'slide-right': 'slideRight 0.7s ease-out',
        'scale-up': 'scaleUp 0.7s ease-out',
        'ripple': 'ripple 0.6s ease-out',
        'ken-burns-left': 'kenBurnsLeft 12s ease-out forwards',
        'ken-burns-right': 'kenBurnsRight 12s ease-out forwards',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-2rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(2rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        kenBurnsLeft: {
          '0%': { transform: 'scale(1.08) translateX(0)' },
          '100%': { transform: 'scale(1) translateX(0)' },
        },
        kenBurnsRight: {
          '0%': { transform: 'scale(1.08) translateX(0)' },
          '100%': { transform: 'scale(1) translateX(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        military: {
          "primary": "#E60000",
          "secondary": "#000000",
          "accent": "#FFFFFF",
          "neutral": "#111111",
          "base-100": "#FFFFFF",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}
