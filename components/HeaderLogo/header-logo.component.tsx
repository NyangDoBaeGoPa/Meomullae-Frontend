import { Button, Box } from '@mui/material';
import Link from 'next/link';

export const HeaderLogo = () => {
  return (
    <Box className="flex justify-center bg-[#A1C4DD] w-full py-1 h-[50px] min-h-fit">
      <Link href="./Mainhome">
        <Button className="flex justify-center items-center h-[100%]">
          <img src="./images/TeamLogo.png" className="flex h-[100%]" />
        </Button>
      </Link>
    </Box>
  );
};
