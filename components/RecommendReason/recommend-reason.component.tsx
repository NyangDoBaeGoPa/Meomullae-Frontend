import { Typography, Box } from '@mui/material';

import { HeaderLogo } from '@/components';

export const RecommendReason = () => {
  return (
    <>
      <Box className="flex flex-col h-[100vh] w-full">
        <HeaderLogo />
        <Box className="flex flex-col h-full w-full p-2.5">
          <Box className="flex flex-col justify-start items-center h-full w-full p-2.5 bg-[#C4E6FF] rounded-[20px] shadow-md">
            <Box className="flex justify-center items-center h-[40%] w-full pb-1 rounded-[20px]">
              <Box className="flex justify-center items-center h-full w-full bg-[#D9D9D9] rounded-[20px] shadow-md">
                <img
                  src="./images/daeyeongak.jpg"
                  className="h-full w-full object-cover rounded-[20px] shadow-md"
                />
              </Box>
            </Box>
            <Box className="flex justify-center items-center h-[60%] w-full pt-1 rounded-[20px]">
              <Box className="flex flex-col justify-center items-center h-full w-full p-2.5 bg-[#FFF7CB] rounded-[20px] shadow-md">
                <Box className="flex justify-center items-center h-[50%] w-full pb-1">
                  <Box className="flex justify-center items-center text-center h-full w-full px-1 bg-[#FFF] rounded-[20px] shadow-md">
                    <Typography variant="h6">
                      친구들과 함께 가성비 점심을 찾는 당신! 대연각은 어때요?
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex justify-center items-center h-[50%] w-full pt-1">
                  <Box className="flex flex-col justify-center items-center text-center h-full w-full px-1 bg-[#FFF] rounded-[20px] shadow-md">
                    <Box className="flex justify-center items-center text-center w-full pb-2.5">
                      <Typography variant="h6">대연각</Typography>
                    </Box>
                    <Box className="flex flex-col justify-center w-full px-5">
                      <ul className="flex flex-col justify-start h-full w-full m-0 ">
                        <li>위치</li>
                        <li>메뉴 / 가격</li>
                        <li>영업시간</li>
                        <li>추천수</li>
                      </ul>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
