import { getServerSession, type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

/**
 * NextAuth configuration options.
 * @type {NextAuthOptions}
 */
const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      /**
       * Authorize user with provided credentials.
       * @param {any} credentials - The user credentials.
       * @returns {Promise<any>} The authorized user.
       */
      async authorize(credentials: any) {
        return credentials;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    /**
     * Redirect callback.
     * @param {Object} param - The parameter object.
     * @param {string} param.url - The URL to redirect to.
     * @returns {Promise<string>} The URL to redirect to.
     */
    async redirect({ url }) {
      return url;
    },
    /**
     * JWT callback.
     * @param {Object} param - The parameter object.
     * @param {any} param.token - The current token.
     * @param {any} param.user - The user object.
     * @param {string} param.trigger - The trigger event.
     * @param {any} param.session - The session object.
     * @param {any} param.account - The account object.
     * @returns {Promise<any>} The updated token.
     */
    async jwt({ token, user, trigger, session, account }) {
      if (account) {
        return { ...token, ...user };
      }

      if (trigger === 'update') {
        return { ...token, ...user, ...session };
      }
    },
    /**
     * Session callback.
     * @param {Object} param - The parameter object.
     * @param {any} param.session - The current session.
     * @param {any} param.token - The token object.
     * @returns {Promise<any>} The updated session.
     */
    async session({ session, token }) {
      session = token as any;
      return session;
    },
  },
};

/**
 * Get the server session using the configured options.
 * @returns {Promise<any>} The server session.
 */
function auth() {
  return getServerSession(options);
}

export { auth, options };
