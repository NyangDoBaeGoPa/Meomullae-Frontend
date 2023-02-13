import { Box, Typography } from '@mui/material';

import { Header, MuiButton } from '@/components';

export const SurveyScreen = () => {
  return (
    <>
      <Header></Header>
      <Box className="flex flex-col w-full h-[100vh] bg-basic justify-items-center">
        <Box className="p-5 text-center">
          <Typography variant="h1">당신의 성별을 알려주세요!</Typography>
        </Box>
        <Box className="flex flex-col items-center">
          <MuiButton
            color="secondary"
            className="w-11/12 p-5 shadow-md h-15 rounded-main"
            title="남자"
          />
          <Box className="pt-5" />
          <MuiButton
            color="secondary"
            className="w-11/12 p-5 shadow-md h-15 rounded-main"
            title="여자"
          />
        </Box>
        <Box className="flex justify-center pt-14">
          <MuiButton className="h-10 w-5/11 px-13 rounded-main" title="뒤로가기" type="outlined" />
          <MuiButton className="h-10 px-13 w-5/11 rounded-main" title="다음으로" />
        </Box>
      </Box>
    </>
  );
};
