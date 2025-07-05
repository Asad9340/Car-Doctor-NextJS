import { ObjectId } from 'mongodb';
import Image from 'next/image';
import dbConnect, { allCollectionName } from '../../../lib/dbConnect';

const ServiceDetails = async ({ params }) => {
  const { id } = params;
  const serviceCollection = await dbConnect(
    allCollectionName.serviceCollection
  );
  const serviceData = await serviceCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!serviceData) {
    return (
      <div className="max-w-7xl mx-auto py-10 px-4 text-center text-xl text-red-500">
        Service not found.
      </div>
    );
  }

  const { title, img, description, price, facility = [] } = serviceData;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Image and Title */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <Image
            src={img}
            alt={title}
            width={700}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
            unoptimized
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600 mb-6">{description}</p>
          <p className="text-2xl font-semibold text-[#FF3811]">
            Price: ${price}
          </p>
        </div>
      </div>

      {/* Facilities */}
      {facility.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facility.map((item, index) => (
              <div
                key={index}
                className="p-5 border border-gray-200 rounded-xl shadow-sm bg-white"
              >
                <h3 className="text-lg font-bold text-gray-700 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
