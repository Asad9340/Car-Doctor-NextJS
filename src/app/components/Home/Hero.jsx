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
    <div className="flex items-center justify-center ">
      <Carousel className="w-full max-w-7xl mx-auto px-2 md:px-5">
        <CarouselContent>
          {ImageList?.map((imgSrc, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="h-[400px] md:h-[550px] w-full">
                    <Image
                      src={imgSrc}
                      alt={`Carousel Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover rounded-xl object-center"
                    />
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
