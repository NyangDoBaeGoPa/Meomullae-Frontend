import Box from '@mui/material/Box';
import Button from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';

import { MainChooseFlow } from '../MainChooseFlow';

export const MainInformation = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
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
          <Button aria-label="icon" onClick={handleOpen} className="justify-items-start">
            <Image src="/Icon.png" alt="로고" width="300" height="220" />
            <Box className="absolute top-9">
              <Box typography="body2">머물래는 간단한 설문을 통해</Box>
              <Box typography="body2">취향과 상황에 맞는 한양대 근처의</Box>
              <Box typography="body2">배달음식을 추천해드려요.</Box>
              <Box typography="body2">이를 통해 머물래는 여러분의...</Box>
            </Box>
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* 모달창 mui에서 가져온 건데 bg-white가 적용이 안되네요... */}
          <Box className="absolute w-80 h-110 rounded-[20px] bg-zinc-50">
            <Typography id="modal-modal-title" variant="h6" component="h2"></Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              머물래는 간단한 설문을 통해 취향과 상황에 맞는 한양대 근처의 배달음식을 추천해드려요.
              이를 통해 머물래는 여러분의 메뉴선정 시간단축에 도움을 드리고자 만들게 되었어요. 또한,
              재밌게 즐기실 수 있도록 MBTI 테스트를 준비해보았어요. 12가지 질문에 답을 하면 자신의
              MBTI를 음식으로 표현한 결과를 받아보실 수 있답니다 :) 친구와 공유하며 즐거운 시간을
              보내시길 바라요! 머물래에서 머물래?
            </Typography>
          </Box>
        </Modal>

        <Box>
          <MainChooseFlow />
        </Box>
      </Box>
    </>
  );
};
