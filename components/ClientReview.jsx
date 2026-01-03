"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// List of review images
const reviewImages = [
  "/reviews/Screenshot 2025-12-17 at 17.50.52.png",
  "/reviews/Screenshot 2025-12-17 at 17.51.19.png",
  "/reviews/Screenshot 2025-12-17 at 17.51.52.png",
  "/reviews/Screenshot 2025-12-17 at 17.52.52.png",
  "/reviews/Screenshot 2025-12-17 at 17.53.29.png",
  "/reviews/Screenshot 2025-12-17 at 17.53.49.png",
  "/reviews/Screenshot 2025-12-17 at 17.54.04.png",
  "/reviews/Screenshot 2025-12-17 at 17.54.24.png",
  "/reviews/Screenshot 2025-12-17 at 17.54.36.png",
  "/reviews/Screenshot 2025-12-17 at 17.54.59.png",
  "/reviews/Screenshot 2025-12-17 at 17.55.21.png",
  "/reviews/Screenshot 2025-12-17 at 17.55.46.png",
];

const ClientReview = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % reviewImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + reviewImages.length) % reviewImages.length);
  };

  // Swipe handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev + 1) % reviewImages.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev - 1 + reviewImages.length) % reviewImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

  return (
    <>
      <div
        id="reviews"
        className="w-full px-4 sm:px-8 lg:px-[12%] py-24 scroll-mt-28 relative overflow-hidden bg-transparent"
      >
        {/* Animated Background Gradient - Same as Hero */}
        {/* Background removed to show main theme */}

        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          <h4 className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm sm:text-base font-ovo mb-4 flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-500 inline-block"></span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
              Client Testimonials
            </span>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-500 inline-block"></span>
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-ovo font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Upwork Reviews
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            See what clients say about working with me on Upwork. Real feedback from real projects.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto relative z-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={600}
            loop={true}
            className="review-swiper"
          >
            {reviewImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => openLightbox(index)}
                  className="group relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center p-4 hover:border-purple-300 dark:hover:border-purple-600"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />
                  
                  <Image
                    src={image}
                    alt={`Upwork Review ${index + 1}`}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Hover Text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-center">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-4 py-2 text-sm font-semibold inline-block shadow-lg">
                      Click to view full size
                    </div>
                  </div>

                  {/* Upwork Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      ⭐ Upwork
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Hint */}
        <div className="text-center mt-12 relative z-10">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Click any review to view in full size • Swipe to see more
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Close lightbox"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Buttons - Minimal and elegant */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 transition-all duration-200 touch-manipulation opacity-70 hover:opacity-100"
            aria-label="Previous image"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 transition-all duration-200 touch-manipulation opacity-70 hover:opacity-100"
            aria-label="Next image"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image - With swipe support */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={reviewImages[selectedImage]}
              alt={`Upwork Review ${selectedImage + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold shadow-lg">
            {selectedImage + 1} / {reviewImages.length}
          </div>
        </div>
      )}

      {/* Combined Styles */}
      <style jsx global>{`
        .review-swiper {
          padding-bottom: 60px;
        }
        .review-swiper .swiper-pagination {
          bottom: 20px !important;
        }
        .review-swiper .swiper-pagination-bullet {
          background: #9ca3af;
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
          margin: 0 4px !important;
        }
        .review-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
          width: 32px;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(147, 51, 234, 0.4);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default ClientReview;
