// Pricing.js
"use client"

import Image from 'next/image';
import { IoCloseSharp } from "react-icons/io5";

import { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";


interface Plan {
  name: string;
  price: string;
  options: string[];
  nooptions:string[];
}

const Pricing: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<string>('small'); // Set default to 'small'
  const [selectedButton, setSelectedButton] = useState<string>(''); // Track selected button

  const data: Record<string, Plan[]> = {
    small: [
      { name: 'Small Plan 1', price: '20,000', options: ['Option S', 'Option T','Option S', 'Option T','Option S'],nooptions:['Option S', 'Option T','Option S', 'Option T','Option S', 'Option T']  },
      // Add more small plans with similar structure
    ],
    pickup: [
      { name: 'Pickup Plan 1', price: '35,000', options: ['Option S', 'Option T','Option S', 'Option T','Option S', 'Option T','Option S', 'Option T'],nooptions:['Option S', 'Option T','Option S', 'Option T'],  },
      // Add more pickup plans with similar structure
    ],
    suv: [
      { name: 'SUV Plan 1', price: '40,000',options: ['Option T','Option S', 'Option T','Option S', 'Option T','Option S', 'Option T','Option S', 'Option T'] ,nooptions:['Option S', 'Option T','Option S'] },
      // Add more SUV plans with similar structure
    ],
  };

  const handleClick = (carType: string) => {
    setSelectedCar(carType);
  };

  useEffect(() => {
    // You can perform additional actions when the selected car changes
    console.log(`Selected Car: ${selectedCar}`);
  }, [selectedCar]);
  return (
    <div className="font-sans text-center mt-8 flex justify-center items-center flex-col">
      <p className='tracking-widest text-[#346aa3]'>WASHING PRICE</p>
      <h1 className='text-4xl mb-2 font-bold'>Choose Your Plan</h1>
      <p className='w-fit lg:w-[990px]'>Sed non dapibus dolor, non rhoncus dui. Ut eleifend justo at ipsum aliquam, vel cursus tellus pulvinar. Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt, enim lorem scelerisque massa, vel ultricies.</p>
    

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[100px] mb-3">
      <div className='mt-6 flex flex-col gap-4'>
        <button
          onClick={() => handleClick('small')}
          className={`bg-green-500 text-white font-bold text-lg px-8 pb-2 pt-0 rounded-xl mr-2 ${selectedCar === 'small' ? 'border-2 border-[#e5e5e5]' : ''}`}
        >
          <Image alt='car image' src="/car1.png" width={50000000} height={600000000000} className='w-52 hover:scale-110 transition-all duration-300' />
          Small
        </button>
        <button
          onClick={() => handleClick('pickup')}
          className={`bg-yellow-500 text-white font-bold text-lg px-8 pb-2 pt-0 rounded-xl mr-2 ${selectedCar === 'pickup' ? 'border-2 border-[#e5e5e5]' : ''}`}
        >
          <Image alt='car image' src="/car2.png" width={50000000} height={600000000000} className='w-52 hover:scale-110 transition-all duration-300' />
          Pickup
        </button>
        <button
          onClick={() => handleClick('suv')}
          className={`bg-red-500 text-white font-bold text-lg px-8 pb-2 pt-0 rounded-xl mr-2 ${selectedCar === 'suv' ? 'border-2 border-[#e5e5e5]' : ''}`}
        >
          <Image alt='car image' src="/car3.png" width={50000000} height={600000000000} className='w-52 hover:scale-110 transition-all duration-300' />
          SUV
        </button>
      </div>
        <div>{data[selectedCar] ? ( // Check if data[selectedCar] exists
          <>
            {/* <h2 className="text-2xl font-bold">{`Plans for ${selectedCar}`}</h2> */}
              {data[selectedCar].map((plan, index) => (
                <div key={index} className="border p-4 h-[520px] bg-white shadow-lg rounded-xl my-6">
                  <strong>{plan.name}</strong>
                  <p className='font-bold text-5xl mb-3 text-black flex items-start justify-center'><span className='text-lg font-bold'>$</span>{plan.price}</p>
                  <p className='flex flex-col gap-1 mb-1'>
                    
                    {plan.options.map((option, optionIndex) => (
                      <span key={optionIndex} className='flex items-center justify-center w-full gap-2'><FaCheck fill='green' />{option}</span>
                    ))}
                  </p>
                  <p className='flex flex-col gap-1'>
                    
                    {plan.nooptions.map((nooptions, nooptionsIndex) => (
                      <span key={nooptionsIndex} className='flex items-center justify-center w-full gap-2'>
                        <IoCloseSharp fill='red' size={20} />
                      {nooptions}</span>
                    ))}
                  </p>
                  
                </div>
              ))}
          </>
        ) : (
          <p>No plans available for {selectedCar}</p>
        )}</div>
      </div>
    </div>
  );
};

export default Pricing;