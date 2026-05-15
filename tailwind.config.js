/** @type {import('tailwindcss/types').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    fontFamily: {
      Satoshi: ['Satoshi', 'sans-serif'],
      mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
    },
    screens: {
      'xs': '480px',
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1366px',
    },
    extend: {
      colors: {
        cf: {
          orange: '#FF5E1F',
          'orange-10': 'rgba(255,94,31,0.10)',
          'orange-20': 'rgba(255,94,31,0.20)',
          'orange-30': 'rgba(255,94,31,0.30)',
        },
        site: {
          bg: '#151414',
          surface: '#1C1B1B',
          elevated: '#232222',
          border: 'rgba(255,255,255,0.07)',
          'border-orange': 'rgba(255,94,31,0.2)',
          text: '#FFFFFF',
          'text-secondary': '#9A9A9A',
          'text-muted': '#555555',
        },
      },
      animation: {
        'scroll-x': 'scroll-x 35s linear infinite',
        'fade-up': 'fade-up 0.7s ease forwards',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
      },
      keyframes: {
        'scroll-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
}
