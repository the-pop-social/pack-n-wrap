/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C08457', // warm luxury gold
          light: '#e0ae8a',
          dark: '#a1683d',
        },
        secondary: {
          DEFAULT: '#F7F2ED', // soft cream
          dark: '#ebdcd0',
        },
        accent: {
          DEFAULT: '#A63A50', // deep rose
          light: '#cb526b',
          dark: '#822739',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2d2d2d',
          dark: '#111111',
        },
        muted: '#6B7280',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glowing': 'pulseGlowing 2s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlowing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(192, 132, 87, 0.7)', transform: 'scale(1)' },
          '50%': { boxShadow: '0 0 0 10px rgba(192, 132, 87, 0)', transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}
