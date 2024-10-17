import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import SessionProvider from '@/lib/providers/SessionProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'My Product App',
  description:
    'Explore a wide range of products with detailed reviews and ratings.',
  keywords: ['products', 'reviews', 'ratings', 'shopping'],
  authors: [{ name: 'Your Company Name' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable}`}
        style={{ background: '#EEF2F6' }}
      >
        <AppRouterCacheProvider>
          <SessionProvider>
            <>{children}</>
          </SessionProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
