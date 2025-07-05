import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="px-5 xl:px-8 py-6 max-w-7xl mx-auto my-8 md:my-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14">
        <div className="relative">
          <Image
            width={460}
            height={467}
            alt="person"
            className="rounded-lg h-[473px] object-cover"
            src="/assets/images/about_us/person.jpg"
          />
          <Image
            width={330}
            height={300}
            alt="parts"
            className="rounded-xl border-[10px] border-[#FFF] absolute right-0 -bottom-4"
            src="/assets/images/about_us/parts.jpg"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div>
            <h5 className="text-xl font-bold text-[#FF3811] ">About Us</h5>
          </div>
          <div className="flex flex-col gap-6 justify-between">
            <h2 className="max-w-[376] text-3xl md:text-[45px] font-bold text-[#151515] leading-normal">
              We are qualified & of experience in this field
            </h2>
            <div className="flex flex-col justify-center gap-4 max-w-[490px] ">
              <p className="text-base text-[#737373] leading-[30px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p className="text-base text-[#737373] leading-[30px]">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>
            <button
              type="button"
              className="rounded-[5px] bg-[#FF3811] px-[25px] py-[15px] text-white max-w-[200px] text-center"
            >
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
