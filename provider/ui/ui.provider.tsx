import { deepPurple, grey } from '@mui/material/colors';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto'].join(','),
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
