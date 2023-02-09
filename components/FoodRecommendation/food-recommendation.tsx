import { Button, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import { HeaderLogo } from '@/components';

export const FoodRecommendation = () => {
  const [name] = useState(['대연각', '금룡', '홍콩반점']);

  return (
    <>
      <Box className="flex flex-col h-[100vh] w-full">
        <HeaderLogo />
        <Box className="flex flex-col h-full w-full p-2.5">
          <Box className="flex flex-row justify-center items-center h-[40%] w-full px-[15%] py-2.5 bg-[#C4E6FF] rounded-[20px] shadow-md">
            <Box className="flex justify-center items-center h-full w-[10%]">
              <Button className="flex justify-center items-center">
                <BsFillArrowLeftCircleFill className="flex h-full w-[50%]" />
              </Button>
            </Box>
            <Box className="flex flex-col justify-evenly items-center h-full w-[80%] p-2.5">
              <Box className="flex flex-col justify-center items-center h-[60%] w-full bg-[#FFF7CB] rounded-[20px] shadow-md">
                <Typography variant="h5">1위</Typography>
                <Typography variant="h6">{name[0]}</Typography>
              </Box>
              <Link
                href="./"
                className="flex flex-col justify-center items-center h-[30%] w-full"
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
            <Box className="flex justify-center items-center h-full w-[10%]">
              <Button className="flex justify-center items-center">
                <BsFillArrowRightCircleFill className="flex h-full w-[50%]" />
              </Button>
            </Box>
          </Box>
          <Box className="flex flex-col justify-center items-center h-[20%] w-full bg-[#C4E6FF] rounded-[20px] shadow-md"></Box>
        </Box>
      </Box>
    </>
  );
};
