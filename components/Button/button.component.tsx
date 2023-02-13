import { Button as MUIButton, Box, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps & {
  className?: string;
  title?: string;
  typography?: 'button_regular' | 'next_bold' | 'answer_regular' | 'back';
};

export const Button = ({
  color = 'button',
  size = 'large',
  title,
  className,
  href,
  typography = 'button_regular',
  sx,
  variant,
}: MuiButtonProps) => {
  return (
    <>
      <MUIButton
        variant={variant}
        color={color}
        size={size}
        className={className}
        href={href}
        sx={sx}
      >
        <Box className="text-center">{title && <Box typography={typography}>{title}</Box>}</Box>
      </MUIButton>
    </>
  );
};
