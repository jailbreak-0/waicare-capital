'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {
  const slides = [
    {
      title: 'We value your investments',
      bg: 'url(/hero-1.jpg)',
      subtitle: 'We are focused on providing our clients with the highest level of quality and excellent customer service.',
      buttonText: 'Read More',
      buttonLink: '#'
    },
    {
      title: 'Together towards tomorrow',
      bg: 'url(/hero2.jpg)',
      subtitle: 'As our client, we establish and operate your fund fully or partially with the top-most security and value',
      buttonText: 'Read More',
      buttonLink: '#'
    }
  ];

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-125 sm:h-150 md:h-175 lg:h-200 xl:h-235"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="h-full w-full relative bg-cover bg-center flex items-center"
              style={{
                background: 'linear-gradient(135deg, #1f1f1f 0%, #4a4a4a 100%)',
              }}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: slide.bg }}></div>
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="container-custom relative z-10">
                <div className="max-w-3xl text-white animate-slideUp px-4 md:px-0">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight text-shadow">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 leading-relaxed text-gray-300 text-shadow">
                    {slide.subtitle}
                  </p>
                  <a 
                    href={slide.buttonLink}
                    className="btn btn-primary text-sm md:text-base py-3 px-6 md:py-4 md:px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
