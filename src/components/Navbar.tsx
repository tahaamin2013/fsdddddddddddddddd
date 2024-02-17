"use client"
import Image from 'next/image'
import Link from 'next/link'
import { AlignJustify } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navbarColor, setNavbarColor] = useState('bg-transparent shadow-xl');
    useEffect(() => {
        const handleScroll = () => {
          const position = window.scrollY;
          setScrollPosition(position);
    
          // Adjust the condition as needed
          if (position > 130) {
            setNavbarColor('bg-[#346aa3] shadow-xl');
          } else {
            setNavbarColor('bg-transparent');
          }
        };
          // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
 return (
    // ${navbarColor}

    <div>
        <div className={`flex transition-all z-50 duration-200 bg-[#346aa3] mt-6 shadow-xl px-5 lg:px-20 py-2 items-center justify-between fixed w-full`}>
           <Link href="/" className='pr-8 outline-none'><Image src="/Wash-Me-Logo.png" className='w-[90px] h-[60px] py-1' alt='Logo' width={939999999999999} height={99999999999999} /></Link>
          <div className='md:block hidden'>
          <div className='text-white font-bold flex gap-5 text-lg'>
                    <Link href="/our-services">
                        Our Services
                    </Link>
                    <Link href="/save-here">
                        Save Here
                    </Link>
                    <Link href="/meet-the-teem">
                        Meet The Teem
                    </Link>
                    <Link href="/faq">
                        FAQ
                    </Link>
                    <Link href="/contact-us">
                        Contact us
                    </Link>
            </div>
          </div>
            <div className='md:hidden block'>
            <Sheet>
  <SheetTrigger className='text-white mt-3 text-2xl'><AlignJustify fill="white" size={34} /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetDescription>
      <div className='text-black font-bold flex flex-col text-left items-start gap-3 text-lg'>
                    <Link href="/our-services">
                        Our Services
                    </Link>
                    <Link href="/save-here">
                        Save Here
                    </Link>
                    <Link href="/meet-the-teem">
                        Meet The Teem
                    </Link>
                    <Link href="/faq">
                        FAQ
                    </Link>
                    <Link href="/contact-us">
                        Contact us
                    </Link>
            </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

            </div>
       </div>
    </div>
  )
}

export default Navbar