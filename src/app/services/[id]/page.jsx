import { ObjectId } from 'mongodb';
import Image from 'next/image';
import dbConnect, { allCollectionName } from '../../../lib/dbConnect';

const ServiceDetails = async ({ params }) => {
  // const { id } = params;
  // const serviceCollection = await dbConnect(
  //   allCollectionName.serviceCollection
  // );
  // const serviceData = await serviceCollection.findOne({
  //   _id: new ObjectId(id),
  // });

  // if (!serviceData) {
  //   return (
  //     <div className="max-w-7xl mx-auto py-10 px-4 text-center text-xl text-red-500">
  //       Service not found.
  //     </div>
  //   );
  // }

  // const { title, img, description, price, facility = [] } = serviceData;

  return (
    <div className="px-5 xl:px-12 py-6 max-w-7xl mx-auto">
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover object-center"
          src="/assets/images/banner/4.jpg"
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
    </div>
  );
};

export default ServiceDetails;
