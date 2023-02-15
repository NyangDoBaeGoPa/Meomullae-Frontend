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
      <Box className="flex flex-col justify-start h-[calc(100%-60px)]">
        <Stack
          direction={{ xs: 'column' }}
          spacing={{ xs: 3, md: 6 }}
          paddingX={{ xs: 5, md: 11 }}
          alignItems="center"
          justifyContent="center"
          height={{ xs: '30%', md: '25%' }}
        >
          <Box className="leading-9 text-center" typography="h1">
            {IntroTitle}
          </Box>
          <Box className="leading-9 text-center">
            <Typography component="span" variant="h2">
              {IntroDescription}
              <Typography component="span" variant="h2_extrabold" className="pl-1 text-primary">
                {IntroDescriptionBold}
              </Typography>
            </Typography>
          </Box>
        </Stack>
        <Box className="flex justify-center xs:h-[35%] md:h-[40%]" onClick={handleClickButtonIcon}>
          <Image
            src="https://res.cloudinary.com/dahw1d9li/image/upload/v1676032718/NoneBgColorChatBubble_thxlaa.png"
            alt="말풍선"
            width="500"
            height="400"
            layout="intrinsic"
            className="py-5 md:p-5"
            onClick={handleClickButtonIcon}
          />
        </Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          padding={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
          height={{ xs: '35%', md: '25%' }}
        >
          <Button
            className="w-11/12 p-5 shadow-md md:w-5/12 md:max-w-xs h-[100px] md:h-40 rounded-main"
            onClick={handleClickRecommendSurveyButton}
            variant="contained"
            color="button"
          >
            {RecommendationSurveyButtonTitle}
          </Button>
          <Button
            className="w-11/12 p-5 shadow-md md:w-5/12 md:max-w-xs h-[100px] md:h-40 rounded-main"
            onClick={handleClickMBTISurveyButton}
            variant="contained"
            color="button"
          >
            {MBTISurveyButtonTitle}
          </Button>
        </Stack>
      </Box>
    </>
  );
};
