"use client";
import Cleaning from "@/components/Cleaning";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import WhatWeDo from "@/components/WhatWeDo";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
type Data = {
  texts: { text: string; desc: string }[];
};
const Home: React.FC = () => {
  const [data, setData] = useState<Data>({
    texts: [
      {
        text: "2 Miles from I-5 Longview exit.",
        desc: "Welcome to Wash me car wash",
      },
      { text: "No brushes no machinery", desc: "The Only Handwash Tunnel" },
      {
        text: "5 DIY Self Service Bays open 24/7",
        desc: "Safest Wash in Town.",
      },
      {
        text: "Free Vacuums with Car Wash",
        desc: "Our goal is to make you happy",
      },
      {
        text: "Hands-on service lambs wool wash",
        desc: "a complete rejuvenation for your vehicle",
      },
      {
        text: "We treat your car the way you would treat it",
        desc: "Satisfaction guaranteed if we goof!",
      },
      {
        text: "Spot Free rinse and teflon wax",
        desc: "Dedicated team of experts",
      },
    ],
  });

  const [visibleIndex, setVisibleIndex] = useState(0);
  const [shouldAnimateDown, setShouldAnimateDown] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the downward animation after 1 second
    const timeout = setTimeout(() => {
      setShouldAnimateDown(true);
    }, 5000);

    // Clear the timeout when the component unmounts or when the downward animation starts
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShouldAnimateDown(true);
      setTimeout(() => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % data.texts.length);
        setShouldAnimateDown(false);
      }, 500);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full pt-[100px] object-cover"
        >
          <source
            src="/WashMe Car Wash Video - Edited.mp4"
            className="object-cover"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[50%] sm:top-[40%] items-center justify-center w-full flex flex-col">
            <div className="text-white flex flex-col mx-10 sm:mx-36 justify-center max-w-fit items-center left-[200px]">
              <div className="">
                <motion.div
                  className="text-transition"
                  initial={{ y: "100%" }}
                  animate={{ y: shouldAnimateDown ? "100%" : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="h-[25px] tracking-widest uppercase overflow-hidden sm:text-lg text-sm mb-2 font-normal">
                    {data.texts[visibleIndex].desc}
                  </p>
                </motion.div>
              </div>
              <div className="h-fit mx-auto text-left tracking-widest uppercase flex justify-center items-center text-white w-full overflow-hidden">
                <motion.div
                  className="text-transition"
                  initial={{ y: "100%" }}
                  animate={{ y: shouldAnimateDown ? "100%" : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* <p className="h-[25px] tracking-widest uppercase overflow-hidden bg-red-500 sm:text-lg text-sm mb-2 font-normal uppercase">
                    {data.texts[visibleIndex].desc}
                  </p> */}
                  <p className="text-2xl sm:text-5xl w-fit font-bold uppercase text-center">
                    {data.texts[visibleIndex].text}
                  </p>
                </motion.div>
            </div>
          </div>
        </div>

        {/* <div className="text-white flex flex-col justify-center items-center">
          <div className="h-[53px] tracking-widest uppercase overflow-hidden ">
            <motion.div
              className="text-transition"
              initial={{ y: "100%" }}
              animate={{ y: shouldAnimateDown ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-5xl font-bold uppercase">
                {data.texts[visibleIndex].text2}
              </p>
            </motion.div>
          </div>
        </div> */}
      </div>

      <div className="sm:absolute hidden -bottom-[20px] w-[20rrem] sm:w-[30rem] h-fit left-4 right-4 hover:bg-black/20 transition-all bg-gradient-to-tr rounded-none from-black/40 to-transparent backdrop-blur-sm px-10 py-14 text-white">
        <h3 className="text-xl font-semibold mb-2 ">
          <div className="inline-block bg-white text-blue py-2 px-4 rounded-md text-[17.5px] font-bold tracking-wide transition duration-300">
            <span>The ONLY Hand Wash in SW Washington</span>
          </div>
          <span>Offering Exclusive Benefits:</span>
        </h3>
        <h3 className="text-4xl font-semibold mb-4 ">
          <span className="text-xl font-normal">
            <ul style={{ listStyleType: "disc", marginLeft: "1.5em" }}>
              <li>Spot Free rinse and teflon wax</li>
              <li>Safest Wash in Town</li>
              <li>Free Vacuums with Wash</li>
              <li>2 Miles from I-5 Longview exit</li>
              <li>We Use Lambs Wool Mittens</li>
              <li>No brushes no machinery OR: Five DIY Self Service Bays</li>
            </ul>
          </span>
        </h3>
        <div>
          <Link
            className="inline-block bg-
            blue hover:bg-[#afc34d] hover:text-black text-white py-2 px-4 rounded-md font-semibold uppercase tracking-wide transition duration-300"
            href="sdsdf"
          >
            Learn more
          </Link>
        </div>
      </div>
      <main className="mx-5">
        <div className="my-4">
          <Cleaning />
        </div>
        <Pricing />
        <WhatWeDo />
        <div className="mt-5">
       <Team />
       </div>
        <Contact />
      
        <FAQ />
        
       
        
      </main>
    </>
  );
};
export default Home;
