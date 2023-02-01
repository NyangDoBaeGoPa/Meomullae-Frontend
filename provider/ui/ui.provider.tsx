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
});

export const UIProvider = ({ children }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
