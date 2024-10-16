'use client';

import { Box, Typography, Button } from '@mui/material';

/**
 * ProductError component displays an error message when no products are found.
 * It provides options to retry loading the products or navigate back to the home page.
 *
 * @returns {JSX.Element} The rendered error component.
 */
export default function ProductError() {
  /**
   * Reloads the current page to retry loading products.
   */
  const handleRetry = () => {
    window.location.reload();
  };

  /**
   * Navigates the user back to the home page.
   */
  const handleBackToHome = () => {
    window.location.href = '/';
  };

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
        Oops! No products found.
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
