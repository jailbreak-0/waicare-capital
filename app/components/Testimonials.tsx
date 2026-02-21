'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Bright Boateng',
      location: 'Winneba, Central Region',
      image: '/Waic-BB.png',
      message: 'Knowing WAICA Re Capital has been a blessing to Me, my family and friends, there\'s no disputing the fact that they are the best fund managers ever. I just made another withdrawal few moments ago, it was so great this is really an opportunity knowing them. You can always contact them directly or visit their office so they help you with your financial needs too.'
    },
    {
      name: 'Alice Obeng',
      location: 'Tesano Accra Ghana',
      image: null,
      message: 'As a business woman, I have always been searching for a safe and reliable Investment company till a good client of mine introduced me to WAICA Re Capital, i didn\'t use to have trust again in Ghanaian Investment firms because I previously lost huge sum of money with some couple of them. Thank you WAICA Re Capital for always being frank with my investments and on-time whenever I need to withdraw some of my funds!'
    },
    {
      name: 'Stanley Annor',
      location: 'Spintex, Accra Ghana',
      image: null,
      message: 'Thank you guys for the advice, i should have started with the Sirius Opportunity Fund long ago, i would have accumulated more by now, even with what I\'ve made over my GHc 6,000, I\'m even okay.'
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">Client testimonials</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-4">
            Satisfied clients are the bedrock of any strong business and ours is no exception.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Read our testimonials below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
              },
            }}
            className="testimonials-slider pb-16!"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 border-2 border-transparent hover:border-primary">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <FaQuoteLeft className="text-4xl text-primary opacity-20" />
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="grow mb-6">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      "{testimonial.message}"
                    </p>
                  </div>
                  
                  {/* Author Info */}
                  <div className="mt-auto pt-6 border-t border-gray-200 flex items-center gap-4">
                    {testimonial.image ? (
                      <>
                        <div className="relative shrink-0">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="text-left">
                          <h4 className="text-gray-900 text-base md:text-lg font-bold mb-1">{testimonial.name}</h4>
                          <p className="text-gray-600 text-xs md:text-sm">{testimonial.location}</p>
                        </div>
                      </>
                    ) : (
                      <div className="text-center w-full">
                        <h4 className="text-gray-900 text-base md:text-lg font-bold mb-1">{testimonial.name}</h4>
                        <p className="text-gray-600 text-xs md:text-sm">{testimonial.location}</p>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-slider .swiper-pagination-bullet {
          background: #e5322d;
          opacity: 0.3;
          width: 10px;
          height: 10px;
        }

        .testimonials-slider .swiper-pagination-bullet-active {
          opacity: 1;
          background: #e5322d;
        }

        .testimonials-slider .swiper-button-next,
        .testimonials-slider .swiper-button-prev {
          color: #e5322d;
          width: 44px;
          height: 44px;
        }

        .testimonials-slider .swiper-button-next:after,
        .testimonials-slider .swiper-button-prev:after {
          font-size: 24px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .testimonials-slider .swiper-button-next,
          .testimonials-slider .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
