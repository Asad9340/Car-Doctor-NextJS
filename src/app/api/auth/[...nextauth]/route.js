import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SignInUser } from './../../../actions/auth/SignInUser';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const user = await SignInUser(credentials);
        if (user) {
          return user.user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn:'/sign-in'
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
