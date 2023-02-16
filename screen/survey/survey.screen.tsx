import { Box, Stack } from '@mui/material';

import { LogoHeader, Button, ToggleButton, LinearProgress } from '@/components';

export const SurveyScreen = () => {
  return (
    <>
      <Box className="flex flex-col items-center w-full h-full">
        <Stack spacing={5}>
          <LogoHeader />
          <LinearProgress value={33} />
        </Stack>
        <Box className="p-6 text-center" typography="question_semibold">
          당신의 성별을 알려주세요!
        </Box>
        <Box className="flex flex-col items-stretch justify-around min:h-1/2 w-82 md:w-180">
          <Stack
            spacing={5}
            alignItems="center"
            justifyContent="center"
            justifyItems="center"
            direction={{ xs: 'column', md: 'row' }}
            flexWrap="wrap"
            className="md:gap-5"
          >
            <ToggleButton
              value="answer"
              color="button"
              className="h-16 border-none md:w-48 md:h-48 rounded-main "
              typography="answer_regular"
            >
              오잉!
            </ToggleButton>
            <ToggleButton
              value="answer"
              color="button"
              className="h-16 border-none md:w-48 md:h-48 rounded-main"
              typography="answer_regular"
            >
              오잉!
            </ToggleButton>
            <ToggleButton
              value="answer"
              color="button"
              className="h-16 border-none md:w-48 md:h-48 rounded-main"
              typography="answer_regular"
            >
              오잉!
            </ToggleButton>
            <ToggleButton
              value="answer"
              color="button"
              className="h-16 border-none md:w-48 md:h-48 rounded-main"
              typography="answer_regular"
            >
              오잉!
            </ToggleButton>
            <ToggleButton
              value="answer"
              color="button"
              className="h-16 border-none md:w-48 md:h-48 rounded-main"
              typography="answer_regular"
            >
              오잉!
            </ToggleButton>
            <ToggleButton
              value="answer"
              color="button"
              className="h-16 border-none md:w-48 md:h-48 rounded-main"
              typography="answer_regular"
            >
              오잉!
            </ToggleButton>
          </Stack>
        </Box>
        <Box className="flex flex-col justify-center align-bottom w-80 md:w-96 pt-14">
          <Stack spacing={0.5125} direction="row" justifyContent="center" alignItems="stretch">
            <Button
              className="w-full h-10 bg-white border-2 border-primary rounded-main hover:bg-primary/50 hover:text-white hover:border-none shadow-answer"
              variant="outlined"
              typography="next_bold"
              color="primary"
            >
              뒤로가기
            </Button>
            <Button
              className="w-full h-10 rounded-main hover:bg-primary/50 shadow-answer"
              typography="next_bold"
              variant="contained"
              color="primary"
            >
              다음으로
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
