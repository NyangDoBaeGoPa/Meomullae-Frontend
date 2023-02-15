import { Button as MUIButton, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps & {
  className?: string;
  typography?: 'button_regular' | 'next_bold' | 'answer_regular' | 'back';
};

export const Button = ({
  color = 'button',
  size = 'large',
  typography = 'button_regular',
  sx,
  children,
  className,
  ...props
}: MuiButtonProps) => {
  const MUIButtonClassName = `${className} hover:bg-secondary/50`;
  const MUIButtonClassName2 = `${className} active:bg-secondary/50`;

  return (
    <MUIButton
      color={color}
      size={size}
      className={`${MUIButtonClassName} ${MUIButtonClassName2}`}
      sx={{ ...sx, typography: typography }}
      {...props}
    >
      {children}
    </MUIButton>
  );
};
