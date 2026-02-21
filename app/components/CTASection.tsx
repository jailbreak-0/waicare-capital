'use client';

import React, { useRef } from 'react';
import { FaFolder } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section 
      ref={ref}
      className="bg-linear-to-r from-primary to-primary-hover py-12 shadow-2xl relative z-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/20 p-4 rounded-lg">
              <FaFolder className="text-white text-4xl" />
            </div>
            <div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">Download Our 2024 Annual Report</h3>
              <p className="text-white/90 text-xs sm:text-sm">Get insights into our Opportunity Fund performance</p>
            </div>
          </motion.div>
          <motion.a 
            href="/OF-PLC-ANNUAL-REPORT-2024.pdf"
            target="_blank"
            className="btn bg-white text-primary border-white hover:bg-transparent hover:text-white py-3 px-6 md:py-4 md:px-10 text-sm md:text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Download PDF
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
