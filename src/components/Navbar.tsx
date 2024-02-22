"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div
      className="bg-blue text-white mt-6 transition-all z-50 duration-200 shadow-xl px-5 lg:px-20 py-2 items-center justify-between fixed w-full"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png",
      }}
    >
      <div>
        <div className={`flex justify-between items-center`}>
          <Link href="/" className="outline-none absolute">
            <Image
              src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/Wash-Me-Logo.png"
              className="w-[100px] h-[70px] py-1"
              alt="Logo"
              width={100}
              height={70}
            />
          </Link>
          <div className="w-full flex justify-end">
            <div className="md:block hidden">
              <div className="text-white font-bold flex gap-5 text-lg">
                <Goy id="Our Services">Our Services</Goy>
                <Goy id="#MemberShips">Save Here</Goy>
                <Goy id="Meet the Team">Meet The Team</Goy>
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
                  <div className="flex-col flex gap-3 text-left items-start w-full font-bold">
                    <SheetClose>
                      <Goy id="Our Services">Our Services</Goy>
                    </SheetClose>
                    <SheetClose>
                      <Goy id="Pricing">Save Here</Goy>
                    </SheetClose>
                    <SheetClose>
                      <Goy id="Meet the Team - mobile">Meet The Teem</Goy>
                    </SheetClose>
                    <SheetClose>
                      <Goy id="FAQ">FAQ</Goy>
                    </SheetClose>
                    <SheetClose>
                      <Goy id="Contact">Contact us</Goy>
                    </SheetClose>
                  </div>
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
