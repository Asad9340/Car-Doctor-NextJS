import dbConnect, { allCollectionName } from '../../../lib/dbConnect';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import Link  from 'next/link';

const OurService = async () => {
  const servicesCollection = await dbConnect(
    allCollectionName.serviceCollection
  );
  const servicesData = await servicesCollection.find({}).toArray();
  return (
    <div className="px-5 xl:px-8 py-6 max-w-7xl mx-auto my-8 md:my-[60px]">
      <div className="flex flex-col items-center gap-3 md:gap-5 mb-8 md:mb-10 max-w-[700px] mx-auto">
        <h4 className="text-xl font-bold text-[#FF3811]">Service</h4>
        <h2 className="max-w-[376] text-3xl md:text-[45px] font-bold text-[#151515] leading-normal">
          Our Service Area
        </h2>
        <p className="text-base text-[#737373] leading-[30px] text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {servicesData?.map(serviceItem => (
          <div
            key={serviceItem._id}
            className="rounded-xl border border-[#E8E8E8] p-3 md:p-6 flex flex-col gap-2 md:gap-5 "
          >
            <div>
              <Image
                className="w-full h-[210px] object-cover rounded-xl "
                src={serviceItem.img}
                width={315}
                height={210}
                alt={serviceItem.title}
                unoptimized
              />
            </div>
            <h3 className="text-2xl text-[#444] font-bold ">
              {serviceItem.title}
            </h3>
            <div className="flex items-center justify-between gap-2">
              <p className="text-xl text-[#FF3811] font-semibold ">
                Price: ${serviceItem.price}
              </p>
              <div className=" border border-red-500 rounded-full shadow-lg text-[#FF3811] hover:bg-[#FF3811] hover:text-white  transition-all duration-300 ease-in-out">
                <Link href={`/services/${serviceItem._id}`} className='p-3 flex w-10 h-10 items-center justify-center'>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
