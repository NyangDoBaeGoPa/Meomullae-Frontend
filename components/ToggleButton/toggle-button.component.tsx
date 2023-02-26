import { ToggleButton as MUIToggleButton, ToggleButtonProps } from '@mui/material';

export const ToggleButton = ({ sx, className, ...props }: ToggleButtonProps) => {
  const toggleButtonClassName = `${className} h-16 border-none w-82 md:w-48 md:h-48 rounded-main shadow-answer hover:bg-secondary/50`;

  return (
    <MUIToggleButton
      {...props}
      sx={{
        backgroundColor: 'white',
        color: 'black',
        typography: 'answer_regular',
        '&.Mui-selected': { bgcolor: 'secondary.main', color: 'black' },
        ...sx,
      }}
      className={toggleButtonClassName}
    >
      {props.value as string}
    </MUIToggleButton>
  );
};
