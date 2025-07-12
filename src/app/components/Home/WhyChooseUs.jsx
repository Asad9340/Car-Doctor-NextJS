import Image from 'next/image';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoIosTime } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi';
import { GiMechanicGarage } from 'react-icons/gi';
import { SiAdguard } from 'react-icons/si';
import { TbTruckDelivery } from 'react-icons/tb';
const WhyChooseUs = () => {
  return (
    <div className="px-5 xl:px-8 py-6 max-w-7xl mx-auto my-8 md:my-[60px]">
      <div className="flex flex-col items-center gap-3 md:gap-5 mb-8 md:mb-10 max-w-[700px] mx-auto">
        <h4 className="text-xl font-bold text-[#FF3811]">Core Features</h4>
        <h2 className="max-w-[376] text-3xl md:text-[45px] font-bold text-[#151515] leading-normal">
          Why Choose Us
        </h2>
        <p className="text-base text-[#737373] leading-[30px] text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-6 items-center justify-center">
        <div className="group min-w-[170px] border border-[#E8E8E8] rounded-xl hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white px-4 py-8 flex flex-col justify-center items-center ">
          <BsFillPeopleFill className="text-4xl group-hover:text-white" />
          <p className="group-hover:text-white text-lg font-bold text-[#444]">
            Expert Team
          </p>
        </div>
        <div className="group  min-w-[170px]  border border-[#E8E8E8] rounded-xl hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white px-4 py-8 flex flex-col justify-center items-center ">
          <IoIosTime className="text-4xl group-hover:text-white" />
          <p className="group-hover:text-white text-lg font-bold text-[#444]">
            Timely Delivery
          </p>
        </div>

        <div className="group  min-w-[170px]  border border-[#E8E8E8] rounded-xl hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white px-4 py-8 flex flex-col justify-center items-center ">
          <BiSupport className="text-4xl group-hover:text-white" />
          <p className="group-hover:text-white text-lg font-bold text-[#444]">
            24/7 Support
          </p>
        </div>

        <div className="group  min-w-[170px]  border border-[#E8E8E8] rounded-xl hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white px-4 py-8 flex flex-col justify-center items-center ">
          <GiMechanicGarage className="text-4xl group-hover:text-white" />
          <p className="group-hover:text-white text-lg font-bold text-[#444]">
            Best Equipment
          </p>
        </div>

        <div className="group  min-w-[170px]  border border-[#E8E8E8] rounded-xl hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white px-4 py-8 flex flex-col justify-center items-center ">
          <SiAdguard className="text-4xl group-hover:text-white" />
          <p className="group-hover:text-white text-lg font-bold text-[#444]">
            100% Guaranty
          </p>
        </div>
        <div className="group  min-w-[170px]  border border-[#E8E8E8] rounded-xl hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white px-4 py-8 flex flex-col justify-center items-center ">
          <TbTruckDelivery className="text-4xl group-hover:text-white" />
          <p className="group-hover:text-white text-lg font-bold text-[#444]">
            Timely Delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
