import { Box, Typography, Divider, Skeleton } from '@mui/material';

/**
 * A skeleton component that provides a loading placeholder for product details.
 * It uses Material-UI's Skeleton component to simulate the layout of the product details page.
 *
 * @component
 * @returns {JSX.Element} A JSX element representing the skeleton structure for product details.
 */
export default function ProductDetailsSkeleton() {
  return (
    <Box
      display='flex'
      flexDirection={{ xs: 'column', md: 'row' }}
      gap={4}
      padding={4}
      height='100vh'
      overflow='hidden'
    >
      <Box flex={1}>
        <Skeleton
          variant='rectangular'
          width='100%'
          height={400}
          animation='wave'
        />
      </Box>
      <Box
        component='div'
        flex={2}
        display='flex'
        flexDirection='column'
        overflow='auto'
        pr={2}
      >
        <Skeleton variant='text' width='60%' height={40} animation='wave' />
        <Skeleton
          variant='text'
          width='40%'
          height={20}
          animation='wave'
          sx={{ mt: 1 }}
        />
        <Skeleton
          variant='text'
          width='20%'
          height={30}
          animation='wave'
          sx={{ mt: 1 }}
        />
        <Skeleton
          variant='text'
          width='100%'
          height={100}
          animation='wave'
          sx={{ mt: 2 }}
        />
        <Skeleton
          variant='text'
          width='40%'
          height={40}
          animation='wave'
          sx={{ mt: 2 }}
        />
        <Divider sx={{ my: 2 }} />
        <Typography fontSize={18} fontWeight={500} mt={2}>
          Product Details
        </Typography>
        <Box display='flex' justifyContent='space-between' mt={1} py={1}>
          <Skeleton variant='text' width='40%' height={30} animation='wave' />
          <Skeleton variant='text' width='30%' height={30} animation='wave' />
        </Box>
        <Box display='flex' justifyContent='space-between' mt={1} py={1}>
          <Skeleton variant='text' width='40%' height={30} animation='wave' />
          <Skeleton variant='text' width='50%' height={30} animation='wave' />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography fontSize={18} fontWeight={500} mt={2}>
          Tags
        </Typography>
        <Box display='flex' flexWrap='wrap' gap={2} mt={1}>
          <Skeleton
            variant='rectangular'
            width={100}
            height={30}
            animation='wave'
          />
          <Skeleton
            variant='rectangular'
            width={80}
            height={30}
            animation='wave'
          />
          <Skeleton
            variant='rectangular'
            width={60}
            height={30}
            animation='wave'
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography fontSize={18} fontWeight={500} mt={2}>
          Additional Information
        </Typography>
        <Box display='flex' justifyContent='space-between' mt={1} py={1}>
          <Skeleton variant='text' width='40%' height={30} animation='wave' />
          <Skeleton variant='text' width='50%' height={30} animation='wave' />
        </Box>
        <Box display='flex' justifyContent='space-between' mt={1} py={1}>
          <Skeleton variant='text' width='40%' height={30} animation='wave' />
          <Skeleton variant='text' width='50%' height={30} animation='wave' />
        </Box>
        <Box display='flex' justifyContent='space-between' mt={1} py={1}>
          <Skeleton variant='text' width='40%' height={30} animation='wave' />
          <Skeleton variant='text' width='50%' height={30} animation='wave' />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography fontSize={18} fontWeight={500} mt={2}>
          Return Policy
        </Typography>
        <Skeleton
          variant='text'
          width='80%'
          height={50}
          animation='wave'
          sx={{ mt: 1 }}
        />
      </Box>
    </Box>
  );
}
