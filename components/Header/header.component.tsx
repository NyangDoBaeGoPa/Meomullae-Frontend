import { Box } from '@mui/material';

import { Logo } from '@/components';

export const Header = () => {
  return (
    <Box className="flex w-full justify-center items-center h-[60px] bg-primary">
      <Logo />
    </Box>
  );
};
