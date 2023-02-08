import { Box } from '@mui/material';

import { HeaderLogo } from '../HeaderLogo';

export const FoodRecommendation = () => {
  return (
    <>
      <Box className="flex flex-col h-[100vh] w-full">
        <HeaderLogo />
        <Box className="flex flex-col h-full w-full p-2.5">
          <Box className="flex flex-row justify-center items-center h-[30%] w-full px-[15%] py-2.5 bg-[#C4E6FF] rounded-[20px] shadow-md"></Box>
        </Box>
      </Box>
    </>
  );
};
