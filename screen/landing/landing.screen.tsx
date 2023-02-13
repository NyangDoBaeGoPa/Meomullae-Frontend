import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';

import { ModalDescription } from './landing.const';
import { Flow1, Flow2 } from './landing.flow';

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
      <Box className="flex flex-col w-full h-[100vh] justify-items-center" bgcolor="primary.light">
        <Box className="pt-4 leading-9 text-center" typography="h1">
          머물래에 오신 것을 환영합니다
        </Box>
        <Box className="pt-3 leading-9 text-center">
          <Typography component="span" variant="h2">
            상황에 맞는 배달음식을 추천해주는,
            <Typography component="span" variant="h2_extrabold" className="pl-1 text-primary">
              머물래
            </Typography>
          </Typography>
        </Box>
        <Box className="flex justify-center pt-5 pb-3" onClick={handleClickButtonIcon}>
          <Image src="/NoneBgColorChatBubble.png" alt="말풍선" width="355" height="205"></Image>
        </Box>
        <Stack spacing={2.5}>
          <Box className="text-center">
            <MuiButton
              color="secondary"
              className="w-11/12 p-5 shadow-md h-25 rounded-main"
              title="Flow 1: 한양대 주변 메뉴별 맛집 추천"
              content={Flow1}
              link="./survey"
            />
          </Box>
          <Box className="text-center">
            <MuiButton
              color="secondary"
              className="w-11/12 p-5 shadow-md h-25 rounded-main"
              title="Flow 2: MBTI"
              content={Flow2}
              link="./survey"
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};
