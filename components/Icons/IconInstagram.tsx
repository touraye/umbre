// components/icons/IconInstagram.tsx

import React from 'react';

// This is a standard and robust way to define a React component for an SVG.
// It allows the component to accept any standard SVG props like className, onClick, etc.
const IconInstagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2' // Note the conversion from 'stroke-width' to 'strokeWidth'
      strokeLinecap='round' // from 'stroke-linecap' to 'strokeLinecap'
      strokeLinejoin='round' // from 'stroke-linejoin' to 'strokeLinejoin'
      {...props} // This is the most important part! It spreads any passed props onto the SVG.
    >
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>
  );
};

export default IconInstagram;