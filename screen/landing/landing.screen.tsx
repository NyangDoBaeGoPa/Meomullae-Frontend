import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';

import { ModalDescription, Flow1, Flow2, Hello, Intro, Mml } from './landing.const';

import { LogoHeader, Modal, ModalRef, Button } from '@/components';

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
      <Box className="flex flex-col justify-center bg-basic">
        <Box className="pt-5 leading-9 text-center" typography="h1">
          {Hello}
        </Box>
        <Box className="pt-4 leading-9 text-center">
          <Typography component="span" variant="h2">
            {Intro}
            <Typography component="span" variant="h2_extrabold" className="pl-1 text-primary">
              {Mml}
            </Typography>
          </Typography>
        </Box>
        <Box className="flex justify-center" onClick={handleClickButtonIcon}>
          <Image
            src="https://res.cloudinary.com/dahw1d9li/image/upload/v1676032718/NoneBgColorChatBubble_thxlaa.png"
            alt="말풍선"
            width="500"
            height="400"
            layout="intrinsic"
            className="pt-5 pb-5"
            onClick={handleClickButtonIcon}
          />
        </Box>
        <Stack
          className="flex"
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
          justifyItems="center"
          justifyContent="center"
        >
          <Button
            className="w-11/12 p-5 shadow-md md:w-5/12 md:h-40 rounded-main hover:bg-secondary/50"
            title={Flow1}
            href="./survey"
            sx={{ height: 100 }}
            variant="contained"
            color="button"
          />
          <Button
            className="w-11/12 p-5 shadow-md md:w-5/12 md:h-40 rounded-main hover:bg-secondary/50"
            title={Flow2}
            href="./survey"
            sx={{ height: 100 }}
            variant="contained"
            color="button"
          />
        </Stack>
      </Box>
    </>
  );
};
