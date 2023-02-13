import { Box } from '@mui/material';

import { Logo } from '@/components';

export const Header = () => {
  return (
    <Box className="flex justify-center items-center h-16 mx-2" bgcolor="primary.main">
      <Logo />
    </Box>
  );
};
