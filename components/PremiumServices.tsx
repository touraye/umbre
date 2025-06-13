import Heading from './Heading';
import {
  Card,
  CardContent,
  CardHeader,
} from './ui/card';

// --- Custom SVG Icon Components ---
// Generated to match the UI. They accept standard SVG props like className.
const IconUIUX: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4.5l7.5 7.5M4.5 14.5l7.5 7.5" />
    <path d="M2 12h2.5" /> <path d="M19.5 12h2.5" />
    <path d="M12 2v2.5" /> <path d="M12 19.5v2.5" />
    <path d="M14.5 4.5a.5.5 0 1 0-1 0 .5.5 0 1 0 1 0Z" />
    <path d="M4.5 4.5a.5.5 0 1 0-1 0 .5.5 0 1 0 1 0Z" />
    <path d="M19.5 4.5a.5.5 0 1 0-1 0 .5.5 0 1 0 1 0Z" />
    <path d="M4.5 14.5a.5.5 0 1 0-1 0 .5.5 0 1 0 1 0Z" />
    <path d="M19.5 14.5a.5.5 0 1 0-1 0 .5.5 0 1 0 1 0Z" />
    <path d="M4.5 19.5a.5.5 0 1 0-1 0 .5.5 0 1 0 1 0Z" />
    <path d="M14.5 19.5a.5.5 0 1 0-1 0 .5.5 0 1 0 1 0Z" />
    <path d="M19.5 19.5a.5.5 0 1 0-1 0 .5.5 0 1 0 1 0Z" />
  </svg>
);

const IconCrossPlatform: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="8" width="12" height="12" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const IconCloud: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="22" />
  </svg>
);

const IconCDN: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconMobileTV: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="16" height="20" rx="2" ry="2" />
    <rect x="2" y="7" width="10" height="12" rx="1" />
  </svg>
);

const IconIntegrations: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.94c1.5 0 2.75 1.25 2.75 2.75S13.5 26.44 12 26.44s-2.75-1.25-2.75-2.75S10.5 20.94 12 20.94Z" transform="translate(0 -4.5)" />
    <path d="m15.71 13.66-2.44-1.41.01-.01c.63-1.09 1.44-2.83 1.44-4.24A4.5 4.5 0 0 0 12 3.5a4.5 4.5 0 0 0-2.72 8.01l-2.44 1.41a1.51 1.51 0 0 0-.82 1.34c0 .83.67 1.5 1.5 1.5h7.98c.83 0 1.5-.67 1.5-1.5a1.51 1.51 0 0 0-.81-1.34Z" />
  </svg>
);

// --- Data for the service cards ---
const servicesData = [
  {
    icon: IconUIUX,
    title: 'UI/UX',
    subtitle: 'Development',
    description: 'Craft engaging, intuitive interfaces for an exceptional viewer journey on your OTT platform.',
  },
  {
    icon: IconCrossPlatform,
    title: 'Cross-platform',
    subtitle: 'Development',
    description: 'Extend audience reach with adaptable solutions, while ensuring consistent experiences across diverse platforms.',
  },
  {
    icon: IconCloud,
    title: 'Cloud',
    subtitle: 'Infrastructure',
    description: 'Build on a scalable, secure cloud foundation for a resilient and flexible OTT app development.',
  },
  {
    icon: IconCDN,
    title: 'Global',
    subtitle: 'Video CDN',
    description: 'Ensure high-quality, buffer-free streaming worldwide with a powerful content delivery network.',
  },
  {
    icon: IconMobileTV,
    title: 'Mobile & TV',
    subtitle: 'App Deployment',
    description: 'Mobile & TV App Deployment Seamlessly deliver content to all your audiences on mobile devices and smart TVs.',
  },
  {
    icon: IconIntegrations,
    title: '200+ Third-party',
    subtitle: 'Integrations',
    description: 'Seamlessly integrate external apps and services for better app functionality and user experience.',
  },
];

const PremiumServices = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="contain">                
        <Heading top="Premium OTT App Development" button='For Your Business Needs' />
      
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="border-solid md:border-none hover:bg-gray-100 shadow-none text-center">
              <CardHeader className="flex items-start">
                <div className="bg-teal-600 rounded-full p-4 inline-flex">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </CardHeader>
              <CardContent className='text-start'>
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.title}
                  <br />
                  {service.subtitle}
                </h4>
                <p className="mt-2 text-gray-600 p-medium p-large leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;