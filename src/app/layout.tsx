import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import SessionProvider from '@/lib/providers/SessionProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

/**
 * Metadata for the application, providing SEO and accessibility information.
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: 'My Product App',
  description:
    'Explore a wide range of products with detailed reviews and ratings.',
  keywords: ['products', 'reviews', 'ratings', 'shopping'],
  authors: [{ name: 'Your Company Name' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

/**
 * RootLayout component that sets up the main HTML structure and provides necessary context providers.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered RootLayout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable}`}>
        <SessionProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
