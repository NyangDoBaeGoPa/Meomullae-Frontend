import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';

import { ModalDescription } from './landing.const';

import { LogoHeader, Modal, ModalRef } from '@/components';

export const LandingScreen = () => {
  const modalRef = useRef<ModalRef>(null);

  const handleClickButtonIcon = () => {
    const isModalOpened = modalRef.current?.isOpen;

    if (isModalOpened) {
      modalRef.current?.close();
      return;
    }

    modalRef.current?.open();
  };

  return (
    <>
      <LogoHeader />
      <Modal ref={modalRef} description={ModalDescription} />
      <Box className="flex flex-col w-full h-full bg-[#C4E6FF] justify-items-center">
        <Box className="pt-5">
          <Typography variant="h5" align="center">
            머물래에 오신 것을 환영합니다
          </Typography>
        </Box>
        <Box className="p-3">
          <Typography variant="body1" align="center">
            상황에 맞는 배달음식을 추천해주는, 머물래
          </Typography>
        </Box>
        <Box className="relative text-center">
          {/* 햄버거랑 뭐 이런 사진 어떻게 넣어야 할지 모르겠어요 ㅠㅠ */}
          {/* <Image
            src="/hamburger.png"
            alt="햄버거"
            width="300"
            height="300"
            className="absolute z-10"
          /> */}
          <Button aria-label="icon" onClick={handleClickButtonIcon} className="justify-items-start">
            <Image src="/Icon.png" alt="로고" width="300" height="220" />
            <Box className="absolute text-black top-9">
              <Box typography="body2">머물래는 간단한 설문을 통해</Box>
              <Box typography="body2">취향과 상황에 맞는 한양대 근처의</Box>
              <Box typography="body2">배달음식을 추천해드려요.</Box>
              <Box typography="body2">이를 통해 머물래는 여러분의...</Box>
            </Box>
          </Button>
        </Box>
        <Box>
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
        </Box>
      </Box>
    </>
  );
};
