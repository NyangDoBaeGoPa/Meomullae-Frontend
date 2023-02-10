import { Box } from '@mui/material';

import { Logo } from '@/components';
import { UIProvider } from '@/provider';

export const Header = () => {
  return (
    <Box component="div" className="flex w-full h-16 px-2">
      <UIProvider>
        <Box
          component="div"
          className="flex justify-center items-center w-full h-16"
          bgcolor="primary.main"
        >
          <Logo />
        </Box>
      </UIProvider>
    </Box>
  );
};
