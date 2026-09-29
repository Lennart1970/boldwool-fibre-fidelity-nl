/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f6f1e8',
          soft: '#ebe2d3',
          line: '#c9bba6',
        },
        card: '#fffdf9',
        ink: {
          DEFAULT: '#121a16',
          muted: '#3a4440',
        },
        forest: {
          DEFAULT: '#264a3b',
          deep: '#132820',
          soft: '#d0e0d6',
        },
        clay: {
          DEFAULT: '#a85a30',
          soft: '#edd9c8',
        },
        slate: {
          soft: '#dce5ec',
          accent: '#2f4a63',
        },
        plum: {
          soft: '#e8d8df',
          accent: '#5a3546',
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
        card: '0 1px 2px rgba(18,26,22,.08), 0 10px 28px rgba(18,26,22,.10)',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}
