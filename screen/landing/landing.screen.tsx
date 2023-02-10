import { Box, Typography } from '@mui/material';
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
      {/* 이거 있으면 폰트 적용은 되는데 Hydration error가 뜹니다
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Nanum+Gothic&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <LogoHeader />
      <Modal ref={modalRef} description={ModalDescription} />
      <Box className="flex flex-col w-full h-[100vh] bg-basic justify-items-center">
        <Box className="pt-4 leading-9 text-center" typography="h2">
          머물래에 오신 것을 환영합니다
        </Box>
        <Box className="pt-3 leading-9 text-center">
          <Typography component="span" variant="h3">
            상황에 맞는 배달음식을 추천해주는,
            <Typography component="span" variant="h3" className="pl-1 font-bold text-primary">
              머물래
            </Typography>
          </Typography>
        </Box>

        <Box className="flex justify-center pt-5 pb-3" onClick={handleClickButtonIcon}>
          <Image src="/NoneBgColorChatBubble.png" alt="말풍선" width="355" height="205"></Image>
        </Box>
        <Box className="flex flex-col items-center">
          <MuiButton
            Color={false}
            tail="p-5 text-black shadow-md w-11/12 h-25 rounded-main"
            title="Flow 1: 한양대 주변 메뉴별 맛집 추천"
            content={Flow1}
            type={true}
            link="./survey"
          />
          <Box className="p-5" />
          <MuiButton
            Color={false}
            tail="p-5 text-black shadow-md w-11/12 h-25 rounded-main"
            title="Flow 2: MBTI"
            content={Flow2}
            type={true}
            link="./survey"
          />
        </Box>
      </Box>
    </>
  );
};
