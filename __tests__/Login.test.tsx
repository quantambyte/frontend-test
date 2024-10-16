import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '@/app/login/page';
import { login } from '@/lib/services/auth/api';
import { signIn } from 'next-auth/react';
import userEvent from '@testing-library/user-event';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

jest.mock('../src/lib/services/auth/api', () => ({
  login: jest.fn(),
}));

describe('Login Component', () => {
  beforeEach(() => {
    render(<Login />);
    jest.clearAllMocks();
  });

  it('renders the login page with form fields', () => {
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('displays validation errors when fields are empty', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => {
      expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    });
  });

  it('disables the submit button and shows loading state while submitting', async () => {
    userEvent.type(screen.getByLabelText(/Username/i), 'emilys');
    userEvent.type(screen.getByLabelText(/Password/i), 'emilyspass');

    const submitButton = screen.getByRole('button', { name: /Login/i });

    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();

    await waitFor(() => expect(submitButton).not.toBeDisabled());
  });

  it.skip('calls the login function and signs in the user when valid data is provided', async () => {
    (login as jest.Mock).mockResolvedValueOnce({
      accessToken: 'mockAccessToken',
    });

    render(<Login />);

    userEvent.type(screen.getByLabelText(/Username/i), 'emilys');
    userEvent.type(screen.getByLabelText(/Password/i), 'emilyspass');

    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith({
        username: 'emilys',
        password: 'emilyspass',
      });
    });

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        accessToken: 'mockAccessToken',
      });
    });
  });

  it.skip('redirects the user to the products page after successful login', async () => {
    (login as jest.Mock).mockResolvedValueOnce({
      accessToken: 'mockAccessToken',
    });

    render(<Login />);

    userEvent.type(screen.getByLabelText(/Username/i), 'emilys');
    userEvent.type(screen.getByLabelText(/Password/i), 'emilyspass');

    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => {
      expect(login).toHaveBeenCalled();
      expect(signIn).toHaveBeenCalled();
    });
  });
});
