import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useRef } from "react";
import Image from "next/image";

const New: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div
      className="flex flex-col w-full justify-center items-center mt-3 bg-blue px-5 pb-3 text-white"
      style={{
        backgroundImage: "url(/bubbles.png)",
      }}
    >
      <div className="text-center flex flex-col gap-2 mb-2">
        <p className="tracking-widest text-blue">WHAT WE DO</p>
        <h1 className="text-2xl sm:text-3xl font-bold">
          From Tire Clean to Dryer
        </h1>
        <div>
          <Tabs defaultValue="account" className="w-fit">
 <TabsList>
              <TabsTrigger value="account">
                50-Foot Hand Wash Tunnel
              </TabsTrigger>
              <TabsTrigger value="password">
                Five Self-Service Bays (Open 24 Hours)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Indulge your vehicle in the ultimate pampering experience at Wash
              Me Car Wash. Our 50-foot hand wash tunnel combines cutting-edge
              technology with a gentle touch, ensuring a pristine finish every
              time. No brushes here – just a safe and effective brush-free
              system. Simply put your vehicle in neutral, relax, and let Wash Me
              Car Wash elevate your car care routine.
            </TabsContent>
            <TabsContent value="password">
              Take control of your car care journey with Wash Me Car Wash's five
              self-service bays, available 24/7 for your convenience. Whether
              you're driving a car, motorcycle, or towing a trailer, our
              self-service bays cater to all your needs. Enjoy a bright and
              clean environment, equipped with user-friendly tools that make
              maintaining your vehicle a breeze. At Wash Me Car Wash, it's more
              than just self-service – it's a personalized experience designed
              for you.
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {/* <Carousel
         opts={{
        align: "start",
      }}
          plugins={[plugin.current]}
          className="h-full w-full text-black"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex flex-row gap-5 items-center justify-center">
            <CarouselItem className="bg-blue border-2 border-white rounded-xl h-fit text-white overflow-hidden shadow-xl">
                  <Image alt="image1" src="/fot.png" className="w-[300px] h-[300px]" width={5000000000000} height={5000000000000} />
            </CarouselItem>
            <CarouselItem className="bg-blue border-2 border-white rounded-xl h-fit text-white overflow-hidden shadow-xl">
                      <Image alt="image2" src="/fet.png" className="w-[300px] h-[300px]" width={5000000000000} height={5000000000000} />
            </CarouselItem>
            <CarouselItem className="bg-blue border-2 border-white rounded-xl h-fit text-white overflow-hidden shadow-xl">
                 <Image alt="image3" src="/hou.jpg" className="w-[300px] h-[300px]" width={5000000000000} height={5000000000000} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}

     <div className=" ml-6 w-full flex text-black">
     <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img alt="image1" src="/fot.png" className="w-[300px] object-cover rounded-xl border-2 border-white" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img alt="image2" src="/fet.png" className="w-[300px] object-cover rounded-xl border-2 border-white" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img alt="image3" src="/hou.jpg" className="w-[300px] object-cover rounded-xl border-2 border-white" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img alt="image4" src="/moter.png" className="w-[300px] object-cover rounded-xl border-2 border-white" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img alt="image5" src="/sddsfaa.png" className="w-[300px] object-cover rounded-xl border-2 border-white" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img alt="image6" src="/phone.jpg" className="w-[300px] object-cover object-center h-full rounded-xl border-2 border-white" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
     </div>
    </div>
  );
};

export default New;
