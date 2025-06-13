'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button'; 
import { ArrowRight } from 'lucide-react';

const FloatingCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function will run every time the user scrolls
  const handleScroll = () => {
    // The scroll position (in pixels) after which the button should appear.
    // You can adjust this value. 200px is a good starting point.
    const scrollThreshold = 200;
    
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // This effect sets up the scroll event listener when the component mounts
  // and cleans it up when the component unmounts.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect only runs once

  return (

    <div
      className={`
        md:hidden p-2 fixed bottom-0 left-0 right-0 bg-gray-50 z-50
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <Button
        asChild
        size="lg"
        className="bg-orange-500 text-[22px] w-full hover:bg-orange-600 text-white font-bold h-14 px-8 rounded-lg shadow-lg inline-flex items-center gap-4 justify-center transition-colors duration-300"
      >
        <Link href="/get-quote" className='group'>
          Get a Free Quote
          <ArrowRight className="w-[32px] h-16 transition-transform duration-300 ease-in-out group-hover:translate-x-2 animate-pulse-horizontal" />
        </Link>
      </Button>
    </div>
  );
};

export default FloatingCtaButton;