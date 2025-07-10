import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { SignInUser } from './../app/actions/auth/SignInUser';
import { signIn } from 'next-auth/react';
import dbConnect, { allCollectionName } from './dbConnect';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        const user = await SignInUser(credentials);
        return user?.user || null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        const { providerAccountId, provider } = account;
        const { email, image, name } = user;
        const userCollection = await dbConnect(allCollectionName.userCollection);
        const isUserExist = await userCollection.findOne({ providerAccountId });
        if (!isUserExist) {
          const payload = {
            providerAccountId,
            provider,
            email,
            image,
            name,
          };
          await userCollection.insertOne(payload);
        }
      }
      return true;
    }
  },
};
