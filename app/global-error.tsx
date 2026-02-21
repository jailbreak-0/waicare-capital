'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

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

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
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
            {/* Error Icon */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-100 mb-4 sm:mb-6">
                <FaExclamationTriangle className="text-4xl sm:text-5xl text-red-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                Critical Error
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-2 px-2">
                We encountered a critical error. Please try refreshing the page.
              </p>
              {error.digest && (
                <p className="text-xs sm:text-sm text-gray-500 font-mono px-2">
                  Error ID: {error.digest}
                </p>
              )}
            </motion.div>

            {/* Action Button */}
            <motion.div variants={itemVariants}>
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base"
              >
                <FaRedo />
                Try Again
              </button>
            </motion.div>

            {/* Help Text */}
            <motion.div variants={itemVariants} className="mt-8 sm:mt-10 md:mt-12">
              <p className="text-sm sm:text-base text-gray-600 px-2">
                If this problem persists, please contact technical support.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
