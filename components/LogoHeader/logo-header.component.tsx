import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

export const LogoHeader = () => {
  return (
    <Box component="div" className="flex bg-[#A1C4DD] w-full h-15">
      <Link href="./">
        <IconButton aria-label="logo"></IconButton>
      </Link>
    </Box>
  );
};
