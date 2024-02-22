import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Goy from "./goy";

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
      }}
      className="sm:grid mt-4 grid-cols-2 w-full lg:p-9 bg-black items-center justify-center flex-col sm:text-left text-center flex text-white h-fit"
    >
      <div className="flex flex-col">
        <div className="flex">
          <Image
            src="/final.png"
            width={100}
            height={300}
            className="h-[200px] sm:h-[300px] w-fit rounded-l-xl"
            alt="wash me car wash timing image with pink and blue color"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[250px] sm:w-[440px] rounded-r-xl object-cover"
          >
            <source src="/car.mp4" className="object-cover" type="video/mp4" />
          </video>
        </div>
        <div className="flex sm:flex-row sm:justify-center items-center flex-col w-full mt-6 sm:gap-10">
          <h1 className="!text-white/60 sm:block hidden">
            Designed By{" "}
            <Link
              href="https://webkin-solutions.vercel.app/"
              className="underline"
              target="_blank"
            >
              WebKin Solutions
            </Link>
          </h1>
          <p className="sm:relative sm:block hidden !text-white/70 left-44">
            CopyRight Wash Me Carwash Longview
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col w-full h-full items-center justify-center gap-7 sm:gap-[7rem]">
        <div className="flex text-right justify-center mt-8 space-x-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  aria-label="Facebook"
                  target="_blank"
                  href="https://www.facebook.com/washmecarwashlongview/"
                  className="text-green hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Facebook</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  aria-label="Instagram"
                  target="_blank"
                  href="https://www.facebook.com/washmecarwashlongview/"
                  className="text-green hover:text-white"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Link
                  aria-label="Twitter"
                  target="_blank"
                  href="https://www.facebook.com/washmecarwashlongview/"
                  className="text-green hover:text-white"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <nav className="flex flex-col justify-center -mx-5 -my-2 sm:text-center text-left space-y-7">
          <div className="text-white/70 hover:text-white transition-all w-fit">
            <Goy
              aria-label="About"
              id="Our Services"
              className=" text-base leading-6"
            >
              Our Services
            </Goy>
          </div>
          <div className="text-white/70 hover:text-white transition-all w-fit">
            <Goy
              aria-label="Blog"
              id="Pricing"
              className=" text-base leading-6"
            >
              Save Here
            </Goy>
          </div>
          <div className="text-white/70 hover:text-white transition-all w-fit">
            <Goy
              aria-label="Team"
              it="Meet the Teem"
              className=" text-base leading-6"
            >
              Meet the Teem
            </Goy>
          </div>
          <div className="text-white/70 hover:text-white transition-all w-fit">
            <Goy aria-label="Pricing" id="FAQ" className=" text-base leading-6">
              FAQ
            </Goy>
          </div>
          <div className="text-white/70 hover:text-white transition-all w-fit">
            <Goy
              aria-label="Contact"
              id="Contact"
              className="text-base  leading-6"
            >
              Contact
            </Goy>
          </div>
        </nav>
        <p className="sm:relative mb-7 sm:hidden block !text-white/70 left-44">
          CopyRight Wash Me Carwash Longview
        </p>
      </div>
    </div>
  );
}
