import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Modal from '../index';

const defaultProps = {
  open: true,
  onClose: jest.fn(),
  title: 'Test Modal',
  children: <div>Modal Content</div>,
};

describe('Modal Component', () => {
  beforeEach(() => {
    render(<Modal {...defaultProps} />);
  });
  it('renders the modal with the correct title and content', () => {
    expect(screen.getByText(/test modal/i)).toBeInTheDocument();
    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', async () => {
    const closeButton = screen.getByRole('button');
    await userEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not render the modal when open is false', () => {
    render(<Modal {...defaultProps} open={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('has the correct aria attributes', () => {
    const modalElement = screen.getByRole('presentation');
    expect(modalElement).toHaveAttribute('aria-labelledby', 'modal-title');
    expect(modalElement).toHaveAttribute(
      'aria-describedby',
      'modal-description'
    );
  });
});
