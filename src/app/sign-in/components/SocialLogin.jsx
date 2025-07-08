"use client"
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const handleSocialMediaLogin = (providerName)=>{
    console.log(providerName);
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
