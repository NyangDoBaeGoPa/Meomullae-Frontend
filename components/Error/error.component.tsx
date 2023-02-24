import { Box } from '@mui/material';
import Image from 'next/image';

import { Header } from '../Header';

export const Error = () => {
  return (
    <>
      <Header />
      <Box className="flex flex-col items-center justify-center w-full">
        <Box className="w-full py-12 text-center" typography="h1">
          어머, 에러가 발생했어요!
        </Box>
        <Box className="w-full text-center pb-44" typography="h1_semibold">
          다시 시도해보세요 ㅠ
        </Box>
        <Image
          src="data:image/jpeg;base64,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"
          alt="억장 와르르"
          width="355"
          height="255"
        />
      </Box>
    </>
  );
};
