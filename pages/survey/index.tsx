import Box from '@mui/material/Box';

import { Flow2Body, GoOrBack, LogoHeader, LinearProgressWithLabel } from '@/components';

export default function Flow2() {
  return (
    <>
      <LogoHeader />
      <LinearProgressWithLabel value={33} />
      <Box className="h-full w-full bg-[#C4E6FF] rounded-lg shadow-md">
        <Flow2Body />
      </Box>
      <GoOrBack />
    </>
  );
}
