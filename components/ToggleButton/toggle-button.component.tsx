import { ToggleButton as MUIToggleButton } from '@mui/material';

type Answers = {
  answer_id: number;
  answer_copy: string;
  answer_order: number;
};

export const ToggleButton = (answers) => {
  const answersArray = answers.items.map((answerCandidates: Answers) => (
    <MUIToggleButton
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
    </MUIToggleButton>
  ));
  return <>{answersArray}</>;
};
