'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Marquee from '../components/Marquee';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaChartLine, FaBriefcase, FaSearch, FaArrowRight, FaRegLightbulb, FaTrophy, FaCheck, FaHandHoldingHeart } from 'react-icons/fa';
import { image } from 'framer-motion/client';

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

const services = [
  {
    icon: <FaChartLine className="text-5xl text-primary" />,
    title: 'Fund Management',
    image: '/products/fund-mgt.jpg',
    link: '/products/fund-management',
    description: 'WAICA Re Capital provides investment solutions for institutions such as sovereign wealth and pension plans, as well as for private wealth and the retail segment.',
    features: [
      'Institutional Fund Management',
      'Pension Plan Solutions',
      'Private Wealth Management',
      'Retail Investment Products'
    ]
  },
  {
    icon: <FaBriefcase className="text-5xl text-primary" />,
    title: 'Corporate Finance & Advisory',
    image: '/products/cfa.jpg',
    link: '/products/corporate-finance',
    description: 'Our broad and comprehensive expertise enable us provide corporate bodies with an array of investment banking services. We leverage our established network of equity and debt capital providers, experience in M&A and expertise in valuation to tailor our advisory process meet our clients\' needs.',
    features: [
      'Mergers & Acquisitions Advisory',
      'Capital Raising Solutions',
      'Corporate Valuation Services',
      'Strategic Financial Planning'
    ]
  },
  {
    icon: <FaSearch className="text-5xl text-primary" />,
    title: 'Research',
    image: '/products/research.jpg',
    link: '/products/research',
    description: 'Our research covers around the economy, industry specific and listed companies and regularly produces a range of publications.',
    features: [
      'Economic Research & Analysis',
      'Industry-Specific Insights',
      'Listed Company Reports',
      'Market Intelligence Publications'
    ]
  }
];

export default function ServicesPage() {
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
              backgroundImage: 'url(/products/bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backdropFilter: 'blur(8px)',
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
                      Products & Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Comprehensive investment solutions tailored to meet the diverse needs of our clients, 
                      from institutional investors to individual wealth management.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* Services Cards Section */}
              <section className="py-16 md:py-24 bg-white">
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What We Offer</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Expert financial services designed to help you achieve your investment goals
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-black rounded-sm shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                      >
                        <div className="w-full h-48 object-cover mb-10">
                            <img src={service.image} alt={service.title}/>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                        </div>
                        
                        <div className="p-8 grow flex flex-col">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {service.description}
                            </p>
                          
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-400 mb-3">Key Features:</h4>
                                <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                    <span className="text-primary mr-2">✓</span>
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                          
                            <button onClick={() => window.open(service.link, '_self')} className="mt-auto cursor-pointer bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group">
                                Read More
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why Choose Our Services Section */}
              <section className="py-16 md:py-24 bg-gray-50">
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our Services?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      We combine expertise, innovation, and personalized service to deliver exceptional results
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        title: 'Expertise',
                        description: 'Deep industry knowledge and proven track record in delivering results.',
                        icon: <FaTrophy className="text-5xl text-primary" />
                      },
                      {
                        title: 'Customization',
                        description: 'Tailored solutions designed to meet your specific investment needs.',
                        icon: <FaCheck className="text-5xl text-primary" />
                      },
                      {
                        title: 'Innovation',
                        description: 'Leveraging cutting-edge technology and best practices in finance.',
                        icon: <FaRegLightbulb className="text-5xl text-primary" />
                      },
                      {
                        title: 'Support',
                        description: 'Dedicated team providing continuous support and guidance.',
                        icon: <FaHandHoldingHeart className="text-5xl text-primary" />
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-black p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                      >
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-16 md:py-24 text-white" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-lg text-gray-300 mb-8">
                      Let us help you achieve your financial goals with our comprehensive range of investment solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-primary cursor-pointer hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300">
                        Schedule a Consultation
                      </button>
                      <button className="bg-white/1 cursor-pointer backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 border border-white/30">
                        Download Brochure
                      </button>
                    </div>
                  </motion.div>
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
