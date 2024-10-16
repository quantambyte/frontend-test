import { TextFieldProps as MUITextFieldProps } from '@mui/material';
import { forwardRef } from 'react';
import { StyledTextField } from './style';
import { InputProps } from '@/lib/types/input';

/**
 * Input is a React component that wraps the StyledTextField.
 * It forwards a ref to the input element and displays error messages.
 *
 * @param {InputProps & MUITextFieldProps} props - The props for the component.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to be forwarded to the input element.
 * @returns {JSX.Element} The rendered StyledTextField component.
 */
const Input = forwardRef<HTMLInputElement, MUITextFieldProps & InputProps>(
  ({ fieldError, ...props }, ref) => {
    return (
      <StyledTextField
        {...props}
        inputRef={ref}
        error={Boolean(fieldError)}
        helperText={fieldError?.message || ''}
      />
    );
  }
);

export default Input;
