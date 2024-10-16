'use client';

import { Button as MuiButton, ButtonProps, Stack } from '@mui/material';
import Loader from '@/lib/components/loader';

/**
 * Interface for Button component props.
 * Extends the MUI ButtonProps interface and adds a loading state.
 */
export interface IButtonProps extends ButtonProps {
  /**
   * Indicates whether the button is in a loading state.
   * Accepts 'true' or 'false' as string values.
   */
  loading?: 'false' | 'true';
}

/**
 * Button component that wraps the MUI Button and adds a loading indicator.
 *
 * @param {IButtonProps} props - The properties for the button component.
 * @returns {JSX.Element} The rendered button component.
 */
export default function Button({ ...props }: IButtonProps) {
  const {
    startIcon,
    sx = {},
    children,
    loading = 'false',
    variant = 'contained',
  } = props;

  const isLoading = loading === 'true';
  return (
    <MuiButton disabled={isLoading} sx={sx} {...props} variant={variant}>
      <Stack direction='row' alignItems='center' gap={1} width='max-content'>
        {isLoading ? <Loader /> : startIcon}
        {children}
      </Stack>
    </MuiButton>
  );
}
