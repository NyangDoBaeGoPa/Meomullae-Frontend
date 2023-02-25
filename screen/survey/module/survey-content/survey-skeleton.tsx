import { Box, Stack, Skeleton as MUISkeleton } from '@mui/material';

export const SurveySkeleton = () => {
  return (
    <Box className="flex items-center justify-center">
      <Stack spacing={4}>
        <MUISkeleton variant="text" className="pt-10" />
        <MUISkeleton variant="text" />
        <Box className="h-36 md:h-24" />
        <Stack spacing={5} className="w-82 md:w-140">
          <MUISkeleton variant="rounded" className="h-16 w-82 md:w-140 md:h-28 rounded-main" />
          <MUISkeleton variant="rounded" className="h-16 w-82 md:w-140 md:h-28 rounded-main" />
        </Stack>
      </Stack>
    </Box>
  );
};
