import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';

// --- DATA: Store all client stories in an array for easy management ---
const clientData = [
  {
    logoSrc: '/assets/tata.webp',
    logoAlt: 'TATA Logo',
    logoHeight: 24, // Adjust height for each logo to maintain visual balance
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
    logoSrc: '/assets/trueid.webp',
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

const SuccessStory = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        
      <h4 className='text-[28px] md:text-[32px] text-gray-900 font-bold'>
        <span className='block font-normal'>Success Story</span> We Don't Build Customers. We Build Relationships
      </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
          
          {clientData.map((client, index) => (
            // Using React.Fragment to handle the conditional divider
            <React.Fragment key={client.logoAlt}>
              {/* The actual client story card */}
              <div className="flex flex-col">
                <div className="h-10 mb-6">
                  <Image
                    src={client.logoSrc}
                    alt={client.logoAlt}
                    width={140} // Provide a generous width, height will constrain it
                    height={client.logoHeight}
                    className="h-full w-auto object-contain object-left"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {client.description}
                </p>
                <div className="mt-auto pt-6"> {/* mt-auto pushes this to the bottom */}
                  <p className="text-3xl font-bold text-gray-900">{client.stat}</p>
                  <p className="text-sm text-gray-500 mt-1">{client.statDescription}</p>
                </div>
              </div>

              {/* Conditional Divider: Shows after the 3rd item ONLY on desktop */}
              {index === 2 && (
                <div className="hidden lg:block lg:col-span-3 my-4 border-t-2 border-dotted border-gray-200" />
              )}
            </React.Fragment>
          ))}

        </div>

        {/* "Explore More" Link at the bottom */}
        <div className="text-center mt-16">
          <Link href="/case-studies" className="group inline-flex items-center text-green-600 font-semibold transition-colors hover:text-green-700">
            Explore More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SuccessStory;