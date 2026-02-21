'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Marquee from '../components/Marquee';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaFilePdf, FaFileWord, FaFileExcel, FaDownload, FaCalendar, FaFileAlt } from 'react-icons/fa';

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

const downloadCategories = [
  {
    category: 'Opportunity Fund Resources',
    icon: <FaFileAlt className="text-3xl text-primary" />,
    items: [
      { name: 'SOF Application Form (Individual)', type: 'pdf', size: '0.47 MB', date: '2025', file: '/downloads/Opportunity-Fund-Forms_Individual-2025.pdf' },
      { name: 'SOF Application Form (Corporate)', type: 'pdf', size: '0.45 MB', date: '2025', file: '/downloads/Opportunity-Fund-Forms_Corporate-2025.pdf' },
    ]
  },
  {
    category: 'Fund Fact Sheet',
    icon: <FaFilePdf className="text-3xl text-primary" />,
    items: [
      { name: 'Fund Fact Sheet 2025 Q1', type: 'pdf', size: '0.59 MB', date: 'Q1 2025', file: '/downloads/FUND-FACT-SHEET-Q1-2025.pdf' },
      { name: 'Fund Fact Sheet 2025 Q2', type: 'pdf', size: '0.16 MB', date: 'Q2 2025', file: '/downloads/Fund-Fact-Sheet-OF-Q2-2025.pdf' },
      { name: 'Opportunity Fund Price Sheet (Jan-Sep 2025)', type: 'pdf', size: '0.11 MB', date: 'Sep 2025', file: '/downloads/OPPORTUNITY-FUND-PRICES-JAN-SEPTEMBER-2025-1.pdf' },
    ]
  },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return <FaFilePdf className="text-red-500 text-2xl" />;
    case 'word':
      return <FaFileWord className="text-blue-500 text-2xl" />;
    case 'excel':
      return <FaFileExcel className="text-green-500 text-2xl" />;
    default:
      return <FaFileAlt className="text-gray-500 text-2xl" />;
  }
};

export default function DownloadsPage() {
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
              backgroundImage: 'url(/downloads/bg.jpg)',
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
                      Downloads
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Access our comprehensive library of reports, brochures, forms, and investment insights 
                      to stay informed about our services and market developments.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* Downloads Section */}
              <section className="py-16 md:py-24 bg-white">
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Resource Center</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Download our latest reports, research publications, and informational materials
                    </p>
                  </motion.div>

                  <div className="space-y-12">
                    {downloadCategories.map((category, categoryIndex) => (
                      <motion.div key={categoryIndex} variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-6">
                          {category.icon}
                          <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {category.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                              <div className="flex items-start gap-4">
                                <div className="shrink-0">
                                  {getFileIcon(item.type)}
                                </div>
                                <div className="grow">
                                  <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                      <FaCalendar className="text-xs" />
                                      {item.date}
                                    </span>
                                    <span>{item.size}</span>
                                  </div>
                                  <a 
                                    href={item.file}
                                    download
                                    className="flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors duration-300"
                                  >
                                    <FaDownload />
                                    Download
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Help Section */}
              <section className="py-16 md:py-24 text-white" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
                    <p className="text-lg text-gray-300 mb-8">
                      If you cannot find the document you're looking for or need assistance, 
                      please don't hesitate to contact our support team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300">
                        Contact Support
                      </button>
                      <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 border border-white/30">
                        Request Document
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
