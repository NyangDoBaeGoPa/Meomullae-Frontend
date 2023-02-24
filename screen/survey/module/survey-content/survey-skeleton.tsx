import { Box, Stack, Skeleton as MUISkeleton } from '@mui/material';

export const SurveySkeleton = () => {
  return (
    <Box className="flex items-center justify-center">
      <Stack spacing={4}>
        <MUISkeleton variant="text" />
        <MUISkeleton variant="text" />
        <Box className="h-48" />
        <Stack spacing={5}>
          <MUISkeleton variant="rounded" className="h-16 w-82 md:w-48 md:h-48" />
          <MUISkeleton variant="rounded" className="h-16 w-82 md:w-48 md:h-48" />
        </Stack>
      </Stack>
    </Box>
  );
};
