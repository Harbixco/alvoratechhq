/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tsi: {
          teal: '#39AFB9',
          'teal-hover': '#00828B',
          'teal-link': '#2CB2A9',
          'teal-light': '#EFF5F6',
          navy: '#0C2233',
          dark: '#242424',
          orange: '#FF9718',
          'orange-hover': '#B85D00',
        },
        canvas: {
          DEFAULT: '#08090D',
          subtle: '#0D0F15',
          card: '#12141D',
          hover: '#181B27',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(255, 255, 255, 0.16)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-teal': '0 0 40px -10px rgba(57, 175, 185, 0.4)',
        'glow-orange': '0 0 35px -10px rgba(255, 151, 24, 0.4)',
        'card-soft': '0 10px 30px -5px rgba(12, 34, 51, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
