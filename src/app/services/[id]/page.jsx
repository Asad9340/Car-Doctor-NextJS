import { ObjectId } from 'mongodb';
import Image from 'next/image';
import dbConnect, { allCollectionName } from '../../../lib/dbConnect';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { FaFileAlt } from 'react-icons/fa';

const ServiceDetails = async ({ params }) => {
  const { id } =await params;
  const serviceCollection = await dbConnect(
    allCollectionName.serviceCollection
  );
  const singleServiceData = await serviceCollection.findOne({
    _id: new ObjectId(id),
  });
  const servicesData = await serviceCollection.find({}).toArray();
  if (!singleServiceData) {
    return (
      <div className="max-w-7xl mx-auto py-10 px-4 text-center text-xl text-red-500">
        Service not found.
      </div>
    );
  }

  const { title, img, description, price, facility = [] } = singleServiceData;
  return (
    <div className="px-5 xl:px-12 max-w-7xl mx-auto">
      {/* banner section  */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover object-center"
          src="/assets/images/checkout/checkout.png"
          width={1137}
          height={300}
          alt="banner-image"
        />
        <div className="absolute left-12 md:left-[100px] top-1/2 -translate-y-1/2 text-white z-10">
          <h2 className="text-3xl md:text-4xl font-bold">Service Details</h2>
        </div>
        <div className="absolute left-1/2 -bottom-2 z-10  -translate-x-1/2">
          <p
            className="text-base md:text-lg text-white font-base md:font-medium px-5 md:px-8 py-2.5 bg-no-repeat bg-center bg-contain"
            style={{
              backgroundImage: `url('https://i.postimg.cc/rw8yBzMc/Vector.png')`,
            }}
          >
            Home/Service Details
          </p>
        </div>
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              'linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)',
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 my-6 md:my-28 ">
        <div className="md:col-span-2">
          <div className="relative  rounded-xl overflow-hidden">
            <Image
              className="w-full max-h-[400px] object-cover"
              src="/assets/images/banner/3.jpg"
              width={752}
              height={400}
              alt="banner image"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-transparent"></div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h3 className="text-3xl md:text-4xl font-bold text-[#151515] mt-6 md:mt-12 ">
              Unique Car Engine Service
            </h3>
            <p className="text-base text-[#737373] leading-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-6">
              {facility?.map((item, index) => (
                <div
                  key={index}
                  className="p-6 md:p-10 rounded-xl bg-[#F3F3F3] border-t-2 border-t-[#FF3811] "
                >
                  <h5 className="text-xl font-bold text-[#444] ">
                    {item?.name}
                  </h5>
                  <p className="text-base text-[#737373] leading-[30px]">
                    {item?.details}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base text-[#737373] leading-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
          <div className="mt-6 md:mt-12 flex flex-col gap-4 md:gap-7">
            <h3 className="text-3xl md:text-4xl font-bold text-[#151515] mt-6 md:mt-12 ">
              3 Simple Steps to Process
            </h3>
            <p className="text-base text-[#737373] leading-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ">
              <div className="flex flex-col items-center justify-between gap-3 md:gap-6 p-6 md:p-10 rounded-xl bg-[#E8E8E8]">
                <div>
                  <Image
                    className="w-[83px] h-[83px] object-cover rounded-full"
                    src="https://i.postimg.cc/yxWV7hKc/Component-2-1.png"
                    width={83}
                    height={83}
                    alt="step one"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#444] uppercase">
                  Step One
                </h4>
                <p className="text-base text-[#737373] leading-[30px] text-center">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="flex flex-col items-center justify-between gap-3 md:gap-6 p-6 md:p-10 rounded-xl bg-[#E8E8E8]">
                <div>
                  <Image
                    className="w-[83px] h-[83px] object-cover rounded-full"
                    src="https://i.postimg.cc/Tw18bRsX/Component-3.png"
                    width={83}
                    height={83}
                    alt="step one"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#444] uppercase ">
                  Step Two
                </h4>
                <p className="text-base text-[#737373] leading-[30px]  text-center">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="flex flex-col items-center justify-between gap-3 md:gap-6 p-6 md:p-10 rounded-xl bg-[#E8E8E8]">
                <div>
                  <Image
                    className="w-[83px] h-[83px] object-cover rounded-full"
                    src="https://i.postimg.cc/d3ZzW5vH/Component-4.png"
                    width={83}
                    height={83}
                    alt="step one"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#444] uppercase ">
                  Step Two
                </h4>
                <p className="text-base text-[#737373] leading-[30px] text-center">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                className="w-full h-[400px] object-cover object-center rounded-xl"
                src="/assets/images/banner/2.jpg"
                width={752}
                height={400}
                alt="banner image"
              />
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background:
                    'linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)',
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 ">
          <div className="p-6 md:p-10 rounded-xl bg-[#F3F3F3]">
            <h3 className="text-2xl md:text-3xl font-bold text-[#151515] mb-3 md:mb-5">
              Services
            </h3>
            <div className="flex flex-col gap-3 md:gap-5">
              {servicesData?.map(serviceItem => (
                <Link
                  href={`/services/${serviceItem._id}`}
                  key={serviceItem._id}
                  className={`flex items-center justify-between gap-4 p-3 md:p-5  rounded-lg ${
                    serviceItem?.title === title ? 'bg-[#FF3811]' : 'bg-[#fff]'
                  }`}
                >
                  <p
                    className={`text-base font-semibold ${
                      serviceItem?.title === title
                        ? 'text-white'
                        : 'text-[#151515]'
                    }`}
                  >
                    {serviceItem.title}
                  </p>
                  <FiArrowRight
                    className={
                      serviceItem?.title === title
                        ? 'text-white'
                        : 'text-[#FF3811]'
                    }
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="p-6 md:p-10 rounded-xl bg-[#151515] flex flex-col gap-4 md:gap-5">
            <h3 className="text-2xl md:text-3xl font-bold text-[#FFF] mb-3 md:mb-5">
              Download
            </h3>
            <div className="flex items-center justify-between gap-3 md:gap-5">
              <div className="flex items-center gap-4 md:gap-5">
                <FaFileAlt className="text-3xl text-[#FFF]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#fff] ">
                    Our Brochure
                  </h3>
                  <p className="text-base text-[#A2A2A2]">Download</p>
                </div>
              </div>

              <div className="bg-[#FF3811] flex p-3 md:p-4 rounded-md">
                <FiArrowRight className="text-[#FFF]" />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 md:gap-5">
              <div className="flex items-center gap-4 md:gap-5">
                <FaFileAlt className="text-3xl text-[#FFF]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#fff] ">
                    Company Details
                  </h3>
                  <p className="text-base text-[#A2A2A2]">Download</p>
                </div>
              </div>

              <div className="bg-[#FF3811] flex p-3 md:p-4 rounded-md">
                <FiArrowRight className="text-[#FFF]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:gap-6 p-6 md:p-12 rounded-xl bg-[#151515]">
            <div>
              <div>
                <Image
                  className="w-full h-[72px] object-contain rounded-xl"
                  src="/assets/icons/carhandle.png"
                  width={130}
                  height={70}
                  alt="banner image"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#FFF] mb-3 md:mb-5">
                Car Doctor
              </h3>
            </div>
            <div>
              <p className="text-xl font-bold text-[#FFF] text-center">
                Need Help? We Are Here
              </p>
              <p className="text-xl font-bold text-[#FFF] text-center">
                To Help You
              </p>
            </div>
            <div>
              <div className="flex flex-col items-center justify-between gap-2 bg-[#fff] rounded-xl pt-4 px-6 md:px-10 pb-10 ">
                <p>
                  <span className="text-xl font-bold text-[#FF3811] ">
                    Car Doctor{' '}
                  </span>
                  <span className="text-xl font-bold text-[#151515] ">
                    Special
                  </span>
                </p>
                <p>
                  <span className="text-base font-bold text-[#737373] ">
                    Save up to{' '}
                  </span>
                  <span className="text-base font-bold text-[#FF3811] ">
                    60% off
                  </span>
                </p>
              </div>
              <div className='flex justify-center -mt-6 md:-mt-8'>
                <button
                  type="button"
                  className="rounded-[5px] bg-[#FF3811] px-[25px] py-[15px] text-white font-semibold text-lg"
                >
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
