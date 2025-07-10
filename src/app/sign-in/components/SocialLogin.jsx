'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  const router = useRouter();
  const handleSocialMediaLogin = async providerName => {
    await signIn(providerName, { callbackUrl: '/' }); 
  };
  return (
    <>
      <FaGithub
        onClick={() => handleSocialMediaLogin('github')}
        className="text-2xl md:text-4xl"
      />
      <FaGoogle
        onClick={() => handleSocialMediaLogin('google')}
        className="text-2xl md:text-4xl"
      />
    </>
  );
};

export default SocialLogin;
