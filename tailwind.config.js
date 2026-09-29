/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f6f1e8',
          soft: '#e6dcc9',
          line: '#b7a68d',
        },
        card: '#fffdf9',
        ink: {
          DEFAULT: '#0f1612',
          muted: '#33403a',
        },
        forest: {
          DEFAULT: '#214033',
          deep: '#0f221a',
          soft: '#c5d8cc',
        },
        clay: {
          DEFAULT: '#9a5229',
          soft: '#e8d0bc',
        },
        slate: {
          soft: '#d2dde6',
          accent: '#28405a',
        },
        plum: {
          soft: '#e2ced7',
          accent: '#4f2e3e',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        lift: '0 1px 2px rgba(15,22,18,.10), 0 12px 30px rgba(15,22,18,.12)',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}
