import { NextPage } from 'next';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { SurveyContentModule } from './module';
import { SurveySkeleton } from './module/survey-content/survey-skeleton';

import { Error, Header } from '@/components';

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
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<SurveySkeleton />}>
        <Header />
        <SurveyContentModule />
      </Suspense>
    </ErrorBoundary>
  );
};
