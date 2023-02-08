import { Rating, Divider, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { HeaderLogo } from '../HeaderLogo';

export const MBTIresult = () => {
  return (
    <>
      <Box className="flex flex-col h-[100vh] w-full" sx={{ alignItems: 'baseline' }}>
        <HeaderLogo />
        <Box className="flex flex-col h-full w-full p-2.5">
          <Box className="flex flex-col justify-start items-center h-full w-full bg-[#C4E6FF] rounded-[20px] shadow-md">
            <Box className="flex justify-center items-center text-center w-full pt-2.5 pb-1 px-11">
              <Typography component="h6">MBTI 결과에 따라 나온 음식 설명입니다.</Typography>
            </Box>
            <Box className="flex justify-center items-center pt-1.5 pb-1 px-[25%] w-full">
              <img
                src="./images/blacktigerShrimp.jpg"
                className="h-[100px] w-full object-cover rounded-[30px]" // 크기 조정에 있어 padding으로만 설정하니 크기 맞추기가 쉽지 않아 임시로 고정값을 주었습니다.
              />
            </Box>
            <Box className="flex flex-col items-center h-full w-full px-6 pt-1.5 pb-1">
              <Box className="flex flex-col justify-center items-center h-full w-full pb-4 bg-[#FFF7CB] rounded-[20px]">
                <Box className="flex justify-center items-center text-center w-full py-1 px-24">
                  <Typography component="h6">음식 궁합</Typography>
                </Box>
                <Box className="flex flex-row justify-between items-center h-full w-full px-4">
                  <Box className="flex h-[100px] w-[48%] rounded-[30px] bg-[#A8A8A8]">
                    <img
                      src="./images/sweetSourChicken.jpg"
                      className="h-full w-full object-cover rounded-[30px]" // 크기 조정에 있어 padding으로만 설정하니 크기 맞추기가 쉽지 않아 임시로 고정값을 주었습니다.
                    />
                  </Box>
                  <Box className="flex h-[100px] w-[48%] rounded-[30px] bg-[#A8A8A8]">
                    <img
                      src="./images/gyudon.jpg"
                      className="h-full w-full object-cover rounded-[30px]" // 크기 조정에 있어 padding으로만 설정하니 크기 맞추기가 쉽지 않아 임시로 고정값을 주었습니다.
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="flex flex-col justify-center items-center pt-1.5 pb-1 px-16">
                <Box className="flex justify-center items-center text-center w-full">
                  <Typography component="h6">결과에 만족하시나요?</Typography>
                </Box>
                <Box className="flex flex-row justify-center items-center w-full">
                  <Rating name="no-value" value={null} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider className="w-full" />
        <Box className="flex flex-col justify-center items-center text-center h-[40%] w-full p-2.5">
          <Box className="flex justify-center items-center text-center w-full px-21">
            <Typography component="h6">다시 테스트 해보시겠어요?</Typography>
          </Box>
          <Box className="flex flex-row justify-between items-center h-full w-full py-2.5">
            <Link
              href="./"
              className="flex justify-center items-center h-full w-[49%] bg-[#FFF7CB] rounded-[20px]"
              style={{ textDecoration: 'none' }}
            >
              <Box className="flex flex-col justify-center items-center text-center h-full w-full">
                <Typography component="h6">Flow1</Typography>
                <Typography component="h6">Food details</Typography>
              </Box>
            </Link>
            <Link
              href="./"
              className="flex justify-center items-center h-full w-[49%] bg-[#FFF7CB] rounded-[20px]"
              style={{ textDecoration: 'none' }}
            >
              <Box className="flex flex-col justify-center items-center text-center h-full w-full">
                <Typography component="h6">Flow2</Typography>
                <Typography component="h6">MBTI</Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
