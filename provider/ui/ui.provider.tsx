import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React, { ReactNode } from 'react';

import { breakPointTheme, paletteTheme, typographyTheme } from './ui.const';

type Props = {
  children: ReactNode;
};
declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    button: true;
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1_bold: React.CSSProperties;
    h1_extrabold: React.CSSProperties;
    h2_extrabold: React.CSSProperties;
    button_regular: React.CSSProperties;
    progressbar_semibold: React.CSSProperties;
    question_semibold: React.CSSProperties;
    answer_regular: React.CSSProperties;
    next_bold: React.CSSProperties;
    rankComment: React.CSSProperties;
    rankRestaurant: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h1_bold: React.CSSProperties;
    h1_extrabold: React.CSSProperties;
    h2_extrabold?: React.CSSProperties;
    button_regular?: React.CSSProperties;
    progressbar_semibold?: React.CSSProperties;
    question_semibold?: React.CSSProperties;
    answer_regular?: React.CSSProperties;
    next_bold?: React.CSSProperties;
    rankComment: React.CSSProperties;
    rankRestaurant: React.CSSProperties;
  }
  interface Palette {
    button: Palette['primary'];
  }
  interface PaletteOptions {
    button: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1_bold: true;
    h1_extrabold: true;
    h2_extrabold: true;
    button_regular: true;
    progressbar_semibold: true;
    question_semibold: true;
    answer_regular: true;
    next_bold: true;
    rankComment: true;
    rankRestaurant: true;
  }
}

const theme = createTheme({
  typography: typographyTheme,
  palette: paletteTheme,
  breakpoints: breakPointTheme,
  spacing: 4,
});

export const UIProvider = ({ children }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
