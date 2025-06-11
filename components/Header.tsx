"use client";
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, PlusCircle } from 'lucide-react';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Effect to lock body scroll when mobile menu is open
    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      // Cleanup function
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isMenuOpen]);
  
  
    const navLinks = [
      { 
        name: 'Services', 
        href: '/services', 
        dropdown: true 
      },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Company', href: '/company' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ];

    return (
      <>
    <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-12">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
              <Image 
                src="/assets/contus_logo.png" 
                alt="Codes Clutch Logo" 
                width={140} 
                height={70} 
                className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  {link.name}
                  {link.dropdown && <ChevronDown className="h-4 w-4 ml-1" />}
                </Link>
              ))}
              <Link href="/contact" className="ml-4 bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-colors">
                Let's Talk
              </Link>
            </nav>

            {/* --- Mobile Controls --- */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile "Let's Talk" Button - always visible on mobile */}
              <Link href="/contact" className="bg-orange-500 text-white font-semibold px-4 py-2 text-sm rounded-md hover:bg-orange-600 transition-colors">
                Let's Talk
              </Link>
              
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div
        className={`md:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-4 pt-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="flex justify-between items-center text-lg text-gray-800 font-medium py-4 border-b border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{link.name}</span>
              {link.dropdown && <PlusCircle className="h-6 w-6 text-gray-400" />}
            </Link>
          ))}
        </nav>
      </div>
      </>
  )
}

export default Header
