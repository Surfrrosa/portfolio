'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface EnlightenCarouselProps {
  onSlideClick?: (index: number) => void;
}

const screenshots = [
  { src: '/images/enlighten1.PNG', alt: 'Enlighten home screen with Begin button', caption: 'Start your practice' },
  { src: '/images/enlighten2.PNG', alt: 'Wisdom quote from Tao Te Ching', caption: 'Ancient wisdom' },
  { src: '/images/enlighten3.PNG', alt: 'Breathing practice with animated circle', caption: 'Guided breathing' },
  { src: '/images/enlighten4.PNG', alt: 'Library of wisdom teachings', caption: 'Browse the library' },
  { src: '/images/enlighten5.PNG', alt: 'Favorites collection', caption: 'Save your favorites' },
  { src: '/images/enlighten6.PNG', alt: 'Settings and customization', caption: 'Personalize your experience' },
  { src: '/images/enlighten7.PNG', alt: 'Dark mode interface', caption: 'Beautiful dark mode' },
];

export function EnlightenCarousel({ onSlideClick }: EnlightenCarouselProps) {
  return (
    <div className="enlighten-carousel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
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
        className="w-full"
      >
        {screenshots.map((screenshot, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => onSlideClick?.(index)}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={300}
                height={650}
                className="w-full h-auto object-cover"
                priority={index < 3}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm text-center font-medium">
                  {screenshot.caption}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .enlighten-carousel-container {
          margin-top: 2rem;
        }

        .enlighten-carousel-container .swiper {
          padding: 1rem 0 3rem;
        }

        .enlighten-carousel-container .swiper-button-next,
        .enlighten-carousel-container .swiper-button-prev {
          color: rgba(166, 177, 142, 0.8);
          width: 30px;
          height: 30px;
        }

        .enlighten-carousel-container .swiper-button-next:after,
        .enlighten-carousel-container .swiper-button-prev:after {
          font-size: 20px;
        }

        .enlighten-carousel-container .swiper-pagination-bullet {
          background: rgba(166, 177, 142, 0.5);
        }

        .enlighten-carousel-container .swiper-pagination-bullet-active {
          background: rgba(166, 177, 142, 1);
        }

        .enlighten-carousel-container .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
}
