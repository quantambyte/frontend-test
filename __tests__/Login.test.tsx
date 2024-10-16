import { render, screen } from '@testing-library/react';
import Login from '@/app/login/page';

it('renders the login page', () => {
  render(<Login />);
  const loginPage = screen.getByTestId('login-page');
  expect(loginPage).toBeInTheDocument();
});
