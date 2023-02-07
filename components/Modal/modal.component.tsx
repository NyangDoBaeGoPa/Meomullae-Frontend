import { Box, Typography, Modal as MUIModal } from '@mui/material';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export const Modal = ({ isOpen, onClose, title, description }: ModalProps) => {
  const handleClose = () => onClose();

  return (
    <MUIModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="bg-zinc-50"
    >
      <Box className="absolute w-80 h-110 rounded-[20px]">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
      </Box>
    </MUIModal>
  );
};
