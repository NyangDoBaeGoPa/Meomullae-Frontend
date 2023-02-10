import { deepPurple, grey } from '@mui/material/colors';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const theme = createTheme({
  typography: {
    fontFamily: ['Inter'].join(','),
    h1: {
      //질문
      fontSize: 22,
      fontWeight: 600,
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
    },
    h3: {
      fontSize: 16,
      fontWeight: 800,
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
      contrastText: deepPurple[700],
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
