'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      image: '/fm1.jpg',
      title: 'Fund Management',
      description: 'We offer an active fund management together with efficient administration to allow individuals to benefit from the expertise of our experienced fund managers, we are a well trusted advisor to our clients as well.'
    },
    {
      image: '/waicacf12.jpg',
      title: 'Corporate Finance',
      description: 'Our collaboration starts by identifying client needs, creating a strategic plan, rigorously analysing the situation of the business, studying the sector, locating opportunities for investment and advising on the transaction and its closure.'
    },
    {
      image: '/waicres133.jpg',
      title: 'Research',
      description: 'We provide personalised financial services on Equities Research, Fixed Income Research, Economics and Strategy, etc'
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-linear-to-b from-white to-gray-50 -mt-32 relative z-10">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">Our Services</h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We offer a comprehensive range of financial services tailored to meet your investment needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card overflow-hidden group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
                >
                  Learn More <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
