import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '../index';

describe('Loader', () => {
  it('renders the loader with default props', () => {
    render(<Loader />);
    const loaderElement = screen.getByRole('progressbar');
    expect(loaderElement).toBeInTheDocument();
  });

  it('renders the loader with custom size and color', () => {
    render(<Loader size={50} color='secondary' />);
    const loaderElement = screen.getByRole('progressbar');
  });
});
