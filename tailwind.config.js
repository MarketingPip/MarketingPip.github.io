/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          900: '#1c1917',
        },
        amber: {
          900: '#78350f',
        },
      }
    }
  },
  plugins: [],
}
