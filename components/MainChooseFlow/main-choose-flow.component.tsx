import { Box, Button, Typography } from '@mui/material';

export const MainChooseFlow = () => {
  return (
    <Box className="text-center">
      <Button
        variant="contained"
        href="survey"
        className="inline-block bg-[#FFF7CB] rounded-[20px] shadow-md border-none w-11/12 h-[115px]"
      >
        <Typography variant="body1" className="pt-5 font-bold text-black">
          Flow 1: 한양대 주변 메뉴별 맛집 추천
        </Typography>
        <Typography variant="body2" className="py-5 text-black">
          지금 뭘 먹을지 고민이신가요? 머물래가 추천해드려요!
        </Typography>
      </Button>
      <Box className="pt-5"></Box>
      <Button
        variant="contained"
        href="survey"
        className="inline-block bg-[#FFF7CB] rounded-[20px] shadow-md border-none w-11/12 h-[115px]"
      >
        <Typography variant="body1" className="pt-5 font-bold text-black">
          Flow 2: MBTI
        </Typography>
        <Typography variant="body2" className="py-5 text-black ">
          나의 MBTI와 어울리는 음식은 뭘까? 음식궁합은?!
        </Typography>
      </Button>
    </Box>
  );
};
