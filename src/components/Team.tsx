import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className="relative bg-blue text-white overflow-hidden rounded-xl pr-5">
    <div className="absolute inset-0">
      <img src="/bubbles.png" alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0"></div>
    </div>
    
    <div className="relative z-10 flex justify-between w-full gap-3 items-center h-full">
      <Image alt='Wash me car wash team image' src="/team.jpg" width={5000000000000} height={500000000000000} className='w-[600px] h-[400px]' />
     <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>GO CAR WASH IS HOME TO YOUR CAR WASH PROFESSIONALS</h1>
      <p className='text-sm'>GO Car Wash delivers superior washes performed by a caring team of people who appreciate the value of your time. We adhere to the highest standards of our industry, using only environmentally friendly products.</p>
      <p className='text-sm'>To offer this level of consistent service, each of our car wash professionals is committed to ongoing training. Our commitment to continual learning ensures that GO Car Wash customers in each of our markets enjoy best-of-industry standards and practices.</p>
      <p className='text-sm'>If this sounds like the level of care and service that you’d like to experience at your car wash, then visit today and join the GO Car Wash family!</p>
     </div>
    </div>
  </div>  
  )
}

export default Team