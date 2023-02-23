import { Box } from '@mui/material';
import { NextPage } from 'next';
import { Suspense } from 'react';

import { SurveyContentModule } from './module';

import { Header } from '@/components';

export type Answers = {
  answer_id: number;
  answer_copy: string;
  answer_order: number;
};

export type Contents = {
  question_id: number;
  question_copy: string;
  question_order: number;
  answer_mode: string;
  answers: Answers[];
};

export const SurveyScreen: NextPage = () => {
  return (
    <Suspense fallback={<Box>에러가 나버렸어요!</Box>}>
      <Header />
      <SurveyContentModule />
    </Suspense>
  );
};
