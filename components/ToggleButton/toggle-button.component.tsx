import { ToggleButton as MUIToggleButton, ToggleButtonProps } from '@mui/material';
import { useState } from 'react';

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
  ...props
}: MuiToggleButtonProps) => {
  const [selected, setSelected] = useState(false);
  const handleToggle = () => {
    setSelected(!selected);
  };
  return (
    <MUIToggleButton
      value={value}
      color={color}
      fullWidth={true}
      className={`${className} shadow-answer`}
      onClick={handleToggle}
      selected={selected}
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
