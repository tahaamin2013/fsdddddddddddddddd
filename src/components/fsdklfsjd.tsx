import Autoplay from "embla-carousel-autoplay";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Git: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const data = [
    {
      image: "/Gift.png",
      title: "Step 1: Washing the Wheels",
      description:
        "In the first step, attention is given to the wheels of the car. This involves a thorough cleaning process to remove dirt, brake dust, and other debris from the wheels, ensuring a fresh and polished look.",
    },
  ];

  return (
    <>
      {/* <div
        id="#MemberShips"
        className="flex flex-col w-full justify-center  items-center mt-3"
        >
        {data.map((item, index) => (
          <div
          key={index}
          className="bg-blue mx-5 rounded-xl h-[600px] sm:h-[400px] text-white overflow-hidden shadow-xl"
          style={{
            backgroundImage:
            "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
          >
          <div className="z-10 flex flex-col lg:flex-row justify-center h-full text-left">
          <img
          src="gift2.png"
          alt={`Step ${index + 1} image`}
          className="w-full sm:w-[730px] h-[460px]"
          />
          <div className="ml-4 mt-3 flex flex-col gap-7">
          <p>
          <div className="flex flex-row justify-center items-center text-center w-full">
          <span className="font-bold text-center text-2xl">
          1. Scan QR
          </span>
          </div>{" "}
          Utilize your smartphone camera to scan the QR code
          corresponding to your desired membership level or by clicking
          these links: <br />
          </p>
          <div className="flex flex-row gap-4 font-bold w-full justify-center items-center">
          <Link
          target="_blank"
          href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=2266b543ddd7762a69f0a4c0173dfbdd"
          className="bg-green text-black px-2 py-1 text-sm w-fit rounded-lg text-center"
          >
          Compact Club
          </Link>
          <Link
          target="_blank"
          href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=d283035156d4b2fd9776ac54c0a05cd7"
          className="bg-green text-black px-2 py-1 text-sm w-fit rounded-lg text-center"
          >
          Mid Size Club
          </Link>
          <Link
                    target="_blank"
                    href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=a68d0e837cb627acbfc0e9a24343e4ac"
                    className="bg-green text-black px-2 py-1 text-sm w-fit rounded-lg text-center"
                  >
                    SUV Truck Club
                    </Link>
                    </div>
                    <div>
                    <div className="flex flex-row justify-center items-center text-center w-full">
                    <span className="font-bold text-2xl">
                    2. Enjoy the Benefits{" "}
                    </span>
                    </div>{" "}
                    Instantly access our exclusive membership benefits without the
                    need to download the app. <br /> Simply follow the link
                    provided after scanning the QR code.
                    </div>
                    </div>
                    </div>
                    </div>
                    ))}
                    </div>
                    
                    

                    
                    <div className="flex flex-col w-full justify-center items-center">
                    <div className="text-center flex flex-col"></div>
                    {data.map((item, index) => (
                      <div
            key={index}
            className="bg-blue pt-8 sm:pb-1 pb-20 sm:pt-0 mx-5 rounded-xl mb-4 h-[600px] sm:h-[400px] text-white overflow-hidden shadow-xl"
            style={{
              backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
            }}
            >
            <div className="z-10 flex flex-col lg:flex-row justify-center w-full items-center h-full text-left">
            <div className="flex flex-col w-full h-full justify-center items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold mb-16 tracking-widest">
            GIFT CERTIFICATE
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="border-2 border-white w-fit ml-3 py-6 px-10 rounded-lg">
            <ul className="list-disc">
            <li>Equals to $10.90 per wash</li>
            <li>Regularly ($15.00) each</li>
            <li>
            You{" "}
            <span className="text-[#f60a11] font-extrabold">
            SAVE $41.00
            </span>
            </li>
            </ul>
            </div>
            <Plus size="40" stroke="white" />
            <div className="border-2 border-white w-fit pl-9 pr-3 px-10 py-6 rounded-lg">
            <ul className="list-disc">
            <li>You receive a bonus of 50% OFF </li>
            <li>Teflon Simoniz Wax for an additional</li>
            <li>
            <span className="text-[#f60a11] font-extrabold">
            Savings of $20.00
            </span>
            </li>
            </ul>
            </div>
            </div>
            <div>
            <span className="text-[#f60a11] font-extrabold">
            TOTAL SAVINGS of $61.00
            </span>
            </div>
            </div>
            <img
                src={item.image}
                alt={`Step ${index + 1} image`}
                className="w-[690px] h-[460px]"
              />
              </div>
              </div>
              ))}
            </div> */}

      <div id="#MemberShips">
        <div className="text-center flex flex-col mb-2">
          <h1 className="text-2xl sm:text-3xl font-bold">
            OUR MEMBERSHIP PLANS
          </h1>
        </div>
        <div
          key="1"
          className="bg-blue sm:grid grid-cols-2 rounded-xl text-white overflow-hidden shadow-xl"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
        >
          <Image
            width={700}
            height={500}
            src="/gift2.png"
            alt={`Step 2 image`}
            className="w-[690px] sm:h-[460px] h-[350px]"
          />
          <div className="ml-4 pb-7 mt-3 flex flex-col gap-7">
            <p>
              <div className="flex flex-row justify-center items-center text-center w-full">
                <span className="font-bold text-center text-2xl">
                  1. Scan QR
                </span>
              </div>{" "}
              Utilize your smartphone camera to scan the QR code corresponding
              to your desired membership level or by clicking these links:{" "}
              <br />
            </p>
            <div className="flex flex-row gap-4 font-bold w-full justify-center items-center">
              <Link
                target="_blank"
                href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=2266b543ddd7762a69f0a4c0173dfbdd"
                className="bg-green text-black px-2 py-1 text-sm w-fit rounded-lg text-center"
              >
                Compact Club
              </Link>
              <Link
                target="_blank"
                href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=d283035156d4b2fd9776ac54c0a05cd7"
                className="bg-green text-black px-2 py-1 text-sm w-fit rounded-lg text-center"
              >
                Mid Size Club
              </Link>
              <Link
                target="_blank"
                href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=a68d0e837cb627acbfc0e9a24343e4ac"
                className="bg-green text-black px-2 py-1 text-sm w-fit rounded-lg text-center"
              >
                SUV Truck Club
              </Link>
            </div>
            <div>
              <div className="flex flex-row justify-center items-center text-center w-full">
                <span className="font-bold text-2xl">
                  2. Enjoy the Benefits{" "}
                </span>
              </div>{" "}
              Instantly access our exclusive membership benefits without the
              need to download the app. <br /> Simply follow the link provided
              after scanning the QR code.
            </div>
          </div>
        </div>

        <div
          key="2"
          className="bg-blue my-6 sm:grid grid-cols-2 rounded-xl text-white overflow-hidden shadow-xl"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
        >
          <div className="flex py-8 flex-col w-full h-full justify-center items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 tracking-widest">
              GIFT CERTIFICATE
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="border-2 border-white w-fit ml-3 py-6 px-10 rounded-lg">
                <ul className="list-disc">
                  <li>Equals to $10.90 per wash</li>
                  <li>Regularly ($15.00) each</li>
                  <li>
                    You{" "}
                    <span className="text-[#f60a11] font-extrabold">
                      SAVE $41.00
                    </span>
                  </li>
                </ul>
              </div>
              <Plus size="40" stroke="white" />
              <div className="border-2 border-white w-fit pl-9 pr-3 px-10 py-6 rounded-lg">
                <ul className="list-disc">
                  <li>You receive a bonus of 50% OFF </li>
                  <li>Teflon Simoniz Wax for an additional</li>
                  <li>
                    <span className="text-[#f60a11] font-extrabold">
                      Savings of $20.00
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <span className="text-[#f60a11] font-extrabold">
                TOTAL SAVINGS of $61.00
              </span>
            </div>
          </div>
          <Image
            width={700}
            height={500}
            src="/Gift.png"
            alt={`Step 1 image`}
            className="w-[690px] h-[460px]"
          />
        </div>
      </div>
    </>
  );
};

export default Git;
