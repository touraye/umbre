import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './ui/tabs'; 
import { CheckCircle2 } from 'lucide-react';
import Heading from './Heading';

// --- DATA for the tabs ---
const tabsData = [
  {
    value: 'ott-apps',
    triggerText: 'OTT TV Apps',
    imageSrc: '/assets/entertainment.png',
    imageAlt: 'A collage of streaming service logos like Apple TV, Roku, and Android TV',
    title: 'Distribute Videos to Anywhere, Watch on Any Device',
    features: [
      'Reach every screen — Android, Apple TV, Tizen OS, Roku to reach a broader audience.',
      'Stay smooth everywhere and bring consistent user experiences on all devices for a slick content binge.',
      'Your content, your rules — anytime, anywhere, on any device. Take full ownership of the content flow.',
    ],
  },
  {
    value: 'integration',
    triggerText: 'Integration',
    imageSrc: '/assets/CDN.png',
    imageAlt: 'Integration logos like Stripe and PayPal floating over an abstract background',
    title: 'Integration with Your Favorite Apps Made Easy and Faster',
    features: [
      'Expand your content horizons, linking creators for an array of captivating choices.',
      'Streamline transactions, tailor content, and deliver personalized experiences effortlessly.',
      'Leverage integrated data for informed decisions and optimized, tailored content experiences.',
    ],
  },
  {
    value: 'migration',
    triggerText: 'Migration',
    imageSrc: '/assets/customized-platform.png',
    imageAlt: 'A collage of movie posters with an arrow indicating migration',
    title: 'Transfer All Your Content Zero Data Loss & 100% Secure',
    features: [
      'Migrate your current content and user data to your OTT platform seamlessly without data loss.',
      'Reduce downtime to ensure uninterrupted service, minimizing disruptions for your audience.',
      'Effortlessly transfer your content library, user accounts, and settings to your new platform.',
    ],
  },
];

const Solutions = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="contain">               
        <Heading top="Stream On Devices, Migrate Securely And " button='Integrate With Your Favorite Tools' />
        
        <div className="mt-12">
          <Tabs defaultValue={tabsData[0].value} className="w-full">            
            <TabsList className="grid w-full gap-2 max-w-md mx-auto grid-cols-3 h-12">
              {tabsData.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className="text-base border-gray-700 data-[state=active]:bg-[#01403D] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-brand-teal cursor-pointer hover:bg-gray-300 hover:text-black transition-colors duration-200 h-12 flex items-center justify-center text-[14px] p-large">
                  {tab.triggerText}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {tabsData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="pt-12">                
                <div className="flex flex-col-reverse md:flex-row items-center gap-12">                  
                  <div className="md:w-1/2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {tab.title}
                    </h3>
                    <ul className="mt-6 space-y-4">
                      {tab.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 p-medium p-large">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="md:w-1/2">
                    <Image
                      src={tab.imageSrc}
                      alt={tab.imageAlt}
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>

                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Solutions;