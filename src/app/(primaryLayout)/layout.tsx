import type { Metadata } from 'next';
import Header from '@/lib/layout/Header';
import { Box } from '@mui/material';
import Sidebar from '@/lib/layout/Sidebar';

export const metadata: Metadata = {
  title: 'My Product App',
  description:
    'Explore a wide range of products with detailed reviews and ratings.',
  keywords: ['products', 'reviews', 'ratings', 'shopping'],
  authors: [{ name: 'Your Company Name' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function PrimaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Box display='flex'>
        <Sidebar />
        <Box
          component='main'
          flexGrow={1}
          sx={{ maxHeight: '100vh', overflow: 'auto' }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
