'use client';

import React from 'react';
import { useScroll } from './ScrollProvider';

export default function Marquee() {
  const { isAtTop } = useScroll();
  
  const prices = `OF Daily Prices
01 Jan 2025 3.4067 | 02 Jan 2025 3.4089 | 03 Jan 2025 3.3274 | 04 Jan 2025 3.4128 | 05 Jan 2025 3.4148 | 
06 Jan 2025 3.4172 | 07 Jan 2025 3.4189 | 08 Jan 2025 3.3869 | 09 Jan 2025 3.3939 | 10 Jan 2025 3.3949 |
11 Jan 2025 3.3969 | 12 Jan 2025 3.399 | 13 Jan 2025 3.4001 | 14 Jan 2025 3.4259 | 15 Jan 2025 3.4274 |
16 Jan 2025 3.3727 | 17 Jan 2025 3.384 | 18 Jan 2025 3.3786 | 19 Jan 2025 3.3882 | 20 Jan 2025 3.3925 |
21 Jan 2025 3.3948 | 22 Jan 2025 3.3968 | 23 Jan 2025 3.3499 | 24 Jan 2025 3.3499 | 25 Jan 2025 3.352 |
26 Jan 2025 3.3543 | 27 Jan 2025 3.3343 | 28 Jan 2025 3.3176 | 29 Jan 2025 3.3146 | 30 Jan 2025 3.3187 |
31 Jan 2025 3.3274 | 01 Feb 2025 3.3208 | 02 Feb 2025 3.323 | 03 Feb 2025 3.3486 | 04 Feb 2025 3.3509 |
05 Feb 2025 3.3529 | 06 Feb 2025 3.3576 | 07 Feb 2025 3.3567 | 08 Feb 2025 3.3589 | 09 Feb 2025 3.3612 |
10 Feb 2025 3.3995 | 11 Feb 2025 3.4038 | 12 Feb 2025 3.4208 | 13 Feb 2025 3.4161 | 14 Feb 2025 3.4186 |
15 Feb 2025 3.42 | 16 Feb 2025 3.4222 | 17 Feb 2025 3.4243 | 18 Feb 2025 3.4265 | 19 Feb 2025 3.4318 |
20 Feb 2025 3.4461 | 21 Feb 2025 3.4511 | 22 Feb 2025 3.4524 | 23 Feb 2025 3.4539 | 24 Feb 2025 3.4589 |
25 Feb 2025 3.4643 | 26 Feb 2025 3.4926 | 27 Feb 2025 3.488`;

  return (
    <div
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
        isAtTop ? 'h-12 opacity-100' : 'h-0 opacity-0'
      } overflow-hidden`}
      style={{ zIndex: 60 }}
    >
      <div className="bg-linear-to-r from-primary via-primary-hover to-primary w-full h-12 overflow-hidden flex items-center shadow-lg">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
            {prices}
          </span>
          <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
            {prices}
          </span>
        </div>
      </div>
    </div>
  );
}
