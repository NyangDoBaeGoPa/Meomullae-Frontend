import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';

import { ModalDescription } from './landing.const';
import { Flow1 } from './landing.flow1';

import { LogoHeader, Modal, ModalRef, MuiButton } from '@/components';

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
      <Box className="flex flex-col w-full h-[100vh] bg-basic/20 justify-items-center">
        <Box className="pt-4 font-bold leading-9 text-center" typography="h5">
          머물래에 오신 것을 환영합니다
        </Box>
        <Box className="pt-3 text-center">
          <Typography component="span" variant="body1" className="leading-9">
            상황에 맞는 배달음식을 추천해주는,
            <Typography component="span" variant="body1" className="pl-1 font-bold text-primary">
              머물래
            </Typography>
          </Typography>
        </Box>

        <Box className="flex justify-center pt-5 pb-3" onClick={handleClickButtonIcon}>
          <Image src="/Group 9.png" alt="말풍선" width="355" height="205"></Image>
        </Box>
        <Box className="flex flex-col items-center">
          <MuiButton
            Color={false}
            tail="p-5 text-black rounded-[20px] shadow-md w-11/12 h-25"
            title="Flow 1: 한양대 주변 메뉴별 맛집 추천"
            content={Flow1}
          />
          <Box className="p-5" />
          <MuiButton
            Color={false}
            tail="p-5 text-black rounded-[20px] shadow-md w-11/12 h-25"
            title="Flow 2: MBTI"
            content={Flow1}
          />
        </Box>
      </Box>
    </>
  );
};
