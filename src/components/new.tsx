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
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));
  return (
    <div
      className="flex flex-col w-full justify-center items-center mt-3 bg-blue px-5 pb-3 text-white"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
      }}
    >
      <div className="text-center flex items-center flex-col sm:flex-row gap-2 mb-2 justify-between">
        <Image
          src="/1stlogo.png"
          alt="e"
          width={300}
          height={100}
          className="w-full h-[100px] hidden sm:block"
        />
        <div>
          <div className="flex justify-center items-center w-full sm:hidden">
            <Carousel className="w-full text-black" plugins={[plugin.current]}>
              <CarouselContent>
                <CarouselItem className="flex justify-center items-center w-full">
                  {" "}
                  <Image
                    src="/logo11.png"
                    alt="e"
                    width={200}
                    height={200}
                    className="w-fit h-fit"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center w-full">
                  {" "}
                  <Image
                    src="/logo22.png"
                    alt="e"
                    width={200}
                    height={200}
                    className="w-fit h-fit"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center w-full">
                  <Image
                    src="/100.png"
                    alt="e"
                    width={200}
                    height={200}
                    className="w-fit h-fit"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center w-full">
                  <Image
                    src="/google.png"
                    alt="e"
                    width={200}
                    height={200}
                    className="w-fit h-fit"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mt-3">
            State-of-the-Art Car Wash Facilities
          </h1>
          <div>
            <Tabs defaultValue="account" className="w-fit">
              <TabsList className="h-fit">
                <TabsTrigger value="account" className="">
                  50-Foot Hand <br className="sm:hidden" /> Wash Tunnel
                </TabsTrigger>
                <TabsTrigger value="password">
                  5 Self-Service <br className="sm:hidden" /> Bays (Open 24 Hrs)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="w-full sm:w-[730px]">
                Indulge your vehicle in the ultimate pampering experience at
                Wash Me Car Wash. Our 50-foot hand wash tunnel combines
                cutting-edge technology with a gentle touch, ensuring a pristine
                finish every time. No brushes here – just a safe and effective
                brush-free system. Simply put your vehicle in neutral, relax,
                and let Wash Me Car Wash elevate your car care routine.
              </TabsContent>
              <TabsContent value="password" className="w-full sm:w-[730px]">
                Take control of your car care journey with Wash Me Car
                Wash&lsquo;s five self-service bays, available 24/7 for your
                convenience. Whether you&lsquo;re driving a car, motorcycle, or
                towing a trailer, our self-service bays cater to all your needs.
                Enjoy a bright and clean environment, equipped with
                user-friendly tools that make maintaining your vehicle a breeze.
                At Wash Me Car Wash, it&lsquo;s more than just self-service –
                it&lsquo;s a personalized experience designed for you.
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <Image
          src="/100.png"
          alt="e"
          width={200}
          height={100}
          className="w-full h-[100px] hidden sm:block"
        />
        <Image
          src="/google.png"
          alt="e"
          width={200}
          height={100}
          className="w-full h-[100px] hidden sm:block"
        />
      </div>

      <div className=" w-full justify-center items-center flex text-black">
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
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              <img
                alt="image1"
                src="/fot.png"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              <img
                alt="image2"
                src="/fet.png"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              <img
                alt="image3"
                src="/hou.jpg"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              <img
                alt="image4"
                src="/moter.png"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              <img
                alt="image5"
                src="/sddsfaa.png"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              <img
                alt="image6"
                src="/phone.jpg"
                className="w-[365px] object-cover object-center h-full rounded-xl border-2 border-white"
              />
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
