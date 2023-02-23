import { Typography, Stack, Divider, Box } from '@mui/material';

import { Header, Rank, StarRatio } from '@/components';

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
        </Stack>
      </Stack>
      {/* <Box className="flex flex-col h-[100vh] w-full">
        <Header />
        <Box className="flex flex-col h-full w-full p-2.5">
          <Box className="flex justify-center items-center h-[40%] w-full pb-2.5">
            <Box className="flex flex-row justify-center items-center h-full w-full px-[15%] py-2.5 bg-[#C4E6FF] rounded-[20px] shadow-md">
              <Box className="flex justify-center items-center h-full w-[10%]"></Box>
              <Box className="flex flex-col justify-evenly items-center h-full w-[80%] p-2.5">
                <Box className="flex justify-center items-center h-[80%] w-full pb-2.5">
                  <Box className="flex flex-col justify-center items-center h-full w-full bg-[#FFF7CB] rounded-[20px] shadow-md">
                    <Typography variant="h5">1위</Typography>
                    <Typography variant="h6">{name[0]}</Typography>
                  </Box>
                </Box>
                <Link
                  href="./"
                  className="flex flex-col justify-center items-center h-[20%] w-full"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    className="flex justify-center items-center h-full w-full bg-[#FFF7CB] rounded-[20px] shadow-md"
                    style={{ color: '#000' }}
                  >
                    <Typography>이유가 궁금하다면?</Typography>
                  </Button>
                </Link>
              </Box>
              <Box className="flex justify-center items-center h-full w-[10%]"></Box>
            </Box>
          </Box>
          <Box className="flex justify-center items-center h-[20%] w-full pb-2.5">
            <Box className="flex flex-col justify-center items-center h-full w-full bg-[#C4E6FF] rounded-[20px] shadow-md">
              <Box className="flex flex-col justify-center items-center h-full w-full p-2.5">
                <Typography variant="h6">추천 순위에 만족하시나요?</Typography>
                <Box className="flex flex-row justify-center items-center h-[50%] w-full p-2.5">
                  <Rating name="no-value" value={null} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider className="w-full" />
          <Box className="flex flex-col justify-center items-center text-center h-[40%] w-full p-2.5">
            <Box className="flex justify-center items-center text-center w-full px-21">
              <Typography variant="h6">다시 테스트 해보시겠어요?</Typography>
            </Box>
            <Box className="flex flex-row justify-between items-center h-full w-full py-2.5">
              <Box className="flex justify-center items-center h-full w-[50%] pr-1">
                <Link
                  href="./"
                  className="flex justify-center items-center h-full w-full bg-[#FFF7CB] rounded-[20px] shadow-md"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <Box className="flex flex-col justify-center items-center text-center h-full w-full">
                    <Typography variant="h6">Flow1</Typography>
                    <Typography variant="h6">Food details</Typography>
                  </Box>
                </Link>
              </Box>
              <Box className="flex justify-center items-center h-full w-[50%] pl-1">
                <Link
                  href="./"
                  className="flex justify-center items-center h-full w-full bg-[#FFF7CB] rounded-[20px] shadow-md"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <Box className="flex flex-col justify-center items-center text-center h-full w-full">
                    <Typography variant="h6">Flow2</Typography>
                    <Typography variant="h6">MBTI</Typography>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </>
  );
};
