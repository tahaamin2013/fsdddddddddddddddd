
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
        <h1 className='text-2xl sm:text-3xl font-bold'>Premium Washing Services</h1>
        <p className='text-sm w-full sm:w-[500px] text-center'>Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt, enim lorem scelerisque massa, vel ultricies.</p>
        </div>

        <Carousel
      plugins={[plugin.current]}
      className="w-full md:w-[900px] lg:w-[1100px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      
      <CarouselContent>
      <CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0 border shadow-xl px-2 sm:px-0 text-black rounded-xl">
         <Image src="/image1.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl">Exterior Washing</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">consectetur adipisicing elit. Vero reprehenderit temporibus facere voluptatibus fugiat quo expedita vel accusantium blanditiis laborum, doloribus inventore non nemo quod possimus nihil odio quam hic!</p>
                <p className="flex gap-2 text-sm capitalize mb-1.5"><Check stroke="white" size={20} /> Seets washing</p>
                <p className="flex gap-2 text-sm capitalize mb-1.5"><Check stroke="white" size={20} /> Vacuum cleaning</p>
                <p className="flex gap-2 text-sm capitalize mb-1.5"><Check stroke="white" size={20} /> interior wet cleaning</p>
                <p className="flex gap-2 text-sm capitalize mb-1.5"><Check stroke="white" size={20} /> window wiping</p>
            </h1>
           <div className="flex justify-start items-start mt-4"> <button className="rounded-full px-16 py-3 text-black font-bold bg-green">
                Get plan
            </button></div>
         </div>
          </div>
  </div>
</div>
        </CarouselItem>
        <CarouselItem>
      <div className="relative bg-blue rounded-xl text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
  <div className="flex flex-row gap-7 bg-transparent text-center pb-4 sm:pb-0 border shadow-xl px-2 sm:px-0 text-black rounded-xl">
         <Image src="/image1.jpg" alt="girl with car" className="h-[370px] xl:h-[520px] w-[950px] xl:w-[1130px] hidden md:block 
 object-cover" width={5000000000} height={500000000} />
         <div className="mt-7">
            <h1 className="text-left text-white">
                <h1 className="font-bold text-2xl">Exterior Washing</h1>
                <p className="flex gap-2 font-bold text-sm mt-1 items-center"><Clock1 stroke="white" size={20} /> 30 min</p>
                <p className="text-sm mt-3 mb-3">consectetur adipisicing elit. Vero reprehenderit temporibus facere voluptatibus fugiat quo expedita vel accusantium blanditiis laborum, doloribus inventore non nemo quod possimus nihil odio quam hic!</p>
                <p className="flex gap-2 text-sm capitalize mb-1.5"><Check stroke="white" size={20} /> Seets washing</p>
                <p className="flex gap-2 text-sm capitalize mb-1.5"><Check stroke="white" size={20} /> Vacuum cleaning</p>
                <p className="flex gap-2 text-sm capitalize mb-1.5"><Check stroke="white" size={20} /> interior wet cleaning</p>
                <p className="flex gap-2 text-sm capitalize mb-1.5"><Check stroke="white" size={20} /> window wiping</p>
            </h1>
           <div className="flex justify-start items-start mt-4"> <button className="rounded-full px-16 py-3 text-black font-bold bg-green">
                Get plan
            </button></div>
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