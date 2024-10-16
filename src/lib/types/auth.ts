export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  username: string;
}
