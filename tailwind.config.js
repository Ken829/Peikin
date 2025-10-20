/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tcm': {
          50: '#fef9f3',
          100: '#fdf2e7',
          200: '#fae3c3',
          300: '#f6d29f',
          400: '#f0b257',
          500: '#e9910f',
          600: '#d2820e',
          700: '#ae6c0b',
          800: '#8b5609',
          900: '#724607',
        },
        'herbal': {
          50: '#f4f7f4',
          100: '#e9efe9',
          200: '#c8d7c8',
          300: '#a7bfa7',
          400: '#658f65',
          500: '#2d5f2d',
          600: '#295629',
          700: '#234822',
          800: '#1c3a1c',
          900: '#172f17',
        },
      },
    },
  },
  plugins: [],
};
