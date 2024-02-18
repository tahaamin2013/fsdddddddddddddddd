import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
<video
  autoPlay
  loop
  muted
  playsInline
  className="w-full pt-[100px] object-cover"
>
  <source src="/WashMe Car Wash Video - Edited.mp4" className="object-cover" type="video/mp4" />
</video>

<div className="grid sm:absolute -bottom-[20px] w-[20rrem] sm:w-[30rem] h-fit left-4 right-4 hover:bg-black/20 transition-all bg-gradient-to-tr rounded-none from-black/40 to-transparent backdrop-blur-sm px-10 py-14 text-white">
<h3 className="text-xl font-semibold mb-2 ">
            <div className="inline-block bg-white text-[#346aa3] py-2 px-4 rounded-md text-[17.5px] font-bold tracking-wide transition duration-300"><span>The ONLY Hand Wash in SW Washington</span></div> 
            <span>Offering Exclusive Benefits:</span>
            </h3>
            <h3 className="text-4xl font-semibold mb-4 ">
              
              <span className="text-xl font-normal">
                <ul style={{ listStyleType: 'disc', marginLeft: '1.5em' }}>
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
                className="inline-block bg-[#346aa3] hover:bg-[#afc34d] hover:text-black text-white py-2 px-4 rounded-md font-semibold uppercase tracking-wide transition duration-300"
                href='sdsdf'
              >
                Learn more
              </Link>
            </div>
          </div>
    <main className="mx-5">
      <Contact />
      <FAQ />
      <Pricing />
    </main>
    </>
  );
}
