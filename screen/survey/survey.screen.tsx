import { Box, Typography } from '@mui/material';

import { LogoHeader, MuiButton } from '@/components';

export const SurveyScreen = () => {
  return (
    <>
      <LogoHeader></LogoHeader>
      <Box className="flex flex-col w-full h-[100vh] bg-basic justify-items-center">
        <Box className="p-5 text-center">
          <Typography variant="h1">당신의 성별을 알려주세요!</Typography>
        </Box>
        <Box className="flex flex-col items-center">
          <MuiButton
            Color={false}
            tail="p-5 shadow-md w-11/12 h-15 rounded-main"
            title="남자"
            type={true}
          />
          <Box className="pt-5" />
          <MuiButton
            Color={false}
            tail="p-5 shadow-md w-11/12 h-15 rounded-main"
            title="여자"
            type={true}
          />
        </Box>
        <Box className="flex justify-center pt-14">
          <MuiButton
            Color={true}
            tail="w-5/11 h-10 px-13 rounded-main"
            title="뒤로가기"
            type={false}
          />
          <MuiButton
            Color={true}
            tail="px-13 w-5/11 h-10 rounded-main"
            title="다음으로"
            type={true}
          />
        </Box>
      </Box>
    </>
  );
};
