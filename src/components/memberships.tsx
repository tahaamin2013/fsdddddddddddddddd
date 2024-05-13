"use client"
import { useEffect, useState } from 'react';

const Memberships = () => {
    const [scrollMargin, setScrollMargin] = useState(0);

//   const goToBottom = () => {
//     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const button = document.getElementById('goTopBtn');

//     if (button) {
//       button.addEventListener('click', goToBottom);

//       return () => {
//         button.removeEventListener('click', goToBottom);
//       };
//     }
//   }, []);

const handleButtonClick = (e: any, myelement: string) => {
    const newScrollMargin = 60;
    setScrollMargin(newScrollMargin);

    const element = document.getElementById(myelement);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - newScrollMargin,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <button
      onClick={(e) => handleButtonClick(e, "#MemberShips")}
        id='goTopBtn'
        className="bg-[#1b3e63] px-5 cursor-pointer z-50 fixed mb-4 w-full flex justify-between items-center underline text-white capitalize"
      >
        <div></div>
        We are now offering MEMBERSHIPS!!!
        <div>
        360-4304126
        </div>
      </button>
    </div>
  );
};

export default Memberships;
