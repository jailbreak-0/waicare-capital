'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScrollContextType {
  scrollY: number;
  isAtTop: boolean;
  scrollDirection: 'up' | 'down';
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  isAtTop: true,
  scrollDirection: 'down',
});

export const useScroll = () => useContext(ScrollContext);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY < 100);
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, isAtTop, scrollDirection }}>
      {children}
    </ScrollContext.Provider>
  );
}
