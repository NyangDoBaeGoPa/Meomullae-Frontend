import { Typography, Stack, Divider, Box } from '@mui/material';

import { Header, Rank, StarRatio, Again } from '@/components';

export const FoodRecommendation = () => {
  return (
    <>
      <Header />
      <Stack spacing={5} className="pt-5 px-2.5" flexGrow={1}>
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
        <Box className="flex overflow-auto xs:justify-start md:justify-center items-center">
          <Stack direction={'row'} spacing={5} alignItems="center" justifyContent="center">
            <Rank />
            <Rank />
            <Rank />
          </Stack>
        </Box>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="center"
          className="p-5 bg-[#fff] rounded-t-[50px]"
        >
          <StarRatio />
          <Divider className="w-full border-secondary border-[4px]" />
          <Again />
        </Stack>
      </Stack>
    </>
  );
};
