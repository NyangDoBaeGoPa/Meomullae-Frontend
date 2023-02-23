import { Typography, Box } from '@mui/material';

export const ResultComment = () => {
  return (
    <Box className="text-center" typography="h1_bold">
      친구들과 보는 새벽 한일전 야식
      <Box className="text-center">
        <Typography component="span" variant="h1_extrabold" color="primary">
          머물래
        </Typography>
        <Typography component="span" variant="h1_bold">
          가 추천해봤어요!
        </Typography>
      </Box>
    </Box>
  );
};
