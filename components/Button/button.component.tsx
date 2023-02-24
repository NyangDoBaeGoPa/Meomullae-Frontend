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
  const MUIButtonHover = `hover:bg-secondary/50`;
  const MUIButtonClicked = `active:bg-secondary/50`;

  return (
    <MUIButton
      color={color}
      size={size}
      className={`${MUIButtonHover} ${MUIButtonClicked} ${className} `}
      sx={{ ...sx, typography: typography }}
      {...props}
    >
      {children}
    </MUIButton>
  );
};
