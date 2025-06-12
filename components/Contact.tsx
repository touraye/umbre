import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

// --- Custom SVG Icon Components ---
// Flags
const IconIndiaFlag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
    <rect width="900" height="600" fill="#f93" />
    <rect width="900" height="400" fill="#fff" />
    <rect width="900" height="200" fill="#128807" />
    <g transform="translate(450 300)">
      <circle r="90" fill="#fff" />
      <circle r="80" fill="#000080" />
      <circle r="70" fill="#fff" />
      <g id="d">
        <g id="c">
          <g id="b">
            <g id="a">
              <path d="M0-70v70h3.5z" fill="#000080" />
              <path d="M0-70v70h3.5z" fill="#000080" transform="scale(-1)" />
            </g>
            <use href="#a" transform="rotate(15)" />
          </g>
          <use href="#b" transform="rotate(30)" />
        </g>
        <use href="#c" transform="rotate(60)" />
      </g>
      <use href="#d" transform="rotate(120)" />
      <use href="#d" transform="rotate(240)" />
    </g>
  </svg>
);

const IconUsaFlag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 10">
    <rect width="19" height="10" fill="#B22234"/>
    <path d="M0,1H19M0,3H19M0,5H19M0,7H19M0,9H19" stroke="#FFF" strokeWidth="1"/>
    <rect width="9.5" height="5" fill="#3C3B6E"/>
  </svg>
);

// Social Media Icons
const IconFacebook: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
);
const IconInstagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.7 2 8.33 2.02 7.85 2.05c-1.89.12-3.23 1.45-3.35 3.34C4.48 5.86 4.5 6.22 4.5 7.5s-.02 1.64-.05 2.12c-.12 1.89-1.45 3.23-3.34 3.35-.48.03-.84.05-2.12.05s-1.64-.02-2.12-.05c-1.89-.12-3.23-1.45-3.35-3.34C2.02 9.14 2 8.78 2 7.5s.02-1.64.05-2.12c.12-1.89 1.45-3.23 3.34-3.35C5.86 4.48 6.22 4.5 7.5 4.5c3.3 0 3.67-.02 4.15-.05c1.89-.12 3.23-1.45 3.35-3.34C15.14 2.02 15.78 2 16.5 2h-4.5M12 4c-3.1 0-3.47.01-3.9.05-1.55.1-2.59 1.15-2.69 2.7C5.36 7.22 5.35 7.59 5.35 8.9c0 1.31.01 1.68.05 2.15.1 1.55 1.15 2.59 2.7 2.69.47.04.83.05 2.15.05s1.68-.01 2.15-.05c1.55-.1 2.59-1.15 2.69-2.7.04-.47.05-.83.05-2.15s-.01-1.68-.05-2.15c-.1-1.55-1.15-2.59-2.7-2.69-.47-.04-.83-.05-2.15-.05M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm6.5-7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>
);
const IconX: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 1.15a1.53 1.53 0 0 1 2.6 1.35L20.15 6.4c-1.86 6.08-6.93 10.8-13.35 11.23a1.53 1.53 0 0 1-1.5-1.8c.28-1.5 1.1-3.34 2.2-4.14C6.54 11.1 5.4 9.1 4.3 7.8c-1.1-1.3-2.2-2.6-2.2-4.13A1.53 1.53 0 0 1 3.5.2c6.08 1.86 10.8 6.93 11.23 13.35l3.8-1.4a1.53 1.53 0 0 1 1.8-1.5c1.5-.28 3.34-1.1 4.14-2.2.6-.8 1.1-2.1 1.3-3.6z"/></svg>
);
const IconYouTube: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.25 5 12 5 12 5s-6.25 0-7.82.44C3.32 5.67 2.65 6.33 2.42 7.19 2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.9 1.52 1.76 1.75C5.75 19 12 19 12 19s6.25 0 7.82-.44c.86-.23 1.52-.9 1.75-1.75C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6 3.5-6 3.5z"/></svg>
);
const IconLinkedIn: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.5 18H5.5V9H8.5v9zM7 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.5 18H15.5v-4.6c0-1.1-.02-2.5-1.5-2.5s-1.7.9-1.7 2.4V18H9.5V9h2.8v1.3h.04c.4-.7 1.4-1.4 2.8-1.4 3 0 3.5 2 3.5 4.5V18z"/></svg>
);

// --- Data for Locations and Social Links ---
const locationsData = [
  {
    icon: IconIndiaFlag,
    address: 'Willow Square, 8th Floor, Plot No. 8,9 & 10, 1st Street, Thiru Vi Ka Industrial Estate, Guindy, Tamil Nadu – 600 032'
  },
  {
    icon: IconUsaFlag,
    address: '4701 Patrick Henry Drive, Building 3, Santa Clara, CA- 95054, USA'
  }
];

const socialLinks = [
  { href: '#', icon: IconFacebook },
  { href: '#', icon: IconInstagram },
  { href: '#', icon: IconX },
  { href: '#', icon: IconYouTube },
  { href: '#', icon: IconLinkedIn },
];

const Contact = () => {
  return (
    <section className="bg-[#01403D] text-white py-16 sm:py-24">
      <div className="container mx-auto px-4">        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                    
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="font-semibold text-green-300">#WeAreHereForYou</p>
            <h2 className="mt-2 text-4xl lg:text-5xl font-bold leading-tight">
              What can we develop together?
            </h2>
            <Button asChild size="lg" className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 px-8 text-lg rounded-lg">
              <Link href="/contact">
                Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="lg:w-1/2 flex flex-col gap-10">            
            <div>
              <h3 className="font-bold">We are located in India and USA</h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {locationsData.map((location, index) => (
                  <div key={index} className="flex gap-4">
                    <location.icon className="h-8 w-12 flex-shrink-0 rounded" />
                    <p className="text-sm text-gray-300">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
                    
            <div className="hidden lg:block">
              <h3 className="font-bold">Follow Us On.</h3>
              <div className="mt-4 flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-black hover:opacity-80 transition-opacity">
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;