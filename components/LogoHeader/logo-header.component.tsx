import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';

export const LogoHeader = () => {
  return (
    <Box component="div" className="flex bg-[#A1C4DD] w-full h-16">
      <Link href="./">
        <IconButton aria-label="logo">
          <Image src="/Team Logo (1).png" alt="로고" width="130" height="45" />
        </IconButton>
      </Link>
    </Box>
  );
};
