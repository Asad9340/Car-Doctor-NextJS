import Image from 'next/image';
import Link from 'next/link';
import SignUpForm from './components/SignUpForm';
import SocialLogin from '../sign-in/components/SocialLogin';
const SignUp = () => {
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
            Sign Up
          </h2>
          <SignUpForm />
          <div className="flex flex-col gap-4 md:gap-8 text-center my-4 md:my-8">
            <p className="font-medium text-lg text-[#444]">Or Sign Up with</p>
            <div className=" flex gap-3 md:gap-6 items-center justify-center">
              <SocialLogin />
            </div>
            <p className="text-lg text-[#737373] leading-[30px]">
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className="font-semibold text-[#FF3811] underline  cursor-pointer"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
