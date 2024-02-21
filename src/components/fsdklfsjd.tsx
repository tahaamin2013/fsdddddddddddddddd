import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";
  import { Check, Clock1 } from "lucide-react";
  import Image from "next/image";
  import React, { useRef } from "react";
  
  const Git: React.FC = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  
    const data = [
      {
        image: "/Gift.png",
        title: "Step 1: Washing the Wheels",
        description:
          "In the first step, attention is given to the wheels of the car. This involves a thorough cleaning process to remove dirt, brake dust, and other debris from the wheels, ensuring a fresh and polished look.",
      },
    ];
  
    return (
     <>
      <div className="flex flex-col w-full justify-center gap-11 items-center mt-3">
        <div className="text-center flex flex-col gap-5 mb-2">
          <p className="tracking-widest text-blue">WHAT WE DO</p>
          <h1 className="text-2xl sm:text-3xl font-bold">
          Step-by-Step Guide to Washing Success
          </h1>
        </div>
            {data.map((item, index) => (

                  <div
                  className="bg-blue mx-5 rounded-xl h-[600px] sm:h-[400px] text-white overflow-hidden shadow-xl"
                  style={{
                    backgroundImage: "url(http://localhost:3000/bubbles.png)",
                  }}
                >
                  <div className="z-10 flex flex-col lg:flex-row justify-center h-full text-left">
                  <img
                      src='gift2.png'
                      alt={`Step ${index + 1} image`}
                      className="w-[730px] h-[460px] lg:block hidden"
                    />
 <div>
  <p>1. Scan QR: Utilize your smartphone camera to scan the QR code corresponding to your desired membership level or by clicking these links:

Compact Club

Mid Size Club

SUV Truck Club

2. Enjoy the Benefits: Instantly access our exclusive membership benefits without the need to download the app. Simply follow the link provided after scanning the QR code.</p>
 </div>
                     
                  </div>
                </div>

            ))}
      </div>
      <div className="flex flex-col w-full justify-center gap-11 items-center mt-3">
        <div className="text-center flex flex-col gap-5 mb-2">
          <p className="tracking-widest text-blue">WHAT WE DO</p>
          <h1 className="text-2xl sm:text-3xl font-bold">
          Step-by-Step Guide to Washing Success
          </h1>
        </div>
            {data.map((item, index) => (

                  <div
                  className="bg-blue mx-5 rounded-xl h-[600px] sm:h-[400px] text-white overflow-hidden shadow-xl"
                  style={{
                    backgroundImage: "url(http://localhost:3000/bubbles.png)",
                  }}
                >
                  <div className="z-10 flex flex-col lg:flex-row justify-center h-full text-left">
                    <img
                      src={item.image}
                      alt={`Step ${index + 1} image`}
                      className="w-[690px] h-[460px] lg:block hidden"
                    />
                           <img
                      src='gift2.png'
                      alt={`Step ${index + 1} image`}
                      className="w-[730px] h-[460px] ml-0 sm:ml-11 lg:block hidden"
                    />
                  </div>
                </div>

            ))}
      </div>
     </>
    );
  };
  
  export default Git;  