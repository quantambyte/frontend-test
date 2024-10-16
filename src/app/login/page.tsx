'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, Typography } from '@mui/material';
import { login } from '@/lib/services/auth/api';
import { loginSchema } from '@/lib/schema/login';
import { ILoginPayload } from '@/lib/types/auth';
import { signIn } from 'next-auth/react';
import Button from '@/lib/components/button';
import FormTextField from '@/lib/components/input';
import { ROUTES } from '@/lib/constants/routes';

/**
 * Login component renders a login form and handles user authentication.
 *
 * @returns {JSX.Element} The rendered login form component.
 */
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: 'emilys',
      password: 'emilyspass',
    },
  });

  /**
   * Handles form submission and user authentication.
   *
   * @param {ILoginPayload} data - The login payload containing username and password.
   */
  const onSubmit = async (data: ILoginPayload) => {
    const response = await login(data);
    if (response.accessToken) {
      await signIn('credentials', { ...response });
      window.location.replace(ROUTES.PRODUCTS);
    }
  };

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      height='90vh'
      data-testid='login-page'
    >
      <Stack
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        padding='2rem'
        maxWidth='500px'
        width='100%'
        borderRadius={2}
        boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'
        spacing={3}
      >
        <Typography variant='h5' textAlign='center'>
          Login to Your Account
        </Typography>
        <FormTextField
          {...register('username')}
          label='Username'
          fieldError={errors.username}
        />
        <FormTextField
          {...register('password')}
          type='password'
          label='Password'
          fieldError={errors.password}
        />
        <Button
          type='submit'
          loading={isSubmitting.toString() as 'false' | 'true'}
          fullWidth
        >
          Login
        </Button>
      </Stack>
    </Stack>
  );
}
