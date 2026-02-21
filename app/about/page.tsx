'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Marquee from '../components/Marquee';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaCheckCircle, FaUsers, FaChartLine, FaHandshake, FaShieldAlt, FaTrophy, FaLightbulb, FaBrain } from 'react-icons/fa';

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

export default function AboutPage() {
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
                      Who We Are
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      WAICA Re Capital Limited is a leading fund management and investment advisory firm 
                      committed to delivering exceptional value to our clients through innovative financial solutions.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* About Content Section */}
              <section className="py-16 md:py-24 bg-white">
                <div className="container-custom">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants}>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        A wholly owned subsidiary of WAICA Reinsurance Corporation Plc.
                      </h2>
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                          WAICA Re Capital is licensed and regulated by the Securities and Exchange Commission (SEC) under the Securities Industries Act,2016 (Act 929) as Fund Manager and Investment Advisor and National Pension Regulatory Authority as Pension Fund Manager under the National Pensions Act,2008(Act 766).
                        </p>
                        <p>
                          With years of experience in the financial services industry, we have built a reputation 
                          for excellence, integrity, and innovation. Our team of seasoned professionals brings 
                          together deep market knowledge and global best practices to deliver superior investment 
                          outcomes.
                        </p>
                        <p>
                          We are committed to helping our clients achieve their financial goals through strategic 
                          asset allocation, rigorous research, and proactive portfolio management.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                      <div className="bg-linear-to-br from-primary to-primary-hover p-8 rounded-lg shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                            <FaUsers className="text-5xl text-white mx-auto mb-3" />
                            <h3 className="text-2xl font-bold text-white mb-1">500+</h3>
                            <p className="text-gray-200 text-sm">Happy Clients</p>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                            <FaChartLine className="text-5xl text-white mx-auto mb-3" />
                            <h3 className="text-2xl font-bold text-white mb-1">GH₵2B+</h3>
                            <p className="text-gray-200 text-sm">Assets Under Management</p>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                            <FaHandshake className="text-5xl text-white mx-auto mb-3" />
                            <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
                            <p className="text-gray-200 text-sm">Years Experience</p>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                            <FaCheckCircle className="text-5xl text-white mx-auto mb-3" />
                            <h3 className="text-2xl font-bold text-white mb-1">100%</h3>
                            <p className="text-gray-200 text-sm">Client Satisfaction</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Mission & Vision Section */}
              <section className="py-16 md:py-24 bg-gray-50">
                <div className="container-custom">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div variants={itemVariants} className="bg-white p-8 md:p-10 rounded-lg shadow-lg border-2 border-primary">
                      <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
                        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
                      <p className="text-gray-600 leading-relaxed">
                        To provide the maximum economic return to our shareholders over the long-term, and to contribute to the economic vitality and quality of life of the communities we serve. We believe this is accomplished by providing an organizational environment that encourages the individual potential of our employees and emphasizes the highest quality financial services to our clients.
                      </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white p-8 md:p-10 rounded-lg shadow-lg border-2 border-primary">
                      <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
                        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
                      <p className="text-gray-600 leading-relaxed">
                        To become widely recognized as a customer-oriented, socially responsible, financially strong, successful competitor in the investment banking business.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Investment Banking Services Section */}
              <section className="py-4 md:py-2 bg-gray-50">
                <div className="container-custom">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants} className="order-2 lg:order-1">
                      <div className="relative h-96 rounded-sm overflow-hidden">
                        <img 
                          src="/about-page/waica_whoweare.jpg" 
                          alt="Investment Growth"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="order-1 lg:order-2">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        We offer full range of competitive investment banking services
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Our clientele includes insurance companies, banks, non-bank financial institutions, church groups, NGO's, professional associations, high net worth individual etc
                      </p>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* WAICA Re Parent Company Section */}
              <section className="py-4 md:py-2 bg-white">
                <div className="container-custom">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants}>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        WAICA Re
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        WAICA Reinsurance Corporation Plc a leading reinsurance company in the West African sub-region with presence in Ghana, Nigeria, Sierra Leone, Cote D'Ivoire, Tunisia, Zimbabwe and Kenya with total assets in excess of US$130.4 million as at 2019.
                      </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                      <div className="relative h-96 rounded-sm overflow-hidden">
                        <img 
                          src="/about-page/waica_whoweare2.jpg" 
                          alt="Growth and Sustainability"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Core Values Section */}
              <section className="py-16 md:py-24 bg-white">
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      These principles guide everything we do and define who we are as an organization
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        title: 'Integrity',
                        description: 'We conduct our business with the highest ethical standards and transparency.',
                        icon: <FaShieldAlt className="text-primary" />
                      },
                      {
                        title: 'Excellence',
                        description: 'We strive for excellence in everything we do, delivering superior results.',
                        icon: <FaTrophy className="text-primary" />
                      },
                      {
                        title: 'Innovation',
                        description: 'We embrace innovation and continuously seek better ways to serve our clients.',
                        icon: <FaLightbulb className="text-primary" />
                      },
                      {
                        title: 'Client Focus',
                        description: 'Our clients success is our success. We prioritize their needs above all.',
                        icon: <FaBrain className="text-primary" />
                      }
                    ].map((value, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary"
                      >
                        <div className="text-5xl mb-4">{value.icon}</div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why Choose Us Section */}
              <section className="py-16 md:py-24 text-white" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WAICA Re Capital?</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                      We offer a unique combination of expertise, innovation, and personalized service
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        title: 'Expert Team',
                        description: 'Our team comprises seasoned professionals with deep industry expertise and proven track records.'
                      },
                      {
                        title: 'Tailored Solutions',
                        description: 'We develop customized investment strategies aligned with your unique goals and risk profile.'
                      },
                      {
                        title: 'Proven Results',
                        description: 'Consistent performance and superior returns backed by rigorous research and analysis.'
                      },
                      {
                        title: 'Transparency',
                        description: 'Clear communication and regular reporting keep you informed about your investments.'
                      },
                      {
                        title: 'Risk Management',
                        description: 'Sophisticated risk management frameworks to protect and grow your wealth.'
                      },
                      {
                        title: 'Client Service',
                        description: 'Dedicated relationship managers providing personalized attention and support.'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
                      >
                        <FaCheckCircle className="text-3xl text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
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
