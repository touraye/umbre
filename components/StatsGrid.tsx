// --- Define the data for our stat cards ---
const statsData = [
  {
    stat: '4.9',
    description: 'Customer Satisfaction',
    subDescription: 'Score (CSAT)',
    variant: 'light',
  },
  {
    stat: '90%',
    description: 'Minimum ROI',
    subDescription: 'Guaranteed',
    variant: 'dark',
  },
  {
    stat: '100%',
    description: 'Transparent and Effective Collaboration',
    variant: 'light',
    layout: 'full-width', // This card will span two columns on larger screens
  },
  {
    stat: '40+',
    description: 'Analytics & Performance',
    subDescription: 'Integrations',
    variant: 'dark',
  },
  {
    stat: '99%',
    description: 'Risk Free MVP',
    subDescription: 'Launches',
    variant: 'light',
  },
];

// --- Types ---
type StatCardProps = {
  stat: string;
  description: string;
  subDescription?: string;
  variant: 'light' | 'dark';
};

const StatCard: React.FC<StatCardProps> = ({ stat, description, subDescription, variant }) => {
  const cardStyles = {
    light: 'bg-brand-beige text-brand-brown',
    dark: 'bg-brand-brown text-white',
  };

  return (
    <div className={`p-6 md:p-8 rounded-xl h-full flex items-center ${variant === 'light' ? 'bg-brand-beige text-brand-brown' : 'bg-brand-brown text-white'}`}>
      <div className="w-1/3">
        <p className="text-4xl lg:text-5xl font-bold">{stat}</p>
      </div>
      <div className="w-2/3 pl-4">
        <p className="text-lg font-semibold leading-tight">{description}</p>
        {subDescription && <p className="text-lg font-semibold leading-tight">{subDescription}</p>}
      </div>
    </div>
  );
};


const StatsGrid = () => {
  return (
    <section className="bg-brand-teal py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/*
          This is the core of the responsive logic:
          - Mobile: `grid-cols-1` (default)
          - Tablet: `md:grid-cols-2`
          - Desktop: `lg:grid-cols-2` (The spanning logic below handles the custom layout)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {statsData.map((item, index) => (
            <div
              key={index}    
              className={item.layout === 'full-width' ? 'md:col-span-2' : ''}
            >
              <StatCard
                stat={item.stat}
                description={item.description}
                subDescription={item.subDescription}
                variant={item.variant as 'light' | 'dark'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;