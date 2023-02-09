import { Box, Typography, Modal as MUIModal } from '@mui/material';
import { forwardRef, useImperativeHandle, useState } from 'react';

interface ModalProps {
  title?: string;
  description?: string;
}

export interface ModalRef {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const Modal = forwardRef<ModalRef, ModalProps>(({ title, description }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return (
    <MUIModal
      open={isOpen}
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
});
