import { Stack, Typography } from '@mui/material';

import { Button } from '@/components';

export const Rank = () => {
  return (
    <>
      <Stack
        spacing={6}
        alignItems="center"
        justifyContent="center"
        className="w-[180px] h-[160px] p-2.5 bg-[#fff] rounded-[30px]"
      >
        <Typography component="span" variant="h1_bold">
          1위{' '}
          <Typography component="span" variant="h1_bold">
            치킨
          </Typography>
        </Typography>
        <Typography component="span" variant="rankComment">
          역시 치킨만한게 없지!
        </Typography>
        <Typography component="span" variant="rankRestaurant">
          추천 맛집:{' '}
          <Button className="rounded-main h-[30px] w-[72px] p-0" variant="contained">
            <Typography variant="rankRestaurant">60계 치킨</Typography>
          </Button>
        </Typography>
      </Stack>
    </>
  );
};
