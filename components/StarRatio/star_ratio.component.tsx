import { Stack, Typography, Box, Rating } from '@mui/material';

import { RatioComment } from './star_ratio.const';

export const StarRatio = () => {
  return (
    <>
      <Stack spacing={1} alignItems="center" justifyContent="center" className="p-1">
        <Typography component="span" variant="ratio">
          {RatioComment}
        </Typography>
        <Box className="flex justify-center items-center py-1 shadow-md w-[220px] rounded-[25px]">
          <Rating name="hover-feedback" value={null} size="large" />
        </Box>
      </Stack>
    </>
  );
};
