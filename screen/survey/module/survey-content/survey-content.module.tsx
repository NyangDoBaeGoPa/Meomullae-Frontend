import { Stack, Box, ToggleButtonGroup } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { getSurveyQuestionData } from '../../survey.method';
import { Answers } from '../../survey.screen';

import { Back, Go, ProgressCategory, ProgressMBTI, Result } from './survey.const';

import { Button, LinearProgress, ToggleButton, instance } from '@/components';

export const SurveyContentModule = () => {
  const [countQuestion, setCountQuestion] = useState(2);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [answer, setAnswer] = useState('');

  const router = useRouter();
  const { type: Key } = router.query;

  const { data } = useQuery({
    queryKey: ['survey'],
    queryFn: () => instance(`/survey?type=${Key}`).then((res) => res.data),
    suspense: true,
  });
  const contents = data.contents;
  const { answers, question } = getSurveyQuestionData(contents, countQuestion);

  const handleClickGo = () => {
    if (answer) {
      if ((Key == 'MBTI' && countQuestion == 11) || (Key == 'Category' && countQuestion == 5)) {
        setLastQuestion(true);
        setAnswer('');
        setCountQuestion(countQuestion + 1);
        return 1;
      } else if (Key == 'MBTI' && countQuestion == 12) {
        router.push({
          pathname: '/MBTIresult',
        });
        return 1;
      } else if (Key == 'Category' && countQuestion == 6) {
        router.push({
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

  return (
    <Box className="flex flex-col items-center w-full h-full px-4 py-5">
      <Stack spacing={6} className="inline-block w-full">
        <LinearProgress value={progress} />
        <Box className="text-center" typography="question_semibold">
          {question}
        </Box>
      </Stack>
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
          {answers.map((answerCandidates: Answers) => (
            <ToggleButton
              value={answerCandidates.answer_copy}
              aria-label={answerCandidates.answer_copy}
              key={answerCandidates.answer_id}
              className="h-16 border-none w-82 md:w-48 md:h-48 rounded-main shadow-answer hover:bg-secondary/50"
            >
              {answerCandidates.answer_copy}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <Box className="flex flex-row justify-between w-full pt-14">
        {countQuestion != 1 && (
          <Button
            className="w-40 h-10 bg-white border-2 full border-primary rounded-main hover:bg-primary/50 active:bg-primary/50 hover:text-white hover:border-none shadow-answer"
            variant="outlined"
            typography="next_bold"
            color="primary"
            onClick={handleClickBack}
          >
            {Back}
          </Button>
        )}

        <Button
          className="w-40 h-10 rounded-main hover:bg-primary/50 active:bg-primary/50 shadow-answer"
          typography="next_bold"
          variant="contained"
          color="primary"
          onClick={handleClickGo}
        >
          {lastQuestion ? Result : Go}
        </Button>
      </Box>
    </Box>
  );
};
