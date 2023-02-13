import { Button, Box, Stack, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps & {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  content?: string;
  typography?: 'button_regular' | 'next_bold' | 'answer_regular' | 'back';
  typographyContent?: 'button_regular' | 'next_bold' | 'answer_regular' | 'back';
};

export const MuiButton = ({
  color = 'button',
  size = 'large',
  title,
  content,
  className,
  href,
  typography = 'button_regular',
  typographyContent = 'button_regular',
  sx,
  variant,
}: MuiButtonProps) => {
  return (
    <>
      <Button variant={variant} color={color} size={size} className={className} href={href} sx={sx}>
        <Box className="text-center">
          <Stack spacing={0.5}>
            {title && <Box typography={typography}>{title}</Box>}
            {content && <Box typography={typographyContent}>{content}</Box>}
          </Stack>
        </Box>
      </Button>
    </>
  );
};
