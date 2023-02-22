import { ToggleButton as MUIToggleButton, ToggleButtonProps } from '@mui/material';

type MuiToggleButtonProps = ToggleButtonProps & {
  className?: string;
  typography?: 'button_regular' | 'next_bold' | 'answer_regular' | 'back';
};

export const ToggleButton = ({
  color = 'button',
  typography = 'button_regular',
  sx,
  children,
  className,
  value,
  key,
  ...props
}: MuiToggleButtonProps) => {
  return (
    <MUIToggleButton
      value={value}
      color={color}
      key={key}
      fullWidth={true}
      className="text-black bg-white shadow-answer "
      sx={{
        ...sx,
        typography: typography,
        bgcolor: 'white',
        color: 'black',
        '&:hover': {
          bgcolor: 'white',
          color: 'black',
        },
        '&.Mui-selected': { bgcolor: 'secondary.main', color: 'black' },
      }}
      {...props}
    >
      {children}
    </MUIToggleButton>
  );
};
