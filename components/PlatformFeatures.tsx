import React from 'react';
import Image from 'next/image';
// --- Custom SVG Icon Components ---
const IconStream: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </svg>
);

const IconManageVideos: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20v-4" /> <path d="M12 14V4" />
    <path d="M7 14h10" /> <path d="m15 18-3-3-3 3" />
    <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
  </svg>
);

const IconMonetize: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2" /> <path d="M12 20v2" />
    <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1" />
    <path d="M12 8V5a2 2 0 0 0-2-2H8" />
    <path d="m20.7 14.5-1.4-1.4" />
    <path d="M3.3 9.5l1.4 1.4" />
    <path d="M12 16h.01" />
  </svg>
);

const IconHLS: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9.5A3.5 3.5 0 0 1 5.5 6h13A3.5 3.5 0 0 1 22 9.5V16a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 16Z" />
    <path d="m15 11-4 2.5 4 2.5v-5Z" />
  </svg>
);

// --- Data for the features ---
const featuresData = [
  {
    icon: IconStream,
    title: 'Stream Live/On-Demand',
    description: 'Engage audiences with seamless live and on-demand streaming experiences — events, games, sermons to anything.',
  },
  {
    icon: IconManageVideos,
    title: 'Manage Videos Easily',
    description: 'Seamlessly organize, optimize, and manage your video content for maximum impact and accessibility.',
  },
  {
    icon: IconMonetize,
    title: 'Monetize As You Want',
    description: 'Unlock revenue with 10+ tailored monetization models. Maximize profits from your valuable video content.',
  },
  {
    icon: IconHLS,
    title: 'HLS Streaming Playback',
    description: 'Deliver high-quality streaming for optimal viewer experiences with HSL streaming on HTML5 player.',
  },
];

const PlatformFeatures = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
            <h2 className="text-[26px] md:text-[36px] text-gray-800">
            Build An OTT Platform With All
            <span className="font-bold text-gray-900"> The Features You Will Ever Need</span>
            </h2>              
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">                    
          <div className="lg:w-1/2">          
                     
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featuresData.map((feature, index) => (
                <div key={index}>
                  <div className="bg-green-100 text-green-700 rounded-lg p-3 inline-flex">
                    <feature.icon className="h-12 w-12" />
                  </div>
                  <h4 className="mt-4 font-bold text-[21px] md:text-[28px] text-gray-900">{feature.title}</h4>
                  <p className="mt-2 text-[19px] md:text-[24px] leading-[1.5] text-gray-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
              
          <div className="lg:w-1/2">
            <Image
              src="/assets/sports.png" 
              alt="Platform Features"
              width={1200}  
              height={900} 
              className="rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;