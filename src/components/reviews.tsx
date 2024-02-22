// Reviews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
// Define a type for the review object
interface Review {
  reviewer_name: string;
  rating: number;
  text: string;
  reviewer_picture_url: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const reviewsPerPage = 464;
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-yellow-400 fill-current">&#9733;</span>
        );
      } else if (i - 0.5 === rating) {
        stars.push(
          <span key={i} className="text-yellow-400 fill-current">&#9733;&#189;</span>
        );
      } else {
        stars.push(
          <span key={i}> </span>
        );
      }
    }
    return stars;
  };

  // Function to filter 5, 4, and 3-star reviews
  const filterHighRatedReviews = (reviews: Review[]) => {
    return reviews.filter((review) => review.rating >= 3);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          'https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B%5D=ChIJee2b7JRslFQRG4t2xupv60E&with_text_only=1&page_length=464&order=date'
        );
        const allReviews = response.data.result.data;
        const highRatedReviews = filterHighRatedReviews(allReviews);
        setReviews(highRatedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Calculate indices for the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className='flex justify-center items-center w-full bg-blue text-white py-7 px-16 mt-4'style={{
        backgroundImage: "url(/bubbles.png)",
      }}>
      {loading ? (
        <p><Loader2 className='animate-spin' size={90} stroke='#346aa1'></Loader2></p>
      ) : (
        <div className='w-full'>
          <Carousel
                plugins={[plugin.current]}
                className="w-full text-black"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}>
            <CarouselContent>
              {currentReviews.map((review, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/1 text-white lg:basis-1/3 px-6">
                  <div className="p-2 border border-white rounded-lg py-5 w-full h-full ml-3">
                    <div className='flex gap-3 items-center'>
                      <Image width={45} height={45} src={review.reviewer_picture_url} alt={`Image for ${review.reviewer_name}`} />
                      <h3 className="text-lg font-bold">{review.reviewer_name}</h3>
                    </div>
                    <p className="text-2xl">{renderStars(review.rating)}</p>
                    <p>{review.text.slice(0, 100)}...</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Reviews;
