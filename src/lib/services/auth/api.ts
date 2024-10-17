import { ENVIRONMENT_VARIABLES } from '@/lib/config';
import { ILoginPayload, ILoginResponse } from '@/lib/types/auth';

export const { BASE_URL } = ENVIRONMENT_VARIABLES;

/**
 * Sends a login request to the authentication API.
 *
 * @async
 * @function login
 * @param {ILoginPayload} data - The login credentials payload.
 * @returns {Promise<ILoginResponse>} The response from the login API.
 */
export async function login(data: ILoginPayload): Promise<ILoginResponse> {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return (await response.json()) as ILoginResponse;
}
