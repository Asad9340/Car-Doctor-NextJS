'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const NavBar = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <div>
        <section className="fixed top-0 left-0 w-full z-50 bg-white">
          <nav className="flex justify-between text-white max-w-7xl mx-auto ">
            <div className="px-5 xl:px-12 py-2 md:py-4 flex w-full items-center">
              <Link className="text-3xl font-bold font-heading" href="/">
                <Image
                  className="w-[70px] h-[50px] object-contain"
                  src="/assets/logo.svg"
                  width={107}
                  height={87}
                  alt="Car Doctor Logo"
                />
              </Link>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link className="font-semibold text-lg text-[#444]" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-lg text-[#444]"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-lg text-[#444]"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <a className="font-semibold text-lg text-[#444]" href="/blog">
                    Blog
                  </a>
                </li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5">
                {status === 'authenticated' ? (
                  <button className="px-6 py-2 border border-[#FF3811] font-semibold text-lg rounded-md text-[#FF3811] hover:bg-[#ff3911d3] hover:text-white transition duration-300">
                    LogOut
                  </button>
                ) : (
                  <div className="flex gap-3 items-center justify-center">
                    <Link
                      href="/sign-in"
                      className="px-6 py-2 text-lg text-white  font-semibold  bg-[#FF3811] rounded-md hover:bg-[#e6310f] transition duration-300"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/sign-up"
                      className="px-6 py-2 text-lg text-[#FF3811] border border-[#FF3811] rounded-md hover:bg-[#ff3911d3] hover:text-white  font-semibold  transition duration-300"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}

                <button className="px-6 py-2 border border-[#FF3811] font-semibold text-lg rounded-md text-[#FF3811] hover:bg-[#ff3911d3] hover:text-white transition duration-300">
                  Appointment
                </button>
              </div>
            </div>
            <a className="xl:hidden flex mr-6 items-center" href="#">
              <span className="text-red-500">burger</span>
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
