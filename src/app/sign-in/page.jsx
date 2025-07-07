import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { FaGoogle } from 'react-icons/fa';
import SignInForm from './components/SignInForm';
const SignIn = () => {
  return (
    <div className="px-5 xl:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-16 justify-center items-center">
        <div>
          <Image
            className="w-full h-full object-cover object-center"
            src={'/assets/images/login/login.svg'}
            width={460}
            height={520}
            alt="register image"
          />
        </div>
        <div className="p-10 md:p-16 flex flex-col justify-center items-center gap-6 md:gap-10 border border-[#D0D0D0] rounded-xl w-full">
          <h2 className="text-4xl font-semibold text-[#444] text-center">
            Sign In
          </h2>
          <SignInForm />
          <div className="flex flex-col gap-4 md:gap-8 text-center my-4 md:my-8">
            <p className="font-medium text-lg text-[#444]">Or Sign Up with</p>
            <div className=" flex gap-3 md:gap-6 items-center justify-center">
              <FaFacebook className="text-2xl md:text-4xl" />
              <ImLinkedin className="text-2xl md:text-4xl" />
              <FaGoogle className="text-2xl md:text-4xl" />
            </div>
            <p className="text-lg text-[#737373] leading-[30px]">
              Have an account?{' '}
              <Link
                href="/sign-up"
                className="font-semibold text-[#FF3811] underline cursor-pointer"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
