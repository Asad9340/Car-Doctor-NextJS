import Link from 'next/link';
const NavBar = () => {
  return (
    <div>
      <div>
        <section>
          <nav className="flex justify-between text-white max-w-7xl mx-auto">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link className="text-3xl font-bold font-heading" href="/">
                <img className="w[80px]" src="../../assets/logo.svg" alt="" />
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
                <button className="px-8 py-4 border border-[#FF3811] font-semibold text-lg rounded-md text-[#FF3811] hover:bg-[#ff3911d3] hover:text-white transition duration-300">
                  Appointment
                </button>
              </div>
            </div>
            <a className="xl:hidden flex mr-6 items-center" href="#">

            <span className='text-red-500'>burger</span>
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
