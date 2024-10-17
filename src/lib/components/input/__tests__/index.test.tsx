import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../index';
import userEvent from '@testing-library/user-event';

const defaultProps = {
  label: 'Test Input',
  fieldError: undefined,
};

describe('Input', () => {
  it('renders the input with default props', () => {
    render(<Input {...defaultProps} />);
    const inputElement = screen.getByLabelText(/test input/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('displays an error message when fieldError is provided', () => {
    const errorMessage = 'This field is required';
    render(
      <Input
        {...defaultProps}
        fieldError={{ message: errorMessage, type: 'required' }}
      />
    );
    const inputElement = screen.getByLabelText(/test input/i);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input {...defaultProps} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('triggers onChange event when input value changes', async () => {
    const handleChange = jest.fn();
    render(<Input {...defaultProps} onChange={handleChange} />);
    const inputElement = screen.getByLabelText(/test input/i);
    await userEvent.type(inputElement, 'Hello');
    expect(handleChange).toHaveBeenCalledTimes(5);
  });
});
