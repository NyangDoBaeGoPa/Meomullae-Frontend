import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import {
  DoSurveyAgain,
  MBTISurveyButtonTitle,
  RecommendationSurveyButtonTitle,
} from './again.const';

import { Button } from '@/components';

export const Again = () => {
  const router = useRouter();
  const handleClickMBTISurveyButton = () => {
    router.push('/survey');
  };

  const handleClickRecommendSurveyButton = () => {
    router.push('/survey');
  };

  return (
    <>
      <Typography component="span" variant="h2">
        {DoSurveyAgain}
      </Typography>
      <Stack direction={'row'} spacing={2.5} alignItems="center" justifyContent="center">
        <Button
          className="w-40 p-5 shadow-md h-[90px] rounded-main"
          onClick={handleClickRecommendSurveyButton}
          variant="contained"
          color="button"
        >
          {RecommendationSurveyButtonTitle}
        </Button>
        <Button
          className="w-40 p-5 shadow-md h-[90px] rounded-main"
          onClick={handleClickMBTISurveyButton}
          variant="contained"
          color="button"
        >
          {MBTISurveyButtonTitle}
        </Button>
      </Stack>
    </>
  );
};
