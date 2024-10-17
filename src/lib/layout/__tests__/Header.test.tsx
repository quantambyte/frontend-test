import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

jest.mock('@mui/material/useMediaQuery');

describe('Header Component', () => {
  const renderWithTheme = (ui: React.ReactElement) => {
    const theme = createTheme();
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  it('renders the header with correct elements', () => {
    renderWithTheme(<Header />);

    expect(screen.getByText('Products')).toBeInTheDocument();

    expect(screen.getAllByRole('button')).toHaveLength(3);

    expect(screen.getByAltText('User Avatar')).toBeInTheDocument();
  });

  it('renders the menu icon on mobile view', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    renderWithTheme(<Header />);

    const menuIcon = screen
      .getAllByRole('button', { hidden: true })
      .find((button) => button.querySelector('[data-testid="MenuIcon"]'));

    expect(menuIcon).toBeInTheDocument();
  });

  it('does not render the menu icon on desktop view', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    renderWithTheme(<Header />);

    const menuIcon = screen.queryByTestId('MenuIcon');

    expect(menuIcon).not.toBeInTheDocument();
  });
});
