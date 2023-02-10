import { Box, Dialog as MUIModal } from '@mui/material';
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
  const Description = ({ description }: ModalProps) => {
    if (description) {
      return (
        <Box className="text-center">
          {description.split('\n').map((txt) => (
            <>
              {txt}
              <br />
            </>
          ))}
        </Box>
      );
    }
  };

  useImperativeHandle(ref, () => ({
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return (
    <MUIModal open={isOpen}>
      <Box
        className="text-center w-80 h-110"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Description description={description} />
      </Box>
    </MUIModal>
  );
});
