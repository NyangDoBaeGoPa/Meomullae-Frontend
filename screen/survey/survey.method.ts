type Answers = {
  answer_id: number;
  answer_copy: string;
  answer_order: number;
};

type Contents = {
  question_id: number;
  question_copy: string;
  question_order: number;
  answer_mode: string;
  answers: Answers[];
};

type SurveyQuestionData = {
  surveyId: number;
  contents: Contents[];
};

export const getSurveyQuestionData = (contents, countQuestion: number) => {
  const result = contents.filter((question: Contents) => question.question_order === countQuestion);
  const answers = result[0].answers;
  const question = result[0].question_copy;
  return { answers, question };
};
