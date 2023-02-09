import Box from '@mui/material/Box';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
  return (
    <Box className="flex items-center">
      <Box className="w-full">
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box className="min-w-35">
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
};
