import Image from 'next/image';
import React from 'react';
import Heading from './Heading';

// --- Data for the technology logos ---
const techLogos = [
  { src: '/assets/microsoft.png', alt: 'Microsoft' },
  { src: '/assets/ffmpeg.png', alt: 'FFMPEG' },
  { src: '/assets/client.png', alt: 'Client' }, 
  { src: '/assets/fairplay.png', alt: 'FairPlay' },
  { src: '/assets/html.png', alt: 'HTML' },
  { src: '/assets/aws.png', alt: 'Amazon Web Services' },
  { src: '/assets/azure.png', alt: 'Microsoft Azure' },
  { src: '/assets/hls.png', alt: 'HLS' },
  { src: '/assets/webrtc.png', alt: 'WebRTC' },
  { src: '/assets/akamai.png', alt: 'Akamai' },
];


const TechnologyExpertise = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="contain">        
      
        <Heading top='OTT App Developers Expertized' button='Across Frameworks & Technologies' />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {techLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-gray-500 hover:border-gray-600"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={250}
                height={250}
                className="w-full object-contain " 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyExpertise;