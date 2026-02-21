'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Marquee from './components/Marquee';
import Navigation from './components/Navigation';
import HeroSlider from './components/HeroSlider';
import Services from './components/Services';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoaded && (
        <>
          <Marquee />
          <Navigation />
      
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <main className="bg-white">
              <motion.div variants={itemVariants}>
                <HeroSlider />
              </motion.div>
          
              <motion.div variants={itemVariants}>
                <Services />
              </motion.div>
          
              <motion.div variants={itemVariants}>
                <CTASection />
              </motion.div>
          
              <motion.div variants={itemVariants}>
                <Testimonials />
              </motion.div>
            </main>
          </motion.div>
          
          {/* Footer in normal flow - should be visible when scrolling down */}
          <Footer />
        </>
      )}
    </>
  );
}
