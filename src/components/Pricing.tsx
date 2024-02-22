// // Pricing.js
// "use client"

// import Image from 'next/image';
// import { IoCloseSharp } from "react-icons/io5";

// import { useState, useEffect } from 'react';
// import { FaCheck } from "react-icons/fa";
// import { Clock1 } from 'lucide-react';

// interface Plan {
//   name: string;
//   price: string;
//   options: string[];
//   nooptions:string[];
//   minutes:string;
// }

// const Pricing: React.FC = () => {
//   const [selectedCar, setSelectedCar] = useState<string>('small'); // Set default to 'small'
//   const [selectedButton, setSelectedButton] = useState<string>(''); // Track selected button

//   const data: Record<string, Plan[]> = {
//     small: [
//       { name: 'Small', price: '20,000', options: ['Option S', 'Option T','Option S', 'Option T','Option S'],nooptions:['Option S', 'Option T','Option S', 'Option T','Option S', 'Option T'], minutes:"15"  },
//       { name: 'Small', price: '20,000', options: ['Option S', 'Option T','Option S', 'Option T','Option S'],nooptions:['Option S', 'Option T','Option S', 'Option T','Option S', 'Option T'], minutes:"15"  },
//       { name: 'Small', price: '20,000', options: ['Option S', 'Option T','Option S', 'Option T','Option S'],nooptions:['Option S', 'Option T','Option S', 'Option T','Option S', 'Option T'], minutes:"15"  },
//       // Add more small plans with similar structure
//     ],
//     pickup: [
//       { name: 'Pickup', price: '35,000', options: ['Option S', 'Option T','Option S', 'Option T','Option S', 'Option T','Option S', 'Option T'],nooptions:['Option S', 'Option T','Option S', 'Option T'], minutes:"25"  },
//       { name: 'Pickup', price: '35,000', options: ['Option S', 'Option T','Option S', 'Option T','Option S', 'Option T','Option S', 'Option T'],nooptions:['Option S', 'Option T','Option S', 'Option T'], minutes:"25"  },
//       // Add more pickup plans with similar structure
//     ],
//     suv: [
//       { name: 'SUV', price: '40,000',options: ['Option T','Option S', 'Option T','Option S', 'Option T','Option S', 'Option T','Option S', 'Option T'] ,nooptions:['Option S', 'Option T','Option S'],minutes:"45" },
//       { name: 'SUV', price: '40,000',options: ['Option T','Option S', 'Option T','Option S', 'Option T','Option S', 'Option T','Option S', 'Option T'] ,nooptions:['Option S', 'Option T','Option S'],minutes:"45" },
//       // Add more SUV plans with similar structure
//     ],
//   };

//   const handleClick = (carType: string) => {
//     setSelectedCar(carType);
//   };

//   useEffect(() => {
//     // You can perform additional actions when the selected car changes
//     console.log(`Selected Car: ${selectedCar}`);
//   }, [selectedCar]);
//   return (
//     <div className="font-sans text-center mt-8 flex justify-center items-center flex-col">
//       <p className='tracking-widest text-blue'>WASHING PRICE</p>
//       <h1 className='text-4xl mb-2 font-bold'>Choose Your Plan</h1>
//       <p className='w-fit lg:w-[990px]'>Sed non dapibus dolor, non rhoncus dui. Ut eleifend justo at ipsum aliquam, vel cursus tellus pulvinar. Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt, enim lorem scelerisque massa, vel ultricies.</p>

//       <div className="flex flex-col sm:gap-[10px] mb-3">
//       <div className='mt-6 flex flex-row gap-4'>
//         <button
//           // onClick={() => handleClick('small')}
//             style={{
//                   backgroundImage: "/bubbles.png)",
//                 }}
//           className={`bg-green text-white w-fit font-bold text-lg px-8 pb-2 pt-0 rounded-xl mr-2 ${selectedCar === 'small' ? 'border-2 border-[#e5e5e5]' : ''}`}
//         >
//           <Image alt='car image' src="/car1.png" width={50000000} height={600000000000} className='w-52 hover:scale-110 transition-all duration-300' />
//           Small
//         </button>
//         <button
//           // onClick={() => handleClick('pickup')}
//           style={{
//             backgroundImage: "/bubbles.png)",
//           }}
//           className={`bg-yellow-500 text-white w-fit font-bold text-lg px-8 pb-2 pt-0 rounded-xl mr-2 ${selectedCar === 'pickup' ? 'border-2 border-[#e5e5e5]' : ''}`}
//         >
//           <Image alt='car image' src="/car2.png" width={50000000} height={600000000000} className='w-52 hover:scale-110 transition-all duration-300' />
//           Pickup
//         </button>
//         <button
//           // onClick={() => handleClick('suv')}
//           style={{
//             backgroundImage: "/bubbles.png)",
//           }}
//           className={`bg-red-500 text-white w-fit font-bold text-lg px-8 pb-2 pt-0 rounded-xl mr-2 ${selectedCar === 'suv' ? 'border-2 border-[#e5e5e5]' : ''}`}
//         >
//           <Image alt='car image' src="/car3.png" width={50000000} height={600000000000} className='w-52 hover:scale-110 transition-all duration-300' />
//           SUV
//         </button>
//       </div>
//         <div className='flex flex-row w-full justify-center items-center gap-[50px]'>{data[selectedCar] ? ( // Check if data[selectedCar] exists
//           <>
//             {/* <h2 className="text-2xl font-bold">{`Plans for ${selectedCar}`}</h2> */}
//               {data[selectedCar].map((plan, index) => (
//                 <div key={index} className="border p-4 h-[520px] bg-white px-12 shadow-lg rounded-xl my-6"
//                 style={{
//                   backgroundImage: "/bubbles.png)",
//                 }}>
//                   <strong>{plan.name}</strong>
//                   <p className='font-bold text-5xl mb-2 text-black flex items-start justify-center'><span className='text-lg font-bold'>$</span>{plan.price}</p>
//                   <p className='text-black w-full justify-center items-center mb-3 font-normal flex gap-1'>
//                     <Clock1 stroke='red'/> {plan.minutes} min
//                   </p>
//                   <p className='flex flex-col gap-1 mb-1'>

//                     {plan.options.map((option, optionIndex) => (
//                       <span key={optionIndex} className='flex items-center justify-center w-full gap-2'><FaCheck fill='green' />{option}</span>
//                     ))}
//                   </p>
//                   <p className='flex flex-col gap-1'>

//                   {plan.nooptions.map((nooptions, nooptionsIndex) => (
//                       <span key={nooptionsIndex} className='flex items-center justify-center w-full gap-2'>
//                         <IoCloseSharp fill='red' size={20} />
//                       {nooptions}</span>
//                     ))}
//                   </p>
//                 </div>
//               ))}
//           </>
//         ) : (
//           <p>No plans available for {selectedCar}</p>
//         )}</div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;
// Pricing.js
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay"

interface Plan {
  name: string;
  price: string;
  options: string[];
  nooptions: string[];
  minutes: string;
}

const Pricing: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<string>("small");
  const [selectedButton, setSelectedButton] = useState<string>("");
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const handleClick = (carType: string) => {
    setSelectedCar(carType);
  };

  useEffect(() => {
    // You can perform additional actions when the selected car changes
    console.log(`Selected Car: ${selectedCar}`);
  }, [selectedCar]);
  return (
    <div id="Pricing" className="font-sans text-center mt-8 flex justify-center items-center flex-col">
  <div className="flex flex-row items-center gap-0 sm:gap-[40px]">
    <Image  src="/Frame-1.png" alt="image of house" className="w-[200px] h-[200px] ml-0" width={5000000} height={5000000} />
  <div>
      <p className="tracking-widest text-blue">OUR ONE-TIME SERVICES</p>
      <h1 className="text-4xl mb-2 font-bold">Choose Your Plan</h1>
      </div>
  <div />
  </div>

      <div className="flex flex-col sm:gap-[10px] mb-3">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-[50px]">
          <>
            {/* <h2 className="text-2xl font-bold">{`Plans for ${selectedCar}`}</h2> */}
            <div
              className="border p-4 h-[500px] bg-white w-full rounded-2xl flex flex-col justify-center items-center text-center sm:w-[400px] px-5 shadow-xl"
              style={{
                backgroundImage: "url(/bubbles.png)",
              }}
            >
              <Image
                alt="car image"
                src="/car3.png"
                width={50000000}
                height={600000000000}
                className="w-52 hover:scale-110 transition-all duration-300"
              />
              <h1 className="text-2xl font-bold capitalize"><span className="text-blue">Custom car </span><br /> hand wash</h1>
              <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
                <span className="text-lg font-bold">$</span>15
              </p>
              <p className="flex flex-col gap-1 mb-1">
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Tire And All over hand Soapy
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Tri Color Foam
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Full Body Hand Wash
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  High Pressure Dry
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Spot Free Rinse
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Free Vacuum
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Add $2 For Wax
                </span>
              </p>
            </div>
            <div
             className="border p-4 h-[500px] bg-white w-full flex flex-col justify-center items-center text-center sm:w-[400px] px-5 shadow-lg rounded-xl"
              style={{
                backgroundImage: "url(/bubbles.png)",
              }}
            >
            <Image
                alt="car image"
                src="/sedan.png"
                width={50000000}
                height={600000000000}
                className="w-52 hover:scale-110 transition-all duration-300"
              />
                <h1 className="text-2xl font-bold capitalize"><span className="text-blue">Basic Mid Sized Cars</span> <br /> Hand Wash</h1>
              <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
                <span className="text-lg font-bold">$</span>16
              </p>
              <p className="flex flex-col gap-1 mb-1">
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" size={20} />
                  Tire And All over hand Soapy
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Tri Color Foam
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Full Body Hand Wash
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  High Pressure Dry
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Spot Free Rinse
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Free Vacuum
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Add $2 For Wax
                </span>
              </p>
            </div>
            <div
             className="border p-4 h-[500px] bg-white w-full flex flex-col justify-center items-center text-center sm:w-[400px] px-5 shadow-lg rounded-xl"
              style={{
                backgroundImage: "url(/bubbles.png)",
              }}
            >
               <Carousel
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
      <CarouselItem className="w-full flex justify-center items-center">
          <Image
                alt="car image"
                src="/car2.png"
                width={50000000}
                height={600000000000}
                className="w-52 hover:scale-110 transition-all duration-300"
              />
          </CarouselItem>

          <CarouselItem className="w-full flex justify-center items-center">
          <Image
                alt="car image"
                src="/car1.png"
                width={50000000}
                height={600000000000}
                className="w-52 hover:scale-110 transition-all duration-300"
              />
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center items-center">
          <Image
                alt="car image"
                src="/van.png"
                width={50000000}
                height={600000000000}
                className="w-52 hover:scale-110 transition-all duration-300"
              />
          </CarouselItem>
      </CarouselContent>
    </Carousel>
             
                <h1 className="text-2xl font-bold capitalize"><span className="text-blue">Basic SUVs, Vans and Full Sized Pickups Trucks</span> <br /> Hand Wash 
</h1>
              <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
                <span className="text-lg font-bold">$</span>17
              </p>
              <p className="flex flex-col gap-1 mb-1">
                <span className="flex items-center justify-center w-full gap-2">
                <FaCheck fill="green" />
                  Tire And All over hand Soapy
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Tri Color Foam
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Full Body Hand Wash
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  High Pressure Dry
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Spot Free Rinse
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Free Vacuum
                </span>
                <span className="flex items-center justify-center w-full gap-2">
                  <FaCheck fill="green" />
                  Add $2 For Wax
                </span>
              </p>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
