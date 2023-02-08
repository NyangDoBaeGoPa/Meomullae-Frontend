import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const MBTIresult = () => {
  return (
    <>
      <Box className="flex flex-col h-full w-full p-2.5 bg-[#FFF]">
        <Box className="flex flex-col justify-start items-center h-[400px] w-full bg-[#C4E6FF] rounded-[20px] shadow-md">
          <Box className="flex justify-center items-center text-center w-full pt-2.5 pb-1 px-11">
            <Typography component="h6">MBTI 결과에 따라 나온 음식 설명입니다.</Typography>
          </Box>
          <Box className="flex justify-center items-center pt-1.5 pb-1 px-[25%] w-full">
            <img
              src="./images/blacktigerShrimp.jpg"
              className="h-[100px] w-[150px] object-cover rounded-[30px]" // 크기 조정에 있어 padding으로만 설정하니 크기 맞추기가 쉽지 않아 임시로 고정값을 주었습니다.
            />
          </Box>
          <Box className="flex flex-col items-center w-full px-6 pt-1.5 pb-1">
            <Box className="flex flex-col justify-center items-center h-full w-full pb-4 bg-[#FFF7CB] rounded-[20px]">
              <Box className="flex justify-center items-center text-center w-full py-1 px-24">
                <Typography component="h6">음식 궁합</Typography>
              </Box>
              <Box className="flex flex-row justify-between items-center h-full w-full px-4">
                <Box className="flex h-[100px] w-[120px] rounded-[30px] bg-[#A8A8A8]">
                  <img
                    src="./images/sweetSourChicken.jpg"
                    className="h-full w-full object-cover rounded-[30px]" // 크기 조정에 있어 padding으로만 설정하니 크기 맞추기가 쉽지 않아 임시로 고정값을 주었습니다.
                  />
                </Box>
                <Box className="flex h-[100px] w-[120px] rounded-[30px] bg-[#A8A8A8]">
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
              <Box className="flex flex-row justify-center items-center w-full"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
