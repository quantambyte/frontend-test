import { ModalProps } from '@mui/material';
import { ReactElement, JSXElementConstructor } from 'react';

export interface IModalProps extends Omit<ModalProps, 'children'> {
  open: boolean;
  onClose: () => void;
  title: string;
  children: any;
}
