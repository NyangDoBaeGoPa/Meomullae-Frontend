import { Button, Typography, Box, Stack } from '@mui/material';

interface MuiButtonProps {
  color?: 'primary' | 'secondary';
  className?: string;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  content?: string;
  type?: 'contained' | 'outlined';
  link?: string;
}

export const MuiButton = ({
  color = 'primary',
  size = 'large',
  title,
  content,
  className,
  type = 'contained',
  link,
}: MuiButtonProps) => {
  return (
    <>
      <Button color={color} variant={type} size={size} className={className} href={link}>
        <Box className="text-center">
          <Stack spacing={0.5}>
            {title && (
              <Typography variant="body1" className="font-bold">
                {title}
              </Typography>
            )}
            {content && <Typography variant="body2">{content}</Typography>}
          </Stack>
        </Box>
      </Button>
    </>
  );
};
