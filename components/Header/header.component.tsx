import { Box } from '@mui/material';

import { Logo } from '@/components';

export const Header = () => {
  return (
    <Box className="flex justify-center items-center h-[60px] mx-2 bg-primary">
      <Logo />
    </Box>
  );
};
