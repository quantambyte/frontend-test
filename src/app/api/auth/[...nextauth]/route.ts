import NextAuth from 'next-auth';
import { options } from './options';

/**
 * NextAuth handler for authentication routes.
 * @type {import('next').NextApiHandler}
 */
const handler = NextAuth(options);

/**
 * Exported handler for GET and POST requests.
 * @type {import('next').NextApiHandler}
 */
export { handler as GET, handler as POST };
