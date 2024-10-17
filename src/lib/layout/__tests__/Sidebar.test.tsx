import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../Sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

jest.mock('@mui/material/useMediaQuery');

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: jest.fn(),
    };
  },
}));

describe('Sidebar Component', () => {
  const renderWithTheme = (ui: React.ReactElement) => {
    const theme = createTheme();
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  it('renders the sidebar with correct elements on desktop view', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    renderWithTheme(<Sidebar />);

    expect(screen.getByTestId('sidebar-box')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-drawer')).toBeInTheDocument();
    expect(screen.getByTestId('logo-text')).toHaveTextContent('LOGO');
    expect(screen.getByTestId('menu-list')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-analytics')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-project')).toBeInTheDocument();
  });

  it('renders the sidebar with correct elements on mobile view', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    renderWithTheme(<Sidebar />);

    expect(screen.getByTestId('sidebar-box')).toBeInTheDocument();
    expect(screen.getByTestId('menu-icon-button')).toBeInTheDocument();
  });
});
