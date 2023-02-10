const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}rem`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './screen/**/*.{js,ts,jsx,tsx}',
  ],
  important: '#__next',
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  theme: {
    borderRadius: {
      main: '30px',
    },
    extend: {},
    colors: {
      primary: '#512DA8',
      secondary: '#FFEF2A',
      basic: '#C0B3DF',
    },
  },
};
