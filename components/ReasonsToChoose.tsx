'use client'; // This component uses state, so it must be a Client Component

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowRight, ArrowDown } from 'lucide-react';

// Data for the reasons. This makes it easy to add, remove, or change them.
const reasonsData = [
  { stat: '5X', text: 'Agile Speed to Market.' },
  { stat: '100%', text: 'Customer Success Centric Approach.' },
  { stat: '98%', text: 'Client Retention Rate.' }, // Hidden by default
  { stat: '200+', text: 'In-house Technical Experts.' }, // Hidden by default
  { stat: '15+', text: 'Years of Industry Experience.' }, // Hidden by default
  { stat: '24/7', text: 'Dedicated Support & Maintenance.' }, // Hidden by default
];

const ReasonsToChoose = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine which reasons to show based on the 'isExpanded' state
  const displayedReasons = isExpanded ? reasonsData : reasonsData.slice(0, 2);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">                 
          <div>
            <p className="text-lg text-gray-600">Top 6 Reasons</p>
            <h2 className="mt-1 text-3xl md:text-4xl font-bold text-gray-900">
              Why Global Companies Choose CONTUS Tech
            </h2>
          </div>
          
          <div className="mt-8">
            {displayedReasons.map((reason, index) => (
              <div
                key={index}
                className="py-6 border-b border-gray-200"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <ArrowUp className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-gray-900">{reason.stat}</span>
                    <span className="ml-4">{reason.text}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-x-10 gap-y-4">
            <Link href="/explore" className="group flex items-center text-green-600 font-semibold transition-all hover:text-green-700">
              Explore More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center text-green-600 font-semibold transition-all hover:text-green-700"
            >
              <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
              {isExpanded ? (
                <ArrowUp className="ml-2 h-5 w-5" />
              ) : (
                <ArrowDown className="ml-2 h-5 w-5" />
              )}
            </button>
          </div>      
      </div>
    </section>
  );
};

export default ReasonsToChoose;