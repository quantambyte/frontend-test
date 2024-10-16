import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants/routes';

export default function NotFound() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      textAlign='center'
      padding={4}
    >
      <Typography variant='h1' fontWeight='bold' gutterBottom>
        404
      </Typography>
      <Typography variant='h5' gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Typography variant='body1' color='textSecondary' gutterBottom>
        It might have been moved or deleted.
      </Typography>
      <Link href={ROUTES.PRODUCTS} passHref>
        <Button variant='contained' color='primary' size='large'>
          Go Back Home
        </Button>
      </Link>
    </Box>
  );
}
