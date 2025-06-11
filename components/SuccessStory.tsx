'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';

// --- A custom hook to detect screen size. This is a standard and robust pattern. ---
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

// --- DATA: Store all client stories ---
const clientData = [
  {
    logoSrc: '/assets/tata.webp',
    logoAlt: 'TATA Logo',
    logoHeight: 24,
    description: 'Enabled thousands of IoT devices for Mumbai\'s smart city initiatives, boosting urban connectivity and efficiency',
    stat: '500+',
    statDescription: 'IoT Meters Connected',
  },
  {
    logoSrc: '/assets/versa.webp',
    logoAlt: 'Versa Networks Logo',
    logoHeight: 32,
    description: 'Launched an AI-powered SD-WAN & SASE platform that manages IT edge devices for large global enterprises',
    stat: '120+',
    statDescription: 'Fortune 500 Companies',
  },
  {
    logoSrc: '/assets/iff.webp',
    logoAlt: 'IFF Logo',
    logoHeight: 40,
    description: 'Supports its GCC (Global capability center) through flexible and effective staff augmentations',
    stat: '50%',
    statDescription: 'of Total Engineers',
  },
  {
    logoSrc: '/assets/daimler.webp',
    logoAlt: 'Daimler Logo',
    logoHeight: 20,
    description: 'Delivered end-to-end Uberization of Trucks platform with advanced fleet management and optimization.',
    stat: '100K',
    statDescription: 'Bharat Benz Trucks in 3 Countries',
  },
  {
    logoSrc: '/assets/true.webp',
    logoAlt: 'trueID Logo',
    logoHeight: 28,
    description: 'Built the super app for SE-Asia\'s largest telecom provider, improving user experience and service capabilities.',
    stat: '1M+',
    statDescription: 'Concurrent Users',
  },
  {
    logoSrc: '/assets/mygate.webp',
    logoAlt: 'MyGate Logo',
    logoHeight: 36,
    description: 'Integrated MirrorFly communication tools from chats to calls hosted on a private cloud.',
    stat: '5M+',
    statDescription: 'Conversations Delivered',
  },
];

const INITIAL_MOBILE_COUNT = 3;

const SuccessStory = () => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false); 
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // This is the core logic: determine which items to show.
  const displayedClients = isDesktop
    ? clientData 
    : isMobileExpanded
    ? clientData 
    : clientData.slice(0, INITIAL_MOBILE_COUNT); 
  return (
    <section className="bg-white py-8 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="container mx-auto px-4">
      <h4 className='text-[28px] md:text-[32px] text-gray-900 font-bold mb-8'>
        <span className='block font-normal'>Success Story</span> We Don't Build Customers. We Build Relationships
      </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
          
          {displayedClients.map((client, index) => (
            <React.Fragment key={client.logoAlt}>
              <div className="flex flex-col border-b-2 lg:border-none border-dotted border-gray-200 pb-8 lg:pb-0">
                <div className="h-10 mb-6">
                  <Image
                    src={client.logoSrc}
                    alt={client.logoAlt}
                    width={140}
                    height={client.logoHeight}
                    className="h-full w-auto object-contain object-left"
                  />
                </div>
                <p className="text-gray-950 leading-relaxed font-bold text-[18px]">{client.description}</p>
                <div className="mt-auto pt-6">
                  <p className="text-3xl font-bold text-gray-950">{client.stat}</p>
                  <p className="text-sm text-gray-950 font-bold mt-1">{client.statDescription}</p>
                </div>
              </div>

              {/* Conditional Full-Width Divider: Shows after the 3rd item ONLY on desktop */}
              {isDesktop && index === 2 && (
                <div className="lg:col-span-3 my-4 border-t-2 border-dotted border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* --- Conditional Buttons --- */}
        <div className="text-center mt-12">
          {/* "Show More" Button for MOBILE view */}
          {!isDesktop && !isMobileExpanded && (
            <button
              onClick={() => setIsMobileExpanded(true)}
              className="group inline-flex items-center text-green-600 font-semibold transition-colors hover:text-green-700"
            >
              Show More
              <ArrowDown className="ml-2 h-4 w-4" />
            </button>
          )}

          {/* "Explore More" Link for DESKTOP view */}
          {isDesktop && (
            <Link href="/case-studies" className="group inline-flex items-center text-green-600 font-semibold transition-colors hover:text-green-700">
              Explore More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;