import NextAuth from 'next-auth/next';

import { IEducation, IWorkExperience } from '@/interfaces/profile';

declare module 'next-auth' {
  interface Session {
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
}

declare module 'next-auth/jwt' {
  interface JWT {
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
}
