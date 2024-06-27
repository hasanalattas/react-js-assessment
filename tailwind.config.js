/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '3rem'
      }
    },
    screens: {
      sm: { max: '767px' },
      md: '768px',
      lg: '1025px'
    }
  },
  plugins: []
}
