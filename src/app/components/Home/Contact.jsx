import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
const Contact = () => {
  return (
    <div className=" xl:px-8 max-w-7xl mx-auto my-8 md:my-[60px] ">
      <div className="flex  flex-wrap gap-7 mx-6 md:gap-14 items-center justify-center bg-[#151515] px-8 md:px-16 py-10 md:py-20 rounded-xl ">
        <div className="flex gap-5 items-center justify-center">
          <div>
            <FaRegCalendarAlt className="text-white text-2xl " />
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-base font-medium text-white ">
              We are open monday-friday
            </p>
            <p className="text-2xl font-bold text-white ">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div>
            <IoCall className="text-white text-2xl " />
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-base font-medium text-white ">
              Have a question?
            </p>
            <p className="text-2xl font-bold text-white ">+2546 251 2658</p>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div>
            <FaLocationDot className="text-white text-2xl " />
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-base font-medium text-white ">
              Need a repair? our address
            </p>
            <p className="text-2xl font-bold text-white ">
              Liza Street, New York
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
