/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        keyframes: {
          'slide-up': {
            '0%': {
              opacity: 0,
              transform: 'translateY(0)'
            },
            '5%, 33%': {
              opacity: 1,
              transform: 'translateY(0)'
            },
            '38%, 100%': {
              opacity: 0,
              transform: 'translateY(-40px)'
            }
          },
          cursor: {
            '50%': {
              'border-color': 'transparent'
            }
          }
        },
        
        animation: {
          'slide-up': 'slide-up linear forwards',
          cursor: 'cursor 1s step-end infinite'
        }
      }
    },
    plugins: []
  }
  