"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiArrowLeftSLine } from 'react-icons/ri';

const imageData = [
  {
    left: '/1.jpg',
    right: '/2.jpg',
    alt: 'Image 1',
    caption: 'Dry cleaning any dirt inside the car and trunk',
  },
  {
    left: '/1].jpg',
    right: '/3.jpg',
    alt: 'Image 2',
    caption: 'Stain removal and upholstery restoration',
  },
  {
    left: '/4.jpg',
    right: '/5.jpg',
    alt: 'Image 1',
    caption: 'Deep interior cleaning after flooding',
  },
  {
    left: '/6.jpg',
    right: '/7.jpg',
    alt: 'Image 2',
    caption: 'Trunk and pile rug car cleaning service',
  },
  // Add more images as needed
];

const CarouselContainer = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleOnError = ({ error, errorInfo }: any) => {
    console.log('Error occurred:', error);
    setHasError(true);
    console.log('Error Info:', errorInfo);
  };

  const handlePrevClick = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : imageData.length - 1));
  };

  const handleNextClick = () => {
    setSelectedImage((prev) => (prev < imageData.length - 1 ? prev + 1 : 0));
  };

  const isSingleItem = imageData.length === 1;
  const isPrevDisabled = isSingleItem || selectedImage === 0;
  const isNextDisabled = isSingleItem || selectedImage === imageData.length - 1;

  return (
    <div
      className='grid grid-cols-1 sm:grid-cols-2 justify-center mb-5 sm:mx-9'
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className='flex sm:justify-start justify-center sm:items-start items-center w-full flex-col'
      >
        <h2 className='flex items-center gap-3 tracking-wide uppercase text-[#346aa3]'>
          <hr className='w-16 h-[1.5px] bg-[#346aa3]' /> DRY CLEANING
        </h2>
        <AnimatePresence>
          <motion.p
            key={selectedImage}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 900, x: 0 }}
            transition={{ duration: 0.5}}
            className='text-4xl font-bold'
          >
            {imageData[selectedImage].caption}
          </motion.p>
        </AnimatePresence>
        <div className='carousel-navigation hidden sm:flex flex-row gap-3 mt-2'>
          <motion.button
            onClick={handlePrevClick}
            disabled={isPrevDisabled}
            className={`rounded-full p-1 border-2 ${
              isPrevDisabled ? 'border-zinc-300' : 'border-[#b0c36b]'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <RiArrowLeftSLine size={25} />
          </motion.button>
          <motion.button
            onClick={handleNextClick}
            disabled={isNextDisabled}
            className={`rounded-full p-1 border-2 ${
              isNextDisabled ? 'border-zinc-300' : 'border-[#b0c36b]'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <MdKeyboardArrowRight size={26} />
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
        className='carousel'
      >
        <div className='contentWrapper'>
          {hasError ? (
            <div>Oops! Something went wrong.</div>
          ) : (
            <ReactCompareSlider
              className='h-[380px] w-fit sm:w-[640px] rounded-md'
              itemOne={<ReactCompareSliderImage src={imageData[selectedImage]?.left || ''} alt='Image one' />}
              itemTwo={<ReactCompareSliderImage src={imageData[selectedImage]?.right || ''} alt='Image two' />}
            />
          )}
        </div>
        <div className='carousel-navigation flex sm:hidden flex-row gap-3 w-full justify-center items-center mt-2'>
          <motion.button
            onClick={handlePrevClick}
            disabled={isPrevDisabled}
            className={`rounded-full p-1 border-2 ${
              isPrevDisabled ? 'border-zinc-300' : 'border-[#b0c36b]'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <RiArrowLeftSLine size={25} />
          </motion.button>
          <motion.button
            onClick={handleNextClick}
            disabled={isNextDisabled}
            className={`rounded-full p-1 border-2 ${
              isNextDisabled ? 'border-zinc-300' : 'border-[#b0c36b]'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <MdKeyboardArrowRight size={26} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CarouselContainer;
