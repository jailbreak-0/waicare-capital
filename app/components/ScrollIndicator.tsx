'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollCurrent = window.scrollY;
      const progress = (scrollCurrent / scrollTotal) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="hidden md:block fixed top-0 right-0 h-screen w-1 bg-gray-200 z-9999">
      <motion.div
        className="w-full bg-linear-to-b from-primary via-primary-hover to-primary"
        style={{ height: `${scrollProgress}%` }}
        initial={{ height: 0 }}
        animate={{ height: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </div>
  );
}
