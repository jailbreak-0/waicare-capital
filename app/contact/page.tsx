'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Marquee from '../components/Marquee';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

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

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

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
                      Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Get in touch with our team. We're here to answer your questions and help you 
                      achieve your investment goals.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* Contact Information Section */}
              <section className="py-16 md:py-24 bg-white">
                <div className="container-custom">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="+233 XX XXX XXXX"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Select a subject</option>
                            <option value="fund-management">Fund Management</option>
                            <option value="corporate-finance">Corporate Finance & Advisory</option>
                            <option value="research">Research Services</option>
                            <option value="general">General Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Tell us how we can help you..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
                        >
                          Send Message
                        </button>
                      </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div variants={itemVariants} className="space-y-8">
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                          We'd love to hear from you. Our team is ready to assist you with any questions 
                          or concerns you may have about our services.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <FaMapMarkerAlt className="text-primary text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Our Office</h3>
                            <p className="text-gray-600">
                              Cantonments<br />
                              Accra, Ghana<br />
                              P.O Box CT 11008
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <FaPhone className="text-primary text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                            <p className="text-gray-600">
                              +233 50 157 7546<br />
                              +233 50 157 7548
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <FaEnvelope className="text-primary text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                            <p className="text-gray-600">
                              info@waicarecapital.com
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <FaClock className="text-primary text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                            <p className="text-gray-600">
                              Monday - Friday: 8:00 AM - 5:00 PM<br />
                              Saturday: 9:00 AM - 1:00 PM<br />
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Social Media */}
                      <div className="pt-8 border-t border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                          <a
                            href="#"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-white transition-colors duration-300"
                          >
                            <FaFacebook className="text-xl" />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-white transition-colors duration-300"
                          >
                            <FaTwitter className="text-xl" />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-white transition-colors duration-300"
                          >
                            <FaLinkedin className="text-xl" />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-white transition-colors duration-300"
                          >
                            <FaInstagram className="text-xl" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Map Section */}
              <section className="py-16 md:py-24 bg-gray-50">
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Find Us on the Map</h2>
                    <p className="text-lg text-gray-600">
                      Visit our office and meet our team in person
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.580091234689!2d-0.17947798523374558!3d5.628831895919512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b12c7a4ef21%3A0x82ec0079d94d5ebe!2sADB%20-%20GULF%20HOUSE!5e0!3m2!1sen!2sgh!4v1668296597189!5m2!1sen!2sgh"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="WAICA Re Capital Office Location"
                    />
                  </motion.div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="py-16 md:py-24 text-white" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                <div className="container-custom">
                  <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                      Quick answers to common questions you might have
                    </p>
                  </motion.div>

                  <div className="max-w-3xl mx-auto space-y-6">
                    {[
                      {
                        question: 'What services does WAICA Re Capital offer?',
                        answer: 'We offer Fund Management, Corporate Finance & Advisory, and Research services tailored to meet diverse client needs.'
                      },
                      {
                        question: 'How can I open an account?',
                        answer: 'You can download our account opening form from the Downloads page or contact us directly for assistance with the process.'
                      },
                      {
                        question: 'What is the minimum investment required?',
                        answer: 'Minimum investment requirements vary by product. Please contact our team for specific details about our investment products.'
                      },
                      {
                        question: 'How do I schedule a consultation?',
                        answer: 'You can schedule a consultation by calling us, sending an email, or filling out the contact form on this page.'
                      }
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                      >
                        <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                        <p className="text-gray-300">{faq.answer}</p>
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
