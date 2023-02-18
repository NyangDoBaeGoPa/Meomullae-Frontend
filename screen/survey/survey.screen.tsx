import { Box, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { Header, Button, LinearProgress, ToggleButton } from '@/components';

export const surveyScreen = () => {
  const {
    isLoading,
    error,
    data: contents,
  } = useQuery({
    queryKey: ['MBTI'],
    queryFn: () =>
      fetch('/mbti.json')
        .then((res) => res.json())
        .then((data) => data.contents),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred:';

  const countQuestion = 1;
  const result = contents.filter((question) => question.question_id === countQuestion);
  const question = result[0].question_copy;
  const answer = [result[0].answers[0].answer_copy, result[0].answers[1].answer_copy];
  return (
    <>
      <Box className="flex flex-col items-center w-full h-full">
        <Stack spacing={5}>
          <Header />
          <LinearProgress value={33} />
        </Stack>
        <Box className="p-6 text-center" typography="question_semibold">
          {question}
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
            {answer.map((answer) => (
              <ToggleButton
                value="answer"
                color="button"
                className="h-16 border-none md:w-48 md:h-48 rounded-main "
                typography="answer_regular"
              >
                {answer}
              </ToggleButton>
            ))}
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
