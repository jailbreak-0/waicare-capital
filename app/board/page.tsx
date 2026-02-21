'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Marquee from '../components/Marquee';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

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

const boardMembers = [
  {
    name: 'Abiola E. Ekundayo',
    position: 'Board Chairman',
    image: '/leadership/chairman.jpg',
    bio: 'Abiola E. Ekundayo brings over 30 years of experience in finance and corporate governance. His strategic vision and leadership have been instrumental in guiding WAICA Re Capital to new heights of excellence.',
  },
  {
    name: 'Haruna Gariba',
    position: 'managing-director',
    image: '/leadership/managing-dir.jpg',
    bio: 'Haruna Gariba is a seasoned investment professional with extensive experience in fund management and financial services. Under his leadership, WAICA Re Capital has consistently delivered exceptional value to clients.',
  },
  {
    name: 'Senor Thomas-Sowe',
    position: 'Board Member',
    image: '/leadership/board-mem-1.jpg',
    bio: 'Senor Thomas-Sowe is an accomplished finance executive with deep expertise in corporate finance and investment strategy. His insights and guidance contribute significantly to the board\'s strategic decisions.',
  },
  {
    name: 'Emmanuel Baiden',
    position: 'Board Member',
    image: '/leadership/board-mem-2.jpg',
    bio: 'Emmanuel Baiden brings valuable expertise in risk management and financial regulations. His experience in the financial sector helps ensure the company\'s compliance and sustainable growth.',
  },
];

export default function BoardPage() {
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
      
          {/* Background Image Container */}
          <div 
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: 'url(/about-page/about-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat'
            }}
          />
      
          <motion.div 
            className="relative z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <main>
              {/* Hero Section */}
              <section className="relative text-white py-20 md:py-52" style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                      Board of Directors
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Meet the distinguished leaders who guide WAICA Re Capital's strategic vision 
                      and commitment to excellence in investment management.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* Board Members Section */}
              <section className="py-16 md:py-24 bg-white">
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      A team of experienced professionals dedicated to driving growth and delivering value
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {boardMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                      >
                        <div className="relative h-80 bg-linear-to-br from-primary to-primary-hover">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to gradient background if image fails to load
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                            <p className="text-lg text-gray-200">{member.position}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                          <div className="flex gap-4">
                            <button className="flex cursor-pointer items-center gap-2 text-primary hover:text-primary-hover transition-colors">
                              <FaLinkedin className="text-xl" />
                              <span className="text-sm font-medium">LinkedIn</span>
                            </button>
                            <button className="flex cursor-pointer items-center gap-2 text-primary hover:text-primary-hover transition-colors">
                              <FaEnvelope className="text-xl" />
                              <span className="text-sm font-medium">Contact</span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Leadership Principles Section */}
              <section className="py-16 md:py-24 text-white" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Principles</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                      The values that guide our board in making strategic decisions
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        title: 'Strategic Vision',
                        description: 'Providing clear direction and long-term strategic planning to ensure sustainable growth and market leadership.'
                      },
                      {
                        title: 'Corporate Governance',
                        description: 'Upholding the highest standards of corporate governance, transparency, and accountability in all operations.'
                      },
                      {
                        title: 'Stakeholder Value',
                        description: 'Committed to creating and delivering exceptional value for all stakeholders - clients, shareholders, and employees.'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all duration-300"
                      >
                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </main>
          </motion.div>
          
          <Footer />
        </>
      )}
    </>
  );
}
