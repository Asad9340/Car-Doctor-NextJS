'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const SignInForm = () => {
  const router = useRouter();
  const handleUserSignIn =async event => {
    event.preventDefault();
    const userEmail = event.target.userEmail.value;
    const userPassword = event.target.userPassword.value;
    try {
      const response = await signIn('credentials', { email: userEmail, password: userPassword, callbackUrl: '/', redirect: false });
      if (response.ok) {
        toast.success('Sign In Successfully')
        router.push('/')
        event.target.reset();
      } else {
        toast.error('Authentication Failed...')
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error('Error occurred. Try again latter...')
    }
  };
  return (
    <form
      onSubmit={handleUserSignIn}
      className="flex flex-col gap-4 md:gap-8 w-full"
    >
      <div className="flex flex-col gap-4 ">
        <label
          className="text-lg font-semibold text-[#444]"
          htmlFor="userEmail"
        >
          Email
        </label>
        <input
          className="px-4 md:px-6 py-3 md:py-4 rounded-xl border border-[#E8E8E8] text-[#A2A2A2] text-base"
          type="email"
          placeholder="Your Email"
          name="userEmail"
        />
      </div>
      <div className="flex flex-col gap-4 ">
        <label
          className="text-lg font-semibold text-[#444]"
          htmlFor="userPassword"
        >
          Password
        </label>
        <input
          className="px-4 md:px-6 py-3 md:py-4 rounded-xl border border-[#E8E8E8] text-[#A2A2A2] text-base"
          type="password"
          placeholder="Your Password"
          name="userPassword"
        />
      </div>
      <div>
        <button
          type="submit"
          className="rounded-[5px] bg-[#FF3811] px-[25px] py-[15px] text-white text-xl font-semibold w-full"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
