'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapPin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-gray-900 to-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1 - SOF Forms */}
          <div>
            <h5 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white border-b-2 border-primary inline-block pb-2">SOF Forms</h5>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary text-sm transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  SOF Application Form (Individual)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary text-sm transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  SOF Application Form (Corporate)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary text-sm transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  Individual Discretionary Form
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary text-sm transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  Corporate Non Discretionary Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Get in touch */}
          <div>
            <h5 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white border-b-2 border-primary inline-block pb-2">Get in Touch</h5>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-start gap-2">
                <FaMapPin className="text-primary mt-1" /> <br />
                <span>4th Floor, Gulf House, Shiashie, Accra</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-primary" /> <br />
                <a href="tel:0501577546" className='hover:text-primary transition-colors'>050 157 7546</a>
                <span className="mx-1 text-gray-400">|</span>
                <a href="tel:0501577548" className='hover:text-primary transition-colors'>050 157 7548</a>
              </p>
              <p className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaEnvelope className="text-primary" /> <br />
                <a href="mailto:info@waicarecapital.com">info@waicarecapital.com</a>
              </p>
            </div>
          </div>

          {/* Column 3 - Get social with us */}
          <div>
            <h5 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white border-b-2 border-primary inline-block pb-2">Get Social</h5>
            <p className="text-gray-300 text-sm mb-6">Follow us on social media to stay updated</p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full text-white hover:bg-primary hover:scale-110 transform transition-all duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full text-white hover:bg-primary hover:scale-110 transform transition-all duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full text-white hover:bg-primary hover:scale-110 transform transition-all duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full text-white hover:bg-primary hover:scale-110 transform transition-all duration-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-black border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <span>
              © 2026 WAICA Re Capital • Designed by{' '}
              <a href="https://ismartghana.com/" className="hover:text-primary transition-colors">
                iSmart International Ghana
              </a>
            </span>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
