import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import {
  ModalDescription,
  RecommendationSurveyButtonTitle,
  MBTISurveyButtonTitle,
  IntroTitle,
  IntroDescription,
  IntroDescriptionBold,
} from './landing.const';

import { Header, Modal, ModalRef, Button } from '@/components';

export const LandingScreen = () => {
  const router = useRouter();
  const modalRef = useRef<ModalRef>(null);

  const handleClickButtonIcon = () => {
    const isModalOpened = modalRef.current?.isOpen;
    if (isModalOpened) {
      modalRef.current?.close();
      return;
    }
    modalRef.current?.open();
  };

  const handleClickMBTISurveyButton = () => {
    router.push('/survey');
  };

  const handleClickRecommendSurveyButton = () => {
    router.push('/survey');
  };

  return (
    <>
      <Header />
      <Modal ref={modalRef} description={ModalDescription} />
      <Stack spacing={4} className="py-5 px-2.5">
        <Stack spacing={3} alignItems="center" justifyContent="center">
          <Box className="text-center" typography="h1">
            {IntroTitle}
          </Box>
          <Box className="text-center">
            <Typography component="span" variant="h2">
              {IntroDescription}
              <Typography component="span" variant="h2_extrabold" className="pl-1 text-primary">
                {IntroDescriptionBold}
              </Typography>
            </Typography>
          </Box>
        </Stack>
        <Box className="flex justify-center" onClick={handleClickButtonIcon}>
          <Image
            src="https://res.cloudinary.com/dahw1d9li/image/upload/v1676032718/NoneBgColorChatBubble_thxlaa.png"
            alt="말풍선"
            width="355"
            height="255"
            layout="intrinsic"
            onClick={handleClickButtonIcon}
            style={{ cursor: 'pointer' }}
          />
        </Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 3, md: 6 }}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            className="w-11/12 p-5 shadow-md max-w-[335px] md:w-5/12 md:max-w-[210px] max-h-[100px] md:h-40 rounded-main"
            onClick={handleClickRecommendSurveyButton}
            variant="contained"
            color="button"
          >
            {RecommendationSurveyButtonTitle}
          </Button>
          <Button
            className="w-11/12 p-5 shadow-md max-w-[335px] md:w-5/12 md:max-w-[210px] max-h-[100px] md:h-40 rounded-main"
            onClick={handleClickMBTISurveyButton}
            variant="contained"
            color="button"
          >
            {MBTISurveyButtonTitle}
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
