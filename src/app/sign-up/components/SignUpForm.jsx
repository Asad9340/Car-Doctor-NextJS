"use client";
import { registerUser } from "../../actions/auth/registerUser";

const SignUpForm = () => {
  const handleSignUp = async(e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const userPassword = form.userPassword.value;

  await  registerUser({userName, userEmail, userPassword})
    form.reset();
  }
  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4 md:gap-8 w-full">
      <div className="flex flex-col gap-2 md:gap-4">
        <label className="text-lg font-semibold text-[#444]" htmlFor="userName">
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
          type="submit"
          className="rounded-[5px] bg-[#FF3811] px-[25px] py-[15px] text-white text-xl font-semibold w-full"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
