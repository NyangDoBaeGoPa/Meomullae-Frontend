import { Box, Stack, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';

import { Back, Result, Go, ProgressCategory, ProgressMBTI } from './survey.const';

import { Header, Button, LinearProgress } from '@/components';

export const survey = () => {
  const [countQuestion, setCountQuestion] = useState(1);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [answer, setAnswer] = useState('');
  const router = useRouter();
  const Key = router.query.type;
  const {
    isLoading,
    error,
    data: contents,
  } = useQuery({
    queryKey: ['survey'],
    queryFn: () =>
      fetch(`https://meomullae.onrender.com/survey?type=${Key}`)
        .then((res) => res.json())
        .then((data) => data.contents),
  });
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred:';

  let result = contents.filter((question) => question.question_order === countQuestion);
  const answers = result[0].answers;
  const question = result[0].question_copy;
  const FindAnswers = () => {
    result = contents.filter((question) => question.question_order === countQuestion);
  };
  const handleClickGo = () => {
    if (answer) {
      if ((Key == 'MBTI' && countQuestion == 11) || (Key == 'Category' && countQuestion == 5)) {
        setLastQuestion(true);
        setAnswer('');
        setCountQuestion(countQuestion + 1);
        return 1;
      } else if (Key == 'MBTI' && countQuestion == 12) {
        Router.push({
          pathname: '/MBTIresult',
        });
        return 1;
      } else if (Key == 'Category' && countQuestion == 6) {
        Router.push({
          pathname: '/FoodRecommendation',
        });
        return 1;
      }
      setCountQuestion(countQuestion + 1);
      setAnswer('');
    }
  };
  const handleClickBack = () => {
    setLastQuestion(false);
    setAnswer('');
    setCountQuestion(countQuestion - 1);
  };
  const handleAnswer = (event: React.MouseEvent<HTMLElement>, newAnswer: string) => {
    setAnswer(newAnswer);
  };

  const progress =
    Key == 'MBTI' ? ProgressMBTI[countQuestion - 1] : ProgressCategory[countQuestion - 1];
  FindAnswers();
  return (
    <>
      <Box className="flex flex-col items-center w-full h-full">
        <Stack spacing={5}>
          <Header />
          <LinearProgress value={progress} />
        </Stack>
        <Box className="p-6 text-center" typography="question_semibold">
          {question}
        </Box>
        <Box className="flex flex-col items-stretch justify-around min-h-1/2 w-82 md:w-180">
          <ToggleButtonGroup
            value={answer}
            exclusive
            onChange={handleAnswer}
            className="flex-wrap justify-center text-center"
            aria-label="answers"
            sx={{
              gap: 5,
            }}
          >
            {answers.map((answerCandidates: Array<Object>) => (
              <ToggleButton
                value={answerCandidates.answer_copy}
                aria-label={answerCandidates.answer_copy}
                key={answerCandidates.answer_id}
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  typography: 'answer_regular',
                  '&.Mui-selected': { bgcolor: 'secondary.main', color: 'black' },
                }}
                className="h-16 border-none w-82 md:w-48 md:h-48 rounded-main shadow-answer hover:bg-secondary/50"
              >
                {answerCandidates.answer_copy}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
        <Box className="flex flex-col justify-center align-bottom w-80 md:w-96 pt-14">
          <Stack spacing={0.5125} direction="row" justifyContent="center" alignItems="stretch">
            {countQuestion != 1 && (
              <Button
                className="w-full h-10 bg-white border-2 border-primary rounded-main hover:bg-primary/50 hover:text-white hover:border-none shadow-answer"
                variant="outlined"
                typography="next_bold"
                color="primary"
                onClick={handleClickBack}
              >
                {Back}
              </Button>
            )}

            <Button
              className="w-full h-10 rounded-main hover:bg-primary/50 shadow-answer"
              typography="next_bold"
              variant="contained"
              color="primary"
              onClick={handleClickGo}
            >
              {lastQuestion ? Result : Go}
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
