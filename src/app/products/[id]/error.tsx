'use client';

import Button from '@/lib/components/button';
import { Box, Typography } from '@mui/material';

/**
 * ProductError component displays an error message when a product is not found.
 * It provides options to retry loading the product or navigate back to the home page.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function ProductError() {
  /**
   * Reloads the current page to retry loading the product.
   */
  const handleRetry = () => window.location.reload();

  /**
   * Redirects the user to the home page.
   */
  const handleBackToHome = () => (window.location.href = '/');

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      flexDirection='column'
      padding={4}
    >
      <Typography variant='h4' color='error' fontWeight='bold' gutterBottom>
        Oops! No product found.
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        align='center'
        gutterBottom
      >
        Please try again or go back to the home page.
      </Typography>

      <Button
        variant='contained'
        color='primary'
        onClick={handleRetry}
        sx={{ mt: 2 }}
      >
        Try Again
      </Button>
      <Button
        variant='outlined'
        color='secondary'
        onClick={handleBackToHome}
        sx={{ mt: 2 }}
      >
        Back to Home
      </Button>
    </Box>
  );
}
