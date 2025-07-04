import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Hero = () => {
  const ImageList = [
    '/assets/images/homeCarousel/1.jpg',
    '/assets/images/homeCarousel/2.jpg',
    '/assets/images/homeCarousel/3.jpg',
    '/assets/images/homeCarousel/4.jpg',
  ];

  return (
    <div className="flex items-center justify-center">
      <Carousel className="w-full max-w-7xl mx-auto px-2 md:px-5">
        <CarouselContent>
          {ImageList?.map((imgSrc, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative h-[400px] md:h-[550px] w-full">
                    <Image
                      src={imgSrc}
                      alt={`Carousel Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover rounded-xl object-center"
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl" />
                    <div className="absolute top-1/2 -translate-y-1/2  md:left-[100px] max-w-[460px] flex flex-col gap-4">
                      <h2 className="text-4xl md:text-6xl text-[#FFF] font-bold leading-[50px] md:leading-[65px] text-center md:text-left">
                        Affordable Price For Car Servicing
                      </h2>
                      <p className="text-[18px] text-[#FFF] leading-[30px]  text-center md:text-left">
                        There are many variations of passages of available, but
                        the majority have suffered alteration in some form
                      </p>
                      <div className="flex gap-5 justify-center md:justify-start">
                        <button
                          type="button"
                          className="rounded-[5px] bg-[#FF3811] px-[25px] py-[15px] text-white"
                        >
                          Discover More
                        </button>
                        <button
                          type="button"
                          className="rounded-[5px] border border-[#fff] px-[25px] py-[15px] text-white"
                        >
                          Latest Project
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
