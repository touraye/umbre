import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import Heading from './Heading';

// --- DATA ---
// A simple array for the key points
const keyPoints = [
  'Transparent Process',
  'Direct Communication',
  '100% Risk Free',
];

const CtaSection = () => {
  return (
    <section className="relative text-white overflow-hidden">            
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/darkgreen.webp"
          alt="Dark green abstract pattern"
          layout="fill"
          objectFit="cover"
          priority
        />       
        <div className="absolute inset-0 bg-linear-to-t to-green-900/50" />
      </div>
      <div className="relative z-10 contain py-20 sm:py-28 flex flex-col items-center text-center">                            
        <Heading top="Hire Our Experienced & Skilled Developers To" button='Customize Your OTT Platform' color='#f9df91' align='center' mdAlign='center' />
        <ul className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-0 md:gap-6">
          {keyPoints.map((point, index) => (
            <li key={point} className="flex items-center justify-center gap-2">            
             <span className="inline-block text-gray-400 text-[40px]">•</span>
              <span className='inline-block text-[21px]'>{point}</span>
            </li>
          ))}
        </ul>     
        <div className="mt-10">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-[22px] md:text-[28px] font-bold py-6 px-8 md:py-8 rounded-lg border-[#FF6900]">
            <Link href="/contact-experts">
              Talk To Our Experts
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default CtaSection;