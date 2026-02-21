'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSearch, FaHome, FaArrowLeft } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as any },
  },
};

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* 404 Animation */}
        <motion.div 
          variants={itemVariants}
          animate={floatingAnimation}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <div className="text-[120px] sm:text-[180px] md:text-[250px] lg:text-[300px] font-bold text-primary leading-none opacity-20">
            404
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 -mt-12 sm:-mt-20 md:-mt-24 lg:-mt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Page Not Found
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-2 px-2">
            We couldn't find the page you're looking for.
          </p>
          <p className="text-sm sm:text-base text-gray-500 px-2">
            The page may have been moved, deleted, or never existed.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base"
          >
            <FaHome />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex cursor-pointer items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 border border-gray-300 text-sm sm:text-base"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className="border-t border-gray-200 pt-6 sm:pt-8">
          <p className="text-gray-600 mb-3 sm:mb-4 font-semibold text-sm sm:text-base">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base">
            <Link
              href="/about"
              className="text-primary hover:text-primary-hover font-medium transition-colors"
            >
              About Us
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link
              href="/services"
              className="text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Services
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link
              href="/board"
              className="text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Board of Directors
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link
              href="/downloads"
              className="text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Downloads
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link
              href="/contact"
              className="text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
