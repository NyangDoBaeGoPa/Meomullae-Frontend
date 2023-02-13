import { deepPurple, grey } from '@mui/material/colors';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
declare module '@mui/material/styles' {
  interface TypographyVariants {
    h2_extrabold: React.CSSProperties;
    button_regular: React.CSSProperties;
    progressbar_semibold: React.CSSProperties;
    question_semibold: React.CSSProperties;
    answer_regular: React.CSSProperties;
    next_bold: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h2_extrabold?: React.CSSProperties;
    button_regular?: React.CSSProperties;
    progressbar_semibold?: React.CSSProperties;
    question_semibold?: React.CSSProperties;
    answer_regular?: React.CSSProperties;
    next_bold?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h2_extrabold: true;
    button_regular: true;
    progressbar_semibold: true;
    question_semibold: true;
    answer_regular: true;
    next_bold: true;
  }
}
const theme = createTheme({
  typography: {
    fontFamily: ['Inter'].join(','),
    h1: {
      fontSize: 20,
      fontWeight: 600,
    },
    h2: {
      fontSize: 16,
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
  },
  components: {
    MuiTypography: {},
  },
  palette: {
    primary: {
      main: deepPurple[700],
      contrastText: grey[50],
    },
    secondary: {
      main: grey[50],
      contrastText: grey[900],
    },
  },
});

export const UIProvider = ({ children }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
