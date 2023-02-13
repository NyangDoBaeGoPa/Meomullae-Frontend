import { Box, Dialog as MUIModal } from '@mui/material';
import Parser from 'html-react-parser';
import { forwardRef, useImperativeHandle, useState } from 'react';

interface ModalProps {
  description?: string;
}

export interface ModalRef {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
export const Modal = forwardRef<ModalRef, ModalProps>(({ description }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickModal = () => {
    setIsOpen(!isOpen);
  };

  useImperativeHandle(ref, () => ({
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const replacedDescription = description?.replace(/\n/g, '<br />');

  return (
    <MUIModal
      open={isOpen}
      onClick={handleClickModal}
      sx={{ textAlign: 'center', alignContent: 'center' }}
      PaperProps={{ sx: { width: '315px', height: '440px' } }}
    >
      {replacedDescription && (
        <Box className="whitespace-pre-wrap" typography="h2">
          {Parser(replacedDescription)}
        </Box>
      )}
    </MUIModal>
  );
});
