'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useScroll } from './ScrollProvider';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAtTop } = useScroll();
  const pathname = usePathname();
  
  // Apply transparent effect when at top of any page
  const shouldBeTransparent = isAtTop;

  // Helper function to check if link is active
  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300`}
      style={{ top: shouldBeTransparent ? '48px' : '0px' }}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <div
        className={`transition-all duration-300 ${
          shouldBeTransparent
            ? 'bg-transparent shadow-none'
            : 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/50'
        }`}
      >
        {/* Topbar */}
        <div
          className={`hidden lg:block bg-linear-to-r from-white/90 to-white/80 backdrop-blur-sm border-b border-white/20 transition-all duration-300 ${
            shouldBeTransparent ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="absolute inset-0 bg-white"></div>
          <div className="container-custom relative z-10">
            <div className="flex justify-between items-center py-3">
              <div className="flex flex-wrap gap-4 lg:gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <FaPhone className="text-primary"/>
                  <a href="tel:0501577546" className="text-gray-400 hover:text-primary">050 157 7546</a>
                  <span className="text-gray-400">|</span>
                  <a href="tel:0501577548" className="text-gray-400 hover:text-primary">050 157 7548</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaEnvelope className="text-primary"/>
                  <a href="mailto:info@waicarecapital.com" className="text-gray-400 hover:text-primary">info@waicarecapital.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white/0">
          <div className="container-custom">
            <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center transform hover:scale-105 transition-transform duration-300">
              <Image src="/waicarelogo-1.png" alt="WAICA Re Capital Ltd" width={140} height={47} className="md:w-45 md:h-15" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8 group/nav">
              <Link href="/" className={`text-xs xl:text-sm font-bold transition-all duration-300 relative group-hover/nav:text-gray-400 [&:hover]:text-primary ${
                shouldBeTransparent ? 'text-white drop-shadow-lg' : isActive('/') ? 'text-primary' : 'text-gray-800'
              }`}>
                Home
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive('/') ? 'w-full' : 'w-0 hover:w-full'
                }`}></span>
              </Link>
              <Link href="/about" className={`text-xs xl:text-sm font-bold transition-all duration-300 relative group-hover/nav:text-gray-400 [&:hover]:text-primary ${
                shouldBeTransparent ? 'text-white drop-shadow-lg' : isActive('/about') ? 'text-primary' : 'text-gray-800'
              }`}>
                Who we are
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive('/about') ? 'w-full' : 'w-0 hover:w-full'
                }`}></span>
              </Link>
              <div className="relative group/dropdown">
                <button className={`text-xs cursor-pointer xl:text-sm font-bold transition-all duration-300 group-hover/nav:text-gray-400 [&:hover]:text-primary ${
                  shouldBeTransparent ? 'text-white drop-shadow-lg' : 'text-gray-800'
                }`}>
                  Leadership
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300">
                  <div className="bg-white shadow-xl rounded-lg py-2 min-w-50 border border-gray-100">
                    <Link href="/board" className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                      isActive('/board') ? 'bg-primary text-white' : 'hover:text-primary'
                    }`}>
                      Board of Directors
                    </Link>
                    <Link href="/management" className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                      isActive('/management') ? 'bg-primary text-white' : 'hover:text-primary'
                    }`}>
                      Management
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/services" className={`text-xs xl:text-sm font-bold transition-all duration-300 relative group-hover/nav:text-gray-400 [&:hover]:text-primary ${
                shouldBeTransparent ? 'text-white drop-shadow-lg' : isActive('/services') ? 'text-primary' : 'text-gray-800'
              }`}>
                Products and Services
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive('/services') ? 'w-full' : 'w-0 hover:w-full'
                }`}></span>
              </Link>
              <Link href="/downloads" className={`text-xs xl:text-sm font-bold transition-all duration-300 relative group-hover/nav:text-gray-400 [&:hover]:text-primary ${
                shouldBeTransparent ? 'text-white drop-shadow-lg' : isActive('/downloads') ? 'text-primary' : 'text-gray-800'
              }`}>
                Downloads
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive('/downloads') ? 'w-full' : 'w-0 hover:w-full'
                }`}></span>
              </Link>
              <Link href="/contact" className={`text-xs xl:text-sm font-bold transition-all duration-300 relative group-hover/nav:text-gray-400 [&:hover]:text-primary ${
                shouldBeTransparent ? 'text-white drop-shadow-lg' : isActive('/contact') ? 'text-primary' : 'text-gray-800'
              }`}>
                Contact Us
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive('/contact') ? 'w-full' : 'w-0 hover:w-full'
                }`}></span>
              </Link>
              <button className="btn btn-primary text-xs py-2.5 px-6 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Let&apos;s talk
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden ${
              shouldBeTransparent ? 'text-white' : 'text-gray-800'
            }`}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
              <Link href="/" className={`block py-2 text-sm font-bold ${
                isActive('/') ? 'text-primary' : 'hover:text-primary'
              }`}>Home</Link>
              <Link href="/about" className={`block py-2 text-sm font-bold ${
                isActive('/about') ? 'text-primary' : 'hover:text-primary'
              }`}>Who we are</Link>
              <Link href="/board-of-directors" className={`block py-2 text-sm font-bold pl-4 ${
                isActive('/board-of-directors') ? 'text-primary' : 'hover:text-primary'
              }`}>Board of Directors</Link>
              <Link href="/management" className={`block py-2 text-sm font-bold pl-4 ${
                isActive('/management') ? 'text-primary' : 'hover:text-primary'
              }`}>Management</Link>
              <Link href="/services" className={`block py-2 text-sm font-bold ${
                isActive('/services') ? 'text-primary' : 'hover:text-primary'
              }`}>Products and Services</Link>
              <Link href="/downloads" className={`block py-2 text-sm font-bold ${
                isActive('/downloads') ? 'text-primary' : 'hover:text-primary'
              }`}>Downloads</Link>
              <Link href="/contact" className={`block py-2 text-sm font-bold ${
                isActive('/contact') ? 'text-primary' : 'hover:text-primary'
              }`}>Contact Us</Link>
              <button className="w-full mt-4 btn btn-primary text-sm">
                Let&apos;s talk
              </button>
            </div>
          )}
        </div>
        </div>
      </div>
    </motion.nav>
  );
}
