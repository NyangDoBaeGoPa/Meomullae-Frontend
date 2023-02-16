import { ThemeOptions } from '@mui/material';
import { deepPurple, grey, yellow } from '@mui/material/colors';

export const typographyTheme: ThemeOptions['typography'] = {
  fontFamily: ['Inter'].join(','),
  h1: {
    fontSize: 20,
    lineHeight: '36px',
    fontWeight: 600,
  },
  h2: {
    fontSize: 16,
    lineHeight: '36px',
    fontWeight: 300,
  },
  h2_extrabold: {
    fontSize: 16,
    fontWeight: 800,
  },
  button_regular: {
    fontSize: 16,
    fontWeight: 400,
  },
  progressbar_semibold: {
    fontSize: 13,
    fontWeight: 600,
  },
  question_semibold: {
    fontSize: 22,
    fontWeight: 600,
  },
  answer_regular: {
    fontSize: 18,
    fontWeight: 400,
  },
  next_bold: {
    fontSize: 17,
    fontWeight: 700,
  },
};

export const paletteTheme: ThemeOptions['palette'] = {
  primary: {
    main: deepPurple[700],
    contrastText: grey[50],
    light: 'rgba(192, 179, 223, 0.2)',
  },
  secondary: {
    main: yellow[400],
    contrastText: grey[900],
  },
  button: {
    main: grey[50],
    contrastText: grey[900],
  },
};

export const breakPointTheme: ThemeOptions['breakpoints'] = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1536,
  },
};
