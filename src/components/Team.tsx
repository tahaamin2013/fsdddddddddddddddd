import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className="relative bg-blue h-[520px] text-white overflow-hidden rounded-xl">
    <div className="absolute inset-0">
    <Image alt='Wash me car wash team image' src="/team.jpg" width={5000000000000} height={500000000000000} className='w-full h-full object-center  object-cover' />
      <div className="absolute inset-0"></div>
    </div>
    
    <div className="relative z-10 inset-0 text-center flex justify-between w-full gap-3 items-center h-full">
      
     <div className='flex flex-col gap-4 mt-[1px] sm:mt-[120px] w-full justify-center items-center' >
      {/* <h1 className='text-3xl font-bold'>GO CAR WASH IS HOME TO YOUR CAR WASH PROFESSIONALS</h1> */}
     {/* <div className='flex flex-col gap-2 w-full lg:w-[950px]'> <p className='text-sm'>GO Car Wash delivers superior washes performed by a caring team of people who appreciate the value of your time. We adhere to the highest standards of our industry, using only environmentally friendly products.</p>
      <p className='text-sm'>To offer this level of consistent service, each of our car wash professionals is committed to ongoing training. Our commitment to continual learning ensures that GO Car Wash customers in each of our markets enjoy best-of-industry standards and practices.</p>
      <p className='text-sm'>If this sounds like the level of care and service that you’d like to experience at your car wash, then visit today and join the GO Car Wash family!</p></div> */}
     <div className="absolute bottom-4 rounded-none w-fit h-fit left-6 right-4 text-left text-black transition-all bg-white backdrop-blur-sm px-7 py-7">
            <h3 className="text-2xl font-semibold mb-1 ">
            GO CAR WASH IS HOME TO YOUR CAR WASH <br /> PROFESSIONALS
            </h3>
            <div className='flex flex-col gap-2 w-full lg:w-[600px]'> <p className='text-[13px]'>GO Car Wash delivers superior washes performed by a caring team of people who appreciate the value of your time. We adhere to the highest standards of our industry, using only environmentally friendly products.</p>
      <p className='text-[13px]'>To offer this level of consistent service, each of our car wash professionals is committed to ongoing training. Our commitment to continual learning ensures that GO Car Wash customers in each of our markets enjoy best-of-industry standards and practices.</p></div>
          </div>
     </div>
    </div>
  </div>  
  )
}

export default Team