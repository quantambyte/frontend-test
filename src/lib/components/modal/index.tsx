'use client';

import {
  Modal as MuiModal,
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IModalProps } from '@/lib/types/modal';
import { StyledBox } from './style';

/**
 * Modal is a React functional component that renders a styled modal dialog.
 * It uses Material-UI components for styling and layout.
 *
 * @param {IModalProps} props - The props for the Modal component.
 * @param {boolean} props.open - Determines whether the modal is open.
 * @param {() => void} props.onClose - Callback function to handle closing the modal.
 * @param {string} props.title - The title displayed at the top of the modal.
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal.
 * @returns {JSX.Element} The rendered modal component.
 */
const Modal: React.FC<IModalProps> = ({ open, onClose, title, children }) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
      keepMounted
    >
      <StyledBox>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography id='modal-title' variant='h6' component='h2'>
            {title} 🎉
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box mt={2} maxHeight='80vh' overflow='auto'>
          {children}
        </Box>
      </StyledBox>
    </MuiModal>
  );
};

export default Modal;
