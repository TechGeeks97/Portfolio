import React, { useState, useEffect } from "react";
import { reviews } from "@/assets/assets";

const ClientReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <span key={i} className="text-yellow-400 inline-block">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300 inline-block">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div
      id="reviews"
      className="w-full px-4 sm:px-8 lg:px-[12%] py-24 scroll-mt-28"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h4 className="text-gray-500 uppercase tracking-widest text-sm sm:text-base font-ovo mb-2 flex items-center justify-center gap-2">
          <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
          Freelance Ratings
          <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
        </h4>
        <h2 className="text-3xl sm:text-5xl font-ovo font-bold">
          Client Reviews
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-5xl mx-auto perspective-1000 overflow-visible">
        <div className="relative flex justify-center items-center gap-4">
          {reviews.map((review, index) => {
            let position = "hidden";

            if (index === currentIndex)
              position = "translate-z-0 scale-100 opacity-100";
            else if (index === (currentIndex + 1) % total)
              position =
                "translate-x-1/2 rotate-y-[-25deg] scale-90 opacity-70";
            else if (index === (currentIndex - 1 + total) % total)
              position =
                "translate-x-[-50%] rotate-y-[25deg] scale-90 opacity-70";

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out bg-white shadow-lg rounded-xl p-6 md:p-10 w-72 md:w-80 lg:w-96 overflow-visible ${position}`}
              >
                <h3 className="text-xl font-semibold mb-2">{review.project}</h3>
                {review.role && (
                  <p className="text-gray-500 mb-2">{review.role}</p>
                )}
                <div className="mb-4">{renderStars(review.rating)}</div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 bg-white rounded-full p-2 shadow-md"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 bg-white rounded-full p-2 shadow-md"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
