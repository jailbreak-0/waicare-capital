'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} className="section-padding bg-linear-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">Get In Touch</h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Have questions or need more information? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h5 className="text-sm font-bold text-gray-500 mb-1">Address</h5>
                  <p className="text-base md:text-lg text-gray-800">
                    4th Floor Gulf House, Gulf Street-Shiashie
                  </p>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-gray-500 mb-1">Email</h5>
                  <a href="mailto:info@waicarecapital.com" className="text-base md:text-lg text-gray-800 hover:text-primary transition-colors break-all">
                    info@waicarecapital.com
                  </a>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-gray-500 mb-1">Phone</h5>
                  <a href="tel:0501577546" className="text-base md:text-lg text-gray-800 hover:text-primary transition-colors">
                    050 157 7546
                  </a>
                    <span className="mx-2 text-gray-400">|</span>
                  <a href="tel:0501577548" className="text-base md:text-lg text-gray-800 hover:text-primary transition-colors">
                    050 157 7548
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-primary to-primary-hover p-6 md:p-8 rounded-lg text-white">
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm md:text-base text-gray-100">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="card p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-1 text-gray-900">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                  rows={6}
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary py-3 md:py-4 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
