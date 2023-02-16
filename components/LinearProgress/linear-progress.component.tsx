import { LinearProgress as MUILinearProgress, Box } from '@mui/material';

type value = {
  value: number;
};

export const LinearProgress = ({ value }: value) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <MUILinearProgress
        variant="determinate"
        value={value}
        className="relative w-82 md:w-180 h-9 rounded-main shadow-progress"
        color="progress"
      ></MUILinearProgress>
      <Box
        component="span"
        className="absolute text-center"
        typography="progressbar_semibold"
      >{`${value}%`}</Box>
    </Box>
  );
};
