import { Button, Typography, Box } from '@mui/material';

interface MuiButtonProps {
  Color?: boolean;
  tail?: string;
  size?: undefined;
  title?: string;
  content?: string;
  type?: boolean;
}

export const MuiButton = ({ Color, size, title, content, tail, type }: MuiButtonProps) => {
  return (
    <>
      <Button
        color={Color ? 'primary' : 'secondary'}
        variant={type ? 'contained' : 'outlined'}
        size={size}
        className={tail}
      >
        <Box className="text-center">
          <Typography variant="body1" className="font-bold">
            {title}
          </Typography>
          <Typography variant="body2">{content}</Typography>
        </Box>
      </Button>
    </>
  );
};
