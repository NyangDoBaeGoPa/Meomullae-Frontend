import { Box, Typography, Stack } from '@mui/material';

import { LogoHeader, MuiButton } from '@/components';

export const SurveyScreen = () => {
  return (
    <>
      <LogoHeader></LogoHeader>
      <Box className="flex flex-col w-full h-[100vh] bg-basic justify-items-center">
        <Box className="p-5 text-center">
          <Typography variant="question_semibold">당신의 성별을 알려주세요!</Typography>
        </Box>
        <Box className="flex justify-center w-full">
          <Box className="w-11/12">
            <Stack spacing={2.5} alignItems="stretch" justifyContent="center">
              <MuiButton
                color="secondary"
                className="rounded-main h-14"
                title="남자"
                typography="answer_regular"
              />
              <MuiButton
                color="secondary"
                className="rounded-main h-14"
                title="여자"
                typography="answer_regular"
              />
            </Stack>
          </Box>
        </Box>
        <Box className="flex justify-center pt-14">
          <Box className="w-11/12">
            <Stack spacing={0.3215} direction="row" justifyContent="center" alignItems="stretch">
              <MuiButton
                className="w-full h-10 bg-white border-2 border-primary rounded-main"
                title="뒤로가기"
                type="outlined"
                typography="next_bold"
              />
              <MuiButton
                className="w-full h-10 rounded-main"
                title="다음으로"
                typography="next_bold"
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
