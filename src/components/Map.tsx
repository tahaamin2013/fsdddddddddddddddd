import React from "react";

const Map = () => {
  return (
    <div
      key="1"
      className="bg-blue lg:grid grid-cols-2 px-7 py-6 items-center text-white overflow-hidden shadow-xl"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
      }}
    >
      <div className="flex flex-col items-center gap-1 sm:mx-10 mx-0">
        <h1 className="text-2xl font-bold">HOURS OF OPERATION</h1>
        <div className="flex flex-col mb-2 lg:hidden w-full items-center mt-6 justify-center">
          <p className="font-semibold text-lg mb-2">
            1953 9th Ave, Longview, WA2
          </p>
          <iframe
            className="sm:h-[300px] h-[400px] w-full overflow-hidden rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11057.182314530331!2d-122.9279929!3d46.14486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54946c94ec9bed79%3A0x41eb6feac6768b1b!2sWash%20Me%20Car%20Wash!5e0!3m2!1sen!2sbr!4v1708203053173!5m2!1sen!2sbr"
            width="600"
            height="300"
            aria-hidden="false"
          />
        </div>
        <div className="w-full rounded-xl border-green border p-4 flex flex-col">
          <div className="flex w-full justify-between font-semibold mt-1 text-lg">
            <p>Monday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold mt-1 text-lg">
            <p>Tuesday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold mt-1 text-lg">
            <p>Wednesday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold mt-1 text-lg">
            <p>Thursday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold mt-1 text-lg">
            <p>Monday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold mt-1 text-lg">
            <p>Friday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold mt-1 text-lg">
            <p>Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold mt-1 text-lg">
            <p>Sunday</p>
            <p>10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-full items-center mt-6 mb-1 justify-center">
        <p className="font-semibold text-lg mb-2">1953 9th Ave, Longview, WA</p>
        <iframe
          className="sm:w-full sm:h-[300px] h-[400px] w-full overflow-hidden rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11057.182314530331!2d-122.9279929!3d46.14486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54946c94ec9bed79%3A0x41eb6feac6768b1b!2sWash%20Me%20Car%20Wash!5e0!3m2!1sen!2sbr!4v1708203053173!5m2!1sen!2sbr"
          width="600"
          height="300"
          aria-hidden="false"
        />
      </div>
    </div>
  );
};

export default Map;
