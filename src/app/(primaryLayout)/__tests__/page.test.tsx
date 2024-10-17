import Home from '../page';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/constants/routes';

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('Home', () => {
  it('should redirect to the PRODUCTS route', async () => {
    await Home();
    expect(redirect).toHaveBeenCalledWith(ROUTES.PRODUCTS);
  });
});
