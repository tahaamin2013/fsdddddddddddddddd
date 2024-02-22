"use client";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Goy from "./goy";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("bg-transparent shadow-xl");
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Adjust the condition as needed
      if (position > 130) {
        setNavbarColor("bg-blue shadow-xl");
      } else {
        setNavbarColor("bg-transparent");
      }
    };
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    // ${navbarColor}

    <div
      className="bg-blue text-white mt-6 transition-all z-50 duration-200 shadow-xl px-5 lg:px-20 py-2 items-center justify-between fixed w-full"
      style={{ backgroundImage: "url(/bubbles.png)" }}
    >
      <div>
        <div className={`flex justify-between items-center`}>
          <Link href="/" className="outline-none absolute">
            <Image
              src="/Wash-Me-Logo.png"
              className="w-[100px] h-[70px] py-1"
              alt="Logo"
              width={939999999999999}
              height={99999999999999}
            />
          </Link>
          <div className="w-full flex justify-end">
            <div className="md:block hidden">
              <div className="text-white font-bold flex gap-5 text-lg">
                <Goy id="Our Services">Our Services</Goy>
                <Goy id="Pricing">Save Here</Goy>
                <Goy id="Meet the Teem">Meet The Teem</Goy>
                <Goy id="FAQ">FAQ</Goy>
                <Goy id="Contact">Contact us</Goy>
              </div>
            </div>
            <div className="md:hidden block z-50">
              <Sheet>
                <SheetTrigger className="text-white  -my-4 mt-1 text-2xl">
                  <AlignJustify fill="white" size={27} />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetDescription>
                      <div className="text-black font-bold flex flex-col text-left items-start gap-3 text-lg">
                        <Link href="/our-services">Our Services</Link>
                        <Link href="/save-here">Save Here</Link>
                        <Link href="/meet-the-teem">Meet The Teem</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/contact-us">Contact us</Link>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
