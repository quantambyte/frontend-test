import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { IButtonProps } from '../index';
import userEvent from '@testing-library/user-event';

const defaultProps: IButtonProps = {
  children: 'Click Me',
  loading: 'false',
};

describe('Button', () => {
  it('renders the button with default props', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).not.toBeDisabled();
  });

  it('renders the button with loading state', () => {
    render(<Button {...defaultProps} loading='true' />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders the button with a start icon', () => {
    const startIcon = <span data-testid='start-icon'>Icon</span>;
    render(<Button {...defaultProps} startIcon={startIcon} />);
    const startIcons = screen.getAllByTestId('start-icon');
    expect(startIcons.length).toBeGreaterThan(0);
  });

  it('triggers onClick event when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button {...defaultProps} onClick={handleClick} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
