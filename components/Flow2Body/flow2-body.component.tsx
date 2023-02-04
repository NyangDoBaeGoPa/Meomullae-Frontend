import { Box } from '@mui/material';

import { SurveyAnswer } from '../SurveyAnswer';

export const Flow2Body = () => {
  return (
    <>
      <Box className="p-16 text-xl font-bold text-center" typography="h6">
        질문입니다!
      </Box>
      <SurveyAnswer />
    </>
  );
};
