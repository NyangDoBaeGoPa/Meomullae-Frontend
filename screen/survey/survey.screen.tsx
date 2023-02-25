import { NextPage } from 'next';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { SurveyContentModule, SurveyError, SurveySkeleton } from './module';

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
    <>
      <Header />
      <ErrorBoundary fallback={<SurveyError />}>
        <Suspense fallback={<SurveySkeleton />}>
          <SurveyContentModule />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
