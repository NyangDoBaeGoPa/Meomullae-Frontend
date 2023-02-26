import { LinearProgress as MUILinearProgress, Box } from '@mui/material';

type value = {
  value: number;
};

export const LinearProgress = ({ value }: value) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" className="w-full">
      <MUILinearProgress
        variant="determinate"
        value={value}
        color="progress"
        className="relative inline-block w-full bg-white h-9 rounded-main shadow-progress"
      />
      <Box
        component="span"
        className="absolute text-center"
        typography="progressbar_semibold"
      >{`${value}%`}</Box>
    </Box>
  );
};
