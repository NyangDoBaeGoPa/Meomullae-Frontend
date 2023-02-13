import { Box } from '@mui/material';

import { Logo } from '@/components';

export const Header = () => {
  return (
    <Box component="div" className="flex w-full h-16">
      <Box
        component="div"
        className="flex justify-center items-center w-full h-16 mx-2"
        bgcolor="primary.main"
      >
        <Logo />
      </Box>
    </Box>
  );
};
