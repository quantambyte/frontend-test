import { TextField, TextFieldProps as MUITextFieldProps } from '@mui/material';
import styled from '@emotion/styled';

/**
 * StyledTextField is a styled version of the MUI TextField component.
 * It applies custom styles to the input base and helper text.
 */
export const StyledTextField = styled(TextField)<MUITextFieldProps>`
  margin-bottom: 1rem;

  .MuiInputBase-root {
    background-color: #f4f6f8;
    border-radius: 8px;
  }

  .MuiFormHelperText-root {
    color: #d32f2f;
  }
`;
