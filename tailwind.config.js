/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f6f1e8',
          soft: '#efe7da',
          line: '#e4dccd',
        },
        card: '#fffdf9',
        ink: {
          DEFAULT: '#1f2a24',
          muted: '#5d6760',
        },
        forest: {
          DEFAULT: '#2f5d4a',
          deep: '#244a3b',
          soft: '#e6efe9',
        },
        clay: {
          DEFAULT: '#b86a3c',
          soft: '#f3e6dc',
        },
        slate: {
          soft: '#e8eef2',
          accent: '#3d5a73',
        },
        plum: {
          soft: '#efe6ea',
          accent: '#6b4556',
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
        card: '0 1px 2px rgba(31,42,36,.05), 0 8px 24px rgba(31,42,36,.06)',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}
