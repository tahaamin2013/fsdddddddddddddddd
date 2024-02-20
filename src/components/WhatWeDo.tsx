
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import { Check, Clock1 } from "lucide-react"
import Image from "next/image"
import React from 'react'

const WhatWeDo = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
  return (
    <div className='flex flex-col w-full justify-center items-center mt-3'>
        <div className='text-center flex flex-col gap-2 mb-2'>
        <p className='tracking-widest text-blue'>WHAT WE DO</p>
        <h1 className='text-2xl sm:text-3xl font-bold'>From Tire Clean to Dryer</h1>
        </div>

        <Carousel
      plugins={[plugin.current]}
      className="w-full md:w-[900px] lg:w-[1100px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      
      <CarouselContent>
      <CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden  pr-5 shadow-xl">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0  px-2 sm:px-0 text-black rounded-xl">
         <Image src="/washing-the-weels.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl capitalize">Step 1: Washing the Wheels</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">In the first step, attention is given to the wheels of the car. This involves a thorough cleaning process to remove dirt, brake dust, and other debris from the wheels, ensuring a fresh and polished look.</p>
            </h1>
         </div>
          </div>
  </div>
</div>
        </CarouselItem>
        <CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden  pr-5 shadow-xl">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0 px-2 sm:px-0 text-black rounded-xl">
         <Image src="/43.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl">Step 2: Darrin Carefully Prewashes the Lower Car</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">Darrin, presumably the car detailing professional, takes special care to prewash the lower parts of the car. This step is crucial for removing initial layers of grime and preparing the vehicle for a comprehensive cleaning.</p>
            </h1>
         </div>
          </div>
  </div>
</div>
        </CarouselItem>
        <CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden  pr-5 shadow-xl">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0 px-2 sm:px-0 text-black rounded-xl">
         <Image src="/full.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl">Step 3: Beginning of the Full Body Wash Even Before the Tunnel</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">The full-body wash commences, starting even before the car enters the cleaning tunnel. This stage involves a general surface cleaning to eliminate surface dirt and contaminants from the entire vehicle.</p>
            </h1>
         </div>
          </div>
  </div>
</div>
</CarouselItem>
<CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden  pr-5 shadow-xl">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0 px-2 sm:px-0 text-black rounded-xl">
         <Image src="/fsd.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl">Step 4: Full Body Hand Wash Before the Tunnel</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">Before entering the automated cleaning tunnel, a meticulous hand wash is performed on the entire body of the car. This step ensures a detailed cleaning, addressing specific areas that may require extra attention.</p>
            </h1>
         </div>
          </div>
  </div>
</div>
</CarouselItem>
<CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden  pr-5 shadow-xl">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0 px-2 sm:px-0 text-black rounded-xl">
         <Image src="/get.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl">Step 5: Getting Ready for the Pre-Soak Rinse</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">Preparations are made for the pre-soak rinse, a step that involves applying a specialized cleaning solution to loosen and break down stubborn dirt and grime before the main washing process.</p>
            </h1>
         </div>
          </div>
  </div>
</div>
</CarouselItem>
<CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden  pr-5 shadow-xl">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0 px-2 sm:px-0 text-black rounded-xl">
         <Image src="/rain.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl">Step 6: Working in the Rain!</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">The car detailing process continues, even in adverse weather conditions such as rain. This may add an extra layer of challenge and precision to the detailing process, showcasing the dedication and expertise of the professional.</p>
            </h1>
         </div>
          </div>
  </div>
</div>
</CarouselItem>
<CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden  pr-5 shadow-xl">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0 px-2 sm:px-0 text-black rounded-xl">
         <Image src="/rain.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl">Step 7: Inside the Tunnel with Another Hand Wash Using Lambswool Mittens
</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">As the car enters the cleaning tunnel, another round of hand washing takes place. This time, lambswool mittens are utilized for a gentle yet effective cleaning, ensuring that every nook and cranny is thoroughly addressed.
</p>
            </h1>
         </div>
          </div>
  </div>
</div>
</CarouselItem>

<CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden  pr-5 shadow-xl">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0 px-2 sm:px-0 text-black rounded-xl">
         <Image src="/la.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl">Step 8: Last Step - Teflon Wax Then Dry</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">In the final step, Teflon wax is applied to the car's surface. This not only enhances the vehicle's shine but also provides a protective layer against environmental elements. The car is then carefully dried, completing the detailing process and leaving it looking polished and well-maintained.</p>
            </h1>
         </div>
          </div>
  </div>
</div>
</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </div>
  )
}

export default WhatWeDo