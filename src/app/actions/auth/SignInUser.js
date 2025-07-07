'use server';

import dbConnect, { allCollectionName } from '../../../lib/dbConnect';
import bcrypt from 'bcryptjs';

export const SignInUser = async ({ email, password }) => {
  try {
    const userCollection = await dbConnect(allCollectionName.userCollection);
    const user = await userCollection.findOne({ email });

    if (!user) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return null;
    }

    const { password: _, ...sanitizedUser } = user;

    return {
      success: true,
      user: sanitizedUser,
    };
  } catch (error) {
    console.error('SignInUser error:', error);
    return null;
  }
};
