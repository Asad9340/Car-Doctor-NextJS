import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { FaGoogle } from 'react-icons/fa';
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
        <div className="p10 md:p-16 flex flex-col justify-center items-center gap-6 md:gap-10 border border-[#D0D0D0] rounded-xl">
          <h2 className="text-4xl font-semibold text-[#444] text-center">
            Sign Up
          </h2>
          <div className="flex flex-col gap-4 md:gap-8 w-full">
            <div className="flex flex-col gap-2 md:gap-4">
              <label
                className="text-lg font-semibold text-[#444]"
                htmlFor="userName"
              >
                Name
              </label>
              <input
                className="px-4 md:px-6 py-3 md:py-4 rounded-xl border border-[#E8E8E8] text-[#A2A2A2] text-base w-full"
                type="text"
                placeholder="Your Name"
                name="userName"
              />
            </div>
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
                type="button"
                className="rounded-[5px] bg-[#FF3811] px-[25px] py-[15px] text-white text-xl font-semibold w-full"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 text-center my-4 md:my-8">
            <p className="font-medium text-lg text-[#444]">Or Sign Up with</p>
            <div className=" flex gap-3 md:gap-6 items-center justify-center">
              <FaFacebook className="text-2xl md:text-4xl" />
              <ImLinkedin className="text-2xl md:text-4xl" />
              <FaGoogle className="text-2xl md:text-4xl" />
            </div>
            <p className="text-lg text-[#737373] leading-[30px]">
              Already have an account?{' '}
              <Link href="/sign-in" className="font-semibold text-[#FF3811] ">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
