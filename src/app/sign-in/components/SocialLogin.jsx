"use client"
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const handleSocialMediaLogin =async (providerName)=>{
    const result = await signIn(providerName,{redirect:false});
    console.log(result)
  }
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
}

export default SocialLogin
