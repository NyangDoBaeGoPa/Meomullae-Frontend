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
    extend: {
      width: {
        79: '19rem',
        82: '21rem',
        125: '31rem',
        180: '45rem',
      },
    },
    colors: {
      primary: '#512DA8',
      secondary: '#FFEE58',
      basic: '#F2F0F9',
      white: '#FFFFFF',
      black: '#000000',
    },
    boxShadow: {
      progress: '0px 4px 4px 0px #512DA8B2',
      answer: '0px 4px 4px 0px #00000040',
    },
    minHeight: {
      '1/2': '50%',
    },
  },
};
