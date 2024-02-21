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
      <div className="flex flex-col w-full justify-center items-center mt-3">
        <div className="text-center flex flex-col gap-2 mb-2">
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
                      className="w-[700px] h-[500px] object-cover object-top lg:block hidden"
                    />
                    <div className="mt-4 flex flex-col flex-wrap ml-6">
                      <h1 className="text-left text-white">
                        <h1 className="font-bold text-2xl">{item.title}</h1>
                      
                        <p className="text-sm mt-3 mb-3">{item.description}</p>
                      </h1>
                    </div>
                    <img
                      src={item.image}
                      alt={`Step ${index + 1} image`}
                      className="w-screen h-screen object-cover object-top lg:hidden block"
                    />
                  </div>
                </div>
            ))}
      </div>
    );
  };
  
  export default Git;  