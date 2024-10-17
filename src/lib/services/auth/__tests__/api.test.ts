import { BASE_URL, login } from '../api';
import { ILoginPayload, ILoginResponse } from '@/lib/types/auth';

const mockPayload: ILoginPayload = {
  username: 'testuser',
  password: 'testpassword',
};

const mockResponse: ILoginResponse = {
  accessToken: 'mockToken123',
  email: 'testuser@example.com',
  firstName: 'Test',
  gender: 'non-binary',
  id: 123,
  image: 'http://example.com/image.jpg',
  lastName: 'User',
  refreshToken: 'mockRefreshToken123',
  username: 'testuser',
};

describe('login', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send a POST request to the correct URL with the correct headers and body', async () => {
    await login(mockPayload);

    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockPayload),
    });
  });

  it('should return the correct response data', async () => {
    const response = await login(mockPayload);

    expect(response).toEqual(mockResponse);
  });
});
