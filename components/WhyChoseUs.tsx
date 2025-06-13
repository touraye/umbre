import Heading from "./Heading";

const IconAward: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="6" />
      <path d="M12 14v8" />
      <path d="M8 22l4-4 4 4" />
      <path d="M10.5 8.5l3-3m-3 0 3 3" />
      <path d="M12 2a2.5 2.5 0 0 1 2.5 2.5" />
    </svg>
  );
  
  const IconHiring: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v6" />
      <path d="M23 11h-6" />
    </svg>
  );
  
  const IconSourceCode: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.5 9.5 17 12l-2.5 2.5" />
      <path d="M9.5 9.5 7 12l2.5 2.5" />
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    </svg>
  );
  
  const IconDelivery: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 9.5A3.5 3.5 0 0 1 5.5 6h13A3.5 3.5 0 0 1 22 9.5V16a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 16Z" />
      <path d="M22 9.5H2" />
      <path d="m5 16 1.5-3" />
      <path d="m14 16 1.5-3" />
    </svg>
  );
  
  const IconCost: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 18v-5" />
      <path d="m10 15-2-2" />
      <path d="m14 15 2-2" />
      <path d="M15 7.5c-.63.63-1.42 1-2.24 1-1.02 0-2-.78-2.24-1.83" />
      <path d="M9 10.25c.63-.63 1.42-1 2.24-1 1.02 0 2 .78 2.24 1.83" />
    </svg>
  );
  
  
  // --- Data for the features grid ---
  const featuresData = [
    {
      icon: IconAward,
      title: "World's Best OTT Developers",
      description: 'Hire skilled, dedicated developers to develop the best-in-class OTT platform.',
    },
    {
      icon: IconHiring,
      title: 'Flexible & Simple Hiring Plans',
      description: 'Completely flexible and adaptable hiring plans to suit your project\'s staffing needs.',
    },
    {
      icon: IconSourceCode,
      title: 'Access to Platform Source Code',
      description: 'Get full OTT platform ownership and complete freedom to modify source code.',
    },
    {
      icon: IconDelivery,
      title: '100% On-time Delivery',
      description: 'We are serious about deadlines — all our projects are completed 100% on-time.',
    },
    {
      icon: IconCost,
      title: 'Save Up To 60% in Development Cost',
      description: 'Cut two-thirds of OTT development expenses without compromising on the scalability front.',
    },
  ];
  
    
  const WhyChooseUs = () => {
    return (
      <section className="bg-why-choose-us-gradient text-white py-16 sm:py-24">
        <div className="contain">                   
          <Heading top="Why Choose CONTUS Tech For" button='OTT Platform Development?' />
            
          <div className="mt-16 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <div className="border border-green-400/50 rounded-full p-3 inline-flex">
                    <feature.icon className="h-10 w-10 text-green-400" />
                  </div>
                </div>
                <h4 className="mt-5 font-bold text-xl md:text-[26px]">{feature.title}</h4>
                <p className="mt-2 t-medium p-large text-gray-300 max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;