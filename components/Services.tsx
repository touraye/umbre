'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card'; // Adjust path to your ui components
import { ArrowRight, ArrowDown } from 'lucide-react';
import Image from 'next/image';

// --- A custom hook to detect screen size ---
// This is the standard way to handle responsive rendering logic in React.
const useMediaQuery = (query: string) => {
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


// --- Data for our service cards ---
const servicesData = [
  {
    title: 'Digital Product Engineering',
    description: 'We support you from initial ideation and wireframe design to product development, whether on the cloud or on-premises. Our approach uses advanced microservices architecture and incorporates CI/CD and DevOps processes to ensure success through the UAT phase.',
    href: '/services/product-engineering',
  },
  {
    title: 'Digital Transformation',
    description: 'We help you achieve a smooth transition from legacy systems to modern, scalable solutions with industry-specific integrations. Our data-driven approach brings transparency with comprehensive real-time analytics, designed to improve processes, boost productivity, and maximize ROI.',
    href: '/services/digital-transformation',
  },
  {
    title: 'Full Stack Software Development',
    description: 'We offer a complete suite for B2B and B2C app development with pre-built frontend and backend frameworks. Our solutions deploy across multi-cloud environments, scaling for millions of users. From MVP to production, we support customers with flexible pricing to ensure success.',
    href: '/services/full-stack',
  },
  {
    title: 'Cloud and DevOps',
    description: 'We specialize in creating cloud-native applications in both SaaS and PaaS models for a global clientele. Our expertise covers entire DevOps workflows, from CI/CD, containerization, and orchestration, across major cloud platforms such as AWS, GCP, Azure, and Oracle Cloud.',
    href: '/services/cloud-devops',
  },
  {
    title: 'AI Agents & RAG',
    description: 'We quickly integrate AI capabilities into your organization by developing RAG and AI agents to optimize processes. This enhances analysis, intelligence application, and workforce productivity. We use top vector databases and generative AI models for optimal results.',
    href: '/services/ai-agents',
  },
  {
    title: 'Platforms and Integration Services',
    description: 'We provide integrations with leading platforms to automate and optimize your workflows. Our services include custom integrations with platforms like ServiceNow, HubSpot, Salesforce, Google Workspace, and major CRMs. We also support open-source frameworks too.',
    href: '/services/integration',
  },
];

const INITIAL_VISIBLE_CARDS = 2;

// --- The Main Component ---
const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // We consider 'desktop' to be screens 768px wide or more (the 'md' breakpoint in Tailwind)
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Determine which services to display based on screen size and expanded state
  const displayedServices = isDesktop
    ? servicesData // On desktop, always show all services
    : isExpanded
    ? servicesData // On mobile (expanded), show all services
    : servicesData.slice(0, INITIAL_VISIBLE_CARDS); // On mobile (collapsed), show the first 2

  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32 xl:py-40">
      {/* Optional: Subtle background dot pattern */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      ></div> */}
      <Image src="/assets/services-bg.webp" alt="Services Background" width={100} height={100} className="absolute inset-0 w-full h-full object-cover opacity-10 z-0" />

      <div className="relative z-10 container mx-auto px-4">        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-2 max-w-3xl mb-12">
          <h2 className="text-[24px] md:text-4xl text-gray-900 leading-tight md:pt-[65px]">
            Digital Transformation Services <span className='text-[#000] font-medium'>for Every Small to Large Enterprises in the World</span> 
          </h2>
        </div>
          {displayedServices.map((service) => (
            <Card key={service.title} className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl border-gray-200">
              <CardHeader>
                <CardTitle className="text-[18px] md:text-[22px] text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[16px]  text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={service.href} className="group flex items-center text-green-600 font-semibold transition-colors hover:text-green-700">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* "Show More" Button - only visible on mobile when not expanded */}
        {!isDesktop && !isExpanded && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="group flex items-center mx-auto text-green-600 font-semibold transition-colors hover:text-green-700"
            >
              Show More
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;