'use server';
import bcrypt from 'bcryptjs';
import dbConnect, { allCollectionName } from './../../../lib/dbConnect';

export const registerUser = async userData => {
  try {
    if (!userData.userName || !userData.userEmail || !userData.userPassword) {
      return { success: false, message: 'All fields are required' };
    }

    const userCollection = await dbConnect(allCollectionName.userCollection);

    const existUser = await userCollection.findOne({
      email: userData.userEmail,
    });
    if (existUser) {
      return { success: false, message: 'User already exists' };
    }

    const hashedPassword = await bcrypt.hash(userData.userPassword, 10);

    const result = await userCollection.insertOne({
      name: userData.userName,
      email: userData.userEmail,
      password: hashedPassword,
      createdAt: new Date(),
    });

    if (result.acknowledged) {
      return { success: true, message: 'User registered successfully' };
    } else {
      return { success: false, message: 'Failed to register user' };
    }
  } catch (error) {
    console.error('Register error:', error);
    return { success: false, message: 'Server error. Try again later.' };
  }
};
