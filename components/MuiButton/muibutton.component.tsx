import { Button, Box, Stack } from '@mui/material';

interface MuiButtonProps {
  color?: 'primary' | 'secondary';
  className?: string;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  content?: string;
  type?: 'contained' | 'outlined';
  link?: string;
  typography?: 'button_regular' | 'next_bold' | 'answer_regular' | 'back';
  typographyContent?: 'button_regular' | 'next_bold' | 'answer_regular' | 'back';
}

export const MuiButton = ({
  color = 'primary',
  size = 'large',
  title,
  content,
  className,
  type = 'contained',
  link,
  typography = 'button_regular',
  typographyContent = 'button_regular',
}: MuiButtonProps) => {
  return (
    <>
      <Button color={color} variant={type} size={size} className={className} href={link}>
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
