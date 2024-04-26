const daisyui = require('daisyui');
const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  daisyui: {
    prefix: 'ds-',
    themes: ['light', 'dracula'],
  },
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('./src/shared/images/bg.jpeg')",
      },
      colors: {
        'dark-1': '#cdd3dd',
        'dark-2': '#65738b',
        'dark-3': '#3c4c69',
        'dark-4': '#232e42',
        'dark-5': '#1d2637',
        'dark-6': '#171e2a',
        'dark-7': '#323d50',
        'dark-8': '#1c2432',
        'dark-9': '#242931',
        'grey-1': '#535965',
        'grey-2': '#636364',
        'grey-3': '#7b8aa4',
        'grey-4': '#7b89a3',
        'grey-5': {
          50: '#3C4D6980',
          100: '#3C4D69',
        },
        'red-1': '#d44c49',
        'red-2': '#b33636',
        'red-3': '#e95f5d',
        orange: '#ce7b44',
        yellow: '#cfae3d',
        blue: '#2a75c0',
        'blue-1': '#1046ac',
        'blue-2': '#4f92d4',
        'blue-3': '#007bff',
        'blue-4': '#2a75c0',
        'dark-blue': '#171e2c',
        green: '#3f9e72',
        'green-1': '#45a82c',
        'blue-green': '#2ba57d',
        'light-green': '#0be27c',
        purple: '#6648af',
        reactBg: '#282c34',
        reactLinks: '#61dafb',
      },
    },
    keyframes: {
      'react-logo-spin': {
        0: { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      'react-spin': 'react-logo-spin 20s infinite linear',
    },
  },
  plugins: [
    daisyui,
    plugin(({ addUtilities }) => {
      addUtilities({
        '.arrow-hide': {
          '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
        },
      });
    }),
  ],
};
