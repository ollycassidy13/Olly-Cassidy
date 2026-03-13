/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        cream: '#F8F7F4',
        accent: '#FF3C00',
        muted: '#888888',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      keyframes: {
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(0)' },
          '5%, 33%': { opacity: 1, transform: 'translateY(0)' },
          '38%, 100%': { opacity: 0, transform: 'translateY(-40px)' }
        },
        cursor: {
          '50%': { 'border-color': 'transparent' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'reveal-right': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' }
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
      },
      animation: {
        'slide-up': 'slide-up linear forwards',
        cursor: 'cursor 1s step-end infinite',
        marquee: 'marquee 20s linear infinite',
        'reveal-right': 'reveal-right 0.6s ease forwards',
        'fade-up': 'fade-up 0.5s ease forwards',
      }
    }
  },
  plugins: []
}
