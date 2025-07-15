import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
const Testimonial = () => {
  return (
    <div className="px-5 xl:px-12 py-6 max-w-7xl mx-auto my-8 md:my-[60px]">
      <div className="flex flex-col items-center gap-3 md:gap-5 mb-8 md:mb-10 max-w-[700px] mx-auto">
        <h4 className="text-xl font-bold text-[#FF3811]">Testimonial</h4>
        <h2 className=" text-3xl md:text-[45px] font-bold text-[#151515] leading-normal">
          What Customer Says
        </h2>
        <p className="text-base text-[#737373] leading-[30px] text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 ">
        <div className="flex flex-col gap-3 md:ga-5">
          <div className="flex justify-between item-center gap-4 md:gap-6 pr-6 md:pr-20">
            <div className="flex gap-5 item-center">
              <Image
                className="w-[60px] h-[60px] object-cover rounded-full "
                src="https://i.postimg.cc/6QWLjNS5/Ellipse-2.jpg"
                width={60}
                height={60}
                alt="reviewer image"
              />
              <div className="flex flex-col gap-2">
                <h4 className=" text-2xl font-bold text-[#444]">
                  Awlad Hossain
                </h4>
                <p className=" text-xl font-semibold text-[#444]">
                  Businessman
                </p>
              </div>
            </div>

            <div>
              <Image
                className="w-[56px] h-[56px] object-cover rounded-full"
                src="https://i.postimg.cc/zB7BmPb4/quote-1.png"
                width={56}
                height={56}
                alt="quote image"
              />
            </div>
          </div>
          <div>
            <p className="text-base text-[#737373] leading-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className="flex flex-row gap-0 items-center ">
            <FaStar className="text-[#FF912C] text-xl" />
            <FaStar className="text-[#FF912C] text-xl" />
            <FaStar className="text-[#FF912C] text-xl" />
            <FaStar className="text-[#FF912C] text-xl" />
            <FaStarHalfAlt className="text-[#FF912C] text-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:ga-5">
          <div className="flex justify-between item-center gap-4 md:gap-6 pr-6 md:pr-20">
            <div className="flex gap-5 item-center">
              <Image
                className="w-[60px] h-[60px] object-cover rounded-full "
                src="https://i.postimg.cc/dtMXPtvP/profile.jpg"
                width={60}
                height={60}
                alt="reviewer image"
              />
              <div className="flex flex-col gap-2">
                <h4 className=" text-2xl font-bold text-[#444]">
                  Md Asadul Islam
                </h4>
                <p className=" text-xl font-semibold text-[#444]">Student</p>
              </div>
            </div>

            <div>
              <Image
                className="w-[56px] h-[56px] object-cover rounded-full "
                src="https://i.postimg.cc/zB7BmPb4/quote-1.png"
                width={56}
                height={56}
                alt="quote image"
              />
            </div>
          </div>
          <div>
            <p className="text-base text-[#737373] leading-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className="flex flex-row gap-0 item-center ">
            <FaStar className="text-[#FF912C] text-xl" />
            <FaStar className="text-[#FF912C] text-xl" />
            <FaStar className="text-[#FF912C] text-xl" />
            <FaStar className="text-[#FF912C] text-xl" />
            <FaStarHalfAlt className="text-[#FF912C] text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
